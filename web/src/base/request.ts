import {protoManage} from "../proto/manage"
import {ElMessage} from "element-plus";
import {globals} from "./globals";
import axios from "axios";
import {routerPath} from "../router";

export module request {

    export function checkFilterPara(filter:protoManage.Filter):protoManage.Filter {
        if (globals.isNull(filter.ID)){
            filter.ID = 0
        }
        if (globals.isNull(filter.GroupID)){
            filter.GroupID = 0
        }
        if (globals.isNull(filter.TypeID)){
            filter.TypeID = 0
        }
        if (globals.isNull(filter.NodeID)){
            filter.NodeID = 0
        }
        if (globals.isNull(filter.SourceID)){
            filter.SourceID = 0
        }
        if (globals.isNull(filter.TargetID)){
            filter.TargetID = 0
        }
        if (globals.isNull(filter.FuncID)){
            filter.FuncID = 0
        }
        if (globals.isNull(filter.ReportID)){
            filter.ReportID = 0
        }
        if (globals.isNull(filter.Name)){
            filter.Name = ""
        }
        if (globals.isNull(filter.Flag)){
            filter.Flag = ""
        }
        if (globals.isNull(filter.Value)){
            filter.Value = ""
        }
        if (globals.isNull(filter.State)){
            filter.State = protoManage.State.StateNot
        }
        if (globals.isNull(filter.PageSize)){
            filter.PageSize = 5
        }
        if (globals.isNull(filter.PageNum)){
            filter.PageNum = 1
        }
        filter.PageNum-=1
        return filter
    }

    export function reqManagerLogin(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerLogin, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
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
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.TopLinkFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsTopLinkList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqManagerList():Promise<protoManage.AnsManagerList> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.ReqManagerList.create({})
            let msg = protoManage.ReqManagerList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsManagerList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }
    
    export function reqNodeGroupList(filter:protoManage.Filter):Promise<protoManage.AnsNodeGroupList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeGroupList.create({filter:filter})
            let msg = protoManage.ReqNodeGroupList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeGroupFind, message:msg}))
            .then((response) => {
                let ans = protoManage.AnsNodeGroupList.decode(response.message)
                resolve(ans)
            }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeTypeList(filter:protoManage.Filter):Promise<protoManage.AnsNodeTypeList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeTypeList.create({filter:filter})
            let msg = protoManage.ReqNodeTypeList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeTypeFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeTypeList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeList(filter:protoManage.Filter):Promise<protoManage.AnsNodeList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeList.create({filter:filter})
            let msg = protoManage.ReqNodeList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }


    export function reqNodeLinkList(filter:protoManage.Filter):Promise<protoManage.AnsNodeLinkList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeLinkList.create({filter:filter})
            let msg = protoManage.ReqNodeLinkList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeLinkFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeLinkList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeFuncList(filter:protoManage.Filter):Promise<protoManage.AnsNodeFuncList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeFuncList.create({filter:filter})
            let msg = protoManage.ReqNodeFuncList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeFuncList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeReportList(filter:protoManage.Filter):Promise<protoManage.AnsNodeReportList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeReportList.create({filter:filter})
            let msg = protoManage.ReqNodeReportList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeReportFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeReportList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeFuncCallList(filter:protoManage.Filter):Promise<protoManage.AnsNodeFuncCallList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeFuncCallList.create({filter:filter})
            let msg = protoManage.ReqNodeFuncCallList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncCallFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeFuncCallList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeReportValList(filter:protoManage.Filter):Promise<protoManage.AnsNodeReportValList> {
        return new Promise((resolve, reject)=>{
            filter = checkFilterPara(filter)
            let req = protoManage.ReqNodeReportValList.create({filter:filter})
            let msg = protoManage.ReqNodeReportValList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeReportValFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeReportValList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqCallNodeFunc(req:protoManage.ReqNodeFuncCall):Promise<protoManage.Base> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeFuncCall.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncCallReq, message:msg}))
                .then((response) => {
                    let ans = protoManage.Base.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeFuncCallByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncCallFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeNotifyNew(req:protoManage.NodeNotify):Promise<protoManage.NodeNotify> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeNotify.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeNotifyNew, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeNotify.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeGroupByID(id: number):Promise<protoManage.NodeGroup> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.NodeGroup.create({Base:protoManage.Base.create({ID:id})})
            let msg = protoManage.NodeGroup.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeGroupFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeGroup.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function reqNodeTypeByID(id: number):Promise<protoManage.NodeType> {
        return new Promise((resolve, reject)=>{
            let req = protoManage.NodeType.create({Base:protoManage.Base.create({ID:id})})
            let msg = protoManage.NodeType.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeTypeFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeType.decode(response.message)
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
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.Node.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                    reject(error)
            })
        })
    }

    export function httpRequest(req:protoManage.HttpMessage):Promise<protoManage.HttpMessage> {
        return new Promise((resolve, reject)=>{
            req.token = globals.globalsData.token
            let buf = protoManage.HttpMessage.encode(req).finish()
            let blob = new Blob([buf], {type: 'buffer'});

            axios({
                responseType: 'arraybuffer',
                method:'post',
                url: "http://localhost:80/http",
                data: blob,
                timeout: globals.globalsConfig.httpConfig.requestTimeout,
            }).then(response => {
                if (response.status == 200) {
                    let ans = protoManage.HttpMessage.decode(new Uint8Array(response.data))
                    resolve(ans)
                }else {
                    httpError(response.status, response.data)
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

    export function httpError(code:number, data:Uint8Array) {
        let str = new TextDecoder().decode(data)
        switch (code) {
            case protoManage.HttpError.HttpErrorMarshal:
                ElMessage.error("数据编码失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorUnmarshal:
                ElMessage.error("数据解析失败（" + str+"）");
                break
            case protoManage.HttpError.HttpErrorAuthInvalid:
                ElMessage.error("身份验证失败（" + str+"）");
                localStorage.removeItem(globals.globalsConfig.httpConfig.tokenKey)
                routerPath.toLogin()
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