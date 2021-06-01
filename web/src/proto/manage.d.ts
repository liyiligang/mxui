import * as $protobuf from "protobufjs";
/** Namespace protoManage. */
export namespace protoManage {

    /** Order enum. */
    enum Order {
        Unknow = 0,
        TopLinkFind = 1,
        TopLinkFindByID = 2,
        TopLinkAdd = 3,
        TopLinkDel = 4,
        TopLinkUpdate = 5,
        NodeTest = 6,
        ManagerLogin = 101,
        ManagerFind = 102,
        ManagerFindByID = 103,
        ManagerUpdateSetting = 104,
        NodeGroupAdd = 201,
        NodeGroupDel = 202,
        NodeGroupFind = 203,
        NodeGroupFindByID = 204,
        NodeTypeAdd = 301,
        NodeTypeDel = 302,
        NodeTypeFind = 303,
        NodeTypeFindByID = 304,
        NodeAdd = 401,
        NodeDel = 402,
        NodeUpdateState = 403,
        NodeFind = 404,
        NodeFindByID = 405,
        NodeLinkAdd = 501,
        NodeLinkDel = 502,
        NodeLinkDelAllWithNodeID = 503,
        NodeLinkUpdateState = 504,
        NodeLinkFind = 505,
        NodeLinkFindByID = 506,
        NodeFuncAdd = 601,
        NodeFuncDel = 602,
        NodeFuncDelAllWithNodeID = 603,
        NodeFuncUpdateDesc = 604,
        NodeFuncUpdatePara = 605,
        NodeFuncFind = 606,
        NodeFuncFindByID = 607,
        NodeFuncCallReq = 608,
        NodeFuncCallAns = 609,
        NodeFuncCallFind = 611,
        NodeFuncCallFindByID = 610,
        NodeReportAdd = 701,
        NodeReportDel = 702,
        NodeReportDelAllWithNodeID = 703,
        NodeReportUpdateVal = 704,
        NodeReportFind = 705,
        NodeReportFindByID = 706,
        NodeReportValFind = 707,
        NodeNotifyAdd = 801,
        NodeNotifyFind = 802
    }

    /** State enum. */
    enum State {
        StateNot = 0,
        StateNormal = 1,
        StateWarn = 2,
        StateError = 3,
        StateUnknow = 4
    }

    /** NotifySenderType enum. */
    enum NotifySenderType {
        NotifySenderTypeUnknow = 0,
        NotifySenderTypeUser = 1,
        NotifySenderTypeNode = 2
    }

    /** HttpError enum. */
    enum HttpError {
        HttpErrorNull = 0,
        HttpErrorMarshal = 601,
        HttpErrorUnmarshal = 602,
        HttpErrorRequest = 603,
        HttpErrorAuthInvalid = 604
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

    /** Properties of a StateCount. */
    interface IStateCount {

        /** StateCount ID */
        ID?: (number|null);

        /** StateCount NotCount */
        NotCount?: (number|null);

        /** StateCount NormalCount */
        NormalCount?: (number|null);

        /** StateCount WarnCount */
        WarnCount?: (number|null);

        /** StateCount ErrorCount */
        ErrorCount?: (number|null);

        /** StateCount UnknowCount */
        UnknowCount?: (number|null);
    }

    /** Represents a StateCount. */
    class StateCount implements IStateCount {

        /**
         * Constructs a new StateCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IStateCount);

        /** StateCount ID. */
        public ID: number;

        /** StateCount NotCount. */
        public NotCount: number;

        /** StateCount NormalCount. */
        public NormalCount: number;

        /** StateCount WarnCount. */
        public WarnCount: number;

        /** StateCount ErrorCount. */
        public ErrorCount: number;

        /** StateCount UnknowCount. */
        public UnknowCount: number;

        /**
         * Creates a new StateCount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCount instance
         */
        public static create(properties?: protoManage.IStateCount): protoManage.StateCount;

        /**
         * Encodes the specified StateCount message. Does not implicitly {@link protoManage.StateCount.verify|verify} messages.
         * @param message StateCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IStateCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCount message, length delimited. Does not implicitly {@link protoManage.StateCount.verify|verify} messages.
         * @param message StateCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IStateCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.StateCount;

        /**
         * Decodes a StateCount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.StateCount;

        /**
         * Verifies a StateCount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateCount
         */
        public static fromObject(object: { [k: string]: any }): protoManage.StateCount;

        /**
         * Creates a plain object from a StateCount message. Also converts values to other types if specified.
         * @param message StateCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.StateCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Filter. */
    interface IFilter {

        /** Filter ID */
        ID?: (number|null);

        /** Filter GroupID */
        GroupID?: (number|null);

        /** Filter TypeID */
        TypeID?: (number|null);

        /** Filter NodeID */
        NodeID?: (number|null);

        /** Filter SourceID */
        SourceID?: (number|null);

        /** Filter TargetID */
        TargetID?: (number|null);

        /** Filter FuncID */
        FuncID?: (number|null);

        /** Filter ReportID */
        ReportID?: (number|null);

        /** Filter Name */
        Name?: (string|null);

        /** Filter Flag */
        Flag?: (string|null);

        /** Filter Value */
        Value?: (string|null);

        /** Filter State */
        State?: (protoManage.State|null);

        /** Filter PageSize */
        PageSize?: (number|null);

        /** Filter PageNum */
        PageNum?: (number|null);

        /** Filter SenderName */
        SenderName?: (string|null);

        /** Filter SenderType */
        SenderType?: (protoManage.NotifySenderType|null);

        /** Filter SenderBeginTime */
        SenderBeginTime?: (number|null);

        /** Filter SenderEndTime */
        SenderEndTime?: (number|null);

        /** Filter Message */
        Message?: (string|null);
    }

    /** Represents a Filter. */
    class Filter implements IFilter {

        /**
         * Constructs a new Filter.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IFilter);

        /** Filter ID. */
        public ID: number;

        /** Filter GroupID. */
        public GroupID: number;

        /** Filter TypeID. */
        public TypeID: number;

        /** Filter NodeID. */
        public NodeID: number;

        /** Filter SourceID. */
        public SourceID: number;

        /** Filter TargetID. */
        public TargetID: number;

        /** Filter FuncID. */
        public FuncID: number;

        /** Filter ReportID. */
        public ReportID: number;

        /** Filter Name. */
        public Name: string;

        /** Filter Flag. */
        public Flag: string;

        /** Filter Value. */
        public Value: string;

        /** Filter State. */
        public State: protoManage.State;

        /** Filter PageSize. */
        public PageSize: number;

        /** Filter PageNum. */
        public PageNum: number;

        /** Filter SenderName. */
        public SenderName: string;

        /** Filter SenderType. */
        public SenderType: protoManage.NotifySenderType;

        /** Filter SenderBeginTime. */
        public SenderBeginTime: number;

        /** Filter SenderEndTime. */
        public SenderEndTime: number;

        /** Filter Message. */
        public Message: string;

        /**
         * Creates a new Filter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Filter instance
         */
        public static create(properties?: protoManage.IFilter): protoManage.Filter;

        /**
         * Encodes the specified Filter message. Does not implicitly {@link protoManage.Filter.verify|verify} messages.
         * @param message Filter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Filter message, length delimited. Does not implicitly {@link protoManage.Filter.verify|verify} messages.
         * @param message Filter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Filter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.Filter;

        /**
         * Decodes a Filter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.Filter;

        /**
         * Verifies a Filter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Filter
         */
        public static fromObject(object: { [k: string]: any }): protoManage.Filter;

        /**
         * Creates a plain object from a Filter message. Also converts values to other types if specified.
         * @param message Filter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Filter to JSON.
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
        Level?: (number|null);

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
        public Level: number;

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

    /** Properties of a NodeGroup. */
    interface INodeGroup {

        /** NodeGroup Base */
        Base?: (protoManage.IBase|null);

        /** NodeGroup Name */
        Name?: (string|null);
    }

    /** Represents a NodeGroup. */
    class NodeGroup implements INodeGroup {

        /**
         * Constructs a new NodeGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeGroup);

        /** NodeGroup Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeGroup Name. */
        public Name: string;

        /**
         * Creates a new NodeGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeGroup instance
         */
        public static create(properties?: protoManage.INodeGroup): protoManage.NodeGroup;

        /**
         * Encodes the specified NodeGroup message. Does not implicitly {@link protoManage.NodeGroup.verify|verify} messages.
         * @param message NodeGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeGroup message, length delimited. Does not implicitly {@link protoManage.NodeGroup.verify|verify} messages.
         * @param message NodeGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeGroup;

        /**
         * Decodes a NodeGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeGroup;

        /**
         * Verifies a NodeGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeGroup
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeGroup;

        /**
         * Creates a plain object from a NodeGroup message. Also converts values to other types if specified.
         * @param message NodeGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeType. */
    interface INodeType {

        /** NodeType Base */
        Base?: (protoManage.IBase|null);

        /** NodeType Name */
        Name?: (string|null);
    }

    /** Represents a NodeType. */
    class NodeType implements INodeType {

        /**
         * Constructs a new NodeType.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeType);

        /** NodeType Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeType Name. */
        public Name: string;

        /**
         * Creates a new NodeType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeType instance
         */
        public static create(properties?: protoManage.INodeType): protoManage.NodeType;

        /**
         * Encodes the specified NodeType message. Does not implicitly {@link protoManage.NodeType.verify|verify} messages.
         * @param message NodeType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeType message, length delimited. Does not implicitly {@link protoManage.NodeType.verify|verify} messages.
         * @param message NodeType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeType;

        /**
         * Decodes a NodeType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeType;

        /**
         * Verifies a NodeType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeType
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeType;

        /**
         * Creates a plain object from a NodeType message. Also converts values to other types if specified.
         * @param message NodeType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Node. */
    interface INode {

        /** Node Base */
        Base?: (protoManage.IBase|null);

        /** Node GroupID */
        GroupID?: (number|null);

        /** Node TypeID */
        TypeID?: (number|null);

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

        /** Node GroupID. */
        public GroupID: number;

        /** Node TypeID. */
        public TypeID: number;

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

    /** Properties of a NodeLink. */
    interface INodeLink {

        /** NodeLink Base */
        Base?: (protoManage.IBase|null);

        /** NodeLink SourceID */
        SourceID?: (number|null);

        /** NodeLink TargetID */
        TargetID?: (number|null);

        /** NodeLink State */
        State?: (protoManage.State|null);
    }

    /** Represents a NodeLink. */
    class NodeLink implements INodeLink {

        /**
         * Constructs a new NodeLink.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.INodeLink);

        /** NodeLink Base. */
        public Base?: (protoManage.IBase|null);

        /** NodeLink SourceID. */
        public SourceID: number;

        /** NodeLink TargetID. */
        public TargetID: number;

        /** NodeLink State. */
        public State: protoManage.State;

        /**
         * Creates a new NodeLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeLink instance
         */
        public static create(properties?: protoManage.INodeLink): protoManage.NodeLink;

        /**
         * Encodes the specified NodeLink message. Does not implicitly {@link protoManage.NodeLink.verify|verify} messages.
         * @param message NodeLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.INodeLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeLink message, length delimited. Does not implicitly {@link protoManage.NodeLink.verify|verify} messages.
         * @param message NodeLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.INodeLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeLink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.NodeLink;

        /**
         * Decodes a NodeLink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.NodeLink;

        /**
         * Verifies a NodeLink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeLink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeLink
         */
        public static fromObject(object: { [k: string]: any }): protoManage.NodeLink;

        /**
         * Creates a plain object from a NodeLink message. Also converts values to other types if specified.
         * @param message NodeLink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.NodeLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeLink to JSON.
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

        /** NodeReport Flag */
        Flag?: (string|null);

        /** NodeReport Name */
        Name?: (string|null);

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

        /** NodeReport Flag. */
        public Flag: string;

        /** NodeReport Name. */
        public Name: string;

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
        Value?: (number|null);

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
        public Value: number;

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

        /** NodeNotify SenderType */
        SenderType?: (protoManage.NotifySenderType|null);

        /** NodeNotify Message */
        Message?: (string|null);

        /** NodeNotify State */
        State?: (protoManage.State|null);
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

        /** NodeNotify SenderType. */
        public SenderType: protoManage.NotifySenderType;

        /** NodeNotify Message. */
        public Message: string;

        /** NodeNotify State. */
        public State: protoManage.State;

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

    /** Properties of a ReqNodeLogin. */
    interface IReqNodeLogin {

        /** ReqNodeLogin NodeGroup */
        NodeGroup?: (protoManage.INodeGroup|null);

        /** ReqNodeLogin NodeType */
        NodeType?: (protoManage.INodeType|null);

        /** ReqNodeLogin Node */
        Node?: (protoManage.INode|null);
    }

    /** Represents a ReqNodeLogin. */
    class ReqNodeLogin implements IReqNodeLogin {

        /**
         * Constructs a new ReqNodeLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeLogin);

        /** ReqNodeLogin NodeGroup. */
        public NodeGroup?: (protoManage.INodeGroup|null);

        /** ReqNodeLogin NodeType. */
        public NodeType?: (protoManage.INodeType|null);

        /** ReqNodeLogin Node. */
        public Node?: (protoManage.INode|null);

        /**
         * Creates a new ReqNodeLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeLogin instance
         */
        public static create(properties?: protoManage.IReqNodeLogin): protoManage.ReqNodeLogin;

        /**
         * Encodes the specified ReqNodeLogin message. Does not implicitly {@link protoManage.ReqNodeLogin.verify|verify} messages.
         * @param message ReqNodeLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeLogin message, length delimited. Does not implicitly {@link protoManage.ReqNodeLogin.verify|verify} messages.
         * @param message ReqNodeLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeLogin;

        /**
         * Decodes a ReqNodeLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeLogin;

        /**
         * Verifies a ReqNodeLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeLogin
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeLogin;

        /**
         * Creates a plain object from a ReqNodeLogin message. Also converts values to other types if specified.
         * @param message ReqNodeLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeOnline. */
    interface IReqNodeOnline {

        /** ReqNodeOnline Node */
        Node?: (protoManage.INode|null);

        /** ReqNodeOnline NodeLinkList */
        NodeLinkList?: (protoManage.INodeLink[]|null);

        /** ReqNodeOnline NodeFuncList */
        NodeFuncList?: (protoManage.INodeFunc[]|null);

        /** ReqNodeOnline NodeReportList */
        NodeReportList?: (protoManage.INodeReport[]|null);
    }

    /** Represents a ReqNodeOnline. */
    class ReqNodeOnline implements IReqNodeOnline {

        /**
         * Constructs a new ReqNodeOnline.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeOnline);

        /** ReqNodeOnline Node. */
        public Node?: (protoManage.INode|null);

        /** ReqNodeOnline NodeLinkList. */
        public NodeLinkList: protoManage.INodeLink[];

        /** ReqNodeOnline NodeFuncList. */
        public NodeFuncList: protoManage.INodeFunc[];

        /** ReqNodeOnline NodeReportList. */
        public NodeReportList: protoManage.INodeReport[];

        /**
         * Creates a new ReqNodeOnline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeOnline instance
         */
        public static create(properties?: protoManage.IReqNodeOnline): protoManage.ReqNodeOnline;

        /**
         * Encodes the specified ReqNodeOnline message. Does not implicitly {@link protoManage.ReqNodeOnline.verify|verify} messages.
         * @param message ReqNodeOnline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeOnline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeOnline message, length delimited. Does not implicitly {@link protoManage.ReqNodeOnline.verify|verify} messages.
         * @param message ReqNodeOnline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeOnline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeOnline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeOnline;

        /**
         * Decodes a ReqNodeOnline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeOnline;

        /**
         * Verifies a ReqNodeOnline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeOnline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeOnline
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeOnline;

        /**
         * Creates a plain object from a ReqNodeOnline message. Also converts values to other types if specified.
         * @param message ReqNodeOnline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeOnline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeOnline to JSON.
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

    /** Properties of a ReqNodeGroupList. */
    interface IReqNodeGroupList {

        /** ReqNodeGroupList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeGroupList. */
    class ReqNodeGroupList implements IReqNodeGroupList {

        /**
         * Constructs a new ReqNodeGroupList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeGroupList);

        /** ReqNodeGroupList filter. */
        public filter?: (protoManage.IFilter|null);

        /**
         * Creates a new ReqNodeGroupList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeGroupList instance
         */
        public static create(properties?: protoManage.IReqNodeGroupList): protoManage.ReqNodeGroupList;

        /**
         * Encodes the specified ReqNodeGroupList message. Does not implicitly {@link protoManage.ReqNodeGroupList.verify|verify} messages.
         * @param message ReqNodeGroupList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeGroupList message, length delimited. Does not implicitly {@link protoManage.ReqNodeGroupList.verify|verify} messages.
         * @param message ReqNodeGroupList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeGroupList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeGroupList;

        /**
         * Decodes a ReqNodeGroupList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeGroupList;

        /**
         * Verifies a ReqNodeGroupList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeGroupList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeGroupList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeGroupList;

        /**
         * Creates a plain object from a ReqNodeGroupList message. Also converts values to other types if specified.
         * @param message ReqNodeGroupList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeGroupList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeGroupList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeGroupList. */
    interface IAnsNodeGroupList {

        /** AnsNodeGroupList Length */
        Length?: (number|null);

        /** AnsNodeGroupList NodeGroupList */
        NodeGroupList?: (protoManage.INodeGroup[]|null);

        /** AnsNodeGroupList NodeStateCountList */
        NodeStateCountList?: (protoManage.IStateCount[]|null);
    }

    /** Represents an AnsNodeGroupList. */
    class AnsNodeGroupList implements IAnsNodeGroupList {

        /**
         * Constructs a new AnsNodeGroupList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeGroupList);

        /** AnsNodeGroupList Length. */
        public Length: number;

        /** AnsNodeGroupList NodeGroupList. */
        public NodeGroupList: protoManage.INodeGroup[];

        /** AnsNodeGroupList NodeStateCountList. */
        public NodeStateCountList: protoManage.IStateCount[];

        /**
         * Creates a new AnsNodeGroupList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeGroupList instance
         */
        public static create(properties?: protoManage.IAnsNodeGroupList): protoManage.AnsNodeGroupList;

        /**
         * Encodes the specified AnsNodeGroupList message. Does not implicitly {@link protoManage.AnsNodeGroupList.verify|verify} messages.
         * @param message AnsNodeGroupList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeGroupList message, length delimited. Does not implicitly {@link protoManage.AnsNodeGroupList.verify|verify} messages.
         * @param message AnsNodeGroupList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeGroupList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeGroupList;

        /**
         * Decodes an AnsNodeGroupList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeGroupList;

        /**
         * Verifies an AnsNodeGroupList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeGroupList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeGroupList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeGroupList;

        /**
         * Creates a plain object from an AnsNodeGroupList message. Also converts values to other types if specified.
         * @param message AnsNodeGroupList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeGroupList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeGroupList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeTypeList. */
    interface IReqNodeTypeList {

        /** ReqNodeTypeList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeTypeList. */
    class ReqNodeTypeList implements IReqNodeTypeList {

        /**
         * Constructs a new ReqNodeTypeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeTypeList);

        /** ReqNodeTypeList filter. */
        public filter?: (protoManage.IFilter|null);

        /**
         * Creates a new ReqNodeTypeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeTypeList instance
         */
        public static create(properties?: protoManage.IReqNodeTypeList): protoManage.ReqNodeTypeList;

        /**
         * Encodes the specified ReqNodeTypeList message. Does not implicitly {@link protoManage.ReqNodeTypeList.verify|verify} messages.
         * @param message ReqNodeTypeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeTypeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeTypeList message, length delimited. Does not implicitly {@link protoManage.ReqNodeTypeList.verify|verify} messages.
         * @param message ReqNodeTypeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeTypeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeTypeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeTypeList;

        /**
         * Decodes a ReqNodeTypeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeTypeList;

        /**
         * Verifies a ReqNodeTypeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeTypeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeTypeList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeTypeList;

        /**
         * Creates a plain object from a ReqNodeTypeList message. Also converts values to other types if specified.
         * @param message ReqNodeTypeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeTypeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeTypeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeTypeList. */
    interface IAnsNodeTypeList {

        /** AnsNodeTypeList Length */
        Length?: (number|null);

        /** AnsNodeTypeList NodeTypeList */
        NodeTypeList?: (protoManage.INodeType[]|null);

        /** AnsNodeTypeList NodeStateCountList */
        NodeStateCountList?: (protoManage.IStateCount[]|null);
    }

    /** Represents an AnsNodeTypeList. */
    class AnsNodeTypeList implements IAnsNodeTypeList {

        /**
         * Constructs a new AnsNodeTypeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeTypeList);

        /** AnsNodeTypeList Length. */
        public Length: number;

        /** AnsNodeTypeList NodeTypeList. */
        public NodeTypeList: protoManage.INodeType[];

        /** AnsNodeTypeList NodeStateCountList. */
        public NodeStateCountList: protoManage.IStateCount[];

        /**
         * Creates a new AnsNodeTypeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeTypeList instance
         */
        public static create(properties?: protoManage.IAnsNodeTypeList): protoManage.AnsNodeTypeList;

        /**
         * Encodes the specified AnsNodeTypeList message. Does not implicitly {@link protoManage.AnsNodeTypeList.verify|verify} messages.
         * @param message AnsNodeTypeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeTypeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeTypeList message, length delimited. Does not implicitly {@link protoManage.AnsNodeTypeList.verify|verify} messages.
         * @param message AnsNodeTypeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeTypeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeTypeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeTypeList;

        /**
         * Decodes an AnsNodeTypeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeTypeList;

        /**
         * Verifies an AnsNodeTypeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeTypeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeTypeList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeTypeList;

        /**
         * Creates a plain object from an AnsNodeTypeList message. Also converts values to other types if specified.
         * @param message AnsNodeTypeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeTypeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeTypeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeList. */
    interface IReqNodeList {

        /** ReqNodeList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeList. */
    class ReqNodeList implements IReqNodeList {

        /**
         * Constructs a new ReqNodeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeList);

        /** ReqNodeList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** AnsNodeList NodeGroupList */
        NodeGroupList?: (protoManage.INodeGroup[]|null);

        /** AnsNodeList NodeTypeList */
        NodeTypeList?: (protoManage.INodeType[]|null);

        /** AnsNodeList NodeLinkSourceStateCountList */
        NodeLinkSourceStateCountList?: (protoManage.IStateCount[]|null);

        /** AnsNodeList NodeLinkTargetStateCountList */
        NodeLinkTargetStateCountList?: (protoManage.IStateCount[]|null);

        /** AnsNodeList NodeFuncStateCountList */
        NodeFuncStateCountList?: (protoManage.IStateCount[]|null);

        /** AnsNodeList NodeReportStateCountList */
        NodeReportStateCountList?: (protoManage.IStateCount[]|null);
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

        /** AnsNodeList NodeGroupList. */
        public NodeGroupList: protoManage.INodeGroup[];

        /** AnsNodeList NodeTypeList. */
        public NodeTypeList: protoManage.INodeType[];

        /** AnsNodeList NodeLinkSourceStateCountList. */
        public NodeLinkSourceStateCountList: protoManage.IStateCount[];

        /** AnsNodeList NodeLinkTargetStateCountList. */
        public NodeLinkTargetStateCountList: protoManage.IStateCount[];

        /** AnsNodeList NodeFuncStateCountList. */
        public NodeFuncStateCountList: protoManage.IStateCount[];

        /** AnsNodeList NodeReportStateCountList. */
        public NodeReportStateCountList: protoManage.IStateCount[];

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

    /** Properties of a ReqNodeLinkList. */
    interface IReqNodeLinkList {

        /** ReqNodeLinkList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeLinkList. */
    class ReqNodeLinkList implements IReqNodeLinkList {

        /**
         * Constructs a new ReqNodeLinkList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeLinkList);

        /** ReqNodeLinkList filter. */
        public filter?: (protoManage.IFilter|null);

        /**
         * Creates a new ReqNodeLinkList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqNodeLinkList instance
         */
        public static create(properties?: protoManage.IReqNodeLinkList): protoManage.ReqNodeLinkList;

        /**
         * Encodes the specified ReqNodeLinkList message. Does not implicitly {@link protoManage.ReqNodeLinkList.verify|verify} messages.
         * @param message ReqNodeLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IReqNodeLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqNodeLinkList message, length delimited. Does not implicitly {@link protoManage.ReqNodeLinkList.verify|verify} messages.
         * @param message ReqNodeLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IReqNodeLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNodeLinkList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.ReqNodeLinkList;

        /**
         * Decodes a ReqNodeLinkList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.ReqNodeLinkList;

        /**
         * Verifies a ReqNodeLinkList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqNodeLinkList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqNodeLinkList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.ReqNodeLinkList;

        /**
         * Creates a plain object from a ReqNodeLinkList message. Also converts values to other types if specified.
         * @param message ReqNodeLinkList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.ReqNodeLinkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNodeLinkList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnsNodeLinkList. */
    interface IAnsNodeLinkList {

        /** AnsNodeLinkList Length */
        Length?: (number|null);

        /** AnsNodeLinkList NodeLinkList */
        NodeLinkList?: (protoManage.INodeLink[]|null);

        /** AnsNodeLinkList NodeList */
        NodeList?: (protoManage.INode[]|null);
    }

    /** Represents an AnsNodeLinkList. */
    class AnsNodeLinkList implements IAnsNodeLinkList {

        /**
         * Constructs a new AnsNodeLinkList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IAnsNodeLinkList);

        /** AnsNodeLinkList Length. */
        public Length: number;

        /** AnsNodeLinkList NodeLinkList. */
        public NodeLinkList: protoManage.INodeLink[];

        /** AnsNodeLinkList NodeList. */
        public NodeList: protoManage.INode[];

        /**
         * Creates a new AnsNodeLinkList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnsNodeLinkList instance
         */
        public static create(properties?: protoManage.IAnsNodeLinkList): protoManage.AnsNodeLinkList;

        /**
         * Encodes the specified AnsNodeLinkList message. Does not implicitly {@link protoManage.AnsNodeLinkList.verify|verify} messages.
         * @param message AnsNodeLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoManage.IAnsNodeLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnsNodeLinkList message, length delimited. Does not implicitly {@link protoManage.AnsNodeLinkList.verify|verify} messages.
         * @param message AnsNodeLinkList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoManage.IAnsNodeLinkList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnsNodeLinkList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnsNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoManage.AnsNodeLinkList;

        /**
         * Decodes an AnsNodeLinkList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnsNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoManage.AnsNodeLinkList;

        /**
         * Verifies an AnsNodeLinkList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnsNodeLinkList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnsNodeLinkList
         */
        public static fromObject(object: { [k: string]: any }): protoManage.AnsNodeLinkList;

        /**
         * Creates a plain object from an AnsNodeLinkList message. Also converts values to other types if specified.
         * @param message AnsNodeLinkList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoManage.AnsNodeLinkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnsNodeLinkList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNodeFuncList. */
    interface IReqNodeFuncList {

        /** ReqNodeFuncList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeFuncList. */
    class ReqNodeFuncList implements IReqNodeFuncList {

        /**
         * Constructs a new ReqNodeFuncList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeFuncList);

        /** ReqNodeFuncList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** AnsNodeFuncList NodeFuncCallList */
        NodeFuncCallList?: (protoManage.INodeFuncCall[]|null);
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

        /** AnsNodeFuncList NodeFuncCallList. */
        public NodeFuncCallList: protoManage.INodeFuncCall[];

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

        /** ReqNodeReportList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeReportList. */
    class ReqNodeReportList implements IReqNodeReportList {

        /**
         * Constructs a new ReqNodeReportList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeReportList);

        /** ReqNodeReportList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** AnsNodeReportList NodeReportValList */
        NodeReportValList?: (protoManage.INodeReportVal[]|null);
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

        /** AnsNodeReportList NodeReportValList. */
        public NodeReportValList: protoManage.INodeReportVal[];

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

        /** ReqNodeFuncCallList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeFuncCallList. */
    class ReqNodeFuncCallList implements IReqNodeFuncCallList {

        /**
         * Constructs a new ReqNodeFuncCallList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeFuncCallList);

        /** ReqNodeFuncCallList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** ReqNodeReportValList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeReportValList. */
    class ReqNodeReportValList implements IReqNodeReportValList {

        /**
         * Constructs a new ReqNodeReportValList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeReportValList);

        /** ReqNodeReportValList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** ReqNodeNotifyList filter */
        filter?: (protoManage.IFilter|null);
    }

    /** Represents a ReqNodeNotifyList. */
    class ReqNodeNotifyList implements IReqNodeNotifyList {

        /**
         * Constructs a new ReqNodeNotifyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoManage.IReqNodeNotifyList);

        /** ReqNodeNotifyList filter. */
        public filter?: (protoManage.IFilter|null);

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

        /** AnsNodeNotifyList NodeList */
        NodeList?: (protoManage.INode[]|null);
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

        /** AnsNodeNotifyList NodeList. */
        public NodeList: protoManage.INode[];

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
