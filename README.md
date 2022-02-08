<div align=center>
<img src="web\src\assets\logo.svg" width="450" height="280" />
</div>
<div align=center>
<img src="https://img.shields.io/badge/vue-3.2.30-blue"/>
<img src="https://img.shields.io/badge/vite-2.7.13-brightgreen"/>
<img src="https://img.shields.io/badge/element--plus-2.0.1-green"/>
<img src="https://img.shields.io/badge/npm-6.14.8-red"/>

<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<img src="https://img.shields.io/badge/gin-1.7.1-brightgreen"/>
<img src="https://img.shields.io/badge/gorm-1.22.3-lightBlue"/>
<img src="https://img.shields.io/badge/protobuf-3.7.0-green"/>
<img src="https://img.shields.io/badge/grpc-1.38.0-red"/>
</div>
 <br/> 
 
 [English](./README-en.md) | 简体中文
******************************************* 

## 简介
MXUI是基于golang+vue3搭建的接口可视化平台, 能够快速的利用后端接口生成表单, 表格, 图表, 文件上传下载，音视频播放等UI组件。同时集成权限管理, 历史记录, 消息通知等功能。能够显著提高开发测试效率

## 特性
- 开箱即用, 部署便捷, 默认配置无需安装其他依赖服务
- 一分钟即可完成UI界面生成, 网络请求, 接口调用流程, 仅需后端提供一个函数(接口)
- 内置丰富的UI组件, 修改或新增接口支持动态加载, 无需重启服务端
- 内置json编辑器, 支持表单/json两种参数编辑模式, 并使用json schema做参数校验
- 接口访问采用客户端模式, 无需暴露和监听端口, 内置jwt鉴权, 接口权限管理等安全设置
- 支持文件上传, 接口请求记录查询, 错误提示, 消息推送, 后台数据监控(实验性)等辅助功能
- 支持多种类型的数据源(sqlite, mysql, postgresql...)
- 多语言支持(i18n)


## 查看文档
- [中文](https://mxui-doc.liyiligang.com)    
- [English](https://mxui-doc.liyiligang.com)

## 在线预览
- [MXUI](https://mxui.liyiligang.com)    

## 编译
```bash
# 克隆项目
git clone https://github.com/liyiligang/mxui.git

# 编译服务端
cd mxui/server/
go build 

# 编译web端
cd mxui/web/
npm run build
```

## Releases
你也可以直接下载已经编译好的执行文件
- [下载](https://github.com/liyiligang/mxui/releases) 

## 运行
```bash
# windows 
mxui.exe

# linux
./mxui
```

## 进入MXUI主页
###  在浏览器访问: http://localhost 
能够进入MXUI登录界面, 代表服务端已经部署成功   
<img src="store\image\home.jpg" width="80%"/>


## 客户端
服务端部署完成后, 需要在你的代码里引入MXUI客户端包, 利用此包提供的API就可以生成你想要的UI了   
目前MXUI提供了golang的客户端支持, 我们鼓励且欢迎大家开发更多编程语言的客户端！
- golang: [mxui-go-client](https://github.com/liyiligang/mxui-go-client)


## 联系方式 
### QQ交流群: 757595139
<img src="store\image\group.jpg" width=300/>

## 问题或建议
- 有任何使用问题或者建议都可以提交至 Github issue 或者通过QQ群内联系我
- 在提交 issue 之前，请搜索相关内容是否已被提出

## License
[Apache-2.0](LICENSE)