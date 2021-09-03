import {ElMessage, ElNotification} from "element-plus";
import {protoManage} from "../proto/manage";
import {globals} from "../base/globals";
import {inject} from "vue";

export let ws:WebSocket|null = null
export let reconnectCnt = 0
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
                globals.viewWarn("当前浏览器不支持websocket协议, 部分功能将无法使用")
            }
            if (ws != null){
                ws.onopen = onOpen
                ws.onclose = onClose
                ws.onerror = onError
                ws.onmessage = onMessage
            }
        } catch (e) {
            globals.viewError("websocket初始化错误: " + e)
        }

        function wsReconnect() {
            reconnectCnt++
            setTimeout(function () {
                ElMessage.warning("正在尝试重新连接服务器......"+ reconnectCnt + "次");
                wsConnect(addr);
            }, globals.globalsConfig.wsConfig.wsReconnectTime);
        }

        function onOpen(ev: Event) {
            if (reconnectCnt != 0){
                ElMessage.success("网络连接成功");
                reconnectCnt = 0
            }
        }

        function onClose(ev: CloseEvent) {
            if (reconnectCnt == 0) {
                ElMessage.error("网络连接已断开: "+ev.reason + '(' + ev.code + ')');
            }
            console.warn("websocket连接关闭: ", ev);
            if (ev.code != websocketCloseByServer){
                wsReconnect()
            }else{
                globals.reLogin()
            }
        }

        function onError(ev: Event) {
            console.error("websocket连接错误: ", ev);
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
            default:
                globals.viewError("错误的websocket指令: " + msg.order)
                break
        }
    }

    function nodeFuncCallAns(data:Uint8Array){
        let msg = protoManage.AnsNodeFuncCall.decode(data)
        globals.globalsData.wsMessage.message.nodeFuncCallAns = msg
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
                title: "节点：" + msg.SenderID,
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
                title: "节点：" + msg.SenderID,
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
                title: "节点：" + msg.SenderID,
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
                title: "节点：" + msg.SenderID,
                message: msg.Message,
                type: 'error',
                offset: notifyOffset
            })
        }else{
            ElMessage.error(msg.Message)
        }
    }
}

