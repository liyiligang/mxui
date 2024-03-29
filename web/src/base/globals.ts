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

import {ElMessage} from "element-plus";
import {protoManage} from "../proto/manage";
import {routerPath, routerName} from "../router";
import {reactive} from "vue";
import {websocket} from "./websocket";
import * as SparkMD5 from "spark-md5";

	// export enum BlockType {
export module globals {
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
			autoLogin:"autoLogin",
			setting:"setting"
		},
		httpConfig:{
			requestTimeout: 1000 * 10,
			uploadTimeout: 1000 * 60 * 60 * 2
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
			isPageFix: true,
			autoUpdateInterval: 2,
			language:'eng'
		},
		userSetTemp:{
			autoRefresh: false,
			dataFilterView: false
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

	export function updateManagerInfo(response:protoManage.Manager) {
		response.Token = globals.globalsData.manager.info.Token
		globals.globalsData.manager.info = reactive(response)
	}

	export function reLogin() {
		globals.globalsData.manager.info = protoManage.Manager.create()
		localStorage.removeItem(globals.globalsConfig.localStorageKey.token)
		websocket.wsClose()
		routerPath.toPath(routerName.login)
	}

	export function elButtonBlur(e) {
		let target = e.target;
		if(target.nodeName == 'SPAN' || target.nodeName == 'I'){
			target = e.target.parentNode;
		}
		target.blur();
	}

	export function viewInfo(msg:string) {
		ElMessage.info(msg);
		console.log(msg)
	}

	export function viewSuccess(msg:string) {
		ElMessage.success(msg);
		console.log(msg)
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


	export function getPageNumOffset(num:any):number {
		return Number(num) - 1;
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

	export function calcFileMd5 (file:Blob, call:Function) {
		const fileReader = new FileReader()
		fileReader.readAsBinaryString(file);
		fileReader.onload = e => {
			call(SparkMD5.hashBinary(String(e.target?.result)))
		}
		fileReader.onerror = e => {
			viewError(String(e))
		}
	}

	export function getHttpHost ():string{
		let base = ""
		if (process.env.NODE_ENV === "development"){
			base += "/api"
		}
		return location.protocol + "//" + window.location.host + base
	}

	export function getWsHost ():string{
		let base = ""
		if (process.env.NODE_ENV === "development"){
			base += "/api"
		}
		let protocol = "ws://"
		if (location.protocol === "https:"){
			protocol = "wss://"
		}
		return protocol + "//" + window.location.host + base
	}
}