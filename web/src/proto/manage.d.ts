import * as $protobuf from "protobufjs";
/** Namespace protoManage. */
export namespace protoManage {

    /** Order enum. */
    enum Order {
        Unknow = 0,
        NodeFuncCallReq = 608,
        NodeFuncCallAns = 609,
        NodeReportUpdateVal = 704,
        NodeNotifyAdd = 801,
        NodeNotifyError = 803
    }

    /** State enum. */
    enum State {
        StateNot = 0,
        StateUnknow = 1,
        StateNormal = 2,
        StateWarn = 3,
        StateError = 4
    }

    /** Level enum. */
    enum Level {
        LevelNot = 0,
        LevelPrimary = 1,
        LevelIntermediate = 2,
        LevelSenior = 3,
        LevelSuper = 4
    }

    /** NodeFuncReturnType enum. */
    enum NodeFuncReturnType {
        Unknown = 0,
        NotReturn = 1,
        Error = 2,
        Text = 3,
        Json = 4,
        Link = 5,
        Image = 6,
        Media = 7,
        File = 8,
        Table = 9,
        Charts = 10
    }

    /** NodeReportType enum. */
    enum NodeReportType {
        NodeReportTypeUnknown = 0,
        NodeReportTypeTable = 1,
        NodeReportTypeLine = 2
    }

    /** NotifySenderType enum. */
    enum NotifySenderType {
        NotifySenderTypeUnknow = 0,
        NotifySenderTypeUser = 1,
        NotifySenderTypeNode = 2
    }

    /** NodeResourceType enum. */
    enum NodeResourceType {
        NodeResourceTypeUnknow = 0,
        NodeResourceTypeCache = 1
    }

    /** HttpError enum. */
    enum HttpError {
        HttpErrorNull = 0,
        HttpErrorGetHeader = 601,
        HttpErrorGetBody = 602,
        HttpErrorGetFile = 603,
        HttpErrorCheckFile = 604,
        HttpErrorMarshal = 605,
        HttpErrorUnmarshal = 606,
        HttpErrorRegister = 607,
        HttpErrorLoginWithAccount = 608,
        HttpErrorPasswordWithAccount = 609,
        HttpErrorLoginWithToken = 610,
        HttpErrorLevelLow = 611,
        HttpErrorRequest = 612
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message order */
        order?: (protoManage.Order|null);

        /** Message message */
        message?: (Uint8Array|null);
    }

    /** 消息包***************** */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IMessage);

        /** Message order. */
        public order: protoManage.Order;

        /** Message message. */
        public message: Uint8Array;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protoManage.IMessage): protoManage.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protoManage.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protoManage.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HttpMessage. */
    interface IHttpMessage {

        /** HttpMessage order */
        order?: (protoManage.Order|null);

        /** HttpMessage message */
        message?: (Uint8Array|null);

        /** HttpMessage token */
        token?: (string|null);
    }

    /** Represents a HttpMessage. */
    class HttpMessage implements IHttpMessage {

        /**
         * Constructs a new HttpMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IHttpMessage);

        /** HttpMessage order. */
        public order: protoManage.Order;

        /** HttpMessage message. */
        public message: Uint8Array;

        /** HttpMessage token. */
        public token: string;

        /**
         * Creates a new HttpMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HttpMessage instance
         */
        public static create(properties?: protoManage.IHttpMessage): protoManage.HttpMessage;

        /**
         * Encodes the specified HttpMessage message. Does not implicitly {@link protoManage.HttpMessage.verify|verify} messages.
         * @param message HttpMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IHttpMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HttpMessage message, length delimited. Does not implicitly {@link protoManage.HttpMessage.verify|verify} messages.
         * @param message HttpMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IHttpMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HttpMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HttpMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.HttpMessage;

        /**
         * Decodes a HttpMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HttpMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.HttpMessage;

        /**
         * Verifies a HttpMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HttpMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HttpMessage
         */
        public static fromObject(object: { [k: string]: any }): protoManage.HttpMessage;

        /**
         * Creates a plain object from a HttpMessage message. Also converts values to other types if specified.
         * @param message HttpMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.HttpMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HttpMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a RpcEngine */
    class RpcEngine extends $protobuf.rpc.Service {

        /**
         * Constructs a new RpcEngine service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new RpcEngine service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RpcEngine;

        /**
         * Calls RegisterNode.
         * @param request Node message or plain object
         * @param callback Node-style callback called with the error, if any, and Node
         */
        public registerNode(request: protoManage.INode, callback: protoManage.RpcEngine.RegisterNodeCallback): void;

        /**
         * Calls RegisterNode.
         * @param request Node message or plain object
         * @returns Promise
         */
        public registerNode(request: protoManage.INode): Promise<protoManage.Node>;

        /**
         * Calls RegisterNodeFunc.
         * @param request NodeFunc message or plain object
         * @param callback Node-style callback called with the error, if any, and NodeFunc
         */
        public registerNodeFunc(request: protoManage.INodeFunc, callback: protoManage.RpcEngine.RegisterNodeFuncCallback): void;

        /**
         * Calls RegisterNodeFunc.
         * @param request NodeFunc message or plain object
         * @returns Promise
         */
        public registerNodeFunc(request: protoManage.INodeFunc): Promise<protoManage.NodeFunc>;

        /**
         * Calls RegisterNodeReport.
         * @param request NodeReport message or plain object
         * @param callback Node-style callback called with the error, if any, and NodeReport
         */
        public registerNodeReport(request: protoManage.INodeReport, callback: protoManage.RpcEngine.RegisterNodeReportCallback): void;

        /**
         * Calls RegisterNodeReport.
         * @param request NodeReport message or plain object
         * @returns Promise
         */
        public registerNodeReport(request: protoManage.INodeReport): Promise<protoManage.NodeReport>;

        /**
         * Calls CheckNodeResource.
         * @param request NodeResource message or plain object
         * @param callback Node-style callback called with the error, if any, and NodeResource
         */
        public checkNodeResource(request: protoManage.INodeResource, callback: protoManage.RpcEngine.CheckNodeResourceCallback): void;

        /**
         * Calls CheckNodeResource.
         * @param request NodeResource message or plain object
         * @returns Promise
         */
        public checkNodeResource(request: protoManage.INodeResource): Promise<protoManage.NodeResource>;

        /**
         * Calls UploadNodeResource.
         * @param request ReqNodeResourceUpload message or plain object
         * @param callback Node-style callback called with the error, if any, and AnsNodeResourceUpload
         */
        public uploadNodeResource(request: protoManage.IReqNodeResourceUpload, callback: protoManage.RpcEngine.UploadNodeResourceCallback): void;

        /**
         * Calls UploadNodeResource.
         * @param request ReqNodeResourceUpload message or plain object
         * @returns Promise
         */
        public uploadNodeResource(request: protoManage.IReqNodeResourceUpload): Promise<protoManage.AnsNodeResourceUpload>;

        /**
         * Calls DownloadNodeResource.
         * @param request ReqNodeResourceDownload message or plain object
         * @param callback Node-style callback called with the error, if any, and AnsNodeResourceDownload
         */
        public downloadNodeResource(request: protoManage.IReqNodeResourceDownload, callback: protoManage.RpcEngine.DownloadNodeResourceCallback): void;

        /**
         * Calls DownloadNodeResource.
         * @param request ReqNodeResourceDownload message or plain object
         * @returns Promise
         */
        public downloadNodeResource(request: protoManage.IReqNodeResourceDownload): Promise<protoManage.AnsNodeResourceDownload>;

        /**
         * Calls RpcChannel.
         * @param request Message message or plain object
         * @param callback Node-style callback called with the error, if any, and Message
         */
        public rpcChannel(request: protoManage.IMessage, callback: protoManage.RpcEngine.RpcChannelCallback): void;

        /**
         * Calls RpcChannel.
         * @param request Message message or plain object
         * @returns Promise
         */
        public rpcChannel(request: protoManage.IMessage): Promise<protoManage.Message>;
    }

    namespace RpcEngine {

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNode}.
         * @param error Error, if any
         * @param [response] Node
         */
        type RegisterNodeCallback = (error: (Error|null), response?: protoManage.Node) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNodeFunc}.
         * @param error Error, if any
         * @param [response] NodeFunc
         */
        type RegisterNodeFuncCallback = (error: (Error|null), response?: protoManage.NodeFunc) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNodeReport}.
         * @param error Error, if any
         * @param [response] NodeReport
         */
        type RegisterNodeReportCallback = (error: (Error|null), response?: protoManage.NodeReport) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#checkNodeResource}.
         * @param error Error, if any
         * @param [response] NodeResource
         */
        type CheckNodeResourceCallback = (error: (Error|null), response?: protoManage.NodeResource) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#uploadNodeResource}.
         * @param error Error, if any
         * @param [response] AnsNodeResourceUpload
         */
        type UploadNodeResourceCallback = (error: (Error|null), response?: protoManage.AnsNodeResourceUpload) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#downloadNodeResource}.
         * @param error Error, if any
         * @param [response] AnsNodeResourceDownload
         */
        type DownloadNodeResourceCallback = (error: (Error|null), response?: protoManage.AnsNodeResourceDownload) => void;

        /**
         * Callback as used by {@link protoManage.RpcEngine#rpcChannel}.
         * @param error Error, if any
         * @param [response] Message
         */
        type RpcChannelCallback = (error: (Error|null), response?: protoManage.Message) => void;
    }

    /** Properties of a Base. */
    interface IBase {

        /** Base ID */
        ID?: (number|null);

        /** Base UpdateTime */
        UpdateTime?: (number|null);
    }

    /** Represents a Base. */
    class Base implements IBase {

        /**
         * Constructs a new Base.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IBase);

        /** Base ID. */
        public ID: number;

        /** Base UpdateTime. */
        public UpdateTime: number;

        /**
         * Creates a new Base instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base instance
         */
        public static create(properties?: protoManage.IBase): protoManage.Base;

        /**
         * Encodes the specified Base message. Does not implicitly {@link protoManage.Base.verify|verify} messages.
         * @param message Base message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Base message, length delimited. Does not implicitly {@link protoManage.Base.verify|verify} messages.
         * @param message Base message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Base;

        /**
         * Decodes a Base message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Base;

        /**
         * Verifies a Base message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Base message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Base
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Base;

        /**
         * Creates a plain object from a Base message. Also converts values to other types if specified.
         * @param message Base
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Base, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Base to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Page. */
    interface IPage {

        /** Page Count */
        Count?: (number|null);

        /** Page Num */
        Num?: (number|null);
    }

    /** Represents a Page. */
    class Page implements IPage {

        /**
         * Constructs a new Page.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IPage);

        /** Page Count. */
        public Count: number;

        /** Page Num. */
        public Num: number;

        /**
         * Creates a new Page instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Page instance
         */
        public static create(properties?: protoManage.IPage): protoManage.Page;

        /**
         * Encodes the specified Page message. Does not implicitly {@link protoManage.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Page message, length delimited. Does not implicitly {@link protoManage.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Page;

        /**
         * Decodes a Page message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Page;

        /**
         * Verifies a Page message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Page message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Page
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Page;

        /**
         * Creates a plain object from a Page message. Also converts values to other types if specified.
         * @param message Page
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Page to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Time. */
    interface ITime {

        /** Time BeginTime */
        BeginTime?: (number|null);

        /** Time EndTime */
        EndTime?: (number|null);
    }

    /** Represents a Time. */
    class Time implements ITime {

        /**
         * Constructs a new Time.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.ITime);

        /** Time BeginTime. */
        public BeginTime: number;

        /** Time EndTime. */
        public EndTime: number;

        /**
         * Creates a new Time instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Time instance
         */
        public static create(properties?: protoManage.ITime): protoManage.Time;

        /**
         * Encodes the specified Time message. Does not implicitly {@link protoManage.Time.verify|verify} messages.
         * @param message Time message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.ITime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Time message, length delimited. Does not implicitly {@link protoManage.Time.verify|verify} messages.
         * @param message Time message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.ITime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Time message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Time;

        /**
         * Decodes a Time message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Time;

        /**
         * Verifies a Time message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Time message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Time
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Time;

        /**
         * Creates a plain object from a Time message. Also converts values to other types if specified.
         * @param message Time
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Time, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Time to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Manager. */
    interface IManager {

        /** Manager Base */
        Base?: (protoManage.IBase|null);

        /** Manager Name */
        Name?: (string|null);

        /** Manager Password */
        Password?: (string|null);

        /** Manager NickName */
        NickName?: (string|null);

        /** Manager Token */
        Token?: (string|null);

        /** Manager Setting */
        Setting?: (string|null);

        /** Manager Level */
        Level?: (protoManage.Level|null);

        /** Manager State */
        State?: (protoManage.State|null);
    }

    /** Represents a Manager. */
    class Manager implements IManager {

        /**
         * Constructs a new Manager.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IManager);

        /** Manager Base. */
        public Base?: (protoManage.IBase|null);

        /** Manager Name. */
        public Name: string;

        /** Manager Password. */
        public Password: string;

        /** Manager NickName. */
        public NickName: string;

        /** Manager Token. */
        public Token: string;

        /** Manager Setting. */
        public Setting: string;

        /** Manager Level. */
        public Level: protoManage.Level;

        /** Manager State. */
        public State: protoManage.State;

        /**
         * Creates a new Manager instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Manager instance
         */
        public static create(properties?: protoManage.IManager): protoManage.Manager;

        /**
         * Encodes the specified Manager message. Does not implicitly {@link protoManage.Manager.verify|verify} messages.
         * @param message Manager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IManager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Manager message, length delimited. Does not implicitly {@link protoManage.Manager.verify|verify} messages.
         * @param message Manager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IManager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Manager message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Manager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Manager;

        /**
         * Decodes a Manager message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Manager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Manager;

        /**
         * Verifies a Manager message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Manager message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Manager
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Manager;

        /**
         * Creates a plain object from a Manager message. Also converts values to other types if specified.
         * @param message Manager
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Manager, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Manager to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TopLink. */
    interface ITopLink {

        /** TopLink Base */
        Base?: (protoManage.IBase|null);

        /** TopLink Name */
        Name?: (string|null);

        /** TopLink Url */
        Url?: (string|null);

        /** TopLink State */
        State?: (protoManage.State|null);
    }

    /** Represents a TopLink. */
    class TopLink implements ITopLink {

        /**
         * Constructs a new TopLink.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.ITopLink);

        /** TopLink Base. */
        public Base?: (protoManage.IBase|null);

        /** TopLink Name. */
        public Name: string;

        /** TopLink Url. */
        public Url: string;

        /** TopLink State. */
        public State: protoManage.State;

        /**
         * Creates a new TopLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopLink instance
         */
        public static create(properties?: protoManage.ITopLink): protoManage.TopLink;

        /**
         * Encodes the specified TopLink message. Does not implicitly {@link protoManage.TopLink.verify|verify} messages.
         * @param message TopLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.ITopLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopLink message, length delimited. Does not implicitly {@link protoManage.TopLink.verify|verify} messages.
         * @param message TopLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.ITopLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopLink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.TopLink;

        /**
         * Decodes a TopLink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.TopLink;

        /**
         * Verifies a TopLink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TopLink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TopLink
         */
        public static fromObject(object: { [k: string]: any }): protoManage.TopLink;

        /**
         * Creates a plain object from a TopLink message. Also converts values to other types if specified.
         * @param message TopLink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.TopLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TopLink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Node. */
    interface INode {

        /** Node Base */
        Base?: (protoManage.IBase|null);

        /** Node Name */
        Name?: (string|null);

        /** Node State */
        State?: (protoManage.State|null);
    }

    /** Represents a Node. */
    class Node implements INode {

        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INode);

        /** Node Base. */
        public Base?: (protoManage.IBase|null);

        /** Node Name. */
        public Name: string;

        /** Node State. */
        public State: protoManage.State;

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: protoManage.INode): protoManage.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link protoManage.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link protoManage.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeFunc. */
    interface INodeFunc {

        /** NodeFunc Base */
        Base?: (protoManage.IBase|null);

        /** NodeFunc NodeID */
        NodeID?: (number|null);

        /** NodeFunc Name */
        Name?: (string|null);

        /** NodeFunc Func */
        Func?: (string|null);

        /** NodeFunc Schema */
        Schema?: (string|null);

        /** NodeFunc Level */
        Level?: (protoManage.Level|null);

        /** NodeFunc State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeFunc. */
    class NodeFunc implements INodeFunc {

        /**
         * Constructs a new NodeFunc.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeFunc);

        /** NodeFunc Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeFunc NodeID. */
        public NodeID: number;

        /** NodeFunc Name. */
        public Name: string;

        /** NodeFunc Func. */
        public Func: string;

        /** NodeFunc Schema. */
        public Schema: string;

        /** NodeFunc Level. */
        public Level: protoManage.Level;

        /** NodeFunc State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeFunc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeFunc instance
         */
        public static create(properties?: protoManage.INodeFunc): protoManage.NodeFunc;

        /**
         * Encodes the specified NodeFunc message. Does not implicitly {@link protoManage.NodeFunc.verify|verify} messages.
         * @param message NodeFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeFunc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeFunc message, length delimited. Does not implicitly {@link protoManage.NodeFunc.verify|verify} messages.
         * @param message NodeFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeFunc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeFunc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeFunc;

        /**
         * Decodes a NodeFunc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeFunc;

        /**
         * Verifies a NodeFunc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeFunc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeFunc
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeFunc;

        /**
         * Creates a plain object from a NodeFunc message. Also converts values to other types if specified.
         * @param message NodeFunc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeFunc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeFunc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeFuncCall. */
    interface INodeFuncCall {

        /** NodeFuncCall Base */
        Base?: (protoManage.IBase|null);

        /** NodeFuncCall ManagerID */
        ManagerID?: (number|null);

        /** NodeFuncCall FuncID */
        FuncID?: (number|null);

        /** NodeFuncCall Parameter */
        Parameter?: (string|null);

        /** NodeFuncCall ReturnVal */
        ReturnVal?: (string|null);

        /** NodeFuncCall ReturnType */
        ReturnType?: (protoManage.NodeFuncReturnType|null);

        /** NodeFuncCall State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeFuncCall. */
    class NodeFuncCall implements INodeFuncCall {

        /**
         * Constructs a new NodeFuncCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeFuncCall);

        /** NodeFuncCall Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeFuncCall ManagerID. */
        public ManagerID: number;

        /** NodeFuncCall FuncID. */
        public FuncID: number;

        /** NodeFuncCall Parameter. */
        public Parameter: string;

        /** NodeFuncCall ReturnVal. */
        public ReturnVal: string;

        /** NodeFuncCall ReturnType. */
        public ReturnType: protoManage.NodeFuncReturnType;

        /** NodeFuncCall State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeFuncCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeFuncCall instance
         */
        public static create(properties?: protoManage.INodeFuncCall): protoManage.NodeFuncCall;

        /**
         * Encodes the specified NodeFuncCall message. Does not implicitly {@link protoManage.NodeFuncCall.verify|verify} messages.
         * @param message NodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeFuncCall message, length delimited. Does not implicitly {@link protoManage.NodeFuncCall.verify|verify} messages.
         * @param message NodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeFuncCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeFuncCall;

        /**
         * Decodes a NodeFuncCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeFuncCall;

        /**
         * Verifies a NodeFuncCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeFuncCall
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeFuncCall;

        /**
         * Creates a plain object from a NodeFuncCall message. Also converts values to other types if specified.
         * @param message NodeFuncCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeFuncCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeFuncCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeReport. */
    interface INodeReport {

        /** NodeReport Base */
        Base?: (protoManage.IBase|null);

        /** NodeReport NodeID */
        NodeID?: (number|null);

        /** NodeReport Name */
        Name?: (string|null);

        /** NodeReport Type */
        Type?: (protoManage.NodeReportType|null);

        /** NodeReport Func */
        Func?: (string|null);

        /** NodeReport Schema */
        Schema?: (string|null);

        /** NodeReport Interval */
        Interval?: (number|null);

        /** NodeReport Level */
        Level?: (protoManage.Level|null);

        /** NodeReport State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeReport. */
    class NodeReport implements INodeReport {

        /**
         * Constructs a new NodeReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeReport);

        /** NodeReport Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeReport NodeID. */
        public NodeID: number;

        /** NodeReport Name. */
        public Name: string;

        /** NodeReport Type. */
        public Type: protoManage.NodeReportType;

        /** NodeReport Func. */
        public Func: string;

        /** NodeReport Schema. */
        public Schema: string;

        /** NodeReport Interval. */
        public Interval: number;

        /** NodeReport Level. */
        public Level: protoManage.Level;

        /** NodeReport State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeReport instance
         */
        public static create(properties?: protoManage.INodeReport): protoManage.NodeReport;

        /**
         * Encodes the specified NodeReport message. Does not implicitly {@link protoManage.NodeReport.verify|verify} messages.
         * @param message NodeReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeReport message, length delimited. Does not implicitly {@link protoManage.NodeReport.verify|verify} messages.
         * @param message NodeReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeReport;

        /**
         * Decodes a NodeReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeReport;

        /**
         * Verifies a NodeReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeReport
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeReport;

        /**
         * Creates a plain object from a NodeReport message. Also converts values to other types if specified.
         * @param message NodeReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeReportVal. */
    interface INodeReportVal {

        /** NodeReportVal Base */
        Base?: (protoManage.IBase|null);

        /** NodeReportVal ReportID */
        ReportID?: (number|null);

        /** NodeReportVal Value */
        Value?: (string|null);

        /** NodeReportVal State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeReportVal. */
    class NodeReportVal implements INodeReportVal {

        /**
         * Constructs a new NodeReportVal.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeReportVal);

        /** NodeReportVal Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeReportVal ReportID. */
        public ReportID: number;

        /** NodeReportVal Value. */
        public Value: string;

        /** NodeReportVal State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeReportVal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeReportVal instance
         */
        public static create(properties?: protoManage.INodeReportVal): protoManage.NodeReportVal;

        /**
         * Encodes the specified NodeReportVal message. Does not implicitly {@link protoManage.NodeReportVal.verify|verify} messages.
         * @param message NodeReportVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeReportVal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeReportVal message, length delimited. Does not implicitly {@link protoManage.NodeReportVal.verify|verify} messages.
         * @param message NodeReportVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeReportVal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeReportVal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeReportVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeReportVal;

        /**
         * Decodes a NodeReportVal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeReportVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeReportVal;

        /**
         * Verifies a NodeReportVal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeReportVal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeReportVal
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeReportVal;

        /**
         * Creates a plain object from a NodeReportVal message. Also converts values to other types if specified.
         * @param message NodeReportVal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeReportVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeReportVal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeNotify. */
    interface INodeNotify {

        /** NodeNotify Base */
        Base?: (protoManage.IBase|null);

        /** NodeNotify SenderID */
        SenderID?: (number|null);

        /** NodeNotify SenderName */
        SenderName?: (string|null);

        /** NodeNotify SenderType */
        SenderType?: (protoManage.NotifySenderType|null);

        /** NodeNotify Message */
        Message?: (string|null);

        /** NodeNotify State */
        State?: (protoManage.State|null);

        /** NodeNotify showPop */
        showPop?: (boolean|null);
    }

    /** Represents a NodeNotify. */
    class NodeNotify implements INodeNotify {

        /**
         * Constructs a new NodeNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeNotify);

        /** NodeNotify Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeNotify SenderID. */
        public SenderID: number;

        /** NodeNotify SenderName. */
        public SenderName: string;

        /** NodeNotify SenderType. */
        public SenderType: protoManage.NotifySenderType;

        /** NodeNotify Message. */
        public Message: string;

        /** NodeNotify State. */
        public State: protoManage.State;

        /** NodeNotify showPop. */
        public showPop: boolean;

        /**
         * Creates a new NodeNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeNotify instance
         */
        public static create(properties?: protoManage.INodeNotify): protoManage.NodeNotify;

        /**
         * Encodes the specified NodeNotify message. Does not implicitly {@link protoManage.NodeNotify.verify|verify} messages.
         * @param message NodeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeNotify message, length delimited. Does not implicitly {@link protoManage.NodeNotify.verify|verify} messages.
         * @param message NodeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeNotify;

        /**
         * Decodes a NodeNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeNotify;

        /**
         * Verifies a NodeNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeNotify
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeNotify;

        /**
         * Creates a plain object from a NodeNotify message. Also converts values to other types if specified.
         * @param message NodeNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeResource. */
    interface INodeResource {

        /** NodeResource Base */
        Base?: (protoManage.IBase|null);

        /** NodeResource Name */
        Name?: (string|null);

        /** NodeResource Md5 */
        Md5?: (string|null);

        /** NodeResource Sizes */
        Sizes?: (number|null);

        /** NodeResource Type */
        Type?: (protoManage.NodeResourceType|null);

        /** NodeResource UploaderID */
        UploaderID?: (number|null);

        /** NodeResource UploaderName */
        UploaderName?: (string|null);

        /** NodeResource UploaderType */
        UploaderType?: (protoManage.NotifySenderType|null);

        /** NodeResource DownLoadCnt */
        DownLoadCnt?: (number|null);

        /** NodeResource State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeResource. */
    class NodeResource implements INodeResource {

        /**
         * Constructs a new NodeResource.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeResource);

        /** NodeResource Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeResource Name. */
        public Name: string;

        /** NodeResource Md5. */
        public Md5: string;

        /** NodeResource Sizes. */
        public Sizes: number;

        /** NodeResource Type. */
        public Type: protoManage.NodeResourceType;

        /** NodeResource UploaderID. */
        public UploaderID: number;

        /** NodeResource UploaderName. */
        public UploaderName: string;

        /** NodeResource UploaderType. */
        public UploaderType: protoManage.NotifySenderType;

        /** NodeResource DownLoadCnt. */
        public DownLoadCnt: number;

        /** NodeResource State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeResource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeResource instance
         */
        public static create(properties?: protoManage.INodeResource): protoManage.NodeResource;

        /**
         * Encodes the specified NodeResource message. Does not implicitly {@link protoManage.NodeResource.verify|verify} messages.
         * @param message NodeResource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeResource message, length delimited. Does not implicitly {@link protoManage.NodeResource.verify|verify} messages.
         * @param message NodeResource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeResource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeResource;

        /**
         * Decodes a NodeResource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeResource;

        /**
         * Verifies a NodeResource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeResource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeResource
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeResource;

        /**
         * Creates a plain object from a NodeResource message. Also converts values to other types if specified.
         * @param message NodeResource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeResource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqSystemInitInfo. */
    interface IReqSystemInitInfo {
    }

    /** Represents a ReqSystemInitInfo. */
    class ReqSystemInitInfo implements IReqSystemInitInfo {

        /**
         * Constructs a new ReqSystemInitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqSystemInitInfo);

        /**
         * Creates a new ReqSystemInitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSystemInitInfo instance
         */
        public static create(properties?: protoManage.IReqSystemInitInfo): protoManage.ReqSystemInitInfo;

        /**
         * Encodes the specified ReqSystemInitInfo message. Does not implicitly {@link protoManage.ReqSystemInitInfo.verify|verify} messages.
         * @param message ReqSystemInitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqSystemInitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSystemInitInfo message, length delimited. Does not implicitly {@link protoManage.ReqSystemInitInfo.verify|verify} messages.
         * @param message ReqSystemInitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqSystemInitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSystemInitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqSystemInitInfo;

        /**
         * Decodes a ReqSystemInitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqSystemInitInfo;

        /**
         * Verifies a ReqSystemInitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSystemInitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSystemInitInfo
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqSystemInitInfo;

        /**
         * Creates a plain object from a ReqSystemInitInfo message. Also converts values to other types if specified.
         * @param message ReqSystemInitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqSystemInitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSystemInitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsSystemInitInfo. */
    interface IAnsSystemInitInfo {

        /** AnsSystemInitInfo systemInit */
        systemInit?: (boolean|null);

        /** AnsSystemInitInfo openRegister */
        openRegister?: (boolean|null);
    }

    /** Represents an AnsSystemInitInfo. */
    class AnsSystemInitInfo implements IAnsSystemInitInfo {

        /**
         * Constructs a new AnsSystemInitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsSystemInitInfo);

        /** AnsSystemInitInfo systemInit. */
        public systemInit: boolean;

        /** AnsSystemInitInfo openRegister. */
        public openRegister: boolean;

        /**
         * Creates a new AnsSystemInitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsSystemInitInfo instance
         */
        public static create(properties?: protoManage.IAnsSystemInitInfo): protoManage.AnsSystemInitInfo;

        /**
         * Encodes the specified AnsSystemInitInfo message. Does not implicitly {@link protoManage.AnsSystemInitInfo.verify|verify} messages.
         * @param message AnsSystemInitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsSystemInitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsSystemInitInfo message, length delimited. Does not implicitly {@link protoManage.AnsSystemInitInfo.verify|verify} messages.
         * @param message AnsSystemInitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsSystemInitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsSystemInitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsSystemInitInfo;

        /**
         * Decodes an AnsSystemInitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsSystemInitInfo;

        /**
         * Verifies an AnsSystemInitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsSystemInitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsSystemInitInfo
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsSystemInitInfo;

        /**
         * Creates a plain object from an AnsSystemInitInfo message. Also converts values to other types if specified.
         * @param message AnsSystemInitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsSystemInitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsSystemInitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqTopLinkList. */
    interface IReqTopLinkList {
    }

    /** Represents a ReqTopLinkList. */
    class ReqTopLinkList implements IReqTopLinkList {

        /**
         * Constructs a new ReqTopLinkList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqTopLinkList);

        /**
         * Creates a new ReqTopLinkList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqTopLinkList instance
         */
        public static create(properties?: protoManage.IReqTopLinkList): protoManage.ReqTopLinkList;

        /**
         * Encodes the specified ReqTopLinkList message. Does not implicitly {@link protoManage.ReqTopLinkList.verify|verify} messages.
         * @param message ReqTopLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqTopLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqTopLinkList message, length delimited. Does not implicitly {@link protoManage.ReqTopLinkList.verify|verify} messages.
         * @param message ReqTopLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqTopLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqTopLinkList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqTopLinkList;

        /**
         * Decodes a ReqTopLinkList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqTopLinkList;

        /**
         * Verifies a ReqTopLinkList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqTopLinkList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqTopLinkList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqTopLinkList;

        /**
         * Creates a plain object from a ReqTopLinkList message. Also converts values to other types if specified.
         * @param message ReqTopLinkList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqTopLinkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqTopLinkList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsTopLinkList. */
    interface IAnsTopLinkList {

        /** AnsTopLinkList TopLinkList */
        TopLinkList?: (protoManage.ITopLink[]|null);
    }

    /** Represents an AnsTopLinkList. */
    class AnsTopLinkList implements IAnsTopLinkList {

        /**
         * Constructs a new AnsTopLinkList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsTopLinkList);

        /** AnsTopLinkList TopLinkList. */
        public TopLinkList: protoManage.ITopLink[];

        /**
         * Creates a new AnsTopLinkList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsTopLinkList instance
         */
        public static create(properties?: protoManage.IAnsTopLinkList): protoManage.AnsTopLinkList;

        /**
         * Encodes the specified AnsTopLinkList message. Does not implicitly {@link protoManage.AnsTopLinkList.verify|verify} messages.
         * @param message AnsTopLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsTopLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsTopLinkList message, length delimited. Does not implicitly {@link protoManage.AnsTopLinkList.verify|verify} messages.
         * @param message AnsTopLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsTopLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsTopLinkList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsTopLinkList;

        /**
         * Decodes an AnsTopLinkList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsTopLinkList;

        /**
         * Verifies an AnsTopLinkList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsTopLinkList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsTopLinkList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsTopLinkList;

        /**
         * Creates a plain object from an AnsTopLinkList message. Also converts values to other types if specified.
         * @param message AnsTopLinkList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsTopLinkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsTopLinkList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqManagerList. */
    interface IReqManagerList {
    }

    /** Represents a ReqManagerList. */
    class ReqManagerList implements IReqManagerList {

        /**
         * Constructs a new ReqManagerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqManagerList);

        /**
         * Creates a new ReqManagerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqManagerList instance
         */
        public static create(properties?: protoManage.IReqManagerList): protoManage.ReqManagerList;

        /**
         * Encodes the specified ReqManagerList message. Does not implicitly {@link protoManage.ReqManagerList.verify|verify} messages.
         * @param message ReqManagerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqManagerList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqManagerList message, length delimited. Does not implicitly {@link protoManage.ReqManagerList.verify|verify} messages.
         * @param message ReqManagerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqManagerList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqManagerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqManagerList;

        /**
         * Decodes a ReqManagerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqManagerList;

        /**
         * Verifies a ReqManagerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqManagerList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqManagerList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqManagerList;

        /**
         * Creates a plain object from a ReqManagerList message. Also converts values to other types if specified.
         * @param message ReqManagerList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqManagerList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqManagerList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsManagerList. */
    interface IAnsManagerList {

        /** AnsManagerList ManagerList */
        ManagerList?: (protoManage.IManager[]|null);
    }

    /** Represents an AnsManagerList. */
    class AnsManagerList implements IAnsManagerList {

        /**
         * Constructs a new AnsManagerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsManagerList);

        /** AnsManagerList ManagerList. */
        public ManagerList: protoManage.IManager[];

        /**
         * Creates a new AnsManagerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsManagerList instance
         */
        public static create(properties?: protoManage.IAnsManagerList): protoManage.AnsManagerList;

        /**
         * Encodes the specified AnsManagerList message. Does not implicitly {@link protoManage.AnsManagerList.verify|verify} messages.
         * @param message AnsManagerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsManagerList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsManagerList message, length delimited. Does not implicitly {@link protoManage.AnsManagerList.verify|verify} messages.
         * @param message AnsManagerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsManagerList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsManagerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsManagerList;

        /**
         * Decodes an AnsManagerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsManagerList;

        /**
         * Verifies an AnsManagerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsManagerList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsManagerList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsManagerList;

        /**
         * Creates a plain object from an AnsManagerList message. Also converts values to other types if specified.
         * @param message AnsManagerList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsManagerList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsManagerList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeList. */
    interface IReqNodeList {

        /** ReqNodeList ID */
        ID?: (number[]|null);

        /** ReqNodeList Name */
        Name?: (string[]|null);

        /** ReqNodeList State */
        State?: (protoManage.State[]|null);

        /** ReqNodeList UpdateTime */
        UpdateTime?: (protoManage.ITime[]|null);

        /** ReqNodeList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeList. */
    class ReqNodeList implements IReqNodeList {

        /**
         * Constructs a new ReqNodeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeList);

        /** ReqNodeList ID. */
        public ID: number[];

        /** ReqNodeList Name. */
        public Name: string[];

        /** ReqNodeList State. */
        public State: protoManage.State[];

        /** ReqNodeList UpdateTime. */
        public UpdateTime: protoManage.ITime[];

        /** ReqNodeList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeList instance
         */
        public static create(properties?: protoManage.IReqNodeList): protoManage.ReqNodeList;

        /**
         * Encodes the specified ReqNodeList message. Does not implicitly {@link protoManage.ReqNodeList.verify|verify} messages.
         * @param message ReqNodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeList message, length delimited. Does not implicitly {@link protoManage.ReqNodeList.verify|verify} messages.
         * @param message ReqNodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeList;

        /**
         * Decodes a ReqNodeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeList;

        /**
         * Verifies a ReqNodeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeList;

        /**
         * Creates a plain object from a ReqNodeList message. Also converts values to other types if specified.
         * @param message ReqNodeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeList. */
    interface IAnsNodeList {

        /** AnsNodeList Length */
        Length?: (number|null);

        /** AnsNodeList NodeList */
        NodeList?: (protoManage.INode[]|null);
    }

    /** Represents an AnsNodeList. */
    class AnsNodeList implements IAnsNodeList {

        /**
         * Constructs a new AnsNodeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeList);

        /** AnsNodeList Length. */
        public Length: number;

        /** AnsNodeList NodeList. */
        public NodeList: protoManage.INode[];

        /**
         * Creates a new AnsNodeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeList instance
         */
        public static create(properties?: protoManage.IAnsNodeList): protoManage.AnsNodeList;

        /**
         * Encodes the specified AnsNodeList message. Does not implicitly {@link protoManage.AnsNodeList.verify|verify} messages.
         * @param message AnsNodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeList message, length delimited. Does not implicitly {@link protoManage.AnsNodeList.verify|verify} messages.
         * @param message AnsNodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeList;

        /**
         * Decodes an AnsNodeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeList;

        /**
         * Verifies an AnsNodeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeList;

        /**
         * Creates a plain object from an AnsNodeList message. Also converts values to other types if specified.
         * @param message AnsNodeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeFuncList. */
    interface IReqNodeFuncList {

        /** ReqNodeFuncList ID */
        ID?: (number[]|null);

        /** ReqNodeFuncList Name */
        Name?: (string[]|null);

        /** ReqNodeFuncList Level */
        Level?: (protoManage.Level[]|null);

        /** ReqNodeFuncList LevelMax */
        LevelMax?: (protoManage.Level|null);

        /** ReqNodeFuncList NodeID */
        NodeID?: (number[]|null);

        /** ReqNodeFuncList NodeName */
        NodeName?: (string[]|null);

        /** ReqNodeFuncList UpdateTime */
        UpdateTime?: (protoManage.ITime[]|null);

        /** ReqNodeFuncList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeFuncList. */
    class ReqNodeFuncList implements IReqNodeFuncList {

        /**
         * Constructs a new ReqNodeFuncList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeFuncList);

        /** ReqNodeFuncList ID. */
        public ID: number[];

        /** ReqNodeFuncList Name. */
        public Name: string[];

        /** ReqNodeFuncList Level. */
        public Level: protoManage.Level[];

        /** ReqNodeFuncList LevelMax. */
        public LevelMax: protoManage.Level;

        /** ReqNodeFuncList NodeID. */
        public NodeID: number[];

        /** ReqNodeFuncList NodeName. */
        public NodeName: string[];

        /** ReqNodeFuncList UpdateTime. */
        public UpdateTime: protoManage.ITime[];

        /** ReqNodeFuncList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeFuncList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeFuncList instance
         */
        public static create(properties?: protoManage.IReqNodeFuncList): protoManage.ReqNodeFuncList;

        /**
         * Encodes the specified ReqNodeFuncList message. Does not implicitly {@link protoManage.ReqNodeFuncList.verify|verify} messages.
         * @param message ReqNodeFuncList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeFuncList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeFuncList message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncList.verify|verify} messages.
         * @param message ReqNodeFuncList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeFuncList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeFuncList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeFuncList;

        /**
         * Decodes a ReqNodeFuncList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeFuncList;

        /**
         * Verifies a ReqNodeFuncList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeFuncList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeFuncList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeFuncList;

        /**
         * Creates a plain object from a ReqNodeFuncList message. Also converts values to other types if specified.
         * @param message ReqNodeFuncList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeFuncList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeFuncList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeFuncList. */
    interface IAnsNodeFuncList {

        /** AnsNodeFuncList Length */
        Length?: (number|null);

        /** AnsNodeFuncList NodeFuncList */
        NodeFuncList?: (protoManage.INodeFunc[]|null);

        /** AnsNodeFuncList NodeList */
        NodeList?: (protoManage.INode[]|null);
    }

    /** Represents an AnsNodeFuncList. */
    class AnsNodeFuncList implements IAnsNodeFuncList {

        /**
         * Constructs a new AnsNodeFuncList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeFuncList);

        /** AnsNodeFuncList Length. */
        public Length: number;

        /** AnsNodeFuncList NodeFuncList. */
        public NodeFuncList: protoManage.INodeFunc[];

        /** AnsNodeFuncList NodeList. */
        public NodeList: protoManage.INode[];

        /**
         * Creates a new AnsNodeFuncList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeFuncList instance
         */
        public static create(properties?: protoManage.IAnsNodeFuncList): protoManage.AnsNodeFuncList;

        /**
         * Encodes the specified AnsNodeFuncList message. Does not implicitly {@link protoManage.AnsNodeFuncList.verify|verify} messages.
         * @param message AnsNodeFuncList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeFuncList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeFuncList message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncList.verify|verify} messages.
         * @param message AnsNodeFuncList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeFuncList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeFuncList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeFuncList;

        /**
         * Decodes an AnsNodeFuncList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeFuncList;

        /**
         * Verifies an AnsNodeFuncList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeFuncList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeFuncList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeFuncList;

        /**
         * Creates a plain object from an AnsNodeFuncList message. Also converts values to other types if specified.
         * @param message AnsNodeFuncList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeFuncList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeFuncList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeReportList. */
    interface IReqNodeReportList {

        /** ReqNodeReportList ID */
        ID?: (number[]|null);

        /** ReqNodeReportList Name */
        Name?: (string[]|null);

        /** ReqNodeReportList Level */
        Level?: (protoManage.Level[]|null);

        /** ReqNodeReportList LevelMax */
        LevelMax?: (protoManage.Level|null);

        /** ReqNodeReportList NodeID */
        NodeID?: (number[]|null);

        /** ReqNodeReportList NodeName */
        NodeName?: (string[]|null);

        /** ReqNodeReportList UpdateTime */
        UpdateTime?: (protoManage.ITime[]|null);

        /** ReqNodeReportList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeReportList. */
    class ReqNodeReportList implements IReqNodeReportList {

        /**
         * Constructs a new ReqNodeReportList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeReportList);

        /** ReqNodeReportList ID. */
        public ID: number[];

        /** ReqNodeReportList Name. */
        public Name: string[];

        /** ReqNodeReportList Level. */
        public Level: protoManage.Level[];

        /** ReqNodeReportList LevelMax. */
        public LevelMax: protoManage.Level;

        /** ReqNodeReportList NodeID. */
        public NodeID: number[];

        /** ReqNodeReportList NodeName. */
        public NodeName: string[];

        /** ReqNodeReportList UpdateTime. */
        public UpdateTime: protoManage.ITime[];

        /** ReqNodeReportList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeReportList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeReportList instance
         */
        public static create(properties?: protoManage.IReqNodeReportList): protoManage.ReqNodeReportList;

        /**
         * Encodes the specified ReqNodeReportList message. Does not implicitly {@link protoManage.ReqNodeReportList.verify|verify} messages.
         * @param message ReqNodeReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeReportList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeReportList message, length delimited. Does not implicitly {@link protoManage.ReqNodeReportList.verify|verify} messages.
         * @param message ReqNodeReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeReportList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeReportList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeReportList;

        /**
         * Decodes a ReqNodeReportList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeReportList;

        /**
         * Verifies a ReqNodeReportList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeReportList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeReportList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeReportList;

        /**
         * Creates a plain object from a ReqNodeReportList message. Also converts values to other types if specified.
         * @param message ReqNodeReportList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeReportList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeReportList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeReportList. */
    interface IAnsNodeReportList {

        /** AnsNodeReportList Length */
        Length?: (number|null);

        /** AnsNodeReportList NodeReportList */
        NodeReportList?: (protoManage.INodeReport[]|null);

        /** AnsNodeReportList NodeList */
        NodeList?: (protoManage.INode[]|null);
    }

    /** Represents an AnsNodeReportList. */
    class AnsNodeReportList implements IAnsNodeReportList {

        /**
         * Constructs a new AnsNodeReportList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeReportList);

        /** AnsNodeReportList Length. */
        public Length: number;

        /** AnsNodeReportList NodeReportList. */
        public NodeReportList: protoManage.INodeReport[];

        /** AnsNodeReportList NodeList. */
        public NodeList: protoManage.INode[];

        /**
         * Creates a new AnsNodeReportList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeReportList instance
         */
        public static create(properties?: protoManage.IAnsNodeReportList): protoManage.AnsNodeReportList;

        /**
         * Encodes the specified AnsNodeReportList message. Does not implicitly {@link protoManage.AnsNodeReportList.verify|verify} messages.
         * @param message AnsNodeReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeReportList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeReportList message, length delimited. Does not implicitly {@link protoManage.AnsNodeReportList.verify|verify} messages.
         * @param message AnsNodeReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeReportList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeReportList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeReportList;

        /**
         * Decodes an AnsNodeReportList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeReportList;

        /**
         * Verifies an AnsNodeReportList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeReportList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeReportList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeReportList;

        /**
         * Creates a plain object from an AnsNodeReportList message. Also converts values to other types if specified.
         * @param message AnsNodeReportList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeReportList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeReportList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeFuncCall. */
    interface IReqNodeFuncCall {

        /** ReqNodeFuncCall NodeFuncCall */
        NodeFuncCall?: (protoManage.INodeFuncCall|null);
    }

    /** Represents a ReqNodeFuncCall. */
    class ReqNodeFuncCall implements IReqNodeFuncCall {

        /**
         * Constructs a new ReqNodeFuncCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeFuncCall);

        /** ReqNodeFuncCall NodeFuncCall. */
        public NodeFuncCall?: (protoManage.INodeFuncCall|null);

        /**
         * Creates a new ReqNodeFuncCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeFuncCall instance
         */
        public static create(properties?: protoManage.IReqNodeFuncCall): protoManage.ReqNodeFuncCall;

        /**
         * Encodes the specified ReqNodeFuncCall message. Does not implicitly {@link protoManage.ReqNodeFuncCall.verify|verify} messages.
         * @param message ReqNodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeFuncCall message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncCall.verify|verify} messages.
         * @param message ReqNodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeFuncCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeFuncCall;

        /**
         * Decodes a ReqNodeFuncCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeFuncCall;

        /**
         * Verifies a ReqNodeFuncCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeFuncCall
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeFuncCall;

        /**
         * Creates a plain object from a ReqNodeFuncCall message. Also converts values to other types if specified.
         * @param message ReqNodeFuncCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeFuncCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeFuncCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeFuncCall. */
    interface IAnsNodeFuncCall {

        /** AnsNodeFuncCall NodeFuncCall */
        NodeFuncCall?: (protoManage.INodeFuncCall|null);

        /** AnsNodeFuncCall Error */
        Error?: (string|null);
    }

    /** Represents an AnsNodeFuncCall. */
    class AnsNodeFuncCall implements IAnsNodeFuncCall {

        /**
         * Constructs a new AnsNodeFuncCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeFuncCall);

        /** AnsNodeFuncCall NodeFuncCall. */
        public NodeFuncCall?: (protoManage.INodeFuncCall|null);

        /** AnsNodeFuncCall Error. */
        public Error: string;

        /**
         * Creates a new AnsNodeFuncCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeFuncCall instance
         */
        public static create(properties?: protoManage.IAnsNodeFuncCall): protoManage.AnsNodeFuncCall;

        /**
         * Encodes the specified AnsNodeFuncCall message. Does not implicitly {@link protoManage.AnsNodeFuncCall.verify|verify} messages.
         * @param message AnsNodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeFuncCall message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncCall.verify|verify} messages.
         * @param message AnsNodeFuncCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeFuncCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeFuncCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeFuncCall;

        /**
         * Decodes an AnsNodeFuncCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeFuncCall;

        /**
         * Verifies an AnsNodeFuncCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeFuncCall
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeFuncCall;

        /**
         * Creates a plain object from an AnsNodeFuncCall message. Also converts values to other types if specified.
         * @param message AnsNodeFuncCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeFuncCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeFuncCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeFuncCallList. */
    interface IReqNodeFuncCallList {

        /** ReqNodeFuncCallList FuncID */
        FuncID?: (number|null);

        /** ReqNodeFuncCallList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeFuncCallList. */
    class ReqNodeFuncCallList implements IReqNodeFuncCallList {

        /**
         * Constructs a new ReqNodeFuncCallList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeFuncCallList);

        /** ReqNodeFuncCallList FuncID. */
        public FuncID: number;

        /** ReqNodeFuncCallList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeFuncCallList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeFuncCallList instance
         */
        public static create(properties?: protoManage.IReqNodeFuncCallList): protoManage.ReqNodeFuncCallList;

        /**
         * Encodes the specified ReqNodeFuncCallList message. Does not implicitly {@link protoManage.ReqNodeFuncCallList.verify|verify} messages.
         * @param message ReqNodeFuncCallList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeFuncCallList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeFuncCallList message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncCallList.verify|verify} messages.
         * @param message ReqNodeFuncCallList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeFuncCallList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeFuncCallList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeFuncCallList;

        /**
         * Decodes a ReqNodeFuncCallList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeFuncCallList;

        /**
         * Verifies a ReqNodeFuncCallList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeFuncCallList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeFuncCallList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeFuncCallList;

        /**
         * Creates a plain object from a ReqNodeFuncCallList message. Also converts values to other types if specified.
         * @param message ReqNodeFuncCallList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeFuncCallList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeFuncCallList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeFuncCallList. */
    interface IAnsNodeFuncCallList {

        /** AnsNodeFuncCallList NodeFuncCallList */
        NodeFuncCallList?: (protoManage.INodeFuncCall[]|null);
    }

    /** Represents an AnsNodeFuncCallList. */
    class AnsNodeFuncCallList implements IAnsNodeFuncCallList {

        /**
         * Constructs a new AnsNodeFuncCallList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeFuncCallList);

        /** AnsNodeFuncCallList NodeFuncCallList. */
        public NodeFuncCallList: protoManage.INodeFuncCall[];

        /**
         * Creates a new AnsNodeFuncCallList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeFuncCallList instance
         */
        public static create(properties?: protoManage.IAnsNodeFuncCallList): protoManage.AnsNodeFuncCallList;

        /**
         * Encodes the specified AnsNodeFuncCallList message. Does not implicitly {@link protoManage.AnsNodeFuncCallList.verify|verify} messages.
         * @param message AnsNodeFuncCallList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeFuncCallList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeFuncCallList message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncCallList.verify|verify} messages.
         * @param message AnsNodeFuncCallList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeFuncCallList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeFuncCallList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeFuncCallList;

        /**
         * Decodes an AnsNodeFuncCallList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeFuncCallList;

        /**
         * Verifies an AnsNodeFuncCallList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeFuncCallList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeFuncCallList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeFuncCallList;

        /**
         * Creates a plain object from an AnsNodeFuncCallList message. Also converts values to other types if specified.
         * @param message AnsNodeFuncCallList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeFuncCallList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeFuncCallList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeReportValList. */
    interface IReqNodeReportValList {

        /** ReqNodeReportValList ID */
        ID?: (number|null);

        /** ReqNodeReportValList ReportID */
        ReportID?: (number|null);

        /** ReqNodeReportValList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeReportValList. */
    class ReqNodeReportValList implements IReqNodeReportValList {

        /**
         * Constructs a new ReqNodeReportValList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeReportValList);

        /** ReqNodeReportValList ID. */
        public ID: number;

        /** ReqNodeReportValList ReportID. */
        public ReportID: number;

        /** ReqNodeReportValList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeReportValList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeReportValList instance
         */
        public static create(properties?: protoManage.IReqNodeReportValList): protoManage.ReqNodeReportValList;

        /**
         * Encodes the specified ReqNodeReportValList message. Does not implicitly {@link protoManage.ReqNodeReportValList.verify|verify} messages.
         * @param message ReqNodeReportValList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeReportValList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeReportValList message, length delimited. Does not implicitly {@link protoManage.ReqNodeReportValList.verify|verify} messages.
         * @param message ReqNodeReportValList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeReportValList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeReportValList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeReportValList;

        /**
         * Decodes a ReqNodeReportValList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeReportValList;

        /**
         * Verifies a ReqNodeReportValList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeReportValList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeReportValList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeReportValList;

        /**
         * Creates a plain object from a ReqNodeReportValList message. Also converts values to other types if specified.
         * @param message ReqNodeReportValList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeReportValList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeReportValList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeReportValList. */
    interface IAnsNodeReportValList {

        /** AnsNodeReportValList NodeReportValList */
        NodeReportValList?: (protoManage.INodeReportVal[]|null);
    }

    /** Represents an AnsNodeReportValList. */
    class AnsNodeReportValList implements IAnsNodeReportValList {

        /**
         * Constructs a new AnsNodeReportValList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeReportValList);

        /** AnsNodeReportValList NodeReportValList. */
        public NodeReportValList: protoManage.INodeReportVal[];

        /**
         * Creates a new AnsNodeReportValList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeReportValList instance
         */
        public static create(properties?: protoManage.IAnsNodeReportValList): protoManage.AnsNodeReportValList;

        /**
         * Encodes the specified AnsNodeReportValList message. Does not implicitly {@link protoManage.AnsNodeReportValList.verify|verify} messages.
         * @param message AnsNodeReportValList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeReportValList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeReportValList message, length delimited. Does not implicitly {@link protoManage.AnsNodeReportValList.verify|verify} messages.
         * @param message AnsNodeReportValList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeReportValList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeReportValList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeReportValList;

        /**
         * Decodes an AnsNodeReportValList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeReportValList;

        /**
         * Verifies an AnsNodeReportValList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeReportValList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeReportValList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeReportValList;

        /**
         * Creates a plain object from an AnsNodeReportValList message. Also converts values to other types if specified.
         * @param message AnsNodeReportValList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeReportValList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeReportValList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeNotifyList. */
    interface IReqNodeNotifyList {

        /** ReqNodeNotifyList Message */
        Message?: (string[]|null);

        /** ReqNodeNotifyList State */
        State?: (protoManage.State[]|null);

        /** ReqNodeNotifyList SenderName */
        SenderName?: (string[]|null);

        /** ReqNodeNotifyList SenderType */
        SenderType?: (protoManage.NotifySenderType[]|null);

        /** ReqNodeNotifyList SenderTime */
        SenderTime?: (protoManage.ITime[]|null);

        /** ReqNodeNotifyList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeNotifyList. */
    class ReqNodeNotifyList implements IReqNodeNotifyList {

        /**
         * Constructs a new ReqNodeNotifyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeNotifyList);

        /** ReqNodeNotifyList Message. */
        public Message: string[];

        /** ReqNodeNotifyList State. */
        public State: protoManage.State[];

        /** ReqNodeNotifyList SenderName. */
        public SenderName: string[];

        /** ReqNodeNotifyList SenderType. */
        public SenderType: protoManage.NotifySenderType[];

        /** ReqNodeNotifyList SenderTime. */
        public SenderTime: protoManage.ITime[];

        /** ReqNodeNotifyList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeNotifyList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeNotifyList instance
         */
        public static create(properties?: protoManage.IReqNodeNotifyList): protoManage.ReqNodeNotifyList;

        /**
         * Encodes the specified ReqNodeNotifyList message. Does not implicitly {@link protoManage.ReqNodeNotifyList.verify|verify} messages.
         * @param message ReqNodeNotifyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeNotifyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeNotifyList message, length delimited. Does not implicitly {@link protoManage.ReqNodeNotifyList.verify|verify} messages.
         * @param message ReqNodeNotifyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeNotifyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeNotifyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeNotifyList;

        /**
         * Decodes a ReqNodeNotifyList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeNotifyList;

        /**
         * Verifies a ReqNodeNotifyList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeNotifyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeNotifyList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeNotifyList;

        /**
         * Creates a plain object from a ReqNodeNotifyList message. Also converts values to other types if specified.
         * @param message ReqNodeNotifyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeNotifyList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeNotifyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeNotifyList. */
    interface IAnsNodeNotifyList {

        /** AnsNodeNotifyList Length */
        Length?: (number|null);

        /** AnsNodeNotifyList NodeNotifyList */
        NodeNotifyList?: (protoManage.INodeNotify[]|null);
    }

    /** Represents an AnsNodeNotifyList. */
    class AnsNodeNotifyList implements IAnsNodeNotifyList {

        /**
         * Constructs a new AnsNodeNotifyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeNotifyList);

        /** AnsNodeNotifyList Length. */
        public Length: number;

        /** AnsNodeNotifyList NodeNotifyList. */
        public NodeNotifyList: protoManage.INodeNotify[];

        /**
         * Creates a new AnsNodeNotifyList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeNotifyList instance
         */
        public static create(properties?: protoManage.IAnsNodeNotifyList): protoManage.AnsNodeNotifyList;

        /**
         * Encodes the specified AnsNodeNotifyList message. Does not implicitly {@link protoManage.AnsNodeNotifyList.verify|verify} messages.
         * @param message AnsNodeNotifyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeNotifyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeNotifyList message, length delimited. Does not implicitly {@link protoManage.AnsNodeNotifyList.verify|verify} messages.
         * @param message AnsNodeNotifyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeNotifyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeNotifyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeNotifyList;

        /**
         * Decodes an AnsNodeNotifyList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeNotifyList;

        /**
         * Verifies an AnsNodeNotifyList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeNotifyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeNotifyList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeNotifyList;

        /**
         * Creates a plain object from an AnsNodeNotifyList message. Also converts values to other types if specified.
         * @param message AnsNodeNotifyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeNotifyList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeNotifyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeResourceList. */
    interface IReqNodeResourceList {

        /** ReqNodeResourceList Name */
        Name?: (string[]|null);

        /** ReqNodeResourceList State */
        State?: (protoManage.State[]|null);

        /** ReqNodeResourceList UploaderName */
        UploaderName?: (string[]|null);

        /** ReqNodeResourceList UploaderType */
        UploaderType?: (protoManage.NotifySenderType[]|null);

        /** ReqNodeResourceList InvalidTime */
        InvalidTime?: (protoManage.ITime[]|null);

        /** ReqNodeResourceList UploadTime */
        UploadTime?: (protoManage.ITime[]|null);

        /** ReqNodeResourceList Page */
        Page?: (protoManage.IPage|null);
    }

    /** Represents a ReqNodeResourceList. */
    class ReqNodeResourceList implements IReqNodeResourceList {

        /**
         * Constructs a new ReqNodeResourceList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeResourceList);

        /** ReqNodeResourceList Name. */
        public Name: string[];

        /** ReqNodeResourceList State. */
        public State: protoManage.State[];

        /** ReqNodeResourceList UploaderName. */
        public UploaderName: string[];

        /** ReqNodeResourceList UploaderType. */
        public UploaderType: protoManage.NotifySenderType[];

        /** ReqNodeResourceList InvalidTime. */
        public InvalidTime: protoManage.ITime[];

        /** ReqNodeResourceList UploadTime. */
        public UploadTime: protoManage.ITime[];

        /** ReqNodeResourceList Page. */
        public Page?: (protoManage.IPage|null);

        /**
         * Creates a new ReqNodeResourceList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeResourceList instance
         */
        public static create(properties?: protoManage.IReqNodeResourceList): protoManage.ReqNodeResourceList;

        /**
         * Encodes the specified ReqNodeResourceList message. Does not implicitly {@link protoManage.ReqNodeResourceList.verify|verify} messages.
         * @param message ReqNodeResourceList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeResourceList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeResourceList message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceList.verify|verify} messages.
         * @param message ReqNodeResourceList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeResourceList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeResourceList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeResourceList;

        /**
         * Decodes a ReqNodeResourceList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeResourceList;

        /**
         * Verifies a ReqNodeResourceList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeResourceList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeResourceList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeResourceList;

        /**
         * Creates a plain object from a ReqNodeResourceList message. Also converts values to other types if specified.
         * @param message ReqNodeResourceList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeResourceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeResourceList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeResourceList. */
    interface IAnsNodeResourceList {

        /** AnsNodeResourceList Length */
        Length?: (number|null);

        /** AnsNodeResourceList NodeResourceList */
        NodeResourceList?: (protoManage.INodeResource[]|null);
    }

    /** Represents an AnsNodeResourceList. */
    class AnsNodeResourceList implements IAnsNodeResourceList {

        /**
         * Constructs a new AnsNodeResourceList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeResourceList);

        /** AnsNodeResourceList Length. */
        public Length: number;

        /** AnsNodeResourceList NodeResourceList. */
        public NodeResourceList: protoManage.INodeResource[];

        /**
         * Creates a new AnsNodeResourceList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeResourceList instance
         */
        public static create(properties?: protoManage.IAnsNodeResourceList): protoManage.AnsNodeResourceList;

        /**
         * Encodes the specified AnsNodeResourceList message. Does not implicitly {@link protoManage.AnsNodeResourceList.verify|verify} messages.
         * @param message AnsNodeResourceList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeResourceList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeResourceList message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceList.verify|verify} messages.
         * @param message AnsNodeResourceList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeResourceList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeResourceList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeResourceList;

        /**
         * Decodes an AnsNodeResourceList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeResourceList;

        /**
         * Verifies an AnsNodeResourceList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeResourceList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeResourceList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeResourceList;

        /**
         * Creates a plain object from an AnsNodeResourceList message. Also converts values to other types if specified.
         * @param message AnsNodeResourceList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeResourceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeResourceList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeResourceUpload. */
    interface IReqNodeResourceUpload {

        /** ReqNodeResourceUpload Data */
        Data?: (Uint8Array|null);
    }

    /** Represents a ReqNodeResourceUpload. */
    class ReqNodeResourceUpload implements IReqNodeResourceUpload {

        /**
         * Constructs a new ReqNodeResourceUpload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeResourceUpload);

        /** ReqNodeResourceUpload Data. */
        public Data: Uint8Array;

        /**
         * Creates a new ReqNodeResourceUpload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeResourceUpload instance
         */
        public static create(properties?: protoManage.IReqNodeResourceUpload): protoManage.ReqNodeResourceUpload;

        /**
         * Encodes the specified ReqNodeResourceUpload message. Does not implicitly {@link protoManage.ReqNodeResourceUpload.verify|verify} messages.
         * @param message ReqNodeResourceUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeResourceUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeResourceUpload message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceUpload.verify|verify} messages.
         * @param message ReqNodeResourceUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeResourceUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeResourceUpload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeResourceUpload;

        /**
         * Decodes a ReqNodeResourceUpload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeResourceUpload;

        /**
         * Verifies a ReqNodeResourceUpload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeResourceUpload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeResourceUpload
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeResourceUpload;

        /**
         * Creates a plain object from a ReqNodeResourceUpload message. Also converts values to other types if specified.
         * @param message ReqNodeResourceUpload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeResourceUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeResourceUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeResourceUpload. */
    interface IAnsNodeResourceUpload {

        /** AnsNodeResourceUpload NodeResource */
        NodeResource?: (protoManage.INodeResource|null);
    }

    /** Represents an AnsNodeResourceUpload. */
    class AnsNodeResourceUpload implements IAnsNodeResourceUpload {

        /**
         * Constructs a new AnsNodeResourceUpload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeResourceUpload);

        /** AnsNodeResourceUpload NodeResource. */
        public NodeResource?: (protoManage.INodeResource|null);

        /**
         * Creates a new AnsNodeResourceUpload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeResourceUpload instance
         */
        public static create(properties?: protoManage.IAnsNodeResourceUpload): protoManage.AnsNodeResourceUpload;

        /**
         * Encodes the specified AnsNodeResourceUpload message. Does not implicitly {@link protoManage.AnsNodeResourceUpload.verify|verify} messages.
         * @param message AnsNodeResourceUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeResourceUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeResourceUpload message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceUpload.verify|verify} messages.
         * @param message AnsNodeResourceUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeResourceUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeResourceUpload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeResourceUpload;

        /**
         * Decodes an AnsNodeResourceUpload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeResourceUpload;

        /**
         * Verifies an AnsNodeResourceUpload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeResourceUpload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeResourceUpload
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeResourceUpload;

        /**
         * Creates a plain object from an AnsNodeResourceUpload message. Also converts values to other types if specified.
         * @param message AnsNodeResourceUpload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeResourceUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeResourceUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeResourceDownload. */
    interface IReqNodeResourceDownload {

        /** ReqNodeResourceDownload NodeResource */
        NodeResource?: (protoManage.INodeResource|null);
    }

    /** Represents a ReqNodeResourceDownload. */
    class ReqNodeResourceDownload implements IReqNodeResourceDownload {

        /**
         * Constructs a new ReqNodeResourceDownload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeResourceDownload);

        /** ReqNodeResourceDownload NodeResource. */
        public NodeResource?: (protoManage.INodeResource|null);

        /**
         * Creates a new ReqNodeResourceDownload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeResourceDownload instance
         */
        public static create(properties?: protoManage.IReqNodeResourceDownload): protoManage.ReqNodeResourceDownload;

        /**
         * Encodes the specified ReqNodeResourceDownload message. Does not implicitly {@link protoManage.ReqNodeResourceDownload.verify|verify} messages.
         * @param message ReqNodeResourceDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeResourceDownload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeResourceDownload message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceDownload.verify|verify} messages.
         * @param message ReqNodeResourceDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeResourceDownload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeResourceDownload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeResourceDownload;

        /**
         * Decodes a ReqNodeResourceDownload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeResourceDownload;

        /**
         * Verifies a ReqNodeResourceDownload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeResourceDownload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeResourceDownload
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeResourceDownload;

        /**
         * Creates a plain object from a ReqNodeResourceDownload message. Also converts values to other types if specified.
         * @param message ReqNodeResourceDownload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeResourceDownload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeResourceDownload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeResourceDownload. */
    interface IAnsNodeResourceDownload {

        /** AnsNodeResourceDownload Data */
        Data?: (Uint8Array|null);
    }

    /** Represents an AnsNodeResourceDownload. */
    class AnsNodeResourceDownload implements IAnsNodeResourceDownload {

        /**
         * Constructs a new AnsNodeResourceDownload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeResourceDownload);

        /** AnsNodeResourceDownload Data. */
        public Data: Uint8Array;

        /**
         * Creates a new AnsNodeResourceDownload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeResourceDownload instance
         */
        public static create(properties?: protoManage.IAnsNodeResourceDownload): protoManage.AnsNodeResourceDownload;

        /**
         * Encodes the specified AnsNodeResourceDownload message. Does not implicitly {@link protoManage.AnsNodeResourceDownload.verify|verify} messages.
         * @param message AnsNodeResourceDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeResourceDownload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeResourceDownload message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceDownload.verify|verify} messages.
         * @param message AnsNodeResourceDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeResourceDownload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeResourceDownload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeResourceDownload;

        /**
         * Decodes an AnsNodeResourceDownload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeResourceDownload;

        /**
         * Verifies an AnsNodeResourceDownload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeResourceDownload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeResourceDownload
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeResourceDownload;

        /**
         * Creates a plain object from an AnsNodeResourceDownload message. Also converts values to other types if specified.
         * @param message AnsNodeResourceDownload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeResourceDownload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeResourceDownload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeTest. */
    interface IReqNodeTest {

        /** ReqNodeTest ID */
        ID?: (number|null);

        /** ReqNodeTest Type */
        Type?: (number|null);

        /** ReqNodeTest Message */
        Message?: (string|null);

        /** ReqNodeTest State */
        State?: (protoManage.State|null);
    }

    /** Represents a ReqNodeTest. */
    class ReqNodeTest implements IReqNodeTest {

        /**
         * Constructs a new ReqNodeTest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeTest);

        /** ReqNodeTest ID. */
        public ID: number;

        /** ReqNodeTest Type. */
        public Type: number;

        /** ReqNodeTest Message. */
        public Message: string;

        /** ReqNodeTest State. */
        public State: protoManage.State;

        /**
         * Creates a new ReqNodeTest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeTest instance
         */
        public static create(properties?: protoManage.IReqNodeTest): protoManage.ReqNodeTest;

        /**
         * Encodes the specified ReqNodeTest message. Does not implicitly {@link protoManage.ReqNodeTest.verify|verify} messages.
         * @param message ReqNodeTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeTest message, length delimited. Does not implicitly {@link protoManage.ReqNodeTest.verify|verify} messages.
         * @param message ReqNodeTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeTest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeTest;

        /**
         * Decodes a ReqNodeTest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeTest;

        /**
         * Verifies a ReqNodeTest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeTest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeTest
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeTest;

        /**
         * Creates a plain object from a ReqNodeTest message. Also converts values to other types if specified.
         * @param message ReqNodeTest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeTest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeTest. */
    interface IAnsNodeTest {
    }

    /** Represents an AnsNodeTest. */
    class AnsNodeTest implements IAnsNodeTest {

        /**
         * Constructs a new AnsNodeTest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeTest);

        /**
         * Creates a new AnsNodeTest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeTest instance
         */
        public static create(properties?: protoManage.IAnsNodeTest): protoManage.AnsNodeTest;

        /**
         * Encodes the specified AnsNodeTest message. Does not implicitly {@link protoManage.AnsNodeTest.verify|verify} messages.
         * @param message AnsNodeTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeTest message, length delimited. Does not implicitly {@link protoManage.AnsNodeTest.verify|verify} messages.
         * @param message AnsNodeTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeTest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeTest;

        /**
         * Decodes an AnsNodeTest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeTest;

        /**
         * Verifies an AnsNodeTest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeTest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeTest
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeTest;

        /**
         * Creates a plain object from an AnsNodeTest message. Also converts values to other types if specified.
         * @param message AnsNodeTest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeTest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
