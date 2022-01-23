/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ElMessage, ElNotification} from "element-plus";
import {protoManage} from "../proto/manage";
import {globals} from "./globals";
import i18n from './i18n'

export let ws:WebSocket|null = null
export let reconnectCnt = 0
export let isClosed = false
export let websocketCloseByServer = 4000
export let notifyOffset = 80

export module websocket {
    export function wsConnect(addr:string) {
        try {
            if ('WebSocket' in window) {
                ws = new WebSocket(addr)
            } else if ('MozWebSocket' in window) {
                ws = new WebSocket(addr)
            } else {
                globals.viewWarn(i18n.global.t('websocket.notSupport'))
            }
            if (ws != null){
                ws.onopen = onOpen
                ws.onclose = onClose
                ws.onerror = onError
                ws.onmessage = onMessage
            }
        } catch (e) {
            globals.viewError(i18n.global.t('websocket.initError') + e)
        }

        function wsReconnect() {
            reconnectCnt++
            setTimeout(function () {
                globals.viewWarn(i18n.global.t('websocket.reconnect', {msg:reconnectCnt}));
                wsConnect(addr);
            }, globals.globalsConfig.wsConfig.wsReconnectTime);
        }

        function onOpen(ev: Event) {
            if (reconnectCnt != 0){
                globals.viewSuccess(i18n.global.t('websocket.reconnectSuccess'));
                reconnectCnt = 0
            }
        }

        function onClose(ev: CloseEvent) {
            if (reconnectCnt == 0 && !isClosed) {
                globals.viewError(i18n.global.t('websocket.disConnect')+ev.reason + '(' + ev.code + ')');
            }
            console.warn("websocket is closed: ", ev);
            if (ev.code != websocketCloseByServer && !isClosed){
                wsReconnect()
            }else{
                if (!isClosed){
                    globals.reLogin()
                }
            }
        }

        function onError(ev: Event) {
            console.error("websocket error: ", ev);
        }

        function onMessage(ev: MessageEvent) {
            let arrayBuffer;
            let fileReader = new FileReader();
            fileReader.onload = function() {
                arrayBuffer = this.result;
                let uint8Buffer= new Uint8Array(arrayBuffer);
                let wsMessage = protoManage.Message.decode(uint8Buffer)
                receiver(wsMessage)
            };
            fileReader.readAsArrayBuffer(ev.data);
        }
    }

    export function wsClose() {
        isClosed = true
        ws?.close()
    }

    function receiver(msg:protoManage.Message){
        globals.globalsData.wsMessage.order = msg.order
        switch (msg.order) {
            case protoManage.Order.NodeNotifyAdd:
                nodeNotify(msg.message)
                break
            case protoManage.Order.NodeFuncCallAns:
                nodeFuncCallAns(msg.message)
                break
            case protoManage.Order.ManagerUpdate:
                managerUpdate(msg.message)
                break
            case protoManage.Order.ManagerDel:
                managerDel(msg.message)
                break
            default:
                globals.viewError(i18n.global.t('websocket.orderError') + msg.order)
                break
        }
    }

    function nodeFuncCallAns(data:Uint8Array){
        globals.globalsData.wsMessage.message.nodeFuncCallAns = protoManage.AnsNodeFuncCall.decode(data)
    }

    function managerUpdate(data:Uint8Array){
        let response = protoManage.Manager.decode(data)
        if (response.Level != globals.globalsData.manager.info.Level){
            globals.reLogin()
            globals.viewWarn(i18n.global.t('websocket.levelChanged', {msg:response.Name}))
        }
        globals.updateManagerInfo(response)
    }

    function managerDel(data:Uint8Array){
        let response = protoManage.Manager.decode(data)
        globals.reLogin()
        globals.viewWarn(i18n.global.t('websocket.deleteNotify', {msg:response.Name}))
    }

    function nodeNotify(data:Uint8Array){
        let msg = protoManage.NodeNotify.decode(data)
        switch (msg.State) {
            case protoManage.State.StateNormal:
                notifySuccess(msg)
                break
            case protoManage.State.StateWarn:
                notifyWarn(msg)
                break
            case protoManage.State.StateError:
                notifyError(msg)
                break
            case protoManage.State.StateUnknow:
                notifyInfo(msg)
                break
            default:
                notifyInfo(msg)
                break
        }
    }

    function notifyInfo(msg:protoManage.NodeNotify){
        if (msg.SenderType == protoManage.NotifySenderType.NotifySenderTypeNode){
            ElNotification({
                title: msg.SenderName,
                message: msg.Message,
                type: 'info',
                offset: notifyOffset
            })
        }else{
            ElMessage.info(msg.Message)
        }
    }

    function notifySuccess(msg:protoManage.NodeNotify){
        if (msg.SenderType == protoManage.NotifySenderType.NotifySenderTypeNode){
            ElNotification({
                title: msg.SenderName,
                message: msg.Message,
                type: 'success',
                offset: notifyOffset
            })
        }else{
            ElMessage.success(msg.Message)
        }
    }

    function notifyWarn(msg:protoManage.NodeNotify){
        if (msg.SenderType == protoManage.NotifySenderType.NotifySenderTypeNode){
            ElNotification({
                title: msg.SenderName,
                message: msg.Message,
                type: 'warning',
                offset: notifyOffset
            })
        }else{
            ElMessage.warning(msg.Message)
        }
    }

    function notifyError(msg:protoManage.NodeNotify){
        if (msg.SenderType == protoManage.NotifySenderType.NotifySenderTypeNode){
            ElNotification({
                title: msg.SenderName,
                message: msg.Message,
                type: 'error',
                offset: notifyOffset
            })
        }else{
            ElMessage.error(msg.Message)
        }
    }
}

