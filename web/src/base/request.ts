import {protoManage} from "../proto/manage"
import {ElMessage} from "element-plus";
import {globals} from "./globals";
import axios from "axios";
import {routerPath} from "../router";

export module request {

    // export function checkFilterPara(filter:protoManage.Filter):protoManage.Filter {
    //     if (globals.isNull(filter.ID)){
    //         filter.ID = 0
    //     }
    //     if (globals.isNull(filter.IDSign) || filter.IDSign == ""){
    //         filter.IDSign = "="
    //     }
    //     if (globals.isNull(filter.GroupID)){
    //         filter.GroupID = 0
    //     }
    //     if (globals.isNull(filter.TypeID)){
    //         filter.TypeID = 0
    //     }
    //     if (globals.isNull(filter.NodeID)){
    //         filter.NodeID = 0
    //     }
    //     if (globals.isNull(filter.SourceID)){
    //         filter.SourceID = 0
    //     }
    //     if (globals.isNull(filter.TargetID)){
    //         filter.TargetID = 0
    //     }
    //     if (globals.isNull(filter.FuncID)){
    //         filter.FuncID = 0
    //     }
    //     if (globals.isNull(filter.ReportID)){
    //         filter.ReportID = 0
    //     }
    //     if (globals.isNull(filter.Name)){
    //         filter.Name = ""
    //     }
    //     if (globals.isNull(filter.Flag)){
    //         filter.Flag = ""
    //     }
    //     if (globals.isNull(filter.Value)){
    //         filter.Value = ""
    //     }
    //     if (globals.isNull(filter.State)){
    //         filter.State = protoManage.State.StateNot
    //     }
    //     if (globals.isNull(filter.SenderName)){
    //         filter.SenderName = ""
    //     }
    //     if (globals.isNull(filter.SenderType)){
    //         filter.SenderType = protoManage.NotifySenderType.NotifySenderTypeUnknow
    //     }
    //     if (globals.isNull(filter.SenderBeginTime)){
    //         filter.SenderBeginTime = 0
    //     }
    //     if (globals.isNull(filter.SenderEndTime)){
    //         filter.SenderEndTime = 0
    //     }
    //     if (globals.isNull(filter.Message)){
    //         filter.Message = ""
    //     }
    //     if (globals.isNull(filter.PageSize)){
    //         filter.PageSize = globals.globalsConfig.pageConfig.initSize
    //     }
    //     if (globals.isNull(filter.PageNum)){
    //         filter.PageNum = globals.globalsConfig.pageConfig.initNum
    //     }
    //     filter.PageNum-=1
    //     return filter
    // }

    export function reqManagerRegister(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerRegister, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerAdd(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerAdd, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
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

    export function reqManagerFindByLevel(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerFindByLevel, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerByID(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdate(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerUpdate, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdatePasswd(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerUpdatePasswd, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerUpdateSetting(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerUpdateSetting, message:msg}))
                .then((response) => {
                    let ans = protoManage.Manager.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqManagerDel(req:protoManage.Manager):Promise<protoManage.Manager> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Manager.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerDel, message:msg}))
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

    export function reqTopLinkByID(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.TopLinkFindByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkAdd(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.TopLinkAdd, message:msg}))
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkDel(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.TopLinkDel, message:msg}))
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqTopLinkUpdate(req:protoManage.TopLink):Promise<protoManage.TopLink> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.TopLink.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.TopLinkUpdate, message:msg}))
                .then((response) => {
                    let ans = protoManage.TopLink.decode(response.message)
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
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerFindNickName, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsManagerList.decode(response.message)
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
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.ManagerFindLowLevel, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsManagerList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeList(req:protoManage.ReqNodeList):Promise<protoManage.AnsNodeList> {
        return new Promise((resolve, reject)=>{
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

    export function reqNodeFuncList(req:protoManage.ReqNodeFuncList):Promise<protoManage.AnsNodeFuncList> {
        return new Promise((resolve, reject)=>{
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

    export function reqNodeReportList(req:protoManage.ReqNodeReportList):Promise<protoManage.AnsNodeReportList> {
        return new Promise((resolve, reject)=>{
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

    export function reqNodeFuncCallList(req:protoManage.ReqNodeFuncCallList):Promise<protoManage.AnsNodeFuncCallList> {
        return new Promise((resolve, reject)=>{
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

    export function reqNodeReportValList(req:protoManage.ReqNodeReportValList):Promise<protoManage.AnsNodeReportValList> {
        return new Promise((resolve, reject)=>{
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

    export function reqNodeFuncCallParameterByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncCallFindParameterByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncCallReturnValByID(req:protoManage.NodeFuncCall):Promise<protoManage.NodeFuncCall> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFuncCall.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncCallFindReturnValByID, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeFuncCall.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeNotifyList(req:protoManage.ReqNodeNotifyList):Promise<protoManage.AnsNodeNotifyList> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeNotifyList.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeNotifyFind, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeNotifyList.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeDel(req:protoManage.Node):Promise<protoManage.Node> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.Node.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeDel, message:msg}))
                .then((response) => {
                    let ans = protoManage.Node.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeFuncDel(req:protoManage.NodeFunc):Promise<protoManage.NodeFunc> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeFunc.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeFuncDel, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeFunc.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeReportDel(req:protoManage.NodeReport):Promise<protoManage.NodeReport> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.NodeReport.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeReportDel, message:msg}))
                .then((response) => {
                    let ans = protoManage.NodeReport.decode(response.message)
                    resolve(ans)
                }).catch(error => {
                reject(error)
            })
        })
    }

    export function reqNodeTest(req:protoManage.ReqNodeTest):Promise<protoManage.AnsNodeTest> {
        return new Promise((resolve, reject)=>{
            let msg = protoManage.ReqNodeTest.encode(req).finish()
            request.httpRequest(protoManage.HttpMessage.create({order:protoManage.Order.NodeTest, message:msg}))
                .then((response) => {
                    let ans = protoManage.AnsNodeTest.decode(response.message)
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
            req.token = globals.globalsData.manager.info.Token
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
                    let ans = protoManage.HttpMessage.decode(new Uint8Array(<Uint8Array>response.data))
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