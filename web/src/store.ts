import {createStore} from "vuex";
import { ElMessage } from 'element-plus'
import {request} from "./base/request"
import {protoManage} from "./proto/manage"

const store = createStore({
    state: {
        socket: {
            // 连接状态
            wsHandle: null,
            wsClose:0,

            //收到消息
            managerMessage:0,
        }
    },
    mutations: {
        // 连接打开
        SOCKET_ONOPEN(state, event) {
            state.socket.wsHandle = event.currentTarget;
        },
        // 连接关闭
        SOCKET_ONCLOSE(state, event) {
            state.socket.wsHandle = null;
            state.socket.wsClose++
            request.systemData.wsCloseCode = event.code
            ElMessage.error("网络连接关闭: "+event.reason + '(' + event.code + ')');
            console.error(state, event);
        },
        // 发生错误
        SOCKET_ONERROR(state, event) {
            ElMessage.error("网络异常");
            console.error(state, event);
        },
        // 收到服务端发送的消息
        SOCKET_ONMESSAGE(state, message) {
            let arrayBuffer;
            let fileReader = new FileReader();
            fileReader.onload = function() {
                arrayBuffer = this.result;
                let uint8Buffer= new Uint8Array(arrayBuffer);
                let wsMessage = protoManage.Message.decode(uint8Buffer)
                request.Dispenser(wsMessage)
            };
            fileReader.readAsArrayBuffer(message.data);

        },
        // 自动重连
        SOCKET_RECONNECT(state, count) {
            console.info("网络重连中...", state, count);
        },
        // 重连错误
        SOCKET_RECONNECT_ERROR(state) {
            console.error("网络重连失败", state);
        }
    },
    actions: {
        sendMessage: function(context, message:protoManage.Message) {
            let byte = protoManage.Message.encode(message).finish()
            this.state.socket.wsHandle.send(byte)
        }
    }
})


export default store