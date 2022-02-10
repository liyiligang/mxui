<div align=center>
<img src="web\src\assets\logo.svg" width="450" height="280" />
</div>
<div align=center>
<img src="https://img.shields.io/badge/vue-3.2.30-blue"/>
<img src="https://img.shields.io/badge/vite-2.7.13-brightgreen"/>
<img src="https://img.shields.io/badge/element--plus-2.0.1-green"/>
<img src="https://img.shields.io/badge/npm-6.14.8-red"/>
 <br/>
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<img src="https://img.shields.io/badge/gin-1.7.1-brightgreen"/>
<img src="https://img.shields.io/badge/gorm-1.22.3-lightBlue"/>
<img src="https://img.shields.io/badge/protobuf-3.7.0-green"/>
<img src="https://img.shields.io/badge/grpc-1.38.0-red"/>
</div>
 <br/> 
 
 [简体中文](./README.md) | English


## About
MXUI is an API visualization platform based on golang + vue3. It can quickly use the back-end API to generate UI components such as forms, tables, charts, file upload and download, audio and video playback and so on. At the same time, it integrates authority management, history, message notification and other functions. It can significantly improve the efficiency of development and testing

## Features
- Out of the box, easy deployment, default configuration, no need to install other dependent services
- UI interface generation, network request and API call process can be completed in one minute. Only one function (API) needs to be provided at the back end
- Built in rich UI components, modify or add API to support dynamic loading
- The built-in JSON editor supports two parameter editing modes of form / JSON, and uses JSON schema for parameter verification
- The API access adopts the client mode, without exposing and monitoring ports, with built-in JWT authentication, API authority management and other security settings
- Support file upload, API request, record query, error prompt, message push, background data monitoring (experimental) and other auxiliary functions
- Support multiple types of data sources (sqlite, mysql, postgresql...)
- Multilingual support (i18n)


## Document
- [中文](https://mxui-doc.liyiligang.com)    
- [English](https://mxui-doc.liyiligang.com/en)

## Preview
- [MXUI](https://mxui.liyiligang.com)    

## Build
```bash
# Clone
git clone https://github.com/liyiligang/mxui.git

# Build server
cd mxui/server/
go build -o ../bin

# Build web
cd mxui/web/
npm run build
```

## Releases
- [Download](https://github.com/liyiligang/mxui/releases) 

## Run
```bash
cd mxui/bin/

# windows 
mxui.exe

# linux
./mxui
```

## Enter MXUI
### Browser access: http://localhost:806 Enter the login interface
<img src="store\image\home-en.jpg" width="60%"/>

## Client
After the deployment of the server, you need to introduce the mxui client package into your code, and use the API provided by this package to generate the UI you want   
At present, mxui provides golang client support. We encourage and welcome you to develop more programming language clients!
- golang: [mxui-go-client](https://github.com/liyiligang/mxui-go-client)

## Contact information
### QQ Group: 757595139
<img src="store\image\group.jpg" width=300/>

## Questions or suggestions
- Any use questions or suggestions can be submitted to GitHub issue or contact me through QQ group
- Before submitting the issue, please search whether the relevant content has been proposed

## License
[Apache-2.0](LICENSE)