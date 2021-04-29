import {protoManage} from "../proto/manage";
import {globals} from "./globals";
import {checkFilterPara, getNodeByID, NodeData, nodeData} from "./request";

export let nodeData:NodeData = {
    nodeGroupList:new Array<protoManage.NodeGroup>(),
    nodeTypeList:new Array<protoManage.NodeType>(),
    nodeList:new Array<protoManage.Node>(),
    nodeLinkList:new Array<protoManage.NodeLink>(),
    nodeFuncList:new Array<protoManage.NodeFunc>(),
    nodeReportList:new Array<protoManage.NodeReport>(),
}

export function init() {

    let startNum = 1
    let nodeGroupLen = 10
    let nodeTypeLen = 10
    let nodeLen = 10
    let nodeLinkLen = 10
    let nodeFuncLen = 10
    let nodeReportLen = 10

    //nodeGroup
    for (let i = startNum; i<nodeGroupLen+startNum; i++){
        let nodeGroup:protoManage.NodeGroup = new protoManage.NodeGroup({
            Base:   {ID : i, UpdateTime: new Date().getTime()},
            Name : "阿尔法测试组"+i,
        })
        nodeData.nodeGroupList.push(nodeGroup)
    }

    //nodeType
    for (let i = startNum; i<nodeTypeLen+startNum; i++){
        let nodeType:protoManage.NodeType = new protoManage.NodeType({
            Base:   {ID : i, UpdateTime: new Date().getTime()},
            Name : "测试服务"+i
        })
        nodeData.nodeTypeList.push(nodeType)
    }

    //node
    for (let key=0; key<nodeData.nodeGroupList.length; key++){
        for (let i = startNum; i<nodeLen+startNum; i++){
            const nodeID = key*nodeLen+i
            let node:protoManage.Node = new protoManage.Node({
                Base:   {ID:nodeID, UpdateTime: new Date().getTime()},
                GroupID:nodeData.nodeGroupList[key].Base.ID,
                TypeID: globals.randomNum(startNum, nodeTypeLen+startNum),
                Name : "测试机"+nodeID+"号",
                State : globals.randomNum(1, 5),
            })
            nodeData.nodeData.nodeList.push(node)
        }
    }

    for (let key=0; key<nodeData.nodeList.length; key++){
        //nodeLink
        for (let i = startNum; i<nodeLinkLen+startNum; i++){
            const linkID = key*nodeLinkLen+i
            let nodeLink:protoManage.NodeLink = new protoManage.NodeLink({
                Base:   {ID : linkID, UpdateTime: new Date().getTime()},
                SourceID: globals.randomNum(1, nodeGroupLen*nodeLen),
                TargetID: globals.randomNum(1, nodeGroupLen*nodeLen),
                State : globals.randomNum(1, 5),
            })
            nodeData.nodeLinkList.push(nodeLink)
        }

        //nodeFunc
        for (let i = startNum; i<nodeFuncLen+startNum; i++){
            const funcID = key*nodeLinkLen+i
            let nodeFunc:protoManage.NodeFunc = new protoManage.NodeFunc({
                Base:   {ID : funcID, UpdateTime: new Date().getTime()},
                NodeID: nodeData.nodeList[key].Base.ID,
                Name:  "测试方法"+i+"号",
                Func: "func("+i+")",
                // Parameter:"Parameter"+funcID,
                // ReturnVal : "ReturnVal"+funcID,
                State : globals.randomNum(1, 5),
            })
            nodeData.nodeFuncList.push(nodeFunc)
        }

        //nodeReport
        for (let i = startNum; i<nodeReportLen+startNum; i++){
            const reportID = key*nodeReportLen+i
            let nodeReport:protoManage.NodeReport = new protoManage.NodeReport({
                Base:   {ID : reportID, UpdateTime: new Date().getTime()},
                NodeID: nodeData.nodeList[key].Base.ID,
                Flag: "Flag"+i,
                Name: "测试报告"+i,
                // Value: "测试报告值"+i,
                State: globals.randomNum(1, 5),
            })
            nodeData.nodeReportList.push(nodeReport)
        }
    }
}

// let start = filter.PageSize * (filter.PageNum - 1)
// let end = start + filter.PageSize
// end = end < request.nodeData.nodeGroupList.length ? end : request.nodeData.nodeGroupList.length
// let nodeGroupList = new Array<protoManage.NodeGroup>()
// for (let i = start; i < end; i++){
//     if ((filter.GroupID==0) || request.nodeData.nodeGroupList[i].Base.ID == filter.GroupID){
//         nodeGroupList.push(request.nodeData.nodeGroupList[i])
//     }
// }
// let ansNodeGroupList = protoManage.AnsNodeGroupList.create({NodeGroupList:nodeGroupList, Length:request.nodeData.nodeGroupList.length})
// return ansNodeGroupList


// filter = checkFilterPara(filter)
// let start = filter.PageSize * (filter.PageNum - 1)
// let end = start + filter.PageSize
// let cnt = 0
// end = end < request.nodeData.nodeList.length ? end : request.nodeData.nodeList.length
// let nodeList = new Array<protoManage.Node>()
// for (let i = start; i < end; i++) {
//     if ((filter.GroupID == 0) || request.nodeData.nodeList[i].GroupID == filter.GroupID) {
//         nodeList.push(request.nodeData.nodeList[i])
//         cnt++
//     }
// }
// let ansNodeList = protoManage.AnsNodeList.create({NodeList:nodeList, Length:cnt})
// return ansNodeList

// filter = checkFilterPara(filter)
// let start = filter.PageSize * (filter.PageNum - 1)
// let end = start + filter.PageSize
// end = end < request.nodeData.nodeLinkList.length ? end : request.nodeData.nodeLinkList.length
// let nodeLinkList = new Array<protoManage.NodeLink>()
// for (let i = start; i < end; i++){
//     if ((filter.GroupID==0) || getNodeByID(request.nodeData.nodeLinkList[i].SourceID).GroupID == filter.GroupID ||
//         getNodeByID(request.nodeData.nodeLinkList[i].TargetID).GroupID == filter.GroupID){
//         if ((filter.NodeID==0) || request.nodeData.nodeLinkList[i].SourceID == filter.NodeID
//             || request.nodeData.nodeLinkList[i].TargetID == filter.NodeID){
//             nodeLinkList.push(request.nodeData.nodeLinkList[i])
//         }
//     }
// }
// let ansNodeLinkList = protoManage.AnsNodeLinkList.create({NodeLinkList:nodeLinkList, Length:request.nodeData.nodeLinkList.length})
// return ansNodeLinkList

// filter = checkFilterPara(filter)
// let start = filter.PageSize * (filter.PageNum - 1)
// let end = start + filter.PageSize
// end = end < request.nodeData.nodeFuncList.length ? end : request.nodeData.nodeFuncList.length
// let nodeFuncList = new Array<protoManage.NodeFunc>()
// for (let i = start; i < end; i++){
//     if ((filter.GroupID==0) || getNodeByID(request.nodeData.nodeFuncList[i].NodeID).GroupID == filter.GroupID){
//         if ((filter.NodeID==0) || request.nodeData.nodeFuncList[i].NodeID == filter.NodeID){
//             nodeFuncList.push(request.nodeData.nodeFuncList[i])
//         }
//     }
// }
// let ansNodeFuncList = protoManage.AnsNodeFuncList.create({NodeFuncList:nodeFuncList, Length:request.nodeData.nodeFuncList.length})
// return ansNodeFuncList

// filter = checkFilterPara(filter)
// let start = filter.PageSize * (filter.PageNum - 1)
// let end = start + filter.PageSize
// end = end < request.nodeData.nodeReportList.length ? end : request.nodeData.nodeReportList.length
// let nodeReportList = new Array<protoManage.NodeReport>()
// for (let i = start; i < end; i++){
//     if ((filter.GroupID==0) || getNodeByID(request.nodeData.nodeReportList[i].NodeID).GroupID == filter.GroupID){
//         if ((filter.NodeID==0) || request.nodeData.nodeReportList[i].NodeID == filter.NodeID){
//             nodeReportList.push(request.nodeData.nodeReportList[i])
//         }
//     }
// }
// let ansNodeReportList = protoManage.AnsNodeReportList.create({NodeReportList:nodeReportList, Length:request.nodeData.nodeReportList.length})
// return ansNodeReportList