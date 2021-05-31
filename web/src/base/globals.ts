import {ElMessage} from "element-plus";
import {protoManage} from "../proto/manage";

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

	export interface UserSetting {
		isPageFix:boolean
	}


	export let globalsData = {
		token:"",
		managerList:new Map<number, protoManage.IManager>()
	}

	export let globalsConfig = {
		httpConfig:{
			tokenKey:"userToken",
			requestTimeout: 10000,
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
			tablePageSize:50,
			findReturnValRetryTime:1000,
			findReturnValRetryCnt:5
		}
	}

	export function getManagerByID(id: number|undefined|null):protoManage.IManager|undefined {
		if (id == undefined) {
			return protoManage.Manager.create()
		}
		return  globalsData.managerList.get(id)
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