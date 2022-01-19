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


import {protoManage} from "../proto/manage"
import {globals} from "./globals";
import axios from "axios";
import {convert} from "./convert";
import i18n from '../base/i18n'

export module request {

    export function reqFindSystemInitInfo(req:protoManage.ReqSystemInitInfo):Promise<protoManage.AnsSystemInitInfo> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqSystemInitInfo.encode(req).finish()
            request.httpRequest("/system/getInitInfo", msg)
                .then((response) => {
                    let ans = protoManage.AnsSystemInitInfo.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerLogin(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/login", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerRegister(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/register", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerAdd(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/add", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerNickNameList():Promise<protoManage.AnsManagerList> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.ReqManagerList.create({})
            let msg = protoManage.ReqManagerList.encode(req).finish()
            request.httpRequest("/manager/findNickName", msg)
                .then((response) => {
                    let ans = protoManage.AnsManagerList.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerLowLevelList():Promise<protoManage.AnsManagerList> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.ReqManagerList.create({})
            let msg = protoManage.ReqManagerList.encode(req).finish()
            request.httpRequest("/manager/findLowLevel", msg)
                .then((response) => {
                    let ans = protoManage.AnsManagerList.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerByID(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/findByID", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdate(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/update", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdatePasswd(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/updatePasswd", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdateSetting(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/updateSetting", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerDel(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/del", msg)
                .then((response) => {
                    let ans = protoManage.Manager.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkList():Promise<protoManage.AnsTopLinkList> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.ReqTopLinkList.create({})
            let msg = protoManage.ReqTopLinkList.encode(req).finish()
            request.httpRequest("/topLink/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsTopLinkList.decode(response)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqTopLinkByID(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest("/topLink/findByID", msg)
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkAdd(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest("/topLink/add", msg)
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkDel(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest("/topLink/del", msg)
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkUpdate(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest("/topLink/update", msg)
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeList(req:protoManage.ReqNodeList):Promise<protoManage.AnsNodeList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeList.encode(req).finish()
            request.httpRequest("/node/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeList.decode(response)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeByID(id: number):Promise<protoManage.Node> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.Node.create({Base:protoManage.Base.create({ID:id})})
            let msg = protoManage.Node.encode(req).finish()
            request.httpRequest("/node/findByID", msg)
                .then((response) => {
                    let ans = protoManage.Node.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeDel(req:protoManage.Node):Promise<protoManage.Node> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Node.encode(req).finish()
            request.httpRequest("/node/del", msg)
                .then((response) => {
                    let ans = protoManage.Node.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncList(req:protoManage.ReqNodeFuncList):Promise<protoManage.AnsNodeFuncList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeFuncList.encode(req).finish()
            request.httpRequest("/nodeFunc/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeFuncList.decode(response)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeFuncDel(req:protoManage.NodeFunc):Promise<protoManage.NodeFunc> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFunc.encode(req).finish()
            request.httpRequest("/nodeFunc/del", msg)
                .then((response) => {
                    let ans = protoManage.NodeFunc.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqCallNodeFunc(req:protoManage.ReqNodeFuncCall):Promise<protoManage.Base> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeFuncCall.encode(req).finish()
            request.httpRequest("/nodeFuncCall/call", msg)
                .then((response) => {
                    let ans = protoManage.Base.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncCallList(req:protoManage.ReqNodeFuncCallList):Promise<protoManage.AnsNodeFuncCallList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeFuncCallList.encode(req).finish()
            request.httpRequest("/nodeFuncCall/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeFuncCallList.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncCallByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest("/nodeFuncCall/findByID", msg)
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncCallParameterByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest("/nodeFuncCall/findParameterByID", msg)
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncCallReturnValByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest("/nodeFuncCall/findReturnValByID", msg)
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeReportList(req:protoManage.ReqNodeReportList):Promise<protoManage.AnsNodeReportList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeReportList.encode(req).finish()
            request.httpRequest("/nodeReport/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeReportList.decode(response)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeReportDel(req:protoManage.NodeReport):Promise<protoManage.NodeReport> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeReport.encode(req).finish()
            request.httpRequest("/nodeReport/del", msg)
                .then((response) => {
                    let ans = protoManage.NodeReport.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeReportValList(req:protoManage.ReqNodeReportValList):Promise<protoManage.AnsNodeReportValList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeReportValList.encode(req).finish()
            request.httpRequest("/nodeReportVal/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeReportValList.decode(response)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeNotifyList(req:protoManage.ReqNodeNotifyList):Promise<protoManage.AnsNodeNotifyList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeNotifyList.encode(req).finish()
            request.httpRequest("/nodeNotify/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeNotifyList.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeResourceCheck(req:protoManage.NodeResource):Promise<protoManage.NodeResource> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeResource.encode(req).finish()
            request.httpRequest("/nodeResource/check", msg)
                .then((response) => {
                    let ans = protoManage.NodeResource.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeResourceList(req:protoManage.ReqNodeResourceList):Promise<protoManage.AnsNodeResourceList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeResourceList.encode(req).finish()
            request.httpRequest("/nodeResource/find", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeResourceList.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeResourceUpload(req:protoManage.NodeResource, file:Blob,
                   onUploadProgressCall:(e:any)=>void):Promise<protoManage.NodeResource> {
        return new Promise((resolve, reject)=>{
            reqNodeResourceCheck(req).then((ans:protoManage.NodeResource) => {
                if (ans.Base?.ID != 0){
                    resolve(ans)
                }else {
                    let msg = protoManage.NodeResource.encode(req).finish()
                    httpRequestUpLoad("/nodeResource/upload", file, msg, onUploadProgressCall)
                        .then((response:protoManage.NodeResource) => {
                            resolve(response)
                        }).catch(error => {
                        reject(error)
                    })
                }
            }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeResourceDownLoad(req:protoManage.NodeResource) {
        httpRequestDownLoad("/nodeResource/download/" +  req.Name, Number(req.Base?.ID))
    }

    export function reqNodeResourceDel(req:protoManage.NodeResource):Promise<protoManage.NodeResource> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeResource.encode(req).finish()
            request.httpRequest("/nodeResource/del", msg)
                .then((response) => {
                    let ans = protoManage.NodeResource.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeTest(req:protoManage.ReqNodeTest):Promise<protoManage.AnsNodeTest> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeTest.encode(req).finish()
            request.httpRequest("/nodeTest/test", msg)
                .then((response) => {
                    let ans = protoManage.AnsNodeTest.decode(response)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }
    
    export function httpRequest(path:string, data:Uint8Array):Promise<Uint8Array> {
        return new Promise((resolve, reject)=>{
            let blob = new Blob([data], {type: 'buffer'});
            axios({
                responseType: 'arraybuffer',
                method:'post',
                url: globals.getHttpHost() + path,
                data: blob,
                headers:{
                    'token':globals.globalsData.manager.info.Token
                },
                timeout: globals.globalsConfig.httpConfig.requestTimeout,
            }).then(response => {
                if (response.status == 200) {
                    resolve(new Uint8Array(<Uint8Array>response.data))
                }else {
                    httpError(response.status, <Uint8Array>response.data)
                    reject(response)
                }
            }).catch(error => {
                if (error.response != undefined){
                    httpError(error.response.status, error.response.data)
                }else{
                    globals.viewError(i18n.global.t('request.error.fail', { msg: error}));
                }
                reject(error)
            })
        })
    }

    export function httpRequestUpLoad(path:string, file:Blob, data:Uint8Array,
          onUploadProgressCall:(e:any)=>void):Promise<protoManage.NodeResource> {
        let formData = new FormData();
        let str = convert.uint8ArrayToString(data)
        formData.append("file", file);
        formData.append("data", str);
        return new Promise((resolve, reject)=>{
            axios({
                responseType: 'arraybuffer',
                method:'post',
                url: globals.getHttpHost() + path,
                data: formData,
                headers:{
                    'Content-type':'multipart/form-data',
                    'token':globals.globalsData.manager.info.Token
                },
                timeout: globals.globalsConfig.httpConfig.requestTimeout,
                onUploadProgress: onUploadProgressCall
            }).then(response => {
                if (response.status == 200) {
                    let ans = protoManage.NodeResource.decode(new Uint8Array(<Uint8Array>response.data))
                    resolve(ans)
                }else {
                    httpError(response.status, <Uint8Array>response.data)
                    reject(response)
                }
            }).catch(error => {
                if (error.response != undefined){
                    httpError(error.response.status, error.response.data)
                }else{
                    globals.viewError(i18n.global.t('request.error.fail', { msg: error}));
                }
                reject(error)
            })
        })
    }

    export function httpRequestDownLoad(path:string, id:number) {
        let url = globals.getHttpHost() + path + "?token="+globals.globalsData.manager.info.Token
        + "&id="+id
        window.open(url)
        // let downloadLink = document.createElement("a");
        // downloadLink.href = url;
        // downloadLink.download = name;
        // document.body.appendChild(downloadLink);
        // downloadLink.click();
        // document.body.removeChild(downloadLink);
    }

    export function httpError(code:number, data:Uint8Array) {
        let str = new TextDecoder().decode(data)
        switch (code) {
            case protoManage.HttpError.HttpErrorGetHeader:
                globals.viewError(i18n.global.t('request.error.header', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorGetBody:
                globals.viewError(i18n.global.t('request.error.body', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorGetFile:
                globals.viewError(i18n.global.t('request.error.file', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorCheckFile:
                globals.viewError(i18n.global.t('request.error.checkFile', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorMarshal:
                globals.viewError(i18n.global.t('request.error.marshal', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorUnmarshal:
                globals.viewError(i18n.global.t('request.error.unmarshal', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorRegister:
                globals.viewError(i18n.global.t('request.error.register', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorLoginWithAccount:
                globals.viewError(i18n.global.t('request.error.loginWithAccount', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorPasswordWithAccount:
                globals.viewError(i18n.global.t('request.error.passwordWithAccount', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorLoginWithToken:
                globals.viewError(i18n.global.t('request.error.loginWithToken', { msg: str}));
                globals.reLogin()
                break
            case protoManage.HttpError.HttpErrorLevelLow:
                globals.viewError(i18n.global.t('request.error.levelLow', { msg: str}));
                break
            case protoManage.HttpError.HttpErrorRequest:
                globals.viewError(i18n.global.t('request.error.request', { msg: str}));
                break
            default:
                globals.viewError(i18n.global.t('request.error.fail', { msg: str}));
                break
        }
    }
}