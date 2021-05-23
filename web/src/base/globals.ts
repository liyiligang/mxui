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
		},
		cssConfig:{
			nodeViewFramePageFix:true
		}
	}

	export function getManagerByID(id: number|undefined|null):protoManage.IManager|undefined {
		if (id == undefined) {
			return protoManage.Manager.create()
		}
		return  globalsData.managerList.get(id)
	}

	export function uint8ArrayToString(data: Uint8Array):string {
		let dataString = "";
		for (let i = 0; i < data.length; i++) {
			dataString += String.fromCharCode(data[i]);
		}
		return dataString
	}

	// export function stringToUint8Array(str: string):Uint8Array {
	// 	let arr = [];
	// 	for (let i = 0, j = str.length; i < j; ++i) {
	// 		arr.push(str.charCodeAt(i));
	// 	}
	// 	let tmpUint8Array = new Uint8Array(arr);
	// 	return tmpUint8Array
	// }

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

	export function formatDate (timeStamp:number|undefined|null):string {
		if (timeStamp == 0 || timeStamp==undefined){
			return "0000-00-00 00:00:00"
		}
		function two(s:number){
			return s<10?"0"+s:s;
		}
		let date = new Date(timeStamp)
		let year = date.getFullYear();  //取得4位数的年份
		let month = date.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
		let day = date.getDate();      //返回日期月份中的天数（1到31）
		let hour = date.getHours();     //返回日期中的小时数（0到23）
		let minute = date.getMinutes(); //返回日期中的分钟数（0到59）
		let second = date.getSeconds(); //返回日期中的秒数（0到59）
		return year + "-" + two(month) + "-" + two(day) + " " + two(hour) + ":" + two(minute) + ":" + two(second);
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

	export function isNull(para:any):boolean {
		if (para === 'undefined' || para === null){
			return true
		}
		if (typeof para === 'number' && isNaN(para)){
			return true
		}
		return false
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