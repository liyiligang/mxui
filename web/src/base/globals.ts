import {ElMessage} from "element-plus";
import {protoManage} from "../proto/manage";
import {routerPath} from "../router";
import {reactive} from "vue";
import {websocket} from "./websocket";
import { routerName } from "../router";
import {FilterTagInfo} from "../components/toolbar/filter/FilterViewTag.vue";
import {LocationQueryRaw} from "vue-router";

export module globals {
	// export enum BlockType {
	// 	NoneBlock = -1,
	// }

	// export interface BlockParm {
	// 	readonly width: number
	// 	readonly height: number
	// }
	//
	// export let blockParm: BlockParm = {
	// 	width: 50,
	// 	height: 50
	// }
	export let globalsConfig = {
		localStorageKey:{
			token:"token",
			autoLogin:"autoLogin"
		},
		httpConfig:{
			requestTimeout: 10000
		},
		wsConfig:{
			wsReconnectTime: 5000,
		},
		pageConfig:{
			sizeList:[9, 21, 54, 108],
			initSize:21,
			initNum:1,
			initCount:7
		},
		funcCallConfig:{
			tablePageSize:100
		},
		userSetSave:{
			isPageFix: false,
			autoUpdateInterval: 2,
		},
		userSetTemp:{
			autoRefresh: false,
			dataFilterView: false,
			dataFilterTags:{
				nodeMap: new Map<string, Map<string, FilterTagInfo>>(),
				nodeFuncMap: new Map<string, Map<string, FilterTagInfo>>(),
				nodeReportMap: new Map<string, Map<string, FilterTagInfo>>(),
				nodeNotifyMap: new Map<string, Map<string, FilterTagInfo>>()
			}
		}
	}

	export let globalsData = {
		manager:reactive({info: protoManage.Manager.create()}),
		managerList:new Map<number, protoManage.IManager>(),
		managerSetting:reactive({setting:globals.globalsConfig.userSetSave}),
		tempSetting:reactive({setting:globals.globalsConfig.userSetTemp}),
		wsMessage:{
			order:protoManage.Order.Unknow,
			message:reactive({
				nodeFuncCallAns:protoManage.AnsNodeFuncCall.create()
			})
		}
	}

	export function getManagerByID(id: number|undefined|null):protoManage.IManager|undefined {
		if (id == undefined) {
			return protoManage.Manager.create()
		}
		return  globalsData.managerList.get(id)
	}

	export function reLogin() {
		globals.globalsData.manager.info = protoManage.Manager.create()
		localStorage.removeItem(globals.globalsConfig.localStorageKey.token)
		routerPath.toLogin()
		websocket.wsClose()
	}

	export function elButtonBlur(e) {
		let target = e.target;
		if(target.nodeName == 'SPAN' || target.nodeName == 'I'){
			target = e.target.parentNode;
		}
		target.blur();
	}


	export function viewWarn(msg:string) {
		ElMessage.warning(msg);
		console.warn(msg)
	}

	export function viewError(msg:string) {
		ElMessage.error(msg);
		console.error(msg)
	}

	export function randomNum(lower:number, upper:number):number {
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}

	export function randomColor ():string {
		return '#' + (function(h){
			return new Array(7 - h.length).join("0") + h
		})((Math.random() * 0x1000000 << 0).toString(16));
	}

	export function getCurrentTime():string {
		let yy = new Date().getFullYear();
		let mm = new Date().getMonth()+1;
		let dd = new Date().getDate();
		let hh = new Date().getHours();
		let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
		let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
		return yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
	}

	export function isEllipsis(dom:any):boolean {
		let checkDom = dom.cloneNode(), parent, flag;
		checkDom.style.width = dom.offsetWidth + 'px';
		checkDom.style.height = dom.offsetHeight + 'px';
		checkDom.style.overflow = 'auto';
		checkDom.style.position = 'absolute';
		checkDom.style.zIndex = -1;
		checkDom.style.opacity = 0;
		checkDom.style.whiteSpace = "nowrap";
		checkDom.innerHTML = dom.innerHTML;
		parent = dom.parentNode;
		parent.appendChild(checkDom);
		flag = checkDom.scrollWidth > checkDom.offsetWidth;
		parent.removeChild(checkDom);
		return flag;
	}

	export function isNull(para:any):boolean {
		if (para === 'undefined' || para === null){
			return true
		}
		if (typeof para === 'number' && isNaN(para)){
			return true
		}
		return false
	}

	export function isPositiveIntWithStr(str:string):boolean {
		let t = /^\+?[1-9][0-9]*$/;　　
		return t.test(str);
	}

	export function isNoNegativeIntWithStr(str:string):boolean {
		let t = /^\d+$/;
		return t.test(str);
	}

	export function isJson (json:string):boolean {
		if (typeof json == 'string') {
			try {
				let obj=JSON.parse(json);
				if(typeof obj == 'object' && obj ){
					return true;
				}else{
					return false;
				}
			} catch(e) {
				return false;
			}
		}
		return false;
	}

	export function getJson (json:string):string|object {
		if (json == "") {
			return json
		}
		try {
			let obj=JSON.parse(json);
			if(typeof obj == 'object' && obj ){
				return obj;
			}else{
				return json
			}
		} catch(e) {
			return json
		}
	}

	export function getRouteDataFilter (name:string):Map<string, Map<string, FilterTagInfo>> {
		switch (name) {
			case routerName.node:
				return globalsData.tempSetting.setting.dataFilterTags.nodeMap
			case routerName.nodeFunc:
				return globalsData.tempSetting.setting.dataFilterTags.nodeFuncMap
			case routerName.nodeReport:
				return globalsData.tempSetting.setting.dataFilterTags.nodeReportMap
			case routerName.nodeNotify:
				return globalsData.tempSetting.setting.dataFilterTags.nodeNotifyMap
			default:
				return new Map<string, Map<string, FilterTagInfo>>()
		}
	}

	export function getDataFilterQuery (name:string):LocationQueryRaw {
		let query = {}
		for (let item of globals.getRouteDataFilter(name).values()){
			let sign = ""
			let tags = new Array<any>()
			for (let tag of item.keys()){
				let tagInfo = item.get(tag)
				if (tagInfo){
					if (tagInfo.value != undefined){
						tags.push(tagInfo.value)
					}else{
						tags.push(tag)
					}
					sign = tagInfo.sign
				}
			}
			query[sign] = tags
		}
		return query
	}

	export function getHttpHost ():string{
		if (location.protocol === "https:"){
			return 'https://'+window.location.host
		}
		return 'http://'+window.location.host
	}

	export function getWsHost ():string{
		if (location.protocol === "https:"){
			return 'wss://'+window.location.host
		}
		return 'ws://'+window.location.host
	}
}