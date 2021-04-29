<template>
炸不到
</template>

<script>
export default {
name: "NotFound"
}
</script>

<style scoped>

</style>



<!--watch( ()=>store.state.socket.managerMessage,val=>{-->
<!--ElMessage.success("登录成功");-->
<!--data.isLoad = false-->
<!--globals.globalsData.token = request.userData.manager.Token-->
<!--localStorage.setItem(tokenKey,  request.userData.manager.Token);-->
<!--routerPath.toGroupAll()-->
<!--})-->

<!--watch( ()=>store.state.socket.wsClose,val=>{-->
<!--if (request.systemData.wsCloseCode == globals.globalsError.wsUserError){-->
<!--localStorage.removeItem(tokenKey)-->
<!--}-->
<!--data.isLoad = false-->
<!--})-->

<!--function loginByToken(token:string){-->
<!--let user:protoManage.Manager = new protoManage.Manager({Token:token})-->
<!--let buf = protoManage.Manager.encode(user).finish()-->
<!--let str = globals.uint8ArrayToString(buf)-->
<!--this.login(str)-->
<!--}-->

<!--function loginByName(){-->
<!--let user:protoManage.Manager = new protoManage.Manager({Name:data.userName, Password:data.passWord})-->
<!--let buf = protoManage.Manager.encode(user).finish()-->
<!--let str = globals.uint8ArrayToString(buf)-->
<!--this.login(str)-->
<!--}-->

<!--function login(str:string){-->
<!--// let url = globals.getWsHost()+"/user?login=" + str-->
<!--let url = "ws://localhost:80"+"/ws?login=" + str-->
<!--this.$connect(url);-->
<!--data.isLoad = true-->
<!--}-->

<!--export function Dispenser(wsMessage:protoManage.Message) {-->
<!--switch (wsMessage.order) {-->
<!--default:-->
<!--console.warn("无效的消息", wsMessage);-->
<!--ElMessage.warning("无效的消息: "+ wsMessage.order);-->
<!--break-->
<!--}-->
<!--}-->

<!--export function updateManager(message: Uint8Array) {-->
<!--let manager = protoManage.Manager.decode(message)-->
<!--userData.manager = manager-->
<!--store.state.socket.managerMessage++-->
<!--}-->