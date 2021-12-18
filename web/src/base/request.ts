import {protoManage} from "../proto/manage"
import {ElMessage} from "element-plus";
import {globals} from "./globals";
import axios from "axios";
import {convert} from "./convert";

export module request {

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

    export function reqManagerFindByLevel(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest("/manager/findByLevel", msg)
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

    export function reqNodeResourceUpload(req:protoManage.NodeResource, file:Blob,
                   onUploadProgressCall:(e:any)=>void):Promise<protoManage.NodeResource> {
        return new Promise((resolve, reject)=>{
            reqNodeResourceCheck(req).then((ans:protoManage.NodeResource) => {
                if (ans.IsExist){
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
        reqNodeResourceCheck(req).then((ans:protoManage.NodeResource) => {
            if (ans.IsExist){
                httpRequestDownLoad("/nodeResource/download/" + req.UUID, req.Name)
            }else {
                globals.viewWarn("文件 " + req.Name + " 已经被管理员删除")
            }
        })
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
                    ElMessage.error("请求失败（" + error+"）");
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
                    ElMessage.error("请求失败（" + error+"）");
                }
                reject(error)
            })
        })
    }

    export function httpRequestDownLoad(path:string, name:string) {
        let url = globals.getHttpHost() + path + "?token="+globals.globalsData.manager.info.Token
        let downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    export function httpError(code:number, data:Uint8Array) {
        let str = new TextDecoder().decode(data)
        switch (code) {
            case protoManage.HttpError.HttpErrorMarshal:
                ElMessage.error("数据编码失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorUnmarshal:
                ElMessage.error("数据解析失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorRegister:
                ElMessage.error("注册失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorLoginWithAccount:
                ElMessage.error("登录失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorLoginWithToken:
                ElMessage.error("校验失败（" + str+"）");
                globals.reLogin()
                break
            case protoManage.HttpError.HttpErrorRequest:
                ElMessage.error("请求错误（" + str+"）");
                break
            default:
                ElMessage.error("请求失败（" + str+"）");
                break
        }
    }
}