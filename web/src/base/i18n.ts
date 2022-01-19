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

import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'

const i18n = createI18n({
    locale: 'eng',
    fallbackLocale: 'eng',
    messages: {
        chs: {
            manager: {
                level: {
                    primary: '访客',
                    intermediate: '成员',
                    senior: '管理员',
                    super: '超级管理员',
                    unknown : '未知'
                }
            },
            node: {
                state: {
                    not:'未知',
                    normal : '在线',
                    warn : '异常',
                    error : '停机',
                    unknown : '离线'
                },
                card:{
                    state:'状态',
                    nodeFunc:'方法',
                    nodeReport:'报告'
                }
            },
            nodeFunc:{
                card:{
                    level: '权限',
                    call: '方法',
                    node: '节点'
                },
                parameterTypeName: {
                    form : '表单',
                    unknown : '未知'
                },
                returnTypeName: {
                    notReturn: '无',
                    error: '错误',
                    text: '文本',
                    json: '对象',
                    link: '链接',
                    image: '图片',
                    media: '媒体',
                    file: '文件',
                    table : '表格',
                    charts : '图表',
                    unknown : '未知'
                }
            },
            nodeFuncCall:{
                state: {
                    normal : '成功',
                    warn : '异常',
                    error : '失败',
                    timeout : '超时',
                    unknown : '未知'
                },
                card:{
                    call: '请求方法',
                    history: '历史记录'
                },
                table:{
                    id:'编号',
                    caller:'请求者',
                    state:'状态',
                    parameter:'参数',
                    returnVal:'返回值',
                    date:'日期'
                }
            },
            nodeReport:{
                card:{
                    level: '权限',
                    call: '方法',
                    interval: '频率',
                    node: '节点',
                    viewReport:'查看报告'
                }
            },
            nodeReportVal:{
                table:{
                    id:'编号',
                    date:'日期'
                }
            },
            nodeNotify:{
                table:{
                    id:'编号',
                    sender:'通知者',
                    sendType:'通知源',
                    message:'消息',
                    date:'日期'
                },
                senderType:{
                    user: "用户",
                    node: "节点",
                    unknown : '未知'
                },
                state: {
                    not : '信息',
                    unknown : '未知',
                    normal : '成功',
                    warn : '警告',
                    error : '错误'
                },
            },
            nodeResource:{
                table:{
                    id:'编号',
                    uploader:'上传者',
                    uploaderType:'上传源',
                    name:'资源名',
                    size:'资源大小',
                    downLoadCnt:'下载次数',
                    state:'状态',
                    date:'上传日期'
                },
                uploaderType:{
                    user: "用户",
                    node: "节点",
                    unknown : '未知'
                },
                state:{
                    normal:'正常',
                    invalid:'已失效'
                }
            },
            defaultVal:{
                unknown : '未知'
            },
            time: {
                manual: '手动',
                ms : '毫秒',
                s : '秒',
                min : '分',
                hour : '时',
                day : '天',
                once :'次'
            },
            filter:{
                invalidTag: '无效的标签',
                existTag: ' 已添加在<{name}>中',
                start:'过滤器已激活',
                stop:'过滤器未激活',
                tagName: {
                    ID: 'ID',
                    nodeID: '节点ID',
                },
                tips:{
                    select: '请选择',
                    submit: '提交',
                    startTime: '起始时间',
                    endTime: '结束时间',
                    timeError:'起始时间不能超过结束时间',
                    clearTags: '清空{msg}标签',
                },
                node:{
                    name:'节点名',
                    state:'状态',
                    time:'更新时间',
                },
                nodeFunc:{
                    nodeID:'节点ID',
                    nodeName:'节点名',
                    name:'节点方法名',
                    level:'权限',
                    time:'更新时间',
                },
                nodeReport:{
                    nodeID:'节点ID',
                    nodeName:'节点名',
                    name:'节点报告名',
                    level:'权限',
                    time:'更新时间',
                },
                nodeNotify:{
                    message:'通知消息',
                    sender:'通知者',
                    senderType:'通知源',
                    state:'状态',
                    time:'通知时间',
                },
                nodeResource:{
                    name:'资源名',
                    uploader:'上传者',
                    uploaderType:'上传源',
                    state:'状态',
                    time:'上传时间',
                }
            },
            request:{
                error:{
                    fail: '请求失败 ({msg})',
                    header: '读取信息错误 ({msg})',
                    body:   '读取数据错误 ({msg})',
                    file:   '读取文件数据错误 ({msg})',
                    checkFile: '文件信息校验失败 ({msg})',
                    marshal: '数据编码失败 ({msg})',
                    unmarshal: '数据解码失败 ({msg})',
                    register: '注册失败 ({msg})',
                    loginWithAccount: '登录失败 ({msg})',
                    passwordWithAccount: '登录失败 ({msg})',
                    loginWithToken: '登录信息校验失败 ({msg})',
                    levelLow: '权限不足 ({msg})',
                    request: '请求错误 ({msg})',
                }
            },
            websocket:{
                notSupport: '当前浏览器不支持websocket协议, 部分功能将无法使用',
                initError:'websocket初始化错误: ',
                reconnect:'正在尝试重新连接服务器......{msg}次',
                reconnectSuccess:'网络连接成功',
                disConnect:'网络连接已断开: ',
                orderError:'错误的websocket指令: '
            },
            confirm:{
                delete:'此操作将永久删除相关数据, 是否继续?',
                warn: '警告',
                ok:'确定',
                cancel:'取消'
            },
            setting:{
                system:'系统设置',
                user:'用户设置',
                topLink:'顶栏设置',
                systemSet:{
                    fixPage:'固定分页：',
                    language:'语言选择：',
                    modifyPassword:'修改密码：',
                    modifyPasswordButton:'修改',
                    modifyPasswordDialog:'修改密码',
                    loginOut:'退出登录：',
                    loginOutButton:'退出',
                    autoRefresh:'数据同步(秒/次)：',
                },
                topMenuSet:{
                    id:'编号',
                    name:'名称',
                    link:'链接',
                    operate:'操作',
                    deleteSuccess:'删除成功',
                    createSuccess:'创建成功',
                    updateSuccess:'更新成功'
                },
                userSet:{
                    id:'编号',
                    userName:'用户名',
                    nickName:'昵称',
                    level:'权限',
                    operate:'操作',
                    addUser:'新增帐号',
                    deleteSuccess:'删除成功',
                    updateSuccess:'更新成功'
                }
            },
            file:{
                downloadTips:'点击下载文件',
                uploadTips:'点击上传',
                exceedTips:'上传文件数量超出最大限制',
                failTips:'上传文件失败',
                forbidDelHistoryFile:'禁止删除历史文件'
            },
            autoRefresh:{
                start:'自动同步已开启',
                stop:'自动同步已停止'
            },
            json:{
                formatFail:'json格式化失败: '
            },
            level:{
                selectTips:'请选择权限等级'
            },
            passwordReset:{
                originalPassword:'原密码',
                newPassword:'新密码',
                confirmPassword:'确认密码',
                passwordInconsistent:'两次输入密码不一致',
                passwordModifySuccess:'密码修改成功, 请重新登录',
                modifyButton: '修改'
            },
            sideBar:{
                node:'节点',
                nodeFunc:'方法',
                nodeReport:'报告',
                nodeResource:'资源',
                nodeNotify:'通知',
                nodeTest:'测试',
                errorKey:'错误的侧边栏菜单选项: '
            },
            dialog:{
                frame:{
                    setting:'设置(ctrl+q)',
                    sync:'同步(ctrl+space)',
                    update:'刷新(~)',
                    fullScreen:'全屏(ctrl+enter)',
                    close:'关闭(esc)'
                },
                nodeFuncCall:{
                    form: '表单',
                    json: 'JSON',
                    emptyParameter:'此方法沒有设置参数',
                    emptyReturnVal:'此次调用方法沒有返回值',
                    resetButton:'重置',
                    submitButton:'提交',
                    jsonCheckFail:'参数校验失败'
                },
                nodeReportVal:{
                    waitResult:'请等待结果返回...',
                    setting:'设置',
                    resultSet:'结果集(条):',
                    sync:'数据同步(秒/次):',
                    okButton:'确定'
                }
            },
            home:{
                parseConfigFail:'用户配置解析失败, 将使用默认配置'
            },
            login:{
                userName:'用户名',
                password:'密码',
                login:'登录',
                logining:'登录中...',
                autoLogin:'自动登录',
                register:'注册帐号',
                createManager:'创建管理员',
                loginSuccess:'登录成功'
            },
            register:{
                nickName:'昵称',
                userName:'用户名',
                password:'密码',
                confirmPassword:'确认密码',
                registerButton:'注册',
                registerSuccess:'注册成功',
                passwordInconsistent:'两次输入密码不一致'
            },
            empty:{
                emptyData:'暂无数据'
            },
            notFound:'页面不存在'
        },
        eng: {
            manager: {
                level: {
                    primary: 'Visitor',
                    intermediate: 'Member',
                    senior: 'Leader',
                    super: 'Administrators',
                    unknown : 'Unknown'
                }
            },
            node: {
                state: {
                    not:'Unknown',
                    normal : 'Online',
                    warn : 'Abnormal',
                    error : 'Shutdown',
                    unknown : 'Offline'
                },
                card:{
                    state:'State',
                    nodeFunc:'Method',
                    nodeReport:'Report'
                }
            },
            nodeFunc:{
                card:{
                    level: 'Level',
                    call: 'Method',
                    node: 'Node'
                },
                parameterTypeName: {
                    form : 'Form',
                    unknown : 'Unknown'
                },
                returnTypeName: {
                    notReturn: 'Nothing',
                    error: 'Error',
                    text: 'Text',
                    json: 'Object',
                    link: 'Link',
                    image: 'Picture',
                    media: 'Media',
                    file: 'File',
                    table : 'Table',
                    charts : 'Chart',
                    unknown : 'Unknown'
                }
            },
            nodeFuncCall:{
                state: {
                    normal : 'Success',
                    warn : 'Abnormal',
                    error : 'Fail',
                    timeout : 'Timeout',
                    unknown : 'Unknown'
                },
                card:{
                    call: 'Request',
                    history: 'History'
                },
                table:{
                    id:'ID',
                    caller:'Requester',
                    state:'State',
                    parameter:'Parameter',
                    returnVal:'ReturnVal',
                    date:'Date'
                }
            },
            nodeReport:{
                card:{
                    level: 'Level',
                    call: 'Method',
                    interval: 'Rate',
                    node: 'Node',
                    viewReport:'ViewReport'
                }
            },
            nodeReportVal:{
                table:{
                    id:'ID',
                    date:'Date'
                }
            },
            nodeNotify:{
                table:{
                    id:'ID',
                    sender:'Sender',
                    sendType:'Source',
                    message:'Message',
                    date:'Date'
                },
                senderType:{
                    user: "User",
                    node: "Node",
                    unknown : 'Unknown'
                },
                state: {
                    not : 'Info',
                    unknown : 'Unknown',
                    normal : 'Success',
                    warn : 'Warn',
                    error : 'Error'
                },
            },
            nodeResource:{
                table:{
                    id:'ID',
                    uploader:'Uploader',
                    uploaderType:'Source',
                    name:'Name',
                    size:'Size',
                    downLoadCnt:'DownLoads',
                    state:'State',
                    date:'Date'
                },
                uploaderType:{
                    user: "User",
                    node: "Node",
                    unknown : 'Unknown'
                },
                state:{
                    normal:'Valid',
                    invalid:'Invalid'
                }
            },
            defaultVal:{
                unknown : 'Unknown'
            },
            time: {
                manual: 'manual',
                ms : 'ms',
                s : 's',
                min : 'min',
                hour : 'hour',
                day : 'day',
                once :'t'
            },
            filter:{
                invalidTag: 'Invalid tag',
                existTag: ' Added in<{name}>',
                start:'Filter activated',
                stop:'Filter not active',
                tagName: {
                    ID: 'ID',
                    nodeID: 'Node ID',
                },
                tips:{
                    select: 'Please select',
                    submit: 'Submit',
                    startTime: 'Start time',
                    endTime: 'End time',
                    timeError:'The start time cannot exceed the end time',
                    clearTags: 'Clear {msg} tags',
                },
                node:{
                    name:'Node name',
                    state:'State',
                    time:'Update time',
                },
                nodeFunc:{
                    nodeID:'Node ID',
                    nodeName:'Node name',
                    name:'Node method name',
                    level:'Level',
                    time:'Update time',
                },
                nodeReport:{
                    nodeID:'Node ID',
                    nodeName:'Node name',
                    name:'Node report name',
                    level:'Level',
                    time:'Update time',
                },
                nodeNotify:{
                    message:'Message',
                    sender:'Sender',
                    senderType:'Send source',
                    state:'State',
                    time:'Send time',
                },
                nodeResource:{
                    name:'Resource name',
                    uploader:'Uploader',
                    uploaderType:'Upload source',
                    state:'State',
                    time:'Update time',
                }
            },
            request:{
                error:{
                    fail: 'Request failure ({msg})',
                    header: 'Error reading information ({msg})',
                    body:   'Error reading data ({msg})',
                    file:   'Error reading file data ({msg})',
                    checkFile: 'File information verification failed ({msg})',
                    marshal: 'Data encoding failed ({msg})',
                    unmarshal: 'Data decoding failed ({msg})',
                    register: 'Register failed ({msg})',
                    loginWithAccount: 'Login failed ({msg})',
                    passwordWithAccount: 'Login failed ({msg})',
                    loginWithToken: 'Login information verification failed ({msg})',
                    levelLow: 'Insufficient permissions ({msg})',
                    request: 'Request error ({msg})',
                }
            },
            websocket:{
                notSupport: 'The current browser does not support websocket protocol, and some functions will not be available',
                initError:'Websocket initialization error: ',
                reconnect:'Attempting to reconnect to the server......{msg} time',
                reconnectSuccess:'Network connection succeeded',
                disConnect:'The network connection has been disconnected: ',
                orderError:'Bad websocket instruction: '
            },
            confirm:{
                delete:'This operation will permanently delete relevant data. Do you want to continue?',
                warn: 'Warn',
                ok:'Confirm',
                cancel:'Cancel'
            },
            setting:{
                system:'System set',
                user:'User set',
                topLink:'Top bar set',
                systemSet:{
                    fixPage:'Fixed paging：',
                    language:'Choose language：',
                    modifyPassword:'Modify password：',
                    modifyPasswordButton:'Modify',
                    modifyPasswordDialog:'Modify Password',
                    loginOut:'Logout：',
                    loginOutButton:'Quit',
                    autoRefresh:'Data sync(s/t)：',
                },
                topMenuSet:{
                    id:'ID',
                    name:'Name',
                    link:'Link',
                    operate:'Operate',
                    deleteSuccess:'Delete success',
                    createSuccess:'Create success',
                    updateSuccess:'Update success'
                },
                userSet:{
                    id:'ID',
                    userName:'Name',
                    nickName:'Nickname',
                    level:'Level',
                    operate:'Operate',
                    addUser:'Add user',
                    deleteSuccess:'Delete success',
                    updateSuccess:'Update success'
                }
            },
            file:{
                downloadTips:'Click to download the file',
                uploadTips:'Click upload',
                exceedTips:'The number of uploaded files exceeds the maximum limit',
                failTips:'Failed to upload file',
                forbidDelHistoryFile:'Prohibit deleting history files'
            },
            autoRefresh:{
                start:'Auto sync on',
                stop:'Auto sync off'
            },
            json:{
                formatFail:'JSON formatting failed: '
            },
            level:{
                selectTips:'Please select permission level'
            },
            passwordReset:{
                originalPassword:'Original password',
                newPassword:'New password',
                confirmPassword:'Confirm password',
                passwordInconsistent:'The two passwords are inconsistent',
                passwordModifySuccess:'Password changed successfully, please login again',
                modifyButton: 'Modify'
            },
            sideBar:{
                node:'Node',
                nodeFunc:'Method',
                nodeReport:'Report',
                nodeResource:'Resource',
                nodeNotify:'Notify',
                nodeTest:'Test',
                errorKey:'Wrong sidebar menu option: '
            },
            dialog:{
                frame:{
                    setting:'Set up(ctrl+q)',
                    sync:'Synchronization(ctrl+space)',
                    update:'Refresh(~)',
                    fullScreen:'Full screen(ctrl+enter)',
                    close:'Close(esc)'
                },
                nodeFuncCall:{
                    form: 'Form',
                    json: 'JSON',
                    emptyParameter:'This method has no parameters set',
                    emptyReturnVal:'The method called this time has no return value',
                    resetButton:'Reset',
                    submitButton:'Submit',
                    jsonCheckFail:'Parameter verification failed'
                },
                nodeReportVal:{
                    waitResult:'Please wait for the result to return...',
                    setting:'Set up',
                    resultSet:'Result set(p):',
                    sync:'Data sync(s/t):',
                    okButton:'Confirm'
                }
            },
            home:{
                parseConfigFail:'User configuration resolution failed. The default configuration will be used'
            },
            login:{
                userName:'User name',
                password:'Password',
                login:'Login',
                logining:'Logging...',
                autoLogin:'Auto login',
                register:'Register account',
                createManager:'Create administrator',
                loginSuccess:'Login succeeded'
            },
            register:{
                nickName:'Nick name',
                userName:'User name',
                password:'Password',
                confirmPassword:'Confirm password',
                registerButton:'Register',
                registerSuccess:'Register succeeded',
                passwordInconsistent:'The two passwords are inconsistent'
            },
            empty:{
                emptyData:'No data'
            },
            notFound:'Page does not exist'
        },
    },
})

export default i18n