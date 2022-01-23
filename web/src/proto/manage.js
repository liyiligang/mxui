/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protoManage = $root.protoManage = (() => {

    /**
     * Namespace protoManage.
     * @exports protoManage
     * @namespace
     */
    const protoManage = {};

    /**
     * Order enum.
     * @name protoManage.Order
     * @enum {number}
     * @property {number} Unknow=0 Unknow value
     * @property {number} ManagerUpdate=101 ManagerUpdate value
     * @property {number} ManagerDel=102 ManagerDel value
     * @property {number} NodeFuncCallReq=608 NodeFuncCallReq value
     * @property {number} NodeFuncCallAns=609 NodeFuncCallAns value
     * @property {number} NodeReportUpdateVal=704 NodeReportUpdateVal value
     * @property {number} NodeNotifyAdd=801 NodeNotifyAdd value
     * @property {number} NodeNotifyError=803 NodeNotifyError value
     */
    protoManage.Order = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknow"] = 0;
        values[valuesById[101] = "ManagerUpdate"] = 101;
        values[valuesById[102] = "ManagerDel"] = 102;
        values[valuesById[608] = "NodeFuncCallReq"] = 608;
        values[valuesById[609] = "NodeFuncCallAns"] = 609;
        values[valuesById[704] = "NodeReportUpdateVal"] = 704;
        values[valuesById[801] = "NodeNotifyAdd"] = 801;
        values[valuesById[803] = "NodeNotifyError"] = 803;
        return values;
    })();

    /**
     * State enum.
     * @name protoManage.State
     * @enum {number}
     * @property {number} StateNot=0 StateNot value
     * @property {number} StateUnknow=1 StateUnknow value
     * @property {number} StateNormal=2 StateNormal value
     * @property {number} StateWarn=3 StateWarn value
     * @property {number} StateError=4 StateError value
     */
    protoManage.State = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "StateNot"] = 0;
        values[valuesById[1] = "StateUnknow"] = 1;
        values[valuesById[2] = "StateNormal"] = 2;
        values[valuesById[3] = "StateWarn"] = 3;
        values[valuesById[4] = "StateError"] = 4;
        return values;
    })();

    /**
     * Level enum.
     * @name protoManage.Level
     * @enum {number}
     * @property {number} LevelNot=0 LevelNot value
     * @property {number} LevelPrimary=1 LevelPrimary value
     * @property {number} LevelIntermediate=2 LevelIntermediate value
     * @property {number} LevelSenior=3 LevelSenior value
     * @property {number} LevelSuper=4 LevelSuper value
     */
    protoManage.Level = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LevelNot"] = 0;
        values[valuesById[1] = "LevelPrimary"] = 1;
        values[valuesById[2] = "LevelIntermediate"] = 2;
        values[valuesById[3] = "LevelSenior"] = 3;
        values[valuesById[4] = "LevelSuper"] = 4;
        return values;
    })();

    /**
     * NodeFuncReturnType enum.
     * @name protoManage.NodeFuncReturnType
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} NotReturn=1 NotReturn value
     * @property {number} Error=2 Error value
     * @property {number} Text=3 Text value
     * @property {number} Json=4 Json value
     * @property {number} Link=5 Link value
     * @property {number} Image=6 Image value
     * @property {number} Media=7 Media value
     * @property {number} File=8 File value
     * @property {number} Table=9 Table value
     * @property {number} Charts=10 Charts value
     */
    protoManage.NodeFuncReturnType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "NotReturn"] = 1;
        values[valuesById[2] = "Error"] = 2;
        values[valuesById[3] = "Text"] = 3;
        values[valuesById[4] = "Json"] = 4;
        values[valuesById[5] = "Link"] = 5;
        values[valuesById[6] = "Image"] = 6;
        values[valuesById[7] = "Media"] = 7;
        values[valuesById[8] = "File"] = 8;
        values[valuesById[9] = "Table"] = 9;
        values[valuesById[10] = "Charts"] = 10;
        return values;
    })();

    /**
     * NodeReportType enum.
     * @name protoManage.NodeReportType
     * @enum {number}
     * @property {number} NodeReportTypeUnknown=0 NodeReportTypeUnknown value
     * @property {number} NodeReportTypeTable=1 NodeReportTypeTable value
     * @property {number} NodeReportTypeLine=2 NodeReportTypeLine value
     */
    protoManage.NodeReportType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NodeReportTypeUnknown"] = 0;
        values[valuesById[1] = "NodeReportTypeTable"] = 1;
        values[valuesById[2] = "NodeReportTypeLine"] = 2;
        return values;
    })();

    /**
     * NotifySenderType enum.
     * @name protoManage.NotifySenderType
     * @enum {number}
     * @property {number} NotifySenderTypeUnknow=0 NotifySenderTypeUnknow value
     * @property {number} NotifySenderTypeUser=1 NotifySenderTypeUser value
     * @property {number} NotifySenderTypeNode=2 NotifySenderTypeNode value
     */
    protoManage.NotifySenderType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NotifySenderTypeUnknow"] = 0;
        values[valuesById[1] = "NotifySenderTypeUser"] = 1;
        values[valuesById[2] = "NotifySenderTypeNode"] = 2;
        return values;
    })();

    /**
     * NodeResourceType enum.
     * @name protoManage.NodeResourceType
     * @enum {number}
     * @property {number} NodeResourceTypeUnknow=0 NodeResourceTypeUnknow value
     * @property {number} NodeResourceTypeCache=1 NodeResourceTypeCache value
     */
    protoManage.NodeResourceType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NodeResourceTypeUnknow"] = 0;
        values[valuesById[1] = "NodeResourceTypeCache"] = 1;
        return values;
    })();

    /**
     * HttpError enum.
     * @name protoManage.HttpError
     * @enum {number}
     * @property {number} HttpErrorNull=0 HttpErrorNull value
     * @property {number} HttpErrorGetHeader=601 HttpErrorGetHeader value
     * @property {number} HttpErrorGetBody=602 HttpErrorGetBody value
     * @property {number} HttpErrorGetFile=603 HttpErrorGetFile value
     * @property {number} HttpErrorCheckFile=604 HttpErrorCheckFile value
     * @property {number} HttpErrorMarshal=605 HttpErrorMarshal value
     * @property {number} HttpErrorUnmarshal=606 HttpErrorUnmarshal value
     * @property {number} HttpErrorRegister=607 HttpErrorRegister value
     * @property {number} HttpErrorLoginWithAccount=608 HttpErrorLoginWithAccount value
     * @property {number} HttpErrorPasswordWithAccount=609 HttpErrorPasswordWithAccount value
     * @property {number} HttpErrorLoginWithToken=610 HttpErrorLoginWithToken value
     * @property {number} HttpErrorLevelLow=611 HttpErrorLevelLow value
     * @property {number} HttpErrorRequest=612 HttpErrorRequest value
     */
    protoManage.HttpError = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HttpErrorNull"] = 0;
        values[valuesById[601] = "HttpErrorGetHeader"] = 601;
        values[valuesById[602] = "HttpErrorGetBody"] = 602;
        values[valuesById[603] = "HttpErrorGetFile"] = 603;
        values[valuesById[604] = "HttpErrorCheckFile"] = 604;
        values[valuesById[605] = "HttpErrorMarshal"] = 605;
        values[valuesById[606] = "HttpErrorUnmarshal"] = 606;
        values[valuesById[607] = "HttpErrorRegister"] = 607;
        values[valuesById[608] = "HttpErrorLoginWithAccount"] = 608;
        values[valuesById[609] = "HttpErrorPasswordWithAccount"] = 609;
        values[valuesById[610] = "HttpErrorLoginWithToken"] = 610;
        values[valuesById[611] = "HttpErrorLevelLow"] = 611;
        values[valuesById[612] = "HttpErrorRequest"] = 612;
        return values;
    })();

    protoManage.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protoManage
         * @interface IMessage
         * @property {protoManage.Order|null} [order] Message order
         * @property {Uint8Array|null} [message] Message message
         */

        /**
         * Constructs a new Message.
         * @memberof protoManage
         * @classdesc 消息包*****************
         * @implements IMessage
         * @constructor
         * @param {protoManage.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message order.
         * @member {protoManage.Order} order
         * @memberof protoManage.Message
         * @instance
         */
        Message.prototype.order = 0;

        /**
         * Message message.
         * @member {Uint8Array} message
         * @memberof protoManage.Message
         * @instance
         */
        Message.prototype.message = $util.newBuffer([]);

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protoManage.Message
         * @static
         * @param {protoManage.IMessage=} [properties] Properties to set
         * @returns {protoManage.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protoManage.Message.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Message
         * @static
         * @param {protoManage.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.message);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protoManage.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Message
         * @static
         * @param {protoManage.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = reader.int32();
                    break;
                case 2:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protoManage.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order"))
                switch (message.order) {
                default:
                    return "order: enum value expected";
                case 0:
                case 101:
                case 102:
                case 608:
                case 609:
                case 704:
                case 801:
                case 803:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Message)
                return object;
            let message = new $root.protoManage.Message();
            switch (object.order) {
            case "Unknow":
            case 0:
                message.order = 0;
                break;
            case "ManagerUpdate":
            case 101:
                message.order = 101;
                break;
            case "ManagerDel":
            case 102:
                message.order = 102;
                break;
            case "NodeFuncCallReq":
            case 608:
                message.order = 608;
                break;
            case "NodeFuncCallAns":
            case 609:
                message.order = 609;
                break;
            case "NodeReportUpdateVal":
            case 704:
                message.order = 704;
                break;
            case "NodeNotifyAdd":
            case 801:
                message.order = 801;
                break;
            case "NodeNotifyError":
            case 803:
                message.order = 803;
                break;
            }
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Message
         * @static
         * @param {protoManage.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.order = options.enums === String ? "Unknow" : 0;
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            }
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = options.enums === String ? $root.protoManage.Order[message.order] : message.order;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protoManage.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    protoManage.HttpMessage = (function() {

        /**
         * Properties of a HttpMessage.
         * @memberof protoManage
         * @interface IHttpMessage
         * @property {protoManage.Order|null} [order] HttpMessage order
         * @property {Uint8Array|null} [message] HttpMessage message
         * @property {string|null} [token] HttpMessage token
         */

        /**
         * Constructs a new HttpMessage.
         * @memberof protoManage
         * @classdesc Represents a HttpMessage.
         * @implements IHttpMessage
         * @constructor
         * @param {protoManage.IHttpMessage=} [properties] Properties to set
         */
        function HttpMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HttpMessage order.
         * @member {protoManage.Order} order
         * @memberof protoManage.HttpMessage
         * @instance
         */
        HttpMessage.prototype.order = 0;

        /**
         * HttpMessage message.
         * @member {Uint8Array} message
         * @memberof protoManage.HttpMessage
         * @instance
         */
        HttpMessage.prototype.message = $util.newBuffer([]);

        /**
         * HttpMessage token.
         * @member {string} token
         * @memberof protoManage.HttpMessage
         * @instance
         */
        HttpMessage.prototype.token = "";

        /**
         * Creates a new HttpMessage instance using the specified properties.
         * @function create
         * @memberof protoManage.HttpMessage
         * @static
         * @param {protoManage.IHttpMessage=} [properties] Properties to set
         * @returns {protoManage.HttpMessage} HttpMessage instance
         */
        HttpMessage.create = function create(properties) {
            return new HttpMessage(properties);
        };

        /**
         * Encodes the specified HttpMessage message. Does not implicitly {@link protoManage.HttpMessage.verify|verify} messages.
         * @function encode
         * @memberof protoManage.HttpMessage
         * @static
         * @param {protoManage.IHttpMessage} message HttpMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HttpMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.message);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified HttpMessage message, length delimited. Does not implicitly {@link protoManage.HttpMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.HttpMessage
         * @static
         * @param {protoManage.IHttpMessage} message HttpMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HttpMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HttpMessage message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.HttpMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.HttpMessage} HttpMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HttpMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.HttpMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = reader.int32();
                    break;
                case 2:
                    message.message = reader.bytes();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HttpMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.HttpMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.HttpMessage} HttpMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HttpMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HttpMessage message.
         * @function verify
         * @memberof protoManage.HttpMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HttpMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order"))
                switch (message.order) {
                default:
                    return "order: enum value expected";
                case 0:
                case 101:
                case 102:
                case 608:
                case 609:
                case 704:
                case 801:
                case 803:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a HttpMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.HttpMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.HttpMessage} HttpMessage
         */
        HttpMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.HttpMessage)
                return object;
            let message = new $root.protoManage.HttpMessage();
            switch (object.order) {
            case "Unknow":
            case 0:
                message.order = 0;
                break;
            case "ManagerUpdate":
            case 101:
                message.order = 101;
                break;
            case "ManagerDel":
            case 102:
                message.order = 102;
                break;
            case "NodeFuncCallReq":
            case 608:
                message.order = 608;
                break;
            case "NodeFuncCallAns":
            case 609:
                message.order = 609;
                break;
            case "NodeReportUpdateVal":
            case 704:
                message.order = 704;
                break;
            case "NodeNotifyAdd":
            case 801:
                message.order = 801;
                break;
            case "NodeNotifyError":
            case 803:
                message.order = 803;
                break;
            }
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a HttpMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.HttpMessage
         * @static
         * @param {protoManage.HttpMessage} message HttpMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HttpMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.order = options.enums === String ? "Unknow" : 0;
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.token = "";
            }
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = options.enums === String ? $root.protoManage.Order[message.order] : message.order;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this HttpMessage to JSON.
         * @function toJSON
         * @memberof protoManage.HttpMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HttpMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HttpMessage;
    })();

    protoManage.RpcEngine = (function() {

        /**
         * Constructs a new RpcEngine service.
         * @memberof protoManage
         * @classdesc Represents a RpcEngine
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RpcEngine(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (RpcEngine.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RpcEngine;

        /**
         * Creates new RpcEngine service using the specified rpc implementation.
         * @function create
         * @memberof protoManage.RpcEngine
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RpcEngine} RPC service. Useful where requests and/or responses are streamed.
         */
        RpcEngine.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNode}.
         * @memberof protoManage.RpcEngine
         * @typedef RegisterNodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.Node} [response] Node
         */

        /**
         * Calls RegisterNode.
         * @function registerNode
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INode} request Node message or plain object
         * @param {protoManage.RpcEngine.RegisterNodeCallback} callback Node-style callback called with the error, if any, and Node
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.registerNode = function registerNode(request, callback) {
            return this.rpcCall(registerNode, $root.protoManage.Node, $root.protoManage.Node, request, callback);
        }, "name", { value: "RegisterNode" });

        /**
         * Calls RegisterNode.
         * @function registerNode
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INode} request Node message or plain object
         * @returns {Promise<protoManage.Node>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNodeFunc}.
         * @memberof protoManage.RpcEngine
         * @typedef RegisterNodeFuncCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.NodeFunc} [response] NodeFunc
         */

        /**
         * Calls RegisterNodeFunc.
         * @function registerNodeFunc
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeFunc} request NodeFunc message or plain object
         * @param {protoManage.RpcEngine.RegisterNodeFuncCallback} callback Node-style callback called with the error, if any, and NodeFunc
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.registerNodeFunc = function registerNodeFunc(request, callback) {
            return this.rpcCall(registerNodeFunc, $root.protoManage.NodeFunc, $root.protoManage.NodeFunc, request, callback);
        }, "name", { value: "RegisterNodeFunc" });

        /**
         * Calls RegisterNodeFunc.
         * @function registerNodeFunc
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeFunc} request NodeFunc message or plain object
         * @returns {Promise<protoManage.NodeFunc>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#registerNodeReport}.
         * @memberof protoManage.RpcEngine
         * @typedef RegisterNodeReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.NodeReport} [response] NodeReport
         */

        /**
         * Calls RegisterNodeReport.
         * @function registerNodeReport
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeReport} request NodeReport message or plain object
         * @param {protoManage.RpcEngine.RegisterNodeReportCallback} callback Node-style callback called with the error, if any, and NodeReport
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.registerNodeReport = function registerNodeReport(request, callback) {
            return this.rpcCall(registerNodeReport, $root.protoManage.NodeReport, $root.protoManage.NodeReport, request, callback);
        }, "name", { value: "RegisterNodeReport" });

        /**
         * Calls RegisterNodeReport.
         * @function registerNodeReport
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeReport} request NodeReport message or plain object
         * @returns {Promise<protoManage.NodeReport>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#checkNodeResource}.
         * @memberof protoManage.RpcEngine
         * @typedef CheckNodeResourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.NodeResource} [response] NodeResource
         */

        /**
         * Calls CheckNodeResource.
         * @function checkNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeResource} request NodeResource message or plain object
         * @param {protoManage.RpcEngine.CheckNodeResourceCallback} callback Node-style callback called with the error, if any, and NodeResource
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.checkNodeResource = function checkNodeResource(request, callback) {
            return this.rpcCall(checkNodeResource, $root.protoManage.NodeResource, $root.protoManage.NodeResource, request, callback);
        }, "name", { value: "CheckNodeResource" });

        /**
         * Calls CheckNodeResource.
         * @function checkNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.INodeResource} request NodeResource message or plain object
         * @returns {Promise<protoManage.NodeResource>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#uploadNodeResource}.
         * @memberof protoManage.RpcEngine
         * @typedef UploadNodeResourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.AnsNodeResourceUpload} [response] AnsNodeResourceUpload
         */

        /**
         * Calls UploadNodeResource.
         * @function uploadNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IReqNodeResourceUpload} request ReqNodeResourceUpload message or plain object
         * @param {protoManage.RpcEngine.UploadNodeResourceCallback} callback Node-style callback called with the error, if any, and AnsNodeResourceUpload
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.uploadNodeResource = function uploadNodeResource(request, callback) {
            return this.rpcCall(uploadNodeResource, $root.protoManage.ReqNodeResourceUpload, $root.protoManage.AnsNodeResourceUpload, request, callback);
        }, "name", { value: "UploadNodeResource" });

        /**
         * Calls UploadNodeResource.
         * @function uploadNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IReqNodeResourceUpload} request ReqNodeResourceUpload message or plain object
         * @returns {Promise<protoManage.AnsNodeResourceUpload>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#downloadNodeResource}.
         * @memberof protoManage.RpcEngine
         * @typedef DownloadNodeResourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.AnsNodeResourceDownload} [response] AnsNodeResourceDownload
         */

        /**
         * Calls DownloadNodeResource.
         * @function downloadNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IReqNodeResourceDownload} request ReqNodeResourceDownload message or plain object
         * @param {protoManage.RpcEngine.DownloadNodeResourceCallback} callback Node-style callback called with the error, if any, and AnsNodeResourceDownload
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.downloadNodeResource = function downloadNodeResource(request, callback) {
            return this.rpcCall(downloadNodeResource, $root.protoManage.ReqNodeResourceDownload, $root.protoManage.AnsNodeResourceDownload, request, callback);
        }, "name", { value: "DownloadNodeResource" });

        /**
         * Calls DownloadNodeResource.
         * @function downloadNodeResource
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IReqNodeResourceDownload} request ReqNodeResourceDownload message or plain object
         * @returns {Promise<protoManage.AnsNodeResourceDownload>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link protoManage.RpcEngine#rpcChannel}.
         * @memberof protoManage.RpcEngine
         * @typedef RpcChannelCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {protoManage.Message} [response] Message
         */

        /**
         * Calls RpcChannel.
         * @function rpcChannel
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IMessage} request Message message or plain object
         * @param {protoManage.RpcEngine.RpcChannelCallback} callback Node-style callback called with the error, if any, and Message
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RpcEngine.prototype.rpcChannel = function rpcChannel(request, callback) {
            return this.rpcCall(rpcChannel, $root.protoManage.Message, $root.protoManage.Message, request, callback);
        }, "name", { value: "RpcChannel" });

        /**
         * Calls RpcChannel.
         * @function rpcChannel
         * @memberof protoManage.RpcEngine
         * @instance
         * @param {protoManage.IMessage} request Message message or plain object
         * @returns {Promise<protoManage.Message>} Promise
         * @variation 2
         */

        return RpcEngine;
    })();

    protoManage.Base = (function() {

        /**
         * Properties of a Base.
         * @memberof protoManage
         * @interface IBase
         * @property {number|null} [ID] Base ID
         * @property {number|null} [UpdateTime] Base UpdateTime
         */

        /**
         * Constructs a new Base.
         * @memberof protoManage
         * @classdesc Represents a Base.
         * @implements IBase
         * @constructor
         * @param {protoManage.IBase=} [properties] Properties to set
         */
        function Base(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base ID.
         * @member {number} ID
         * @memberof protoManage.Base
         * @instance
         */
        Base.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Base UpdateTime.
         * @member {number} UpdateTime
         * @memberof protoManage.Base
         * @instance
         */
        Base.prototype.UpdateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base instance using the specified properties.
         * @function create
         * @memberof protoManage.Base
         * @static
         * @param {protoManage.IBase=} [properties] Properties to set
         * @returns {protoManage.Base} Base instance
         */
        Base.create = function create(properties) {
            return new Base(properties);
        };

        /**
         * Encodes the specified Base message. Does not implicitly {@link protoManage.Base.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Base
         * @static
         * @param {protoManage.IBase} message Base message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ID);
            if (message.UpdateTime != null && Object.hasOwnProperty.call(message, "UpdateTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UpdateTime);
            return writer;
        };

        /**
         * Encodes the specified Base message, length delimited. Does not implicitly {@link protoManage.Base.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Base
         * @static
         * @param {protoManage.IBase} message Base message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Base message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Base
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Base} Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Base();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.UpdateTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Base message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Base
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Base} Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Base message.
         * @function verify
         * @memberof protoManage.Base
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Base.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.UpdateTime != null && message.hasOwnProperty("UpdateTime"))
                if (!$util.isInteger(message.UpdateTime) && !(message.UpdateTime && $util.isInteger(message.UpdateTime.low) && $util.isInteger(message.UpdateTime.high)))
                    return "UpdateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Base message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Base
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Base} Base
         */
        Base.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Base)
                return object;
            let message = new $root.protoManage.Base();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.UpdateTime != null)
                if ($util.Long)
                    (message.UpdateTime = $util.Long.fromValue(object.UpdateTime)).unsigned = false;
                else if (typeof object.UpdateTime === "string")
                    message.UpdateTime = parseInt(object.UpdateTime, 10);
                else if (typeof object.UpdateTime === "number")
                    message.UpdateTime = object.UpdateTime;
                else if (typeof object.UpdateTime === "object")
                    message.UpdateTime = new $util.LongBits(object.UpdateTime.low >>> 0, object.UpdateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Base message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Base
         * @static
         * @param {protoManage.Base} message Base
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Base.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.UpdateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateTime = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.UpdateTime != null && message.hasOwnProperty("UpdateTime"))
                if (typeof message.UpdateTime === "number")
                    object.UpdateTime = options.longs === String ? String(message.UpdateTime) : message.UpdateTime;
                else
                    object.UpdateTime = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateTime) : options.longs === Number ? new $util.LongBits(message.UpdateTime.low >>> 0, message.UpdateTime.high >>> 0).toNumber() : message.UpdateTime;
            return object;
        };

        /**
         * Converts this Base to JSON.
         * @function toJSON
         * @memberof protoManage.Base
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Base.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Base;
    })();

    protoManage.Page = (function() {

        /**
         * Properties of a Page.
         * @memberof protoManage
         * @interface IPage
         * @property {number|null} [Count] Page Count
         * @property {number|null} [Num] Page Num
         */

        /**
         * Constructs a new Page.
         * @memberof protoManage
         * @classdesc Represents a Page.
         * @implements IPage
         * @constructor
         * @param {protoManage.IPage=} [properties] Properties to set
         */
        function Page(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Page Count.
         * @member {number} Count
         * @memberof protoManage.Page
         * @instance
         */
        Page.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Page Num.
         * @member {number} Num
         * @memberof protoManage.Page
         * @instance
         */
        Page.prototype.Num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Page instance using the specified properties.
         * @function create
         * @memberof protoManage.Page
         * @static
         * @param {protoManage.IPage=} [properties] Properties to set
         * @returns {protoManage.Page} Page instance
         */
        Page.create = function create(properties) {
            return new Page(properties);
        };

        /**
         * Encodes the specified Page message. Does not implicitly {@link protoManage.Page.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Page
         * @static
         * @param {protoManage.IPage} message Page message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Page.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Count);
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Num);
            return writer;
        };

        /**
         * Encodes the specified Page message, length delimited. Does not implicitly {@link protoManage.Page.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Page
         * @static
         * @param {protoManage.IPage} message Page message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Page.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Page
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Page} Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Page.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Page();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int64();
                    break;
                case 2:
                    message.Num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Page message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Page
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Page} Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Page.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Page message.
         * @function verify
         * @memberof protoManage.Page
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Page.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num) && !(message.Num && $util.isInteger(message.Num.low) && $util.isInteger(message.Num.high)))
                    return "Num: integer|Long expected";
            return null;
        };

        /**
         * Creates a Page message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Page
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Page} Page
         */
        Page.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Page)
                return object;
            let message = new $root.protoManage.Page();
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Num != null)
                if ($util.Long)
                    (message.Num = $util.Long.fromValue(object.Num)).unsigned = false;
                else if (typeof object.Num === "string")
                    message.Num = parseInt(object.Num, 10);
                else if (typeof object.Num === "number")
                    message.Num = object.Num;
                else if (typeof object.Num === "object")
                    message.Num = new $util.LongBits(object.Num.low >>> 0, object.Num.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Page message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Page
         * @static
         * @param {protoManage.Page} message Page
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Page.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Num = options.longs === String ? "0" : 0;
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (typeof message.Num === "number")
                    object.Num = options.longs === String ? String(message.Num) : message.Num;
                else
                    object.Num = options.longs === String ? $util.Long.prototype.toString.call(message.Num) : options.longs === Number ? new $util.LongBits(message.Num.low >>> 0, message.Num.high >>> 0).toNumber() : message.Num;
            return object;
        };

        /**
         * Converts this Page to JSON.
         * @function toJSON
         * @memberof protoManage.Page
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Page.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Page;
    })();

    protoManage.Time = (function() {

        /**
         * Properties of a Time.
         * @memberof protoManage
         * @interface ITime
         * @property {number|null} [BeginTime] Time BeginTime
         * @property {number|null} [EndTime] Time EndTime
         */

        /**
         * Constructs a new Time.
         * @memberof protoManage
         * @classdesc Represents a Time.
         * @implements ITime
         * @constructor
         * @param {protoManage.ITime=} [properties] Properties to set
         */
        function Time(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Time BeginTime.
         * @member {number} BeginTime
         * @memberof protoManage.Time
         * @instance
         */
        Time.prototype.BeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Time EndTime.
         * @member {number} EndTime
         * @memberof protoManage.Time
         * @instance
         */
        Time.prototype.EndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Time instance using the specified properties.
         * @function create
         * @memberof protoManage.Time
         * @static
         * @param {protoManage.ITime=} [properties] Properties to set
         * @returns {protoManage.Time} Time instance
         */
        Time.create = function create(properties) {
            return new Time(properties);
        };

        /**
         * Encodes the specified Time message. Does not implicitly {@link protoManage.Time.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Time
         * @static
         * @param {protoManage.ITime} message Time message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Time.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BeginTime != null && Object.hasOwnProperty.call(message, "BeginTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BeginTime);
            if (message.EndTime != null && Object.hasOwnProperty.call(message, "EndTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.EndTime);
            return writer;
        };

        /**
         * Encodes the specified Time message, length delimited. Does not implicitly {@link protoManage.Time.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Time
         * @static
         * @param {protoManage.ITime} message Time message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Time.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Time message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Time
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Time} Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Time.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Time();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BeginTime = reader.int64();
                    break;
                case 2:
                    message.EndTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Time message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Time
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Time} Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Time.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Time message.
         * @function verify
         * @memberof protoManage.Time
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Time.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BeginTime != null && message.hasOwnProperty("BeginTime"))
                if (!$util.isInteger(message.BeginTime) && !(message.BeginTime && $util.isInteger(message.BeginTime.low) && $util.isInteger(message.BeginTime.high)))
                    return "BeginTime: integer|Long expected";
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                if (!$util.isInteger(message.EndTime) && !(message.EndTime && $util.isInteger(message.EndTime.low) && $util.isInteger(message.EndTime.high)))
                    return "EndTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Time message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Time
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Time} Time
         */
        Time.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Time)
                return object;
            let message = new $root.protoManage.Time();
            if (object.BeginTime != null)
                if ($util.Long)
                    (message.BeginTime = $util.Long.fromValue(object.BeginTime)).unsigned = false;
                else if (typeof object.BeginTime === "string")
                    message.BeginTime = parseInt(object.BeginTime, 10);
                else if (typeof object.BeginTime === "number")
                    message.BeginTime = object.BeginTime;
                else if (typeof object.BeginTime === "object")
                    message.BeginTime = new $util.LongBits(object.BeginTime.low >>> 0, object.BeginTime.high >>> 0).toNumber();
            if (object.EndTime != null)
                if ($util.Long)
                    (message.EndTime = $util.Long.fromValue(object.EndTime)).unsigned = false;
                else if (typeof object.EndTime === "string")
                    message.EndTime = parseInt(object.EndTime, 10);
                else if (typeof object.EndTime === "number")
                    message.EndTime = object.EndTime;
                else if (typeof object.EndTime === "object")
                    message.EndTime = new $util.LongBits(object.EndTime.low >>> 0, object.EndTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Time message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Time
         * @static
         * @param {protoManage.Time} message Time
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Time.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.BeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BeginTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.EndTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EndTime = options.longs === String ? "0" : 0;
            }
            if (message.BeginTime != null && message.hasOwnProperty("BeginTime"))
                if (typeof message.BeginTime === "number")
                    object.BeginTime = options.longs === String ? String(message.BeginTime) : message.BeginTime;
                else
                    object.BeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.BeginTime) : options.longs === Number ? new $util.LongBits(message.BeginTime.low >>> 0, message.BeginTime.high >>> 0).toNumber() : message.BeginTime;
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                if (typeof message.EndTime === "number")
                    object.EndTime = options.longs === String ? String(message.EndTime) : message.EndTime;
                else
                    object.EndTime = options.longs === String ? $util.Long.prototype.toString.call(message.EndTime) : options.longs === Number ? new $util.LongBits(message.EndTime.low >>> 0, message.EndTime.high >>> 0).toNumber() : message.EndTime;
            return object;
        };

        /**
         * Converts this Time to JSON.
         * @function toJSON
         * @memberof protoManage.Time
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Time.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Time;
    })();

    protoManage.Manager = (function() {

        /**
         * Properties of a Manager.
         * @memberof protoManage
         * @interface IManager
         * @property {protoManage.IBase|null} [Base] Manager Base
         * @property {string|null} [Name] Manager Name
         * @property {string|null} [Password] Manager Password
         * @property {string|null} [NickName] Manager NickName
         * @property {string|null} [Token] Manager Token
         * @property {string|null} [Setting] Manager Setting
         * @property {protoManage.Level|null} [Level] Manager Level
         * @property {protoManage.State|null} [State] Manager State
         */

        /**
         * Constructs a new Manager.
         * @memberof protoManage
         * @classdesc Represents a Manager.
         * @implements IManager
         * @constructor
         * @param {protoManage.IManager=} [properties] Properties to set
         */
        function Manager(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Manager Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Base = null;

        /**
         * Manager Name.
         * @member {string} Name
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Name = "";

        /**
         * Manager Password.
         * @member {string} Password
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Password = "";

        /**
         * Manager NickName.
         * @member {string} NickName
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.NickName = "";

        /**
         * Manager Token.
         * @member {string} Token
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Token = "";

        /**
         * Manager Setting.
         * @member {string} Setting
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Setting = "";

        /**
         * Manager Level.
         * @member {protoManage.Level} Level
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.Level = 0;

        /**
         * Manager State.
         * @member {protoManage.State} State
         * @memberof protoManage.Manager
         * @instance
         */
        Manager.prototype.State = 0;

        /**
         * Creates a new Manager instance using the specified properties.
         * @function create
         * @memberof protoManage.Manager
         * @static
         * @param {protoManage.IManager=} [properties] Properties to set
         * @returns {protoManage.Manager} Manager instance
         */
        Manager.create = function create(properties) {
            return new Manager(properties);
        };

        /**
         * Encodes the specified Manager message. Does not implicitly {@link protoManage.Manager.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Manager
         * @static
         * @param {protoManage.IManager} message Manager message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Manager.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Password);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.NickName);
            if (message.Token != null && Object.hasOwnProperty.call(message, "Token"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Token);
            if (message.Setting != null && Object.hasOwnProperty.call(message, "Setting"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Setting);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Level);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified Manager message, length delimited. Does not implicitly {@link protoManage.Manager.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Manager
         * @static
         * @param {protoManage.IManager} message Manager message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Manager.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Manager message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Manager
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Manager} Manager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Manager.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Manager();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    message.NickName = reader.string();
                    break;
                case 5:
                    message.Token = reader.string();
                    break;
                case 6:
                    message.Setting = reader.string();
                    break;
                case 7:
                    message.Level = reader.int32();
                    break;
                case 8:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Manager message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Manager
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Manager} Manager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Manager.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Manager message.
         * @function verify
         * @memberof protoManage.Manager
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Manager.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Token != null && message.hasOwnProperty("Token"))
                if (!$util.isString(message.Token))
                    return "Token: string expected";
            if (message.Setting != null && message.hasOwnProperty("Setting"))
                if (!$util.isString(message.Setting))
                    return "Setting: string expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                switch (message.Level) {
                default:
                    return "Level: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Manager message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Manager
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Manager} Manager
         */
        Manager.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Manager)
                return object;
            let message = new $root.protoManage.Manager();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.Manager.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Token != null)
                message.Token = String(object.Token);
            if (object.Setting != null)
                message.Setting = String(object.Setting);
            switch (object.Level) {
            case "LevelNot":
            case 0:
                message.Level = 0;
                break;
            case "LevelPrimary":
            case 1:
                message.Level = 1;
                break;
            case "LevelIntermediate":
            case 2:
                message.Level = 2;
                break;
            case "LevelSenior":
            case 3:
                message.Level = 3;
                break;
            case "LevelSuper":
            case 4:
                message.Level = 4;
                break;
            }
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Manager message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Manager
         * @static
         * @param {protoManage.Manager} message Manager
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Manager.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
                object.Password = "";
                object.NickName = "";
                object.Token = "";
                object.Setting = "";
                object.Level = options.enums === String ? "LevelNot" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Token != null && message.hasOwnProperty("Token"))
                object.Token = message.Token;
            if (message.Setting != null && message.hasOwnProperty("Setting"))
                object.Setting = message.Setting;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = options.enums === String ? $root.protoManage.Level[message.Level] : message.Level;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this Manager to JSON.
         * @function toJSON
         * @memberof protoManage.Manager
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Manager.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Manager;
    })();

    protoManage.TopLink = (function() {

        /**
         * Properties of a TopLink.
         * @memberof protoManage
         * @interface ITopLink
         * @property {protoManage.IBase|null} [Base] TopLink Base
         * @property {string|null} [Name] TopLink Name
         * @property {string|null} [Url] TopLink Url
         * @property {protoManage.State|null} [State] TopLink State
         */

        /**
         * Constructs a new TopLink.
         * @memberof protoManage
         * @classdesc Represents a TopLink.
         * @implements ITopLink
         * @constructor
         * @param {protoManage.ITopLink=} [properties] Properties to set
         */
        function TopLink(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopLink Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.TopLink
         * @instance
         */
        TopLink.prototype.Base = null;

        /**
         * TopLink Name.
         * @member {string} Name
         * @memberof protoManage.TopLink
         * @instance
         */
        TopLink.prototype.Name = "";

        /**
         * TopLink Url.
         * @member {string} Url
         * @memberof protoManage.TopLink
         * @instance
         */
        TopLink.prototype.Url = "";

        /**
         * TopLink State.
         * @member {protoManage.State} State
         * @memberof protoManage.TopLink
         * @instance
         */
        TopLink.prototype.State = 0;

        /**
         * Creates a new TopLink instance using the specified properties.
         * @function create
         * @memberof protoManage.TopLink
         * @static
         * @param {protoManage.ITopLink=} [properties] Properties to set
         * @returns {protoManage.TopLink} TopLink instance
         */
        TopLink.create = function create(properties) {
            return new TopLink(properties);
        };

        /**
         * Encodes the specified TopLink message. Does not implicitly {@link protoManage.TopLink.verify|verify} messages.
         * @function encode
         * @memberof protoManage.TopLink
         * @static
         * @param {protoManage.ITopLink} message TopLink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopLink.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Url != null && Object.hasOwnProperty.call(message, "Url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Url);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified TopLink message, length delimited. Does not implicitly {@link protoManage.TopLink.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.TopLink
         * @static
         * @param {protoManage.ITopLink} message TopLink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopLink.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopLink message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.TopLink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.TopLink} TopLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopLink.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.TopLink();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Url = reader.string();
                    break;
                case 4:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TopLink message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.TopLink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.TopLink} TopLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopLink.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopLink message.
         * @function verify
         * @memberof protoManage.TopLink
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopLink.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Url != null && message.hasOwnProperty("Url"))
                if (!$util.isString(message.Url))
                    return "Url: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a TopLink message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.TopLink
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.TopLink} TopLink
         */
        TopLink.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.TopLink)
                return object;
            let message = new $root.protoManage.TopLink();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.TopLink.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Url != null)
                message.Url = String(object.Url);
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TopLink message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.TopLink
         * @static
         * @param {protoManage.TopLink} message TopLink
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopLink.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
                object.Url = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Url != null && message.hasOwnProperty("Url"))
                object.Url = message.Url;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this TopLink to JSON.
         * @function toJSON
         * @memberof protoManage.TopLink
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopLink.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TopLink;
    })();

    protoManage.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof protoManage
         * @interface INode
         * @property {protoManage.IBase|null} [Base] Node Base
         * @property {string|null} [Name] Node Name
         * @property {protoManage.State|null} [State] Node State
         */

        /**
         * Constructs a new Node.
         * @memberof protoManage
         * @classdesc Represents a Node.
         * @implements INode
         * @constructor
         * @param {protoManage.INode=} [properties] Properties to set
         */
        function Node(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.Node
         * @instance
         */
        Node.prototype.Base = null;

        /**
         * Node Name.
         * @member {string} Name
         * @memberof protoManage.Node
         * @instance
         */
        Node.prototype.Name = "";

        /**
         * Node State.
         * @member {protoManage.State} State
         * @memberof protoManage.Node
         * @instance
         */
        Node.prototype.State = 0;

        /**
         * Creates a new Node instance using the specified properties.
         * @function create
         * @memberof protoManage.Node
         * @static
         * @param {protoManage.INode=} [properties] Properties to set
         * @returns {protoManage.Node} Node instance
         */
        Node.create = function create(properties) {
            return new Node(properties);
        };

        /**
         * Encodes the specified Node message. Does not implicitly {@link protoManage.Node.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Node
         * @static
         * @param {protoManage.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link protoManage.Node.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Node
         * @static
         * @param {protoManage.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Node();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Node message.
         * @function verify
         * @memberof protoManage.Node
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Node.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Node
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Node} Node
         */
        Node.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Node)
                return object;
            let message = new $root.protoManage.Node();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.Node.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Node
         * @static
         * @param {protoManage.Node} message Node
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Node.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this Node to JSON.
         * @function toJSON
         * @memberof protoManage.Node
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Node.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Node;
    })();

    protoManage.NodeFunc = (function() {

        /**
         * Properties of a NodeFunc.
         * @memberof protoManage
         * @interface INodeFunc
         * @property {protoManage.IBase|null} [Base] NodeFunc Base
         * @property {number|null} [NodeID] NodeFunc NodeID
         * @property {string|null} [Name] NodeFunc Name
         * @property {string|null} [Func] NodeFunc Func
         * @property {string|null} [Schema] NodeFunc Schema
         * @property {protoManage.Level|null} [Level] NodeFunc Level
         * @property {protoManage.State|null} [State] NodeFunc State
         */

        /**
         * Constructs a new NodeFunc.
         * @memberof protoManage
         * @classdesc Represents a NodeFunc.
         * @implements INodeFunc
         * @constructor
         * @param {protoManage.INodeFunc=} [properties] Properties to set
         */
        function NodeFunc(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeFunc Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.Base = null;

        /**
         * NodeFunc NodeID.
         * @member {number} NodeID
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.NodeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeFunc Name.
         * @member {string} Name
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.Name = "";

        /**
         * NodeFunc Func.
         * @member {string} Func
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.Func = "";

        /**
         * NodeFunc Schema.
         * @member {string} Schema
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.Schema = "";

        /**
         * NodeFunc Level.
         * @member {protoManage.Level} Level
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.Level = 0;

        /**
         * NodeFunc State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeFunc
         * @instance
         */
        NodeFunc.prototype.State = 0;

        /**
         * Creates a new NodeFunc instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeFunc
         * @static
         * @param {protoManage.INodeFunc=} [properties] Properties to set
         * @returns {protoManage.NodeFunc} NodeFunc instance
         */
        NodeFunc.create = function create(properties) {
            return new NodeFunc(properties);
        };

        /**
         * Encodes the specified NodeFunc message. Does not implicitly {@link protoManage.NodeFunc.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeFunc
         * @static
         * @param {protoManage.INodeFunc} message NodeFunc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeFunc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NodeID != null && Object.hasOwnProperty.call(message, "NodeID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NodeID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Name);
            if (message.Func != null && Object.hasOwnProperty.call(message, "Func"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Func);
            if (message.Schema != null && Object.hasOwnProperty.call(message, "Schema"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Schema);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Level);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeFunc message, length delimited. Does not implicitly {@link protoManage.NodeFunc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeFunc
         * @static
         * @param {protoManage.INodeFunc} message NodeFunc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeFunc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeFunc message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeFunc} NodeFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeFunc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeFunc();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.NodeID = reader.int64();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.Func = reader.string();
                    break;
                case 5:
                    message.Schema = reader.string();
                    break;
                case 6:
                    message.Level = reader.int32();
                    break;
                case 7:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeFunc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeFunc} NodeFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeFunc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeFunc message.
         * @function verify
         * @memberof protoManage.NodeFunc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeFunc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (!$util.isInteger(message.NodeID) && !(message.NodeID && $util.isInteger(message.NodeID.low) && $util.isInteger(message.NodeID.high)))
                    return "NodeID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Func != null && message.hasOwnProperty("Func"))
                if (!$util.isString(message.Func))
                    return "Func: string expected";
            if (message.Schema != null && message.hasOwnProperty("Schema"))
                if (!$util.isString(message.Schema))
                    return "Schema: string expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                switch (message.Level) {
                default:
                    return "Level: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeFunc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeFunc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeFunc} NodeFunc
         */
        NodeFunc.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeFunc)
                return object;
            let message = new $root.protoManage.NodeFunc();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeFunc.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.NodeID != null)
                if ($util.Long)
                    (message.NodeID = $util.Long.fromValue(object.NodeID)).unsigned = false;
                else if (typeof object.NodeID === "string")
                    message.NodeID = parseInt(object.NodeID, 10);
                else if (typeof object.NodeID === "number")
                    message.NodeID = object.NodeID;
                else if (typeof object.NodeID === "object")
                    message.NodeID = new $util.LongBits(object.NodeID.low >>> 0, object.NodeID.high >>> 0).toNumber();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Func != null)
                message.Func = String(object.Func);
            if (object.Schema != null)
                message.Schema = String(object.Schema);
            switch (object.Level) {
            case "LevelNot":
            case 0:
                message.Level = 0;
                break;
            case "LevelPrimary":
            case 1:
                message.Level = 1;
                break;
            case "LevelIntermediate":
            case 2:
                message.Level = 2;
                break;
            case "LevelSenior":
            case 3:
                message.Level = 3;
                break;
            case "LevelSuper":
            case 4:
                message.Level = 4;
                break;
            }
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeFunc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeFunc
         * @static
         * @param {protoManage.NodeFunc} message NodeFunc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeFunc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.NodeID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NodeID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Func = "";
                object.Schema = "";
                object.Level = options.enums === String ? "LevelNot" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (typeof message.NodeID === "number")
                    object.NodeID = options.longs === String ? String(message.NodeID) : message.NodeID;
                else
                    object.NodeID = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID) : options.longs === Number ? new $util.LongBits(message.NodeID.low >>> 0, message.NodeID.high >>> 0).toNumber() : message.NodeID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Func != null && message.hasOwnProperty("Func"))
                object.Func = message.Func;
            if (message.Schema != null && message.hasOwnProperty("Schema"))
                object.Schema = message.Schema;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = options.enums === String ? $root.protoManage.Level[message.Level] : message.Level;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeFunc to JSON.
         * @function toJSON
         * @memberof protoManage.NodeFunc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeFunc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeFunc;
    })();

    protoManage.NodeFuncCall = (function() {

        /**
         * Properties of a NodeFuncCall.
         * @memberof protoManage
         * @interface INodeFuncCall
         * @property {protoManage.IBase|null} [Base] NodeFuncCall Base
         * @property {number|null} [RequesterID] NodeFuncCall RequesterID
         * @property {string|null} [RequesterName] NodeFuncCall RequesterName
         * @property {number|null} [FuncID] NodeFuncCall FuncID
         * @property {string|null} [Parameter] NodeFuncCall Parameter
         * @property {string|null} [ReturnVal] NodeFuncCall ReturnVal
         * @property {protoManage.NodeFuncReturnType|null} [ReturnType] NodeFuncCall ReturnType
         * @property {protoManage.State|null} [State] NodeFuncCall State
         */

        /**
         * Constructs a new NodeFuncCall.
         * @memberof protoManage
         * @classdesc Represents a NodeFuncCall.
         * @implements INodeFuncCall
         * @constructor
         * @param {protoManage.INodeFuncCall=} [properties] Properties to set
         */
        function NodeFuncCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeFuncCall Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.Base = null;

        /**
         * NodeFuncCall RequesterID.
         * @member {number} RequesterID
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.RequesterID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeFuncCall RequesterName.
         * @member {string} RequesterName
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.RequesterName = "";

        /**
         * NodeFuncCall FuncID.
         * @member {number} FuncID
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.FuncID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeFuncCall Parameter.
         * @member {string} Parameter
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.Parameter = "";

        /**
         * NodeFuncCall ReturnVal.
         * @member {string} ReturnVal
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.ReturnVal = "";

        /**
         * NodeFuncCall ReturnType.
         * @member {protoManage.NodeFuncReturnType} ReturnType
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.ReturnType = 0;

        /**
         * NodeFuncCall State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.State = 0;

        /**
         * Creates a new NodeFuncCall instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {protoManage.INodeFuncCall=} [properties] Properties to set
         * @returns {protoManage.NodeFuncCall} NodeFuncCall instance
         */
        NodeFuncCall.create = function create(properties) {
            return new NodeFuncCall(properties);
        };

        /**
         * Encodes the specified NodeFuncCall message. Does not implicitly {@link protoManage.NodeFuncCall.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {protoManage.INodeFuncCall} message NodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeFuncCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.RequesterID != null && Object.hasOwnProperty.call(message, "RequesterID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.RequesterID);
            if (message.RequesterName != null && Object.hasOwnProperty.call(message, "RequesterName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RequesterName);
            if (message.FuncID != null && Object.hasOwnProperty.call(message, "FuncID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.FuncID);
            if (message.Parameter != null && Object.hasOwnProperty.call(message, "Parameter"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Parameter);
            if (message.ReturnVal != null && Object.hasOwnProperty.call(message, "ReturnVal"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ReturnVal);
            if (message.ReturnType != null && Object.hasOwnProperty.call(message, "ReturnType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ReturnType);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeFuncCall message, length delimited. Does not implicitly {@link protoManage.NodeFuncCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {protoManage.INodeFuncCall} message NodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeFuncCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeFuncCall message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeFuncCall} NodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeFuncCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeFuncCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.RequesterID = reader.int64();
                    break;
                case 3:
                    message.RequesterName = reader.string();
                    break;
                case 4:
                    message.FuncID = reader.int64();
                    break;
                case 5:
                    message.Parameter = reader.string();
                    break;
                case 6:
                    message.ReturnVal = reader.string();
                    break;
                case 7:
                    message.ReturnType = reader.int32();
                    break;
                case 8:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeFuncCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeFuncCall} NodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeFuncCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeFuncCall message.
         * @function verify
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeFuncCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.RequesterID != null && message.hasOwnProperty("RequesterID"))
                if (!$util.isInteger(message.RequesterID) && !(message.RequesterID && $util.isInteger(message.RequesterID.low) && $util.isInteger(message.RequesterID.high)))
                    return "RequesterID: integer|Long expected";
            if (message.RequesterName != null && message.hasOwnProperty("RequesterName"))
                if (!$util.isString(message.RequesterName))
                    return "RequesterName: string expected";
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (!$util.isInteger(message.FuncID) && !(message.FuncID && $util.isInteger(message.FuncID.low) && $util.isInteger(message.FuncID.high)))
                    return "FuncID: integer|Long expected";
            if (message.Parameter != null && message.hasOwnProperty("Parameter"))
                if (!$util.isString(message.Parameter))
                    return "Parameter: string expected";
            if (message.ReturnVal != null && message.hasOwnProperty("ReturnVal"))
                if (!$util.isString(message.ReturnVal))
                    return "ReturnVal: string expected";
            if (message.ReturnType != null && message.hasOwnProperty("ReturnType"))
                switch (message.ReturnType) {
                default:
                    return "ReturnType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeFuncCall} NodeFuncCall
         */
        NodeFuncCall.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeFuncCall)
                return object;
            let message = new $root.protoManage.NodeFuncCall();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeFuncCall.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.RequesterID != null)
                if ($util.Long)
                    (message.RequesterID = $util.Long.fromValue(object.RequesterID)).unsigned = false;
                else if (typeof object.RequesterID === "string")
                    message.RequesterID = parseInt(object.RequesterID, 10);
                else if (typeof object.RequesterID === "number")
                    message.RequesterID = object.RequesterID;
                else if (typeof object.RequesterID === "object")
                    message.RequesterID = new $util.LongBits(object.RequesterID.low >>> 0, object.RequesterID.high >>> 0).toNumber();
            if (object.RequesterName != null)
                message.RequesterName = String(object.RequesterName);
            if (object.FuncID != null)
                if ($util.Long)
                    (message.FuncID = $util.Long.fromValue(object.FuncID)).unsigned = false;
                else if (typeof object.FuncID === "string")
                    message.FuncID = parseInt(object.FuncID, 10);
                else if (typeof object.FuncID === "number")
                    message.FuncID = object.FuncID;
                else if (typeof object.FuncID === "object")
                    message.FuncID = new $util.LongBits(object.FuncID.low >>> 0, object.FuncID.high >>> 0).toNumber();
            if (object.Parameter != null)
                message.Parameter = String(object.Parameter);
            if (object.ReturnVal != null)
                message.ReturnVal = String(object.ReturnVal);
            switch (object.ReturnType) {
            case "Unknown":
            case 0:
                message.ReturnType = 0;
                break;
            case "NotReturn":
            case 1:
                message.ReturnType = 1;
                break;
            case "Error":
            case 2:
                message.ReturnType = 2;
                break;
            case "Text":
            case 3:
                message.ReturnType = 3;
                break;
            case "Json":
            case 4:
                message.ReturnType = 4;
                break;
            case "Link":
            case 5:
                message.ReturnType = 5;
                break;
            case "Image":
            case 6:
                message.ReturnType = 6;
                break;
            case "Media":
            case 7:
                message.ReturnType = 7;
                break;
            case "File":
            case 8:
                message.ReturnType = 8;
                break;
            case "Table":
            case 9:
                message.ReturnType = 9;
                break;
            case "Charts":
            case 10:
                message.ReturnType = 10;
                break;
            }
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeFuncCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeFuncCall
         * @static
         * @param {protoManage.NodeFuncCall} message NodeFuncCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeFuncCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.RequesterID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RequesterID = options.longs === String ? "0" : 0;
                object.RequesterName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.FuncID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FuncID = options.longs === String ? "0" : 0;
                object.Parameter = "";
                object.ReturnVal = "";
                object.ReturnType = options.enums === String ? "Unknown" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.RequesterID != null && message.hasOwnProperty("RequesterID"))
                if (typeof message.RequesterID === "number")
                    object.RequesterID = options.longs === String ? String(message.RequesterID) : message.RequesterID;
                else
                    object.RequesterID = options.longs === String ? $util.Long.prototype.toString.call(message.RequesterID) : options.longs === Number ? new $util.LongBits(message.RequesterID.low >>> 0, message.RequesterID.high >>> 0).toNumber() : message.RequesterID;
            if (message.RequesterName != null && message.hasOwnProperty("RequesterName"))
                object.RequesterName = message.RequesterName;
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (typeof message.FuncID === "number")
                    object.FuncID = options.longs === String ? String(message.FuncID) : message.FuncID;
                else
                    object.FuncID = options.longs === String ? $util.Long.prototype.toString.call(message.FuncID) : options.longs === Number ? new $util.LongBits(message.FuncID.low >>> 0, message.FuncID.high >>> 0).toNumber() : message.FuncID;
            if (message.Parameter != null && message.hasOwnProperty("Parameter"))
                object.Parameter = message.Parameter;
            if (message.ReturnVal != null && message.hasOwnProperty("ReturnVal"))
                object.ReturnVal = message.ReturnVal;
            if (message.ReturnType != null && message.hasOwnProperty("ReturnType"))
                object.ReturnType = options.enums === String ? $root.protoManage.NodeFuncReturnType[message.ReturnType] : message.ReturnType;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeFuncCall to JSON.
         * @function toJSON
         * @memberof protoManage.NodeFuncCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeFuncCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeFuncCall;
    })();

    protoManage.NodeReport = (function() {

        /**
         * Properties of a NodeReport.
         * @memberof protoManage
         * @interface INodeReport
         * @property {protoManage.IBase|null} [Base] NodeReport Base
         * @property {number|null} [NodeID] NodeReport NodeID
         * @property {string|null} [Name] NodeReport Name
         * @property {protoManage.NodeReportType|null} [Type] NodeReport Type
         * @property {string|null} [Func] NodeReport Func
         * @property {string|null} [Schema] NodeReport Schema
         * @property {number|null} [Interval] NodeReport Interval
         * @property {protoManage.Level|null} [Level] NodeReport Level
         * @property {protoManage.State|null} [State] NodeReport State
         */

        /**
         * Constructs a new NodeReport.
         * @memberof protoManage
         * @classdesc Represents a NodeReport.
         * @implements INodeReport
         * @constructor
         * @param {protoManage.INodeReport=} [properties] Properties to set
         */
        function NodeReport(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeReport Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Base = null;

        /**
         * NodeReport NodeID.
         * @member {number} NodeID
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.NodeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeReport Name.
         * @member {string} Name
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Name = "";

        /**
         * NodeReport Type.
         * @member {protoManage.NodeReportType} Type
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Type = 0;

        /**
         * NodeReport Func.
         * @member {string} Func
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Func = "";

        /**
         * NodeReport Schema.
         * @member {string} Schema
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Schema = "";

        /**
         * NodeReport Interval.
         * @member {number} Interval
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Interval = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeReport Level.
         * @member {protoManage.Level} Level
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Level = 0;

        /**
         * NodeReport State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.State = 0;

        /**
         * Creates a new NodeReport instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeReport
         * @static
         * @param {protoManage.INodeReport=} [properties] Properties to set
         * @returns {protoManage.NodeReport} NodeReport instance
         */
        NodeReport.create = function create(properties) {
            return new NodeReport(properties);
        };

        /**
         * Encodes the specified NodeReport message. Does not implicitly {@link protoManage.NodeReport.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeReport
         * @static
         * @param {protoManage.INodeReport} message NodeReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NodeID != null && Object.hasOwnProperty.call(message, "NodeID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NodeID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Name);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            if (message.Func != null && Object.hasOwnProperty.call(message, "Func"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Func);
            if (message.Schema != null && Object.hasOwnProperty.call(message, "Schema"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Schema);
            if (message.Interval != null && Object.hasOwnProperty.call(message, "Interval"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.Interval);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Level);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeReport message, length delimited. Does not implicitly {@link protoManage.NodeReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeReport
         * @static
         * @param {protoManage.INodeReport} message NodeReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeReport message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeReport} NodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.NodeID = reader.int64();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.Type = reader.int32();
                    break;
                case 5:
                    message.Func = reader.string();
                    break;
                case 6:
                    message.Schema = reader.string();
                    break;
                case 7:
                    message.Interval = reader.int64();
                    break;
                case 8:
                    message.Level = reader.int32();
                    break;
                case 9:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeReport} NodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeReport message.
         * @function verify
         * @memberof protoManage.NodeReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (!$util.isInteger(message.NodeID) && !(message.NodeID && $util.isInteger(message.NodeID.low) && $util.isInteger(message.NodeID.high)))
                    return "NodeID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.Func != null && message.hasOwnProperty("Func"))
                if (!$util.isString(message.Func))
                    return "Func: string expected";
            if (message.Schema != null && message.hasOwnProperty("Schema"))
                if (!$util.isString(message.Schema))
                    return "Schema: string expected";
            if (message.Interval != null && message.hasOwnProperty("Interval"))
                if (!$util.isInteger(message.Interval) && !(message.Interval && $util.isInteger(message.Interval.low) && $util.isInteger(message.Interval.high)))
                    return "Interval: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                switch (message.Level) {
                default:
                    return "Level: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeReport} NodeReport
         */
        NodeReport.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeReport)
                return object;
            let message = new $root.protoManage.NodeReport();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeReport.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.NodeID != null)
                if ($util.Long)
                    (message.NodeID = $util.Long.fromValue(object.NodeID)).unsigned = false;
                else if (typeof object.NodeID === "string")
                    message.NodeID = parseInt(object.NodeID, 10);
                else if (typeof object.NodeID === "number")
                    message.NodeID = object.NodeID;
                else if (typeof object.NodeID === "object")
                    message.NodeID = new $util.LongBits(object.NodeID.low >>> 0, object.NodeID.high >>> 0).toNumber();
            if (object.Name != null)
                message.Name = String(object.Name);
            switch (object.Type) {
            case "NodeReportTypeUnknown":
            case 0:
                message.Type = 0;
                break;
            case "NodeReportTypeTable":
            case 1:
                message.Type = 1;
                break;
            case "NodeReportTypeLine":
            case 2:
                message.Type = 2;
                break;
            }
            if (object.Func != null)
                message.Func = String(object.Func);
            if (object.Schema != null)
                message.Schema = String(object.Schema);
            if (object.Interval != null)
                if ($util.Long)
                    (message.Interval = $util.Long.fromValue(object.Interval)).unsigned = false;
                else if (typeof object.Interval === "string")
                    message.Interval = parseInt(object.Interval, 10);
                else if (typeof object.Interval === "number")
                    message.Interval = object.Interval;
                else if (typeof object.Interval === "object")
                    message.Interval = new $util.LongBits(object.Interval.low >>> 0, object.Interval.high >>> 0).toNumber();
            switch (object.Level) {
            case "LevelNot":
            case 0:
                message.Level = 0;
                break;
            case "LevelPrimary":
            case 1:
                message.Level = 1;
                break;
            case "LevelIntermediate":
            case 2:
                message.Level = 2;
                break;
            case "LevelSenior":
            case 3:
                message.Level = 3;
                break;
            case "LevelSuper":
            case 4:
                message.Level = 4;
                break;
            }
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeReport
         * @static
         * @param {protoManage.NodeReport} message NodeReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.NodeID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NodeID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Type = options.enums === String ? "NodeReportTypeUnknown" : 0;
                object.Func = "";
                object.Schema = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Interval = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Interval = options.longs === String ? "0" : 0;
                object.Level = options.enums === String ? "LevelNot" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (typeof message.NodeID === "number")
                    object.NodeID = options.longs === String ? String(message.NodeID) : message.NodeID;
                else
                    object.NodeID = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID) : options.longs === Number ? new $util.LongBits(message.NodeID.low >>> 0, message.NodeID.high >>> 0).toNumber() : message.NodeID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.protoManage.NodeReportType[message.Type] : message.Type;
            if (message.Func != null && message.hasOwnProperty("Func"))
                object.Func = message.Func;
            if (message.Schema != null && message.hasOwnProperty("Schema"))
                object.Schema = message.Schema;
            if (message.Interval != null && message.hasOwnProperty("Interval"))
                if (typeof message.Interval === "number")
                    object.Interval = options.longs === String ? String(message.Interval) : message.Interval;
                else
                    object.Interval = options.longs === String ? $util.Long.prototype.toString.call(message.Interval) : options.longs === Number ? new $util.LongBits(message.Interval.low >>> 0, message.Interval.high >>> 0).toNumber() : message.Interval;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = options.enums === String ? $root.protoManage.Level[message.Level] : message.Level;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeReport to JSON.
         * @function toJSON
         * @memberof protoManage.NodeReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeReport;
    })();

    protoManage.NodeReportVal = (function() {

        /**
         * Properties of a NodeReportVal.
         * @memberof protoManage
         * @interface INodeReportVal
         * @property {protoManage.IBase|null} [Base] NodeReportVal Base
         * @property {number|null} [ReportID] NodeReportVal ReportID
         * @property {string|null} [Value] NodeReportVal Value
         * @property {protoManage.State|null} [State] NodeReportVal State
         */

        /**
         * Constructs a new NodeReportVal.
         * @memberof protoManage
         * @classdesc Represents a NodeReportVal.
         * @implements INodeReportVal
         * @constructor
         * @param {protoManage.INodeReportVal=} [properties] Properties to set
         */
        function NodeReportVal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeReportVal Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeReportVal
         * @instance
         */
        NodeReportVal.prototype.Base = null;

        /**
         * NodeReportVal ReportID.
         * @member {number} ReportID
         * @memberof protoManage.NodeReportVal
         * @instance
         */
        NodeReportVal.prototype.ReportID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeReportVal Value.
         * @member {string} Value
         * @memberof protoManage.NodeReportVal
         * @instance
         */
        NodeReportVal.prototype.Value = "";

        /**
         * NodeReportVal State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeReportVal
         * @instance
         */
        NodeReportVal.prototype.State = 0;

        /**
         * Creates a new NodeReportVal instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {protoManage.INodeReportVal=} [properties] Properties to set
         * @returns {protoManage.NodeReportVal} NodeReportVal instance
         */
        NodeReportVal.create = function create(properties) {
            return new NodeReportVal(properties);
        };

        /**
         * Encodes the specified NodeReportVal message. Does not implicitly {@link protoManage.NodeReportVal.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {protoManage.INodeReportVal} message NodeReportVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReportVal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ReportID != null && Object.hasOwnProperty.call(message, "ReportID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ReportID);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Value);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeReportVal message, length delimited. Does not implicitly {@link protoManage.NodeReportVal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {protoManage.INodeReportVal} message NodeReportVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReportVal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeReportVal message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeReportVal} NodeReportVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReportVal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeReportVal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ReportID = reader.int64();
                    break;
                case 3:
                    message.Value = reader.string();
                    break;
                case 4:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeReportVal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeReportVal} NodeReportVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReportVal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeReportVal message.
         * @function verify
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeReportVal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (!$util.isInteger(message.ReportID) && !(message.ReportID && $util.isInteger(message.ReportID.low) && $util.isInteger(message.ReportID.high)))
                    return "ReportID: integer|Long expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isString(message.Value))
                    return "Value: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeReportVal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeReportVal} NodeReportVal
         */
        NodeReportVal.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeReportVal)
                return object;
            let message = new $root.protoManage.NodeReportVal();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeReportVal.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.ReportID != null)
                if ($util.Long)
                    (message.ReportID = $util.Long.fromValue(object.ReportID)).unsigned = false;
                else if (typeof object.ReportID === "string")
                    message.ReportID = parseInt(object.ReportID, 10);
                else if (typeof object.ReportID === "number")
                    message.ReportID = object.ReportID;
                else if (typeof object.ReportID === "object")
                    message.ReportID = new $util.LongBits(object.ReportID.low >>> 0, object.ReportID.high >>> 0).toNumber();
            if (object.Value != null)
                message.Value = String(object.Value);
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeReportVal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeReportVal
         * @static
         * @param {protoManage.NodeReportVal} message NodeReportVal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeReportVal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ReportID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ReportID = options.longs === String ? "0" : 0;
                object.Value = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (typeof message.ReportID === "number")
                    object.ReportID = options.longs === String ? String(message.ReportID) : message.ReportID;
                else
                    object.ReportID = options.longs === String ? $util.Long.prototype.toString.call(message.ReportID) : options.longs === Number ? new $util.LongBits(message.ReportID.low >>> 0, message.ReportID.high >>> 0).toNumber() : message.ReportID;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeReportVal to JSON.
         * @function toJSON
         * @memberof protoManage.NodeReportVal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeReportVal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeReportVal;
    })();

    protoManage.NodeNotify = (function() {

        /**
         * Properties of a NodeNotify.
         * @memberof protoManage
         * @interface INodeNotify
         * @property {protoManage.IBase|null} [Base] NodeNotify Base
         * @property {number|null} [SenderID] NodeNotify SenderID
         * @property {string|null} [SenderName] NodeNotify SenderName
         * @property {protoManage.NotifySenderType|null} [SenderType] NodeNotify SenderType
         * @property {string|null} [Message] NodeNotify Message
         * @property {protoManage.State|null} [State] NodeNotify State
         * @property {boolean|null} [showPop] NodeNotify showPop
         */

        /**
         * Constructs a new NodeNotify.
         * @memberof protoManage
         * @classdesc Represents a NodeNotify.
         * @implements INodeNotify
         * @constructor
         * @param {protoManage.INodeNotify=} [properties] Properties to set
         */
        function NodeNotify(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeNotify Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.Base = null;

        /**
         * NodeNotify SenderID.
         * @member {number} SenderID
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeNotify SenderName.
         * @member {string} SenderName
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.SenderName = "";

        /**
         * NodeNotify SenderType.
         * @member {protoManage.NotifySenderType} SenderType
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.SenderType = 0;

        /**
         * NodeNotify Message.
         * @member {string} Message
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.Message = "";

        /**
         * NodeNotify State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.State = 0;

        /**
         * NodeNotify showPop.
         * @member {boolean} showPop
         * @memberof protoManage.NodeNotify
         * @instance
         */
        NodeNotify.prototype.showPop = false;

        /**
         * Creates a new NodeNotify instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeNotify
         * @static
         * @param {protoManage.INodeNotify=} [properties] Properties to set
         * @returns {protoManage.NodeNotify} NodeNotify instance
         */
        NodeNotify.create = function create(properties) {
            return new NodeNotify(properties);
        };

        /**
         * Encodes the specified NodeNotify message. Does not implicitly {@link protoManage.NodeNotify.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeNotify
         * @static
         * @param {protoManage.INodeNotify} message NodeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.SenderID != null && Object.hasOwnProperty.call(message, "SenderID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SenderID);
            if (message.SenderName != null && Object.hasOwnProperty.call(message, "SenderName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.SenderName);
            if (message.SenderType != null && Object.hasOwnProperty.call(message, "SenderType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.SenderType);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Message);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.State);
            if (message.showPop != null && Object.hasOwnProperty.call(message, "showPop"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.showPop);
            return writer;
        };

        /**
         * Encodes the specified NodeNotify message, length delimited. Does not implicitly {@link protoManage.NodeNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeNotify
         * @static
         * @param {protoManage.INodeNotify} message NodeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeNotify message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeNotify} NodeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeNotify();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.SenderID = reader.int64();
                    break;
                case 3:
                    message.SenderName = reader.string();
                    break;
                case 4:
                    message.SenderType = reader.int32();
                    break;
                case 5:
                    message.Message = reader.string();
                    break;
                case 6:
                    message.State = reader.int32();
                    break;
                case 7:
                    message.showPop = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeNotify} NodeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeNotify message.
         * @function verify
         * @memberof protoManage.NodeNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                if (!$util.isString(message.SenderName))
                    return "SenderName: string expected";
            if (message.SenderType != null && message.hasOwnProperty("SenderType"))
                switch (message.SenderType) {
                default:
                    return "SenderType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.showPop != null && message.hasOwnProperty("showPop"))
                if (typeof message.showPop !== "boolean")
                    return "showPop: boolean expected";
            return null;
        };

        /**
         * Creates a NodeNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeNotify} NodeNotify
         */
        NodeNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeNotify)
                return object;
            let message = new $root.protoManage.NodeNotify();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeNotify.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = false;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber();
            if (object.SenderName != null)
                message.SenderName = String(object.SenderName);
            switch (object.SenderType) {
            case "NotifySenderTypeUnknow":
            case 0:
                message.SenderType = 0;
                break;
            case "NotifySenderTypeUser":
            case 1:
                message.SenderType = 1;
                break;
            case "NotifySenderTypeNode":
            case 2:
                message.SenderType = 2;
                break;
            }
            if (object.Message != null)
                message.Message = String(object.Message);
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            if (object.showPop != null)
                message.showPop = Boolean(object.showPop);
            return message;
        };

        /**
         * Creates a plain object from a NodeNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeNotify
         * @static
         * @param {protoManage.NodeNotify} message NodeNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
                object.SenderName = "";
                object.SenderType = options.enums === String ? "NotifySenderTypeUnknow" : 0;
                object.Message = "";
                object.State = options.enums === String ? "StateNot" : 0;
                object.showPop = false;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber() : message.SenderID;
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                object.SenderName = message.SenderName;
            if (message.SenderType != null && message.hasOwnProperty("SenderType"))
                object.SenderType = options.enums === String ? $root.protoManage.NotifySenderType[message.SenderType] : message.SenderType;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            if (message.showPop != null && message.hasOwnProperty("showPop"))
                object.showPop = message.showPop;
            return object;
        };

        /**
         * Converts this NodeNotify to JSON.
         * @function toJSON
         * @memberof protoManage.NodeNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeNotify;
    })();

    protoManage.NodeResource = (function() {

        /**
         * Properties of a NodeResource.
         * @memberof protoManage
         * @interface INodeResource
         * @property {protoManage.IBase|null} [Base] NodeResource Base
         * @property {string|null} [Name] NodeResource Name
         * @property {string|null} [Md5] NodeResource Md5
         * @property {number|null} [Sizes] NodeResource Sizes
         * @property {protoManage.NodeResourceType|null} [Type] NodeResource Type
         * @property {number|null} [UploaderID] NodeResource UploaderID
         * @property {string|null} [UploaderName] NodeResource UploaderName
         * @property {protoManage.NotifySenderType|null} [UploaderType] NodeResource UploaderType
         * @property {number|null} [DownLoadCnt] NodeResource DownLoadCnt
         * @property {protoManage.State|null} [State] NodeResource State
         */

        /**
         * Constructs a new NodeResource.
         * @memberof protoManage
         * @classdesc Represents a NodeResource.
         * @implements INodeResource
         * @constructor
         * @param {protoManage.INodeResource=} [properties] Properties to set
         */
        function NodeResource(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeResource Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.Base = null;

        /**
         * NodeResource Name.
         * @member {string} Name
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.Name = "";

        /**
         * NodeResource Md5.
         * @member {string} Md5
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.Md5 = "";

        /**
         * NodeResource Sizes.
         * @member {number} Sizes
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.Sizes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeResource Type.
         * @member {protoManage.NodeResourceType} Type
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.Type = 0;

        /**
         * NodeResource UploaderID.
         * @member {number} UploaderID
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.UploaderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeResource UploaderName.
         * @member {string} UploaderName
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.UploaderName = "";

        /**
         * NodeResource UploaderType.
         * @member {protoManage.NotifySenderType} UploaderType
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.UploaderType = 0;

        /**
         * NodeResource DownLoadCnt.
         * @member {number} DownLoadCnt
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.DownLoadCnt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeResource State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeResource
         * @instance
         */
        NodeResource.prototype.State = 0;

        /**
         * Creates a new NodeResource instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeResource
         * @static
         * @param {protoManage.INodeResource=} [properties] Properties to set
         * @returns {protoManage.NodeResource} NodeResource instance
         */
        NodeResource.create = function create(properties) {
            return new NodeResource(properties);
        };

        /**
         * Encodes the specified NodeResource message. Does not implicitly {@link protoManage.NodeResource.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeResource
         * @static
         * @param {protoManage.INodeResource} message NodeResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeResource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Md5 != null && Object.hasOwnProperty.call(message, "Md5"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Md5);
            if (message.Sizes != null && Object.hasOwnProperty.call(message, "Sizes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Sizes);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Type);
            if (message.UploaderID != null && Object.hasOwnProperty.call(message, "UploaderID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.UploaderID);
            if (message.UploaderName != null && Object.hasOwnProperty.call(message, "UploaderName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.UploaderName);
            if (message.UploaderType != null && Object.hasOwnProperty.call(message, "UploaderType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.UploaderType);
            if (message.DownLoadCnt != null && Object.hasOwnProperty.call(message, "DownLoadCnt"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.DownLoadCnt);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeResource message, length delimited. Does not implicitly {@link protoManage.NodeResource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeResource
         * @static
         * @param {protoManage.INodeResource} message NodeResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeResource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeResource message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeResource} NodeResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeResource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeResource();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Md5 = reader.string();
                    break;
                case 4:
                    message.Sizes = reader.int64();
                    break;
                case 5:
                    message.Type = reader.int32();
                    break;
                case 6:
                    message.UploaderID = reader.int64();
                    break;
                case 7:
                    message.UploaderName = reader.string();
                    break;
                case 8:
                    message.UploaderType = reader.int32();
                    break;
                case 9:
                    message.DownLoadCnt = reader.int64();
                    break;
                case 10:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeResource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeResource} NodeResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeResource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeResource message.
         * @function verify
         * @memberof protoManage.NodeResource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeResource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Md5 != null && message.hasOwnProperty("Md5"))
                if (!$util.isString(message.Md5))
                    return "Md5: string expected";
            if (message.Sizes != null && message.hasOwnProperty("Sizes"))
                if (!$util.isInteger(message.Sizes) && !(message.Sizes && $util.isInteger(message.Sizes.low) && $util.isInteger(message.Sizes.high)))
                    return "Sizes: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.UploaderID != null && message.hasOwnProperty("UploaderID"))
                if (!$util.isInteger(message.UploaderID) && !(message.UploaderID && $util.isInteger(message.UploaderID.low) && $util.isInteger(message.UploaderID.high)))
                    return "UploaderID: integer|Long expected";
            if (message.UploaderName != null && message.hasOwnProperty("UploaderName"))
                if (!$util.isString(message.UploaderName))
                    return "UploaderName: string expected";
            if (message.UploaderType != null && message.hasOwnProperty("UploaderType"))
                switch (message.UploaderType) {
                default:
                    return "UploaderType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.DownLoadCnt != null && message.hasOwnProperty("DownLoadCnt"))
                if (!$util.isInteger(message.DownLoadCnt) && !(message.DownLoadCnt && $util.isInteger(message.DownLoadCnt.low) && $util.isInteger(message.DownLoadCnt.high)))
                    return "DownLoadCnt: integer|Long expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeResource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeResource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeResource} NodeResource
         */
        NodeResource.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeResource)
                return object;
            let message = new $root.protoManage.NodeResource();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeResource.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Md5 != null)
                message.Md5 = String(object.Md5);
            if (object.Sizes != null)
                if ($util.Long)
                    (message.Sizes = $util.Long.fromValue(object.Sizes)).unsigned = false;
                else if (typeof object.Sizes === "string")
                    message.Sizes = parseInt(object.Sizes, 10);
                else if (typeof object.Sizes === "number")
                    message.Sizes = object.Sizes;
                else if (typeof object.Sizes === "object")
                    message.Sizes = new $util.LongBits(object.Sizes.low >>> 0, object.Sizes.high >>> 0).toNumber();
            switch (object.Type) {
            case "NodeResourceTypeUnknow":
            case 0:
                message.Type = 0;
                break;
            case "NodeResourceTypeCache":
            case 1:
                message.Type = 1;
                break;
            }
            if (object.UploaderID != null)
                if ($util.Long)
                    (message.UploaderID = $util.Long.fromValue(object.UploaderID)).unsigned = false;
                else if (typeof object.UploaderID === "string")
                    message.UploaderID = parseInt(object.UploaderID, 10);
                else if (typeof object.UploaderID === "number")
                    message.UploaderID = object.UploaderID;
                else if (typeof object.UploaderID === "object")
                    message.UploaderID = new $util.LongBits(object.UploaderID.low >>> 0, object.UploaderID.high >>> 0).toNumber();
            if (object.UploaderName != null)
                message.UploaderName = String(object.UploaderName);
            switch (object.UploaderType) {
            case "NotifySenderTypeUnknow":
            case 0:
                message.UploaderType = 0;
                break;
            case "NotifySenderTypeUser":
            case 1:
                message.UploaderType = 1;
                break;
            case "NotifySenderTypeNode":
            case 2:
                message.UploaderType = 2;
                break;
            }
            if (object.DownLoadCnt != null)
                if ($util.Long)
                    (message.DownLoadCnt = $util.Long.fromValue(object.DownLoadCnt)).unsigned = false;
                else if (typeof object.DownLoadCnt === "string")
                    message.DownLoadCnt = parseInt(object.DownLoadCnt, 10);
                else if (typeof object.DownLoadCnt === "number")
                    message.DownLoadCnt = object.DownLoadCnt;
                else if (typeof object.DownLoadCnt === "object")
                    message.DownLoadCnt = new $util.LongBits(object.DownLoadCnt.low >>> 0, object.DownLoadCnt.high >>> 0).toNumber();
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeResource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeResource
         * @static
         * @param {protoManage.NodeResource} message NodeResource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeResource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
                object.Md5 = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Sizes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Sizes = options.longs === String ? "0" : 0;
                object.Type = options.enums === String ? "NodeResourceTypeUnknow" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.UploaderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UploaderID = options.longs === String ? "0" : 0;
                object.UploaderName = "";
                object.UploaderType = options.enums === String ? "NotifySenderTypeUnknow" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.DownLoadCnt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.DownLoadCnt = options.longs === String ? "0" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Md5 != null && message.hasOwnProperty("Md5"))
                object.Md5 = message.Md5;
            if (message.Sizes != null && message.hasOwnProperty("Sizes"))
                if (typeof message.Sizes === "number")
                    object.Sizes = options.longs === String ? String(message.Sizes) : message.Sizes;
                else
                    object.Sizes = options.longs === String ? $util.Long.prototype.toString.call(message.Sizes) : options.longs === Number ? new $util.LongBits(message.Sizes.low >>> 0, message.Sizes.high >>> 0).toNumber() : message.Sizes;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.protoManage.NodeResourceType[message.Type] : message.Type;
            if (message.UploaderID != null && message.hasOwnProperty("UploaderID"))
                if (typeof message.UploaderID === "number")
                    object.UploaderID = options.longs === String ? String(message.UploaderID) : message.UploaderID;
                else
                    object.UploaderID = options.longs === String ? $util.Long.prototype.toString.call(message.UploaderID) : options.longs === Number ? new $util.LongBits(message.UploaderID.low >>> 0, message.UploaderID.high >>> 0).toNumber() : message.UploaderID;
            if (message.UploaderName != null && message.hasOwnProperty("UploaderName"))
                object.UploaderName = message.UploaderName;
            if (message.UploaderType != null && message.hasOwnProperty("UploaderType"))
                object.UploaderType = options.enums === String ? $root.protoManage.NotifySenderType[message.UploaderType] : message.UploaderType;
            if (message.DownLoadCnt != null && message.hasOwnProperty("DownLoadCnt"))
                if (typeof message.DownLoadCnt === "number")
                    object.DownLoadCnt = options.longs === String ? String(message.DownLoadCnt) : message.DownLoadCnt;
                else
                    object.DownLoadCnt = options.longs === String ? $util.Long.prototype.toString.call(message.DownLoadCnt) : options.longs === Number ? new $util.LongBits(message.DownLoadCnt.low >>> 0, message.DownLoadCnt.high >>> 0).toNumber() : message.DownLoadCnt;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeResource to JSON.
         * @function toJSON
         * @memberof protoManage.NodeResource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeResource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeResource;
    })();

    protoManage.ReqSystemInitInfo = (function() {

        /**
         * Properties of a ReqSystemInitInfo.
         * @memberof protoManage
         * @interface IReqSystemInitInfo
         */

        /**
         * Constructs a new ReqSystemInitInfo.
         * @memberof protoManage
         * @classdesc Represents a ReqSystemInitInfo.
         * @implements IReqSystemInitInfo
         * @constructor
         * @param {protoManage.IReqSystemInitInfo=} [properties] Properties to set
         */
        function ReqSystemInitInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqSystemInitInfo instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {protoManage.IReqSystemInitInfo=} [properties] Properties to set
         * @returns {protoManage.ReqSystemInitInfo} ReqSystemInitInfo instance
         */
        ReqSystemInitInfo.create = function create(properties) {
            return new ReqSystemInitInfo(properties);
        };

        /**
         * Encodes the specified ReqSystemInitInfo message. Does not implicitly {@link protoManage.ReqSystemInitInfo.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {protoManage.IReqSystemInitInfo} message ReqSystemInitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSystemInitInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqSystemInitInfo message, length delimited. Does not implicitly {@link protoManage.ReqSystemInitInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {protoManage.IReqSystemInitInfo} message ReqSystemInitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSystemInitInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSystemInitInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqSystemInitInfo} ReqSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSystemInitInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqSystemInitInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqSystemInitInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqSystemInitInfo} ReqSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSystemInitInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSystemInitInfo message.
         * @function verify
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSystemInitInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqSystemInitInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqSystemInitInfo} ReqSystemInitInfo
         */
        ReqSystemInitInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqSystemInitInfo)
                return object;
            return new $root.protoManage.ReqSystemInitInfo();
        };

        /**
         * Creates a plain object from a ReqSystemInitInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqSystemInitInfo
         * @static
         * @param {protoManage.ReqSystemInitInfo} message ReqSystemInitInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqSystemInitInfo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqSystemInitInfo to JSON.
         * @function toJSON
         * @memberof protoManage.ReqSystemInitInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqSystemInitInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqSystemInitInfo;
    })();

    protoManage.AnsSystemInitInfo = (function() {

        /**
         * Properties of an AnsSystemInitInfo.
         * @memberof protoManage
         * @interface IAnsSystemInitInfo
         * @property {boolean|null} [systemInit] AnsSystemInitInfo systemInit
         * @property {boolean|null} [openRegister] AnsSystemInitInfo openRegister
         */

        /**
         * Constructs a new AnsSystemInitInfo.
         * @memberof protoManage
         * @classdesc Represents an AnsSystemInitInfo.
         * @implements IAnsSystemInitInfo
         * @constructor
         * @param {protoManage.IAnsSystemInitInfo=} [properties] Properties to set
         */
        function AnsSystemInitInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsSystemInitInfo systemInit.
         * @member {boolean} systemInit
         * @memberof protoManage.AnsSystemInitInfo
         * @instance
         */
        AnsSystemInitInfo.prototype.systemInit = false;

        /**
         * AnsSystemInitInfo openRegister.
         * @member {boolean} openRegister
         * @memberof protoManage.AnsSystemInitInfo
         * @instance
         */
        AnsSystemInitInfo.prototype.openRegister = false;

        /**
         * Creates a new AnsSystemInitInfo instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {protoManage.IAnsSystemInitInfo=} [properties] Properties to set
         * @returns {protoManage.AnsSystemInitInfo} AnsSystemInitInfo instance
         */
        AnsSystemInitInfo.create = function create(properties) {
            return new AnsSystemInitInfo(properties);
        };

        /**
         * Encodes the specified AnsSystemInitInfo message. Does not implicitly {@link protoManage.AnsSystemInitInfo.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {protoManage.IAnsSystemInitInfo} message AnsSystemInitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsSystemInitInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.systemInit != null && Object.hasOwnProperty.call(message, "systemInit"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.systemInit);
            if (message.openRegister != null && Object.hasOwnProperty.call(message, "openRegister"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.openRegister);
            return writer;
        };

        /**
         * Encodes the specified AnsSystemInitInfo message, length delimited. Does not implicitly {@link protoManage.AnsSystemInitInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {protoManage.IAnsSystemInitInfo} message AnsSystemInitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsSystemInitInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsSystemInitInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsSystemInitInfo} AnsSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsSystemInitInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsSystemInitInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.systemInit = reader.bool();
                    break;
                case 2:
                    message.openRegister = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsSystemInitInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsSystemInitInfo} AnsSystemInitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsSystemInitInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsSystemInitInfo message.
         * @function verify
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsSystemInitInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.systemInit != null && message.hasOwnProperty("systemInit"))
                if (typeof message.systemInit !== "boolean")
                    return "systemInit: boolean expected";
            if (message.openRegister != null && message.hasOwnProperty("openRegister"))
                if (typeof message.openRegister !== "boolean")
                    return "openRegister: boolean expected";
            return null;
        };

        /**
         * Creates an AnsSystemInitInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsSystemInitInfo} AnsSystemInitInfo
         */
        AnsSystemInitInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsSystemInitInfo)
                return object;
            let message = new $root.protoManage.AnsSystemInitInfo();
            if (object.systemInit != null)
                message.systemInit = Boolean(object.systemInit);
            if (object.openRegister != null)
                message.openRegister = Boolean(object.openRegister);
            return message;
        };

        /**
         * Creates a plain object from an AnsSystemInitInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsSystemInitInfo
         * @static
         * @param {protoManage.AnsSystemInitInfo} message AnsSystemInitInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsSystemInitInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.systemInit = false;
                object.openRegister = false;
            }
            if (message.systemInit != null && message.hasOwnProperty("systemInit"))
                object.systemInit = message.systemInit;
            if (message.openRegister != null && message.hasOwnProperty("openRegister"))
                object.openRegister = message.openRegister;
            return object;
        };

        /**
         * Converts this AnsSystemInitInfo to JSON.
         * @function toJSON
         * @memberof protoManage.AnsSystemInitInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsSystemInitInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsSystemInitInfo;
    })();

    protoManage.ReqTopLinkList = (function() {

        /**
         * Properties of a ReqTopLinkList.
         * @memberof protoManage
         * @interface IReqTopLinkList
         */

        /**
         * Constructs a new ReqTopLinkList.
         * @memberof protoManage
         * @classdesc Represents a ReqTopLinkList.
         * @implements IReqTopLinkList
         * @constructor
         * @param {protoManage.IReqTopLinkList=} [properties] Properties to set
         */
        function ReqTopLinkList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqTopLinkList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {protoManage.IReqTopLinkList=} [properties] Properties to set
         * @returns {protoManage.ReqTopLinkList} ReqTopLinkList instance
         */
        ReqTopLinkList.create = function create(properties) {
            return new ReqTopLinkList(properties);
        };

        /**
         * Encodes the specified ReqTopLinkList message. Does not implicitly {@link protoManage.ReqTopLinkList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {protoManage.IReqTopLinkList} message ReqTopLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqTopLinkList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqTopLinkList message, length delimited. Does not implicitly {@link protoManage.ReqTopLinkList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {protoManage.IReqTopLinkList} message ReqTopLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqTopLinkList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqTopLinkList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqTopLinkList} ReqTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTopLinkList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqTopLinkList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqTopLinkList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqTopLinkList} ReqTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTopLinkList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqTopLinkList message.
         * @function verify
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqTopLinkList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqTopLinkList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqTopLinkList} ReqTopLinkList
         */
        ReqTopLinkList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqTopLinkList)
                return object;
            return new $root.protoManage.ReqTopLinkList();
        };

        /**
         * Creates a plain object from a ReqTopLinkList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqTopLinkList
         * @static
         * @param {protoManage.ReqTopLinkList} message ReqTopLinkList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqTopLinkList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqTopLinkList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqTopLinkList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqTopLinkList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqTopLinkList;
    })();

    protoManage.AnsTopLinkList = (function() {

        /**
         * Properties of an AnsTopLinkList.
         * @memberof protoManage
         * @interface IAnsTopLinkList
         * @property {Array.<protoManage.ITopLink>|null} [TopLinkList] AnsTopLinkList TopLinkList
         */

        /**
         * Constructs a new AnsTopLinkList.
         * @memberof protoManage
         * @classdesc Represents an AnsTopLinkList.
         * @implements IAnsTopLinkList
         * @constructor
         * @param {protoManage.IAnsTopLinkList=} [properties] Properties to set
         */
        function AnsTopLinkList(properties) {
            this.TopLinkList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsTopLinkList TopLinkList.
         * @member {Array.<protoManage.ITopLink>} TopLinkList
         * @memberof protoManage.AnsTopLinkList
         * @instance
         */
        AnsTopLinkList.prototype.TopLinkList = $util.emptyArray;

        /**
         * Creates a new AnsTopLinkList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {protoManage.IAnsTopLinkList=} [properties] Properties to set
         * @returns {protoManage.AnsTopLinkList} AnsTopLinkList instance
         */
        AnsTopLinkList.create = function create(properties) {
            return new AnsTopLinkList(properties);
        };

        /**
         * Encodes the specified AnsTopLinkList message. Does not implicitly {@link protoManage.AnsTopLinkList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {protoManage.IAnsTopLinkList} message AnsTopLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsTopLinkList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TopLinkList != null && message.TopLinkList.length)
                for (let i = 0; i < message.TopLinkList.length; ++i)
                    $root.protoManage.TopLink.encode(message.TopLinkList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsTopLinkList message, length delimited. Does not implicitly {@link protoManage.AnsTopLinkList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {protoManage.IAnsTopLinkList} message AnsTopLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsTopLinkList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsTopLinkList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsTopLinkList} AnsTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsTopLinkList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsTopLinkList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TopLinkList && message.TopLinkList.length))
                        message.TopLinkList = [];
                    message.TopLinkList.push($root.protoManage.TopLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsTopLinkList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsTopLinkList} AnsTopLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsTopLinkList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsTopLinkList message.
         * @function verify
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsTopLinkList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TopLinkList != null && message.hasOwnProperty("TopLinkList")) {
                if (!Array.isArray(message.TopLinkList))
                    return "TopLinkList: array expected";
                for (let i = 0; i < message.TopLinkList.length; ++i) {
                    let error = $root.protoManage.TopLink.verify(message.TopLinkList[i]);
                    if (error)
                        return "TopLinkList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsTopLinkList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsTopLinkList} AnsTopLinkList
         */
        AnsTopLinkList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsTopLinkList)
                return object;
            let message = new $root.protoManage.AnsTopLinkList();
            if (object.TopLinkList) {
                if (!Array.isArray(object.TopLinkList))
                    throw TypeError(".protoManage.AnsTopLinkList.TopLinkList: array expected");
                message.TopLinkList = [];
                for (let i = 0; i < object.TopLinkList.length; ++i) {
                    if (typeof object.TopLinkList[i] !== "object")
                        throw TypeError(".protoManage.AnsTopLinkList.TopLinkList: object expected");
                    message.TopLinkList[i] = $root.protoManage.TopLink.fromObject(object.TopLinkList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsTopLinkList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsTopLinkList
         * @static
         * @param {protoManage.AnsTopLinkList} message AnsTopLinkList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsTopLinkList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.TopLinkList = [];
            if (message.TopLinkList && message.TopLinkList.length) {
                object.TopLinkList = [];
                for (let j = 0; j < message.TopLinkList.length; ++j)
                    object.TopLinkList[j] = $root.protoManage.TopLink.toObject(message.TopLinkList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsTopLinkList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsTopLinkList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsTopLinkList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsTopLinkList;
    })();

    protoManage.ReqManagerList = (function() {

        /**
         * Properties of a ReqManagerList.
         * @memberof protoManage
         * @interface IReqManagerList
         */

        /**
         * Constructs a new ReqManagerList.
         * @memberof protoManage
         * @classdesc Represents a ReqManagerList.
         * @implements IReqManagerList
         * @constructor
         * @param {protoManage.IReqManagerList=} [properties] Properties to set
         */
        function ReqManagerList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqManagerList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {protoManage.IReqManagerList=} [properties] Properties to set
         * @returns {protoManage.ReqManagerList} ReqManagerList instance
         */
        ReqManagerList.create = function create(properties) {
            return new ReqManagerList(properties);
        };

        /**
         * Encodes the specified ReqManagerList message. Does not implicitly {@link protoManage.ReqManagerList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {protoManage.IReqManagerList} message ReqManagerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqManagerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqManagerList message, length delimited. Does not implicitly {@link protoManage.ReqManagerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {protoManage.IReqManagerList} message ReqManagerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqManagerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqManagerList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqManagerList} ReqManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqManagerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqManagerList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqManagerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqManagerList} ReqManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqManagerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqManagerList message.
         * @function verify
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqManagerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqManagerList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqManagerList} ReqManagerList
         */
        ReqManagerList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqManagerList)
                return object;
            return new $root.protoManage.ReqManagerList();
        };

        /**
         * Creates a plain object from a ReqManagerList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqManagerList
         * @static
         * @param {protoManage.ReqManagerList} message ReqManagerList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqManagerList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqManagerList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqManagerList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqManagerList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqManagerList;
    })();

    protoManage.AnsManagerList = (function() {

        /**
         * Properties of an AnsManagerList.
         * @memberof protoManage
         * @interface IAnsManagerList
         * @property {Array.<protoManage.IManager>|null} [ManagerList] AnsManagerList ManagerList
         */

        /**
         * Constructs a new AnsManagerList.
         * @memberof protoManage
         * @classdesc Represents an AnsManagerList.
         * @implements IAnsManagerList
         * @constructor
         * @param {protoManage.IAnsManagerList=} [properties] Properties to set
         */
        function AnsManagerList(properties) {
            this.ManagerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsManagerList ManagerList.
         * @member {Array.<protoManage.IManager>} ManagerList
         * @memberof protoManage.AnsManagerList
         * @instance
         */
        AnsManagerList.prototype.ManagerList = $util.emptyArray;

        /**
         * Creates a new AnsManagerList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {protoManage.IAnsManagerList=} [properties] Properties to set
         * @returns {protoManage.AnsManagerList} AnsManagerList instance
         */
        AnsManagerList.create = function create(properties) {
            return new AnsManagerList(properties);
        };

        /**
         * Encodes the specified AnsManagerList message. Does not implicitly {@link protoManage.AnsManagerList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {protoManage.IAnsManagerList} message AnsManagerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsManagerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ManagerList != null && message.ManagerList.length)
                for (let i = 0; i < message.ManagerList.length; ++i)
                    $root.protoManage.Manager.encode(message.ManagerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsManagerList message, length delimited. Does not implicitly {@link protoManage.AnsManagerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {protoManage.IAnsManagerList} message AnsManagerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsManagerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsManagerList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsManagerList} AnsManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsManagerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsManagerList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ManagerList && message.ManagerList.length))
                        message.ManagerList = [];
                    message.ManagerList.push($root.protoManage.Manager.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsManagerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsManagerList} AnsManagerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsManagerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsManagerList message.
         * @function verify
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsManagerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ManagerList != null && message.hasOwnProperty("ManagerList")) {
                if (!Array.isArray(message.ManagerList))
                    return "ManagerList: array expected";
                for (let i = 0; i < message.ManagerList.length; ++i) {
                    let error = $root.protoManage.Manager.verify(message.ManagerList[i]);
                    if (error)
                        return "ManagerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsManagerList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsManagerList} AnsManagerList
         */
        AnsManagerList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsManagerList)
                return object;
            let message = new $root.protoManage.AnsManagerList();
            if (object.ManagerList) {
                if (!Array.isArray(object.ManagerList))
                    throw TypeError(".protoManage.AnsManagerList.ManagerList: array expected");
                message.ManagerList = [];
                for (let i = 0; i < object.ManagerList.length; ++i) {
                    if (typeof object.ManagerList[i] !== "object")
                        throw TypeError(".protoManage.AnsManagerList.ManagerList: object expected");
                    message.ManagerList[i] = $root.protoManage.Manager.fromObject(object.ManagerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsManagerList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsManagerList
         * @static
         * @param {protoManage.AnsManagerList} message AnsManagerList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsManagerList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ManagerList = [];
            if (message.ManagerList && message.ManagerList.length) {
                object.ManagerList = [];
                for (let j = 0; j < message.ManagerList.length; ++j)
                    object.ManagerList[j] = $root.protoManage.Manager.toObject(message.ManagerList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsManagerList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsManagerList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsManagerList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsManagerList;
    })();

    protoManage.ReqNodeList = (function() {

        /**
         * Properties of a ReqNodeList.
         * @memberof protoManage
         * @interface IReqNodeList
         * @property {Array.<number>|null} [ID] ReqNodeList ID
         * @property {Array.<string>|null} [Name] ReqNodeList Name
         * @property {Array.<protoManage.State>|null} [State] ReqNodeList State
         * @property {Array.<protoManage.ITime>|null} [UpdateTime] ReqNodeList UpdateTime
         * @property {protoManage.IPage|null} [Page] ReqNodeList Page
         */

        /**
         * Constructs a new ReqNodeList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeList.
         * @implements IReqNodeList
         * @constructor
         * @param {protoManage.IReqNodeList=} [properties] Properties to set
         */
        function ReqNodeList(properties) {
            this.ID = [];
            this.Name = [];
            this.State = [];
            this.UpdateTime = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeList ID.
         * @member {Array.<number>} ID
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.ID = $util.emptyArray;

        /**
         * ReqNodeList Name.
         * @member {Array.<string>} Name
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.Name = $util.emptyArray;

        /**
         * ReqNodeList State.
         * @member {Array.<protoManage.State>} State
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.State = $util.emptyArray;

        /**
         * ReqNodeList UpdateTime.
         * @member {Array.<protoManage.ITime>} UpdateTime
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.UpdateTime = $util.emptyArray;

        /**
         * ReqNodeList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.Page = null;

        /**
         * Creates a new ReqNodeList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {protoManage.IReqNodeList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeList} ReqNodeList instance
         */
        ReqNodeList.create = function create(properties) {
            return new ReqNodeList(properties);
        };

        /**
         * Encodes the specified ReqNodeList message. Does not implicitly {@link protoManage.ReqNodeList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {protoManage.IReqNodeList} message ReqNodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.ID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ID.length; ++i)
                    writer.int64(message.ID[i]);
                writer.ldelim();
            }
            if (message.Name != null && message.Name.length)
                for (let i = 0; i < message.Name.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name[i]);
            if (message.State != null && message.State.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.State.length; ++i)
                    writer.int32(message.State[i]);
                writer.ldelim();
            }
            if (message.UpdateTime != null && message.UpdateTime.length)
                for (let i = 0; i < message.UpdateTime.length; ++i)
                    $root.protoManage.Time.encode(message.UpdateTime[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeList message, length delimited. Does not implicitly {@link protoManage.ReqNodeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {protoManage.IReqNodeList} message ReqNodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeList} ReqNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ID && message.ID.length))
                        message.ID = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ID.push(reader.int64());
                    } else
                        message.ID.push(reader.int64());
                    break;
                case 2:
                    if (!(message.Name && message.Name.length))
                        message.Name = [];
                    message.Name.push(reader.string());
                    break;
                case 3:
                    if (!(message.State && message.State.length))
                        message.State = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.State.push(reader.int32());
                    } else
                        message.State.push(reader.int32());
                    break;
                case 4:
                    if (!(message.UpdateTime && message.UpdateTime.length))
                        message.UpdateTime = [];
                    message.UpdateTime.push($root.protoManage.Time.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeList} ReqNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeList message.
         * @function verify
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID")) {
                if (!Array.isArray(message.ID))
                    return "ID: array expected";
                for (let i = 0; i < message.ID.length; ++i)
                    if (!$util.isInteger(message.ID[i]) && !(message.ID[i] && $util.isInteger(message.ID[i].low) && $util.isInteger(message.ID[i].high)))
                        return "ID: integer|Long[] expected";
            }
            if (message.Name != null && message.hasOwnProperty("Name")) {
                if (!Array.isArray(message.Name))
                    return "Name: array expected";
                for (let i = 0; i < message.Name.length; ++i)
                    if (!$util.isString(message.Name[i]))
                        return "Name: string[] expected";
            }
            if (message.State != null && message.hasOwnProperty("State")) {
                if (!Array.isArray(message.State))
                    return "State: array expected";
                for (let i = 0; i < message.State.length; ++i)
                    switch (message.State[i]) {
                    default:
                        return "State: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            if (message.UpdateTime != null && message.hasOwnProperty("UpdateTime")) {
                if (!Array.isArray(message.UpdateTime))
                    return "UpdateTime: array expected";
                for (let i = 0; i < message.UpdateTime.length; ++i) {
                    let error = $root.protoManage.Time.verify(message.UpdateTime[i]);
                    if (error)
                        return "UpdateTime." + error;
                }
            }
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeList} ReqNodeList
         */
        ReqNodeList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeList)
                return object;
            let message = new $root.protoManage.ReqNodeList();
            if (object.ID) {
                if (!Array.isArray(object.ID))
                    throw TypeError(".protoManage.ReqNodeList.ID: array expected");
                message.ID = [];
                for (let i = 0; i < object.ID.length; ++i)
                    if ($util.Long)
                        (message.ID[i] = $util.Long.fromValue(object.ID[i])).unsigned = false;
                    else if (typeof object.ID[i] === "string")
                        message.ID[i] = parseInt(object.ID[i], 10);
                    else if (typeof object.ID[i] === "number")
                        message.ID[i] = object.ID[i];
                    else if (typeof object.ID[i] === "object")
                        message.ID[i] = new $util.LongBits(object.ID[i].low >>> 0, object.ID[i].high >>> 0).toNumber();
            }
            if (object.Name) {
                if (!Array.isArray(object.Name))
                    throw TypeError(".protoManage.ReqNodeList.Name: array expected");
                message.Name = [];
                for (let i = 0; i < object.Name.length; ++i)
                    message.Name[i] = String(object.Name[i]);
            }
            if (object.State) {
                if (!Array.isArray(object.State))
                    throw TypeError(".protoManage.ReqNodeList.State: array expected");
                message.State = [];
                for (let i = 0; i < object.State.length; ++i)
                    switch (object.State[i]) {
                    default:
                    case "StateNot":
                    case 0:
                        message.State[i] = 0;
                        break;
                    case "StateUnknow":
                    case 1:
                        message.State[i] = 1;
                        break;
                    case "StateNormal":
                    case 2:
                        message.State[i] = 2;
                        break;
                    case "StateWarn":
                    case 3:
                        message.State[i] = 3;
                        break;
                    case "StateError":
                    case 4:
                        message.State[i] = 4;
                        break;
                    }
            }
            if (object.UpdateTime) {
                if (!Array.isArray(object.UpdateTime))
                    throw TypeError(".protoManage.ReqNodeList.UpdateTime: array expected");
                message.UpdateTime = [];
                for (let i = 0; i < object.UpdateTime.length; ++i) {
                    if (typeof object.UpdateTime[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeList.UpdateTime: object expected");
                    message.UpdateTime[i] = $root.protoManage.Time.fromObject(object.UpdateTime[i]);
                }
            }
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeList
         * @static
         * @param {protoManage.ReqNodeList} message ReqNodeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.ID = [];
                object.Name = [];
                object.State = [];
                object.UpdateTime = [];
            }
            if (options.defaults)
                object.Page = null;
            if (message.ID && message.ID.length) {
                object.ID = [];
                for (let j = 0; j < message.ID.length; ++j)
                    if (typeof message.ID[j] === "number")
                        object.ID[j] = options.longs === String ? String(message.ID[j]) : message.ID[j];
                    else
                        object.ID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ID[j]) : options.longs === Number ? new $util.LongBits(message.ID[j].low >>> 0, message.ID[j].high >>> 0).toNumber() : message.ID[j];
            }
            if (message.Name && message.Name.length) {
                object.Name = [];
                for (let j = 0; j < message.Name.length; ++j)
                    object.Name[j] = message.Name[j];
            }
            if (message.State && message.State.length) {
                object.State = [];
                for (let j = 0; j < message.State.length; ++j)
                    object.State[j] = options.enums === String ? $root.protoManage.State[message.State[j]] : message.State[j];
            }
            if (message.UpdateTime && message.UpdateTime.length) {
                object.UpdateTime = [];
                for (let j = 0; j < message.UpdateTime.length; ++j)
                    object.UpdateTime[j] = $root.protoManage.Time.toObject(message.UpdateTime[j], options);
            }
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeList;
    })();

    protoManage.AnsNodeList = (function() {

        /**
         * Properties of an AnsNodeList.
         * @memberof protoManage
         * @interface IAnsNodeList
         * @property {number|null} [Length] AnsNodeList Length
         * @property {Array.<protoManage.INode>|null} [NodeList] AnsNodeList NodeList
         */

        /**
         * Constructs a new AnsNodeList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeList.
         * @implements IAnsNodeList
         * @constructor
         * @param {protoManage.IAnsNodeList=} [properties] Properties to set
         */
        function AnsNodeList(properties) {
            this.NodeList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeList NodeList.
         * @member {Array.<protoManage.INode>} NodeList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeList = $util.emptyArray;

        /**
         * Creates a new AnsNodeList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {protoManage.IAnsNodeList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeList} AnsNodeList instance
         */
        AnsNodeList.create = function create(properties) {
            return new AnsNodeList(properties);
        };

        /**
         * Encodes the specified AnsNodeList message. Does not implicitly {@link protoManage.AnsNodeList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {protoManage.IAnsNodeList} message AnsNodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeList != null && message.NodeList.length)
                for (let i = 0; i < message.NodeList.length; ++i)
                    $root.protoManage.Node.encode(message.NodeList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeList message, length delimited. Does not implicitly {@link protoManage.AnsNodeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {protoManage.IAnsNodeList} message AnsNodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeList} AnsNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeList && message.NodeList.length))
                        message.NodeList = [];
                    message.NodeList.push($root.protoManage.Node.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeList} AnsNodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeList message.
         * @function verify
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeList != null && message.hasOwnProperty("NodeList")) {
                if (!Array.isArray(message.NodeList))
                    return "NodeList: array expected";
                for (let i = 0; i < message.NodeList.length; ++i) {
                    let error = $root.protoManage.Node.verify(message.NodeList[i]);
                    if (error)
                        return "NodeList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeList} AnsNodeList
         */
        AnsNodeList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeList)
                return object;
            let message = new $root.protoManage.AnsNodeList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeList) {
                if (!Array.isArray(object.NodeList))
                    throw TypeError(".protoManage.AnsNodeList.NodeList: array expected");
                message.NodeList = [];
                for (let i = 0; i < object.NodeList.length; ++i) {
                    if (typeof object.NodeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeList: object expected");
                    message.NodeList[i] = $root.protoManage.Node.fromObject(object.NodeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeList
         * @static
         * @param {protoManage.AnsNodeList} message AnsNodeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeList = [];
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Length = options.longs === String ? "0" : 0;
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (typeof message.Length === "number")
                    object.Length = options.longs === String ? String(message.Length) : message.Length;
                else
                    object.Length = options.longs === String ? $util.Long.prototype.toString.call(message.Length) : options.longs === Number ? new $util.LongBits(message.Length.low >>> 0, message.Length.high >>> 0).toNumber() : message.Length;
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeList;
    })();

    protoManage.ReqNodeFuncList = (function() {

        /**
         * Properties of a ReqNodeFuncList.
         * @memberof protoManage
         * @interface IReqNodeFuncList
         * @property {Array.<number>|null} [ID] ReqNodeFuncList ID
         * @property {Array.<string>|null} [Name] ReqNodeFuncList Name
         * @property {Array.<protoManage.Level>|null} [Level] ReqNodeFuncList Level
         * @property {protoManage.Level|null} [LevelMax] ReqNodeFuncList LevelMax
         * @property {Array.<number>|null} [NodeID] ReqNodeFuncList NodeID
         * @property {Array.<string>|null} [NodeName] ReqNodeFuncList NodeName
         * @property {Array.<protoManage.ITime>|null} [UpdateTime] ReqNodeFuncList UpdateTime
         * @property {protoManage.IPage|null} [Page] ReqNodeFuncList Page
         */

        /**
         * Constructs a new ReqNodeFuncList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeFuncList.
         * @implements IReqNodeFuncList
         * @constructor
         * @param {protoManage.IReqNodeFuncList=} [properties] Properties to set
         */
        function ReqNodeFuncList(properties) {
            this.ID = [];
            this.Name = [];
            this.Level = [];
            this.NodeID = [];
            this.NodeName = [];
            this.UpdateTime = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeFuncList ID.
         * @member {Array.<number>} ID
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.ID = $util.emptyArray;

        /**
         * ReqNodeFuncList Name.
         * @member {Array.<string>} Name
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.Name = $util.emptyArray;

        /**
         * ReqNodeFuncList Level.
         * @member {Array.<protoManage.Level>} Level
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.Level = $util.emptyArray;

        /**
         * ReqNodeFuncList LevelMax.
         * @member {protoManage.Level} LevelMax
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.LevelMax = 0;

        /**
         * ReqNodeFuncList NodeID.
         * @member {Array.<number>} NodeID
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.NodeID = $util.emptyArray;

        /**
         * ReqNodeFuncList NodeName.
         * @member {Array.<string>} NodeName
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.NodeName = $util.emptyArray;

        /**
         * ReqNodeFuncList UpdateTime.
         * @member {Array.<protoManage.ITime>} UpdateTime
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.UpdateTime = $util.emptyArray;

        /**
         * ReqNodeFuncList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.Page = null;

        /**
         * Creates a new ReqNodeFuncList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {protoManage.IReqNodeFuncList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeFuncList} ReqNodeFuncList instance
         */
        ReqNodeFuncList.create = function create(properties) {
            return new ReqNodeFuncList(properties);
        };

        /**
         * Encodes the specified ReqNodeFuncList message. Does not implicitly {@link protoManage.ReqNodeFuncList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {protoManage.IReqNodeFuncList} message ReqNodeFuncList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.ID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ID.length; ++i)
                    writer.int64(message.ID[i]);
                writer.ldelim();
            }
            if (message.Name != null && message.Name.length)
                for (let i = 0; i < message.Name.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name[i]);
            if (message.Level != null && message.Level.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.Level.length; ++i)
                    writer.int32(message.Level[i]);
                writer.ldelim();
            }
            if (message.LevelMax != null && Object.hasOwnProperty.call(message, "LevelMax"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LevelMax);
            if (message.NodeID != null && message.NodeID.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.NodeID.length; ++i)
                    writer.int64(message.NodeID[i]);
                writer.ldelim();
            }
            if (message.NodeName != null && message.NodeName.length)
                for (let i = 0; i < message.NodeName.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.NodeName[i]);
            if (message.UpdateTime != null && message.UpdateTime.length)
                for (let i = 0; i < message.UpdateTime.length; ++i)
                    $root.protoManage.Time.encode(message.UpdateTime[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeFuncList message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {protoManage.IReqNodeFuncList} message ReqNodeFuncList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeFuncList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeFuncList} ReqNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeFuncList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ID && message.ID.length))
                        message.ID = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ID.push(reader.int64());
                    } else
                        message.ID.push(reader.int64());
                    break;
                case 2:
                    if (!(message.Name && message.Name.length))
                        message.Name = [];
                    message.Name.push(reader.string());
                    break;
                case 3:
                    if (!(message.Level && message.Level.length))
                        message.Level = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Level.push(reader.int32());
                    } else
                        message.Level.push(reader.int32());
                    break;
                case 4:
                    message.LevelMax = reader.int32();
                    break;
                case 5:
                    if (!(message.NodeID && message.NodeID.length))
                        message.NodeID = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.NodeID.push(reader.int64());
                    } else
                        message.NodeID.push(reader.int64());
                    break;
                case 6:
                    if (!(message.NodeName && message.NodeName.length))
                        message.NodeName = [];
                    message.NodeName.push(reader.string());
                    break;
                case 7:
                    if (!(message.UpdateTime && message.UpdateTime.length))
                        message.UpdateTime = [];
                    message.UpdateTime.push($root.protoManage.Time.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeFuncList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeFuncList} ReqNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeFuncList message.
         * @function verify
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeFuncList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID")) {
                if (!Array.isArray(message.ID))
                    return "ID: array expected";
                for (let i = 0; i < message.ID.length; ++i)
                    if (!$util.isInteger(message.ID[i]) && !(message.ID[i] && $util.isInteger(message.ID[i].low) && $util.isInteger(message.ID[i].high)))
                        return "ID: integer|Long[] expected";
            }
            if (message.Name != null && message.hasOwnProperty("Name")) {
                if (!Array.isArray(message.Name))
                    return "Name: array expected";
                for (let i = 0; i < message.Name.length; ++i)
                    if (!$util.isString(message.Name[i]))
                        return "Name: string[] expected";
            }
            if (message.Level != null && message.hasOwnProperty("Level")) {
                if (!Array.isArray(message.Level))
                    return "Level: array expected";
                for (let i = 0; i < message.Level.length; ++i)
                    switch (message.Level[i]) {
                    default:
                        return "Level: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            if (message.LevelMax != null && message.hasOwnProperty("LevelMax"))
                switch (message.LevelMax) {
                default:
                    return "LevelMax: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.NodeID != null && message.hasOwnProperty("NodeID")) {
                if (!Array.isArray(message.NodeID))
                    return "NodeID: array expected";
                for (let i = 0; i < message.NodeID.length; ++i)
                    if (!$util.isInteger(message.NodeID[i]) && !(message.NodeID[i] && $util.isInteger(message.NodeID[i].low) && $util.isInteger(message.NodeID[i].high)))
                        return "NodeID: integer|Long[] expected";
            }
            if (message.NodeName != null && message.hasOwnProperty("NodeName")) {
                if (!Array.isArray(message.NodeName))
                    return "NodeName: array expected";
                for (let i = 0; i < message.NodeName.length; ++i)
                    if (!$util.isString(message.NodeName[i]))
                        return "NodeName: string[] expected";
            }
            if (message.UpdateTime != null && message.hasOwnProperty("UpdateTime")) {
                if (!Array.isArray(message.UpdateTime))
                    return "UpdateTime: array expected";
                for (let i = 0; i < message.UpdateTime.length; ++i) {
                    let error = $root.protoManage.Time.verify(message.UpdateTime[i]);
                    if (error)
                        return "UpdateTime." + error;
                }
            }
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeFuncList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeFuncList} ReqNodeFuncList
         */
        ReqNodeFuncList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeFuncList)
                return object;
            let message = new $root.protoManage.ReqNodeFuncList();
            if (object.ID) {
                if (!Array.isArray(object.ID))
                    throw TypeError(".protoManage.ReqNodeFuncList.ID: array expected");
                message.ID = [];
                for (let i = 0; i < object.ID.length; ++i)
                    if ($util.Long)
                        (message.ID[i] = $util.Long.fromValue(object.ID[i])).unsigned = false;
                    else if (typeof object.ID[i] === "string")
                        message.ID[i] = parseInt(object.ID[i], 10);
                    else if (typeof object.ID[i] === "number")
                        message.ID[i] = object.ID[i];
                    else if (typeof object.ID[i] === "object")
                        message.ID[i] = new $util.LongBits(object.ID[i].low >>> 0, object.ID[i].high >>> 0).toNumber();
            }
            if (object.Name) {
                if (!Array.isArray(object.Name))
                    throw TypeError(".protoManage.ReqNodeFuncList.Name: array expected");
                message.Name = [];
                for (let i = 0; i < object.Name.length; ++i)
                    message.Name[i] = String(object.Name[i]);
            }
            if (object.Level) {
                if (!Array.isArray(object.Level))
                    throw TypeError(".protoManage.ReqNodeFuncList.Level: array expected");
                message.Level = [];
                for (let i = 0; i < object.Level.length; ++i)
                    switch (object.Level[i]) {
                    default:
                    case "LevelNot":
                    case 0:
                        message.Level[i] = 0;
                        break;
                    case "LevelPrimary":
                    case 1:
                        message.Level[i] = 1;
                        break;
                    case "LevelIntermediate":
                    case 2:
                        message.Level[i] = 2;
                        break;
                    case "LevelSenior":
                    case 3:
                        message.Level[i] = 3;
                        break;
                    case "LevelSuper":
                    case 4:
                        message.Level[i] = 4;
                        break;
                    }
            }
            switch (object.LevelMax) {
            case "LevelNot":
            case 0:
                message.LevelMax = 0;
                break;
            case "LevelPrimary":
            case 1:
                message.LevelMax = 1;
                break;
            case "LevelIntermediate":
            case 2:
                message.LevelMax = 2;
                break;
            case "LevelSenior":
            case 3:
                message.LevelMax = 3;
                break;
            case "LevelSuper":
            case 4:
                message.LevelMax = 4;
                break;
            }
            if (object.NodeID) {
                if (!Array.isArray(object.NodeID))
                    throw TypeError(".protoManage.ReqNodeFuncList.NodeID: array expected");
                message.NodeID = [];
                for (let i = 0; i < object.NodeID.length; ++i)
                    if ($util.Long)
                        (message.NodeID[i] = $util.Long.fromValue(object.NodeID[i])).unsigned = false;
                    else if (typeof object.NodeID[i] === "string")
                        message.NodeID[i] = parseInt(object.NodeID[i], 10);
                    else if (typeof object.NodeID[i] === "number")
                        message.NodeID[i] = object.NodeID[i];
                    else if (typeof object.NodeID[i] === "object")
                        message.NodeID[i] = new $util.LongBits(object.NodeID[i].low >>> 0, object.NodeID[i].high >>> 0).toNumber();
            }
            if (object.NodeName) {
                if (!Array.isArray(object.NodeName))
                    throw TypeError(".protoManage.ReqNodeFuncList.NodeName: array expected");
                message.NodeName = [];
                for (let i = 0; i < object.NodeName.length; ++i)
                    message.NodeName[i] = String(object.NodeName[i]);
            }
            if (object.UpdateTime) {
                if (!Array.isArray(object.UpdateTime))
                    throw TypeError(".protoManage.ReqNodeFuncList.UpdateTime: array expected");
                message.UpdateTime = [];
                for (let i = 0; i < object.UpdateTime.length; ++i) {
                    if (typeof object.UpdateTime[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeFuncList.UpdateTime: object expected");
                    message.UpdateTime[i] = $root.protoManage.Time.fromObject(object.UpdateTime[i]);
                }
            }
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeFuncList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeFuncList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeFuncList
         * @static
         * @param {protoManage.ReqNodeFuncList} message ReqNodeFuncList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeFuncList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.ID = [];
                object.Name = [];
                object.Level = [];
                object.NodeID = [];
                object.NodeName = [];
                object.UpdateTime = [];
            }
            if (options.defaults) {
                object.LevelMax = options.enums === String ? "LevelNot" : 0;
                object.Page = null;
            }
            if (message.ID && message.ID.length) {
                object.ID = [];
                for (let j = 0; j < message.ID.length; ++j)
                    if (typeof message.ID[j] === "number")
                        object.ID[j] = options.longs === String ? String(message.ID[j]) : message.ID[j];
                    else
                        object.ID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ID[j]) : options.longs === Number ? new $util.LongBits(message.ID[j].low >>> 0, message.ID[j].high >>> 0).toNumber() : message.ID[j];
            }
            if (message.Name && message.Name.length) {
                object.Name = [];
                for (let j = 0; j < message.Name.length; ++j)
                    object.Name[j] = message.Name[j];
            }
            if (message.Level && message.Level.length) {
                object.Level = [];
                for (let j = 0; j < message.Level.length; ++j)
                    object.Level[j] = options.enums === String ? $root.protoManage.Level[message.Level[j]] : message.Level[j];
            }
            if (message.LevelMax != null && message.hasOwnProperty("LevelMax"))
                object.LevelMax = options.enums === String ? $root.protoManage.Level[message.LevelMax] : message.LevelMax;
            if (message.NodeID && message.NodeID.length) {
                object.NodeID = [];
                for (let j = 0; j < message.NodeID.length; ++j)
                    if (typeof message.NodeID[j] === "number")
                        object.NodeID[j] = options.longs === String ? String(message.NodeID[j]) : message.NodeID[j];
                    else
                        object.NodeID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID[j]) : options.longs === Number ? new $util.LongBits(message.NodeID[j].low >>> 0, message.NodeID[j].high >>> 0).toNumber() : message.NodeID[j];
            }
            if (message.NodeName && message.NodeName.length) {
                object.NodeName = [];
                for (let j = 0; j < message.NodeName.length; ++j)
                    object.NodeName[j] = message.NodeName[j];
            }
            if (message.UpdateTime && message.UpdateTime.length) {
                object.UpdateTime = [];
                for (let j = 0; j < message.UpdateTime.length; ++j)
                    object.UpdateTime[j] = $root.protoManage.Time.toObject(message.UpdateTime[j], options);
            }
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeFuncList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeFuncList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeFuncList;
    })();

    protoManage.AnsNodeFuncList = (function() {

        /**
         * Properties of an AnsNodeFuncList.
         * @memberof protoManage
         * @interface IAnsNodeFuncList
         * @property {number|null} [Length] AnsNodeFuncList Length
         * @property {Array.<protoManage.INodeFunc>|null} [NodeFuncList] AnsNodeFuncList NodeFuncList
         * @property {Array.<protoManage.INode>|null} [NodeList] AnsNodeFuncList NodeList
         */

        /**
         * Constructs a new AnsNodeFuncList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeFuncList.
         * @implements IAnsNodeFuncList
         * @constructor
         * @param {protoManage.IAnsNodeFuncList=} [properties] Properties to set
         */
        function AnsNodeFuncList(properties) {
            this.NodeFuncList = [];
            this.NodeList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeFuncList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeFuncList
         * @instance
         */
        AnsNodeFuncList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeFuncList NodeFuncList.
         * @member {Array.<protoManage.INodeFunc>} NodeFuncList
         * @memberof protoManage.AnsNodeFuncList
         * @instance
         */
        AnsNodeFuncList.prototype.NodeFuncList = $util.emptyArray;

        /**
         * AnsNodeFuncList NodeList.
         * @member {Array.<protoManage.INode>} NodeList
         * @memberof protoManage.AnsNodeFuncList
         * @instance
         */
        AnsNodeFuncList.prototype.NodeList = $util.emptyArray;

        /**
         * Creates a new AnsNodeFuncList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {protoManage.IAnsNodeFuncList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeFuncList} AnsNodeFuncList instance
         */
        AnsNodeFuncList.create = function create(properties) {
            return new AnsNodeFuncList(properties);
        };

        /**
         * Encodes the specified AnsNodeFuncList message. Does not implicitly {@link protoManage.AnsNodeFuncList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {protoManage.IAnsNodeFuncList} message AnsNodeFuncList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeFuncList != null && message.NodeFuncList.length)
                for (let i = 0; i < message.NodeFuncList.length; ++i)
                    $root.protoManage.NodeFunc.encode(message.NodeFuncList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.NodeList != null && message.NodeList.length)
                for (let i = 0; i < message.NodeList.length; ++i)
                    $root.protoManage.Node.encode(message.NodeList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeFuncList message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {protoManage.IAnsNodeFuncList} message AnsNodeFuncList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeFuncList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeFuncList} AnsNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeFuncList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeFuncList && message.NodeFuncList.length))
                        message.NodeFuncList = [];
                    message.NodeFuncList.push($root.protoManage.NodeFunc.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.NodeList && message.NodeList.length))
                        message.NodeList = [];
                    message.NodeList.push($root.protoManage.Node.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeFuncList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeFuncList} AnsNodeFuncList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeFuncList message.
         * @function verify
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeFuncList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeFuncList != null && message.hasOwnProperty("NodeFuncList")) {
                if (!Array.isArray(message.NodeFuncList))
                    return "NodeFuncList: array expected";
                for (let i = 0; i < message.NodeFuncList.length; ++i) {
                    let error = $root.protoManage.NodeFunc.verify(message.NodeFuncList[i]);
                    if (error)
                        return "NodeFuncList." + error;
                }
            }
            if (message.NodeList != null && message.hasOwnProperty("NodeList")) {
                if (!Array.isArray(message.NodeList))
                    return "NodeList: array expected";
                for (let i = 0; i < message.NodeList.length; ++i) {
                    let error = $root.protoManage.Node.verify(message.NodeList[i]);
                    if (error)
                        return "NodeList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeFuncList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeFuncList} AnsNodeFuncList
         */
        AnsNodeFuncList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeFuncList)
                return object;
            let message = new $root.protoManage.AnsNodeFuncList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeFuncList) {
                if (!Array.isArray(object.NodeFuncList))
                    throw TypeError(".protoManage.AnsNodeFuncList.NodeFuncList: array expected");
                message.NodeFuncList = [];
                for (let i = 0; i < object.NodeFuncList.length; ++i) {
                    if (typeof object.NodeFuncList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeFuncList.NodeFuncList: object expected");
                    message.NodeFuncList[i] = $root.protoManage.NodeFunc.fromObject(object.NodeFuncList[i]);
                }
            }
            if (object.NodeList) {
                if (!Array.isArray(object.NodeList))
                    throw TypeError(".protoManage.AnsNodeFuncList.NodeList: array expected");
                message.NodeList = [];
                for (let i = 0; i < object.NodeList.length; ++i) {
                    if (typeof object.NodeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeFuncList.NodeList: object expected");
                    message.NodeList[i] = $root.protoManage.Node.fromObject(object.NodeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeFuncList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeFuncList
         * @static
         * @param {protoManage.AnsNodeFuncList} message AnsNodeFuncList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeFuncList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.NodeFuncList = [];
                object.NodeList = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Length = options.longs === String ? "0" : 0;
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (typeof message.Length === "number")
                    object.Length = options.longs === String ? String(message.Length) : message.Length;
                else
                    object.Length = options.longs === String ? $util.Long.prototype.toString.call(message.Length) : options.longs === Number ? new $util.LongBits(message.Length.low >>> 0, message.Length.high >>> 0).toNumber() : message.Length;
            if (message.NodeFuncList && message.NodeFuncList.length) {
                object.NodeFuncList = [];
                for (let j = 0; j < message.NodeFuncList.length; ++j)
                    object.NodeFuncList[j] = $root.protoManage.NodeFunc.toObject(message.NodeFuncList[j], options);
            }
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeFuncList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeFuncList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeFuncList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeFuncList;
    })();

    protoManage.ReqNodeReportList = (function() {

        /**
         * Properties of a ReqNodeReportList.
         * @memberof protoManage
         * @interface IReqNodeReportList
         * @property {Array.<number>|null} [ID] ReqNodeReportList ID
         * @property {Array.<string>|null} [Name] ReqNodeReportList Name
         * @property {Array.<protoManage.Level>|null} [Level] ReqNodeReportList Level
         * @property {protoManage.Level|null} [LevelMax] ReqNodeReportList LevelMax
         * @property {Array.<number>|null} [NodeID] ReqNodeReportList NodeID
         * @property {Array.<string>|null} [NodeName] ReqNodeReportList NodeName
         * @property {Array.<protoManage.ITime>|null} [UpdateTime] ReqNodeReportList UpdateTime
         * @property {protoManage.IPage|null} [Page] ReqNodeReportList Page
         */

        /**
         * Constructs a new ReqNodeReportList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeReportList.
         * @implements IReqNodeReportList
         * @constructor
         * @param {protoManage.IReqNodeReportList=} [properties] Properties to set
         */
        function ReqNodeReportList(properties) {
            this.ID = [];
            this.Name = [];
            this.Level = [];
            this.NodeID = [];
            this.NodeName = [];
            this.UpdateTime = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeReportList ID.
         * @member {Array.<number>} ID
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.ID = $util.emptyArray;

        /**
         * ReqNodeReportList Name.
         * @member {Array.<string>} Name
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.Name = $util.emptyArray;

        /**
         * ReqNodeReportList Level.
         * @member {Array.<protoManage.Level>} Level
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.Level = $util.emptyArray;

        /**
         * ReqNodeReportList LevelMax.
         * @member {protoManage.Level} LevelMax
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.LevelMax = 0;

        /**
         * ReqNodeReportList NodeID.
         * @member {Array.<number>} NodeID
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.NodeID = $util.emptyArray;

        /**
         * ReqNodeReportList NodeName.
         * @member {Array.<string>} NodeName
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.NodeName = $util.emptyArray;

        /**
         * ReqNodeReportList UpdateTime.
         * @member {Array.<protoManage.ITime>} UpdateTime
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.UpdateTime = $util.emptyArray;

        /**
         * ReqNodeReportList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.Page = null;

        /**
         * Creates a new ReqNodeReportList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {protoManage.IReqNodeReportList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeReportList} ReqNodeReportList instance
         */
        ReqNodeReportList.create = function create(properties) {
            return new ReqNodeReportList(properties);
        };

        /**
         * Encodes the specified ReqNodeReportList message. Does not implicitly {@link protoManage.ReqNodeReportList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {protoManage.IReqNodeReportList} message ReqNodeReportList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeReportList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.ID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ID.length; ++i)
                    writer.int64(message.ID[i]);
                writer.ldelim();
            }
            if (message.Name != null && message.Name.length)
                for (let i = 0; i < message.Name.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name[i]);
            if (message.Level != null && message.Level.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.Level.length; ++i)
                    writer.int32(message.Level[i]);
                writer.ldelim();
            }
            if (message.LevelMax != null && Object.hasOwnProperty.call(message, "LevelMax"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LevelMax);
            if (message.NodeID != null && message.NodeID.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.NodeID.length; ++i)
                    writer.int64(message.NodeID[i]);
                writer.ldelim();
            }
            if (message.NodeName != null && message.NodeName.length)
                for (let i = 0; i < message.NodeName.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.NodeName[i]);
            if (message.UpdateTime != null && message.UpdateTime.length)
                for (let i = 0; i < message.UpdateTime.length; ++i)
                    $root.protoManage.Time.encode(message.UpdateTime[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeReportList message, length delimited. Does not implicitly {@link protoManage.ReqNodeReportList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {protoManage.IReqNodeReportList} message ReqNodeReportList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeReportList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeReportList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeReportList} ReqNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeReportList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeReportList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ID && message.ID.length))
                        message.ID = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ID.push(reader.int64());
                    } else
                        message.ID.push(reader.int64());
                    break;
                case 2:
                    if (!(message.Name && message.Name.length))
                        message.Name = [];
                    message.Name.push(reader.string());
                    break;
                case 3:
                    if (!(message.Level && message.Level.length))
                        message.Level = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Level.push(reader.int32());
                    } else
                        message.Level.push(reader.int32());
                    break;
                case 4:
                    message.LevelMax = reader.int32();
                    break;
                case 5:
                    if (!(message.NodeID && message.NodeID.length))
                        message.NodeID = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.NodeID.push(reader.int64());
                    } else
                        message.NodeID.push(reader.int64());
                    break;
                case 6:
                    if (!(message.NodeName && message.NodeName.length))
                        message.NodeName = [];
                    message.NodeName.push(reader.string());
                    break;
                case 7:
                    if (!(message.UpdateTime && message.UpdateTime.length))
                        message.UpdateTime = [];
                    message.UpdateTime.push($root.protoManage.Time.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeReportList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeReportList} ReqNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeReportList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeReportList message.
         * @function verify
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeReportList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID")) {
                if (!Array.isArray(message.ID))
                    return "ID: array expected";
                for (let i = 0; i < message.ID.length; ++i)
                    if (!$util.isInteger(message.ID[i]) && !(message.ID[i] && $util.isInteger(message.ID[i].low) && $util.isInteger(message.ID[i].high)))
                        return "ID: integer|Long[] expected";
            }
            if (message.Name != null && message.hasOwnProperty("Name")) {
                if (!Array.isArray(message.Name))
                    return "Name: array expected";
                for (let i = 0; i < message.Name.length; ++i)
                    if (!$util.isString(message.Name[i]))
                        return "Name: string[] expected";
            }
            if (message.Level != null && message.hasOwnProperty("Level")) {
                if (!Array.isArray(message.Level))
                    return "Level: array expected";
                for (let i = 0; i < message.Level.length; ++i)
                    switch (message.Level[i]) {
                    default:
                        return "Level: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            if (message.LevelMax != null && message.hasOwnProperty("LevelMax"))
                switch (message.LevelMax) {
                default:
                    return "LevelMax: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.NodeID != null && message.hasOwnProperty("NodeID")) {
                if (!Array.isArray(message.NodeID))
                    return "NodeID: array expected";
                for (let i = 0; i < message.NodeID.length; ++i)
                    if (!$util.isInteger(message.NodeID[i]) && !(message.NodeID[i] && $util.isInteger(message.NodeID[i].low) && $util.isInteger(message.NodeID[i].high)))
                        return "NodeID: integer|Long[] expected";
            }
            if (message.NodeName != null && message.hasOwnProperty("NodeName")) {
                if (!Array.isArray(message.NodeName))
                    return "NodeName: array expected";
                for (let i = 0; i < message.NodeName.length; ++i)
                    if (!$util.isString(message.NodeName[i]))
                        return "NodeName: string[] expected";
            }
            if (message.UpdateTime != null && message.hasOwnProperty("UpdateTime")) {
                if (!Array.isArray(message.UpdateTime))
                    return "UpdateTime: array expected";
                for (let i = 0; i < message.UpdateTime.length; ++i) {
                    let error = $root.protoManage.Time.verify(message.UpdateTime[i]);
                    if (error)
                        return "UpdateTime." + error;
                }
            }
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeReportList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeReportList} ReqNodeReportList
         */
        ReqNodeReportList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeReportList)
                return object;
            let message = new $root.protoManage.ReqNodeReportList();
            if (object.ID) {
                if (!Array.isArray(object.ID))
                    throw TypeError(".protoManage.ReqNodeReportList.ID: array expected");
                message.ID = [];
                for (let i = 0; i < object.ID.length; ++i)
                    if ($util.Long)
                        (message.ID[i] = $util.Long.fromValue(object.ID[i])).unsigned = false;
                    else if (typeof object.ID[i] === "string")
                        message.ID[i] = parseInt(object.ID[i], 10);
                    else if (typeof object.ID[i] === "number")
                        message.ID[i] = object.ID[i];
                    else if (typeof object.ID[i] === "object")
                        message.ID[i] = new $util.LongBits(object.ID[i].low >>> 0, object.ID[i].high >>> 0).toNumber();
            }
            if (object.Name) {
                if (!Array.isArray(object.Name))
                    throw TypeError(".protoManage.ReqNodeReportList.Name: array expected");
                message.Name = [];
                for (let i = 0; i < object.Name.length; ++i)
                    message.Name[i] = String(object.Name[i]);
            }
            if (object.Level) {
                if (!Array.isArray(object.Level))
                    throw TypeError(".protoManage.ReqNodeReportList.Level: array expected");
                message.Level = [];
                for (let i = 0; i < object.Level.length; ++i)
                    switch (object.Level[i]) {
                    default:
                    case "LevelNot":
                    case 0:
                        message.Level[i] = 0;
                        break;
                    case "LevelPrimary":
                    case 1:
                        message.Level[i] = 1;
                        break;
                    case "LevelIntermediate":
                    case 2:
                        message.Level[i] = 2;
                        break;
                    case "LevelSenior":
                    case 3:
                        message.Level[i] = 3;
                        break;
                    case "LevelSuper":
                    case 4:
                        message.Level[i] = 4;
                        break;
                    }
            }
            switch (object.LevelMax) {
            case "LevelNot":
            case 0:
                message.LevelMax = 0;
                break;
            case "LevelPrimary":
            case 1:
                message.LevelMax = 1;
                break;
            case "LevelIntermediate":
            case 2:
                message.LevelMax = 2;
                break;
            case "LevelSenior":
            case 3:
                message.LevelMax = 3;
                break;
            case "LevelSuper":
            case 4:
                message.LevelMax = 4;
                break;
            }
            if (object.NodeID) {
                if (!Array.isArray(object.NodeID))
                    throw TypeError(".protoManage.ReqNodeReportList.NodeID: array expected");
                message.NodeID = [];
                for (let i = 0; i < object.NodeID.length; ++i)
                    if ($util.Long)
                        (message.NodeID[i] = $util.Long.fromValue(object.NodeID[i])).unsigned = false;
                    else if (typeof object.NodeID[i] === "string")
                        message.NodeID[i] = parseInt(object.NodeID[i], 10);
                    else if (typeof object.NodeID[i] === "number")
                        message.NodeID[i] = object.NodeID[i];
                    else if (typeof object.NodeID[i] === "object")
                        message.NodeID[i] = new $util.LongBits(object.NodeID[i].low >>> 0, object.NodeID[i].high >>> 0).toNumber();
            }
            if (object.NodeName) {
                if (!Array.isArray(object.NodeName))
                    throw TypeError(".protoManage.ReqNodeReportList.NodeName: array expected");
                message.NodeName = [];
                for (let i = 0; i < object.NodeName.length; ++i)
                    message.NodeName[i] = String(object.NodeName[i]);
            }
            if (object.UpdateTime) {
                if (!Array.isArray(object.UpdateTime))
                    throw TypeError(".protoManage.ReqNodeReportList.UpdateTime: array expected");
                message.UpdateTime = [];
                for (let i = 0; i < object.UpdateTime.length; ++i) {
                    if (typeof object.UpdateTime[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeReportList.UpdateTime: object expected");
                    message.UpdateTime[i] = $root.protoManage.Time.fromObject(object.UpdateTime[i]);
                }
            }
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeReportList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeReportList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeReportList
         * @static
         * @param {protoManage.ReqNodeReportList} message ReqNodeReportList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeReportList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.ID = [];
                object.Name = [];
                object.Level = [];
                object.NodeID = [];
                object.NodeName = [];
                object.UpdateTime = [];
            }
            if (options.defaults) {
                object.LevelMax = options.enums === String ? "LevelNot" : 0;
                object.Page = null;
            }
            if (message.ID && message.ID.length) {
                object.ID = [];
                for (let j = 0; j < message.ID.length; ++j)
                    if (typeof message.ID[j] === "number")
                        object.ID[j] = options.longs === String ? String(message.ID[j]) : message.ID[j];
                    else
                        object.ID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ID[j]) : options.longs === Number ? new $util.LongBits(message.ID[j].low >>> 0, message.ID[j].high >>> 0).toNumber() : message.ID[j];
            }
            if (message.Name && message.Name.length) {
                object.Name = [];
                for (let j = 0; j < message.Name.length; ++j)
                    object.Name[j] = message.Name[j];
            }
            if (message.Level && message.Level.length) {
                object.Level = [];
                for (let j = 0; j < message.Level.length; ++j)
                    object.Level[j] = options.enums === String ? $root.protoManage.Level[message.Level[j]] : message.Level[j];
            }
            if (message.LevelMax != null && message.hasOwnProperty("LevelMax"))
                object.LevelMax = options.enums === String ? $root.protoManage.Level[message.LevelMax] : message.LevelMax;
            if (message.NodeID && message.NodeID.length) {
                object.NodeID = [];
                for (let j = 0; j < message.NodeID.length; ++j)
                    if (typeof message.NodeID[j] === "number")
                        object.NodeID[j] = options.longs === String ? String(message.NodeID[j]) : message.NodeID[j];
                    else
                        object.NodeID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID[j]) : options.longs === Number ? new $util.LongBits(message.NodeID[j].low >>> 0, message.NodeID[j].high >>> 0).toNumber() : message.NodeID[j];
            }
            if (message.NodeName && message.NodeName.length) {
                object.NodeName = [];
                for (let j = 0; j < message.NodeName.length; ++j)
                    object.NodeName[j] = message.NodeName[j];
            }
            if (message.UpdateTime && message.UpdateTime.length) {
                object.UpdateTime = [];
                for (let j = 0; j < message.UpdateTime.length; ++j)
                    object.UpdateTime[j] = $root.protoManage.Time.toObject(message.UpdateTime[j], options);
            }
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeReportList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeReportList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeReportList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeReportList;
    })();

    protoManage.AnsNodeReportList = (function() {

        /**
         * Properties of an AnsNodeReportList.
         * @memberof protoManage
         * @interface IAnsNodeReportList
         * @property {number|null} [Length] AnsNodeReportList Length
         * @property {Array.<protoManage.INodeReport>|null} [NodeReportList] AnsNodeReportList NodeReportList
         * @property {Array.<protoManage.INode>|null} [NodeList] AnsNodeReportList NodeList
         */

        /**
         * Constructs a new AnsNodeReportList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeReportList.
         * @implements IAnsNodeReportList
         * @constructor
         * @param {protoManage.IAnsNodeReportList=} [properties] Properties to set
         */
        function AnsNodeReportList(properties) {
            this.NodeReportList = [];
            this.NodeList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeReportList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeReportList
         * @instance
         */
        AnsNodeReportList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeReportList NodeReportList.
         * @member {Array.<protoManage.INodeReport>} NodeReportList
         * @memberof protoManage.AnsNodeReportList
         * @instance
         */
        AnsNodeReportList.prototype.NodeReportList = $util.emptyArray;

        /**
         * AnsNodeReportList NodeList.
         * @member {Array.<protoManage.INode>} NodeList
         * @memberof protoManage.AnsNodeReportList
         * @instance
         */
        AnsNodeReportList.prototype.NodeList = $util.emptyArray;

        /**
         * Creates a new AnsNodeReportList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {protoManage.IAnsNodeReportList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeReportList} AnsNodeReportList instance
         */
        AnsNodeReportList.create = function create(properties) {
            return new AnsNodeReportList(properties);
        };

        /**
         * Encodes the specified AnsNodeReportList message. Does not implicitly {@link protoManage.AnsNodeReportList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {protoManage.IAnsNodeReportList} message AnsNodeReportList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeReportList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeReportList != null && message.NodeReportList.length)
                for (let i = 0; i < message.NodeReportList.length; ++i)
                    $root.protoManage.NodeReport.encode(message.NodeReportList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.NodeList != null && message.NodeList.length)
                for (let i = 0; i < message.NodeList.length; ++i)
                    $root.protoManage.Node.encode(message.NodeList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeReportList message, length delimited. Does not implicitly {@link protoManage.AnsNodeReportList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {protoManage.IAnsNodeReportList} message AnsNodeReportList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeReportList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeReportList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeReportList} AnsNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeReportList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeReportList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeReportList && message.NodeReportList.length))
                        message.NodeReportList = [];
                    message.NodeReportList.push($root.protoManage.NodeReport.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.NodeList && message.NodeList.length))
                        message.NodeList = [];
                    message.NodeList.push($root.protoManage.Node.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeReportList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeReportList} AnsNodeReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeReportList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeReportList message.
         * @function verify
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeReportList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeReportList != null && message.hasOwnProperty("NodeReportList")) {
                if (!Array.isArray(message.NodeReportList))
                    return "NodeReportList: array expected";
                for (let i = 0; i < message.NodeReportList.length; ++i) {
                    let error = $root.protoManage.NodeReport.verify(message.NodeReportList[i]);
                    if (error)
                        return "NodeReportList." + error;
                }
            }
            if (message.NodeList != null && message.hasOwnProperty("NodeList")) {
                if (!Array.isArray(message.NodeList))
                    return "NodeList: array expected";
                for (let i = 0; i < message.NodeList.length; ++i) {
                    let error = $root.protoManage.Node.verify(message.NodeList[i]);
                    if (error)
                        return "NodeList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeReportList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeReportList} AnsNodeReportList
         */
        AnsNodeReportList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeReportList)
                return object;
            let message = new $root.protoManage.AnsNodeReportList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeReportList) {
                if (!Array.isArray(object.NodeReportList))
                    throw TypeError(".protoManage.AnsNodeReportList.NodeReportList: array expected");
                message.NodeReportList = [];
                for (let i = 0; i < object.NodeReportList.length; ++i) {
                    if (typeof object.NodeReportList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeReportList.NodeReportList: object expected");
                    message.NodeReportList[i] = $root.protoManage.NodeReport.fromObject(object.NodeReportList[i]);
                }
            }
            if (object.NodeList) {
                if (!Array.isArray(object.NodeList))
                    throw TypeError(".protoManage.AnsNodeReportList.NodeList: array expected");
                message.NodeList = [];
                for (let i = 0; i < object.NodeList.length; ++i) {
                    if (typeof object.NodeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeReportList.NodeList: object expected");
                    message.NodeList[i] = $root.protoManage.Node.fromObject(object.NodeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeReportList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeReportList
         * @static
         * @param {protoManage.AnsNodeReportList} message AnsNodeReportList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeReportList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.NodeReportList = [];
                object.NodeList = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Length = options.longs === String ? "0" : 0;
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (typeof message.Length === "number")
                    object.Length = options.longs === String ? String(message.Length) : message.Length;
                else
                    object.Length = options.longs === String ? $util.Long.prototype.toString.call(message.Length) : options.longs === Number ? new $util.LongBits(message.Length.low >>> 0, message.Length.high >>> 0).toNumber() : message.Length;
            if (message.NodeReportList && message.NodeReportList.length) {
                object.NodeReportList = [];
                for (let j = 0; j < message.NodeReportList.length; ++j)
                    object.NodeReportList[j] = $root.protoManage.NodeReport.toObject(message.NodeReportList[j], options);
            }
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeReportList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeReportList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeReportList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeReportList;
    })();

    protoManage.ReqNodeFuncCall = (function() {

        /**
         * Properties of a ReqNodeFuncCall.
         * @memberof protoManage
         * @interface IReqNodeFuncCall
         * @property {protoManage.INodeFuncCall|null} [NodeFuncCall] ReqNodeFuncCall NodeFuncCall
         */

        /**
         * Constructs a new ReqNodeFuncCall.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeFuncCall.
         * @implements IReqNodeFuncCall
         * @constructor
         * @param {protoManage.IReqNodeFuncCall=} [properties] Properties to set
         */
        function ReqNodeFuncCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeFuncCall NodeFuncCall.
         * @member {protoManage.INodeFuncCall|null|undefined} NodeFuncCall
         * @memberof protoManage.ReqNodeFuncCall
         * @instance
         */
        ReqNodeFuncCall.prototype.NodeFuncCall = null;

        /**
         * Creates a new ReqNodeFuncCall instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {protoManage.IReqNodeFuncCall=} [properties] Properties to set
         * @returns {protoManage.ReqNodeFuncCall} ReqNodeFuncCall instance
         */
        ReqNodeFuncCall.create = function create(properties) {
            return new ReqNodeFuncCall(properties);
        };

        /**
         * Encodes the specified ReqNodeFuncCall message. Does not implicitly {@link protoManage.ReqNodeFuncCall.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {protoManage.IReqNodeFuncCall} message ReqNodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeFuncCall != null && Object.hasOwnProperty.call(message, "NodeFuncCall"))
                $root.protoManage.NodeFuncCall.encode(message.NodeFuncCall, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeFuncCall message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {protoManage.IReqNodeFuncCall} message ReqNodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeFuncCall message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeFuncCall} ReqNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeFuncCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NodeFuncCall = $root.protoManage.NodeFuncCall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeFuncCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeFuncCall} ReqNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeFuncCall message.
         * @function verify
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeFuncCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeFuncCall != null && message.hasOwnProperty("NodeFuncCall")) {
                let error = $root.protoManage.NodeFuncCall.verify(message.NodeFuncCall);
                if (error)
                    return "NodeFuncCall." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeFuncCall} ReqNodeFuncCall
         */
        ReqNodeFuncCall.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeFuncCall)
                return object;
            let message = new $root.protoManage.ReqNodeFuncCall();
            if (object.NodeFuncCall != null) {
                if (typeof object.NodeFuncCall !== "object")
                    throw TypeError(".protoManage.ReqNodeFuncCall.NodeFuncCall: object expected");
                message.NodeFuncCall = $root.protoManage.NodeFuncCall.fromObject(object.NodeFuncCall);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeFuncCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeFuncCall
         * @static
         * @param {protoManage.ReqNodeFuncCall} message ReqNodeFuncCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeFuncCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.NodeFuncCall = null;
            if (message.NodeFuncCall != null && message.hasOwnProperty("NodeFuncCall"))
                object.NodeFuncCall = $root.protoManage.NodeFuncCall.toObject(message.NodeFuncCall, options);
            return object;
        };

        /**
         * Converts this ReqNodeFuncCall to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeFuncCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeFuncCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeFuncCall;
    })();

    protoManage.AnsNodeFuncCall = (function() {

        /**
         * Properties of an AnsNodeFuncCall.
         * @memberof protoManage
         * @interface IAnsNodeFuncCall
         * @property {protoManage.INodeFuncCall|null} [NodeFuncCall] AnsNodeFuncCall NodeFuncCall
         * @property {string|null} [Error] AnsNodeFuncCall Error
         */

        /**
         * Constructs a new AnsNodeFuncCall.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeFuncCall.
         * @implements IAnsNodeFuncCall
         * @constructor
         * @param {protoManage.IAnsNodeFuncCall=} [properties] Properties to set
         */
        function AnsNodeFuncCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeFuncCall NodeFuncCall.
         * @member {protoManage.INodeFuncCall|null|undefined} NodeFuncCall
         * @memberof protoManage.AnsNodeFuncCall
         * @instance
         */
        AnsNodeFuncCall.prototype.NodeFuncCall = null;

        /**
         * AnsNodeFuncCall Error.
         * @member {string} Error
         * @memberof protoManage.AnsNodeFuncCall
         * @instance
         */
        AnsNodeFuncCall.prototype.Error = "";

        /**
         * Creates a new AnsNodeFuncCall instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {protoManage.IAnsNodeFuncCall=} [properties] Properties to set
         * @returns {protoManage.AnsNodeFuncCall} AnsNodeFuncCall instance
         */
        AnsNodeFuncCall.create = function create(properties) {
            return new AnsNodeFuncCall(properties);
        };

        /**
         * Encodes the specified AnsNodeFuncCall message. Does not implicitly {@link protoManage.AnsNodeFuncCall.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {protoManage.IAnsNodeFuncCall} message AnsNodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeFuncCall != null && Object.hasOwnProperty.call(message, "NodeFuncCall"))
                $root.protoManage.NodeFuncCall.encode(message.NodeFuncCall, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Error != null && Object.hasOwnProperty.call(message, "Error"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Error);
            return writer;
        };

        /**
         * Encodes the specified AnsNodeFuncCall message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {protoManage.IAnsNodeFuncCall} message AnsNodeFuncCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeFuncCall message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeFuncCall} AnsNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeFuncCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NodeFuncCall = $root.protoManage.NodeFuncCall.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeFuncCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeFuncCall} AnsNodeFuncCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeFuncCall message.
         * @function verify
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeFuncCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeFuncCall != null && message.hasOwnProperty("NodeFuncCall")) {
                let error = $root.protoManage.NodeFuncCall.verify(message.NodeFuncCall);
                if (error)
                    return "NodeFuncCall." + error;
            }
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isString(message.Error))
                    return "Error: string expected";
            return null;
        };

        /**
         * Creates an AnsNodeFuncCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeFuncCall} AnsNodeFuncCall
         */
        AnsNodeFuncCall.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeFuncCall)
                return object;
            let message = new $root.protoManage.AnsNodeFuncCall();
            if (object.NodeFuncCall != null) {
                if (typeof object.NodeFuncCall !== "object")
                    throw TypeError(".protoManage.AnsNodeFuncCall.NodeFuncCall: object expected");
                message.NodeFuncCall = $root.protoManage.NodeFuncCall.fromObject(object.NodeFuncCall);
            }
            if (object.Error != null)
                message.Error = String(object.Error);
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeFuncCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeFuncCall
         * @static
         * @param {protoManage.AnsNodeFuncCall} message AnsNodeFuncCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeFuncCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.NodeFuncCall = null;
                object.Error = "";
            }
            if (message.NodeFuncCall != null && message.hasOwnProperty("NodeFuncCall"))
                object.NodeFuncCall = $root.protoManage.NodeFuncCall.toObject(message.NodeFuncCall, options);
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            return object;
        };

        /**
         * Converts this AnsNodeFuncCall to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeFuncCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeFuncCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeFuncCall;
    })();

    protoManage.ReqNodeFuncCallList = (function() {

        /**
         * Properties of a ReqNodeFuncCallList.
         * @memberof protoManage
         * @interface IReqNodeFuncCallList
         * @property {number|null} [FuncID] ReqNodeFuncCallList FuncID
         * @property {protoManage.IPage|null} [Page] ReqNodeFuncCallList Page
         */

        /**
         * Constructs a new ReqNodeFuncCallList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeFuncCallList.
         * @implements IReqNodeFuncCallList
         * @constructor
         * @param {protoManage.IReqNodeFuncCallList=} [properties] Properties to set
         */
        function ReqNodeFuncCallList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeFuncCallList FuncID.
         * @member {number} FuncID
         * @memberof protoManage.ReqNodeFuncCallList
         * @instance
         */
        ReqNodeFuncCallList.prototype.FuncID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqNodeFuncCallList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeFuncCallList
         * @instance
         */
        ReqNodeFuncCallList.prototype.Page = null;

        /**
         * Creates a new ReqNodeFuncCallList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {protoManage.IReqNodeFuncCallList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeFuncCallList} ReqNodeFuncCallList instance
         */
        ReqNodeFuncCallList.create = function create(properties) {
            return new ReqNodeFuncCallList(properties);
        };

        /**
         * Encodes the specified ReqNodeFuncCallList message. Does not implicitly {@link protoManage.ReqNodeFuncCallList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {protoManage.IReqNodeFuncCallList} message ReqNodeFuncCallList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncCallList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FuncID != null && Object.hasOwnProperty.call(message, "FuncID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.FuncID);
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeFuncCallList message, length delimited. Does not implicitly {@link protoManage.ReqNodeFuncCallList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {protoManage.IReqNodeFuncCallList} message ReqNodeFuncCallList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeFuncCallList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeFuncCallList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeFuncCallList} ReqNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncCallList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeFuncCallList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FuncID = reader.int64();
                    break;
                case 2:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeFuncCallList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeFuncCallList} ReqNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeFuncCallList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeFuncCallList message.
         * @function verify
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeFuncCallList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (!$util.isInteger(message.FuncID) && !(message.FuncID && $util.isInteger(message.FuncID.low) && $util.isInteger(message.FuncID.high)))
                    return "FuncID: integer|Long expected";
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeFuncCallList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeFuncCallList} ReqNodeFuncCallList
         */
        ReqNodeFuncCallList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeFuncCallList)
                return object;
            let message = new $root.protoManage.ReqNodeFuncCallList();
            if (object.FuncID != null)
                if ($util.Long)
                    (message.FuncID = $util.Long.fromValue(object.FuncID)).unsigned = false;
                else if (typeof object.FuncID === "string")
                    message.FuncID = parseInt(object.FuncID, 10);
                else if (typeof object.FuncID === "number")
                    message.FuncID = object.FuncID;
                else if (typeof object.FuncID === "object")
                    message.FuncID = new $util.LongBits(object.FuncID.low >>> 0, object.FuncID.high >>> 0).toNumber();
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeFuncCallList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeFuncCallList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeFuncCallList
         * @static
         * @param {protoManage.ReqNodeFuncCallList} message ReqNodeFuncCallList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeFuncCallList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.FuncID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FuncID = options.longs === String ? "0" : 0;
                object.Page = null;
            }
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (typeof message.FuncID === "number")
                    object.FuncID = options.longs === String ? String(message.FuncID) : message.FuncID;
                else
                    object.FuncID = options.longs === String ? $util.Long.prototype.toString.call(message.FuncID) : options.longs === Number ? new $util.LongBits(message.FuncID.low >>> 0, message.FuncID.high >>> 0).toNumber() : message.FuncID;
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeFuncCallList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeFuncCallList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeFuncCallList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeFuncCallList;
    })();

    protoManage.AnsNodeFuncCallList = (function() {

        /**
         * Properties of an AnsNodeFuncCallList.
         * @memberof protoManage
         * @interface IAnsNodeFuncCallList
         * @property {Array.<protoManage.INodeFuncCall>|null} [NodeFuncCallList] AnsNodeFuncCallList NodeFuncCallList
         */

        /**
         * Constructs a new AnsNodeFuncCallList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeFuncCallList.
         * @implements IAnsNodeFuncCallList
         * @constructor
         * @param {protoManage.IAnsNodeFuncCallList=} [properties] Properties to set
         */
        function AnsNodeFuncCallList(properties) {
            this.NodeFuncCallList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeFuncCallList NodeFuncCallList.
         * @member {Array.<protoManage.INodeFuncCall>} NodeFuncCallList
         * @memberof protoManage.AnsNodeFuncCallList
         * @instance
         */
        AnsNodeFuncCallList.prototype.NodeFuncCallList = $util.emptyArray;

        /**
         * Creates a new AnsNodeFuncCallList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {protoManage.IAnsNodeFuncCallList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeFuncCallList} AnsNodeFuncCallList instance
         */
        AnsNodeFuncCallList.create = function create(properties) {
            return new AnsNodeFuncCallList(properties);
        };

        /**
         * Encodes the specified AnsNodeFuncCallList message. Does not implicitly {@link protoManage.AnsNodeFuncCallList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {protoManage.IAnsNodeFuncCallList} message AnsNodeFuncCallList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncCallList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeFuncCallList != null && message.NodeFuncCallList.length)
                for (let i = 0; i < message.NodeFuncCallList.length; ++i)
                    $root.protoManage.NodeFuncCall.encode(message.NodeFuncCallList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeFuncCallList message, length delimited. Does not implicitly {@link protoManage.AnsNodeFuncCallList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {protoManage.IAnsNodeFuncCallList} message AnsNodeFuncCallList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeFuncCallList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeFuncCallList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeFuncCallList} AnsNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncCallList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeFuncCallList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NodeFuncCallList && message.NodeFuncCallList.length))
                        message.NodeFuncCallList = [];
                    message.NodeFuncCallList.push($root.protoManage.NodeFuncCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeFuncCallList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeFuncCallList} AnsNodeFuncCallList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeFuncCallList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeFuncCallList message.
         * @function verify
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeFuncCallList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeFuncCallList != null && message.hasOwnProperty("NodeFuncCallList")) {
                if (!Array.isArray(message.NodeFuncCallList))
                    return "NodeFuncCallList: array expected";
                for (let i = 0; i < message.NodeFuncCallList.length; ++i) {
                    let error = $root.protoManage.NodeFuncCall.verify(message.NodeFuncCallList[i]);
                    if (error)
                        return "NodeFuncCallList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeFuncCallList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeFuncCallList} AnsNodeFuncCallList
         */
        AnsNodeFuncCallList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeFuncCallList)
                return object;
            let message = new $root.protoManage.AnsNodeFuncCallList();
            if (object.NodeFuncCallList) {
                if (!Array.isArray(object.NodeFuncCallList))
                    throw TypeError(".protoManage.AnsNodeFuncCallList.NodeFuncCallList: array expected");
                message.NodeFuncCallList = [];
                for (let i = 0; i < object.NodeFuncCallList.length; ++i) {
                    if (typeof object.NodeFuncCallList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeFuncCallList.NodeFuncCallList: object expected");
                    message.NodeFuncCallList[i] = $root.protoManage.NodeFuncCall.fromObject(object.NodeFuncCallList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeFuncCallList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeFuncCallList
         * @static
         * @param {protoManage.AnsNodeFuncCallList} message AnsNodeFuncCallList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeFuncCallList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeFuncCallList = [];
            if (message.NodeFuncCallList && message.NodeFuncCallList.length) {
                object.NodeFuncCallList = [];
                for (let j = 0; j < message.NodeFuncCallList.length; ++j)
                    object.NodeFuncCallList[j] = $root.protoManage.NodeFuncCall.toObject(message.NodeFuncCallList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeFuncCallList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeFuncCallList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeFuncCallList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeFuncCallList;
    })();

    protoManage.ReqNodeReportValList = (function() {

        /**
         * Properties of a ReqNodeReportValList.
         * @memberof protoManage
         * @interface IReqNodeReportValList
         * @property {number|null} [ID] ReqNodeReportValList ID
         * @property {number|null} [ReportID] ReqNodeReportValList ReportID
         * @property {protoManage.IPage|null} [Page] ReqNodeReportValList Page
         */

        /**
         * Constructs a new ReqNodeReportValList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeReportValList.
         * @implements IReqNodeReportValList
         * @constructor
         * @param {protoManage.IReqNodeReportValList=} [properties] Properties to set
         */
        function ReqNodeReportValList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeReportValList ID.
         * @member {number} ID
         * @memberof protoManage.ReqNodeReportValList
         * @instance
         */
        ReqNodeReportValList.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqNodeReportValList ReportID.
         * @member {number} ReportID
         * @memberof protoManage.ReqNodeReportValList
         * @instance
         */
        ReqNodeReportValList.prototype.ReportID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqNodeReportValList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeReportValList
         * @instance
         */
        ReqNodeReportValList.prototype.Page = null;

        /**
         * Creates a new ReqNodeReportValList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {protoManage.IReqNodeReportValList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeReportValList} ReqNodeReportValList instance
         */
        ReqNodeReportValList.create = function create(properties) {
            return new ReqNodeReportValList(properties);
        };

        /**
         * Encodes the specified ReqNodeReportValList message. Does not implicitly {@link protoManage.ReqNodeReportValList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {protoManage.IReqNodeReportValList} message ReqNodeReportValList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeReportValList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ID);
            if (message.ReportID != null && Object.hasOwnProperty.call(message, "ReportID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ReportID);
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeReportValList message, length delimited. Does not implicitly {@link protoManage.ReqNodeReportValList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {protoManage.IReqNodeReportValList} message ReqNodeReportValList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeReportValList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeReportValList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeReportValList} ReqNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeReportValList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeReportValList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.ReportID = reader.int64();
                    break;
                case 3:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeReportValList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeReportValList} ReqNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeReportValList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeReportValList message.
         * @function verify
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeReportValList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (!$util.isInteger(message.ReportID) && !(message.ReportID && $util.isInteger(message.ReportID.low) && $util.isInteger(message.ReportID.high)))
                    return "ReportID: integer|Long expected";
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeReportValList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeReportValList} ReqNodeReportValList
         */
        ReqNodeReportValList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeReportValList)
                return object;
            let message = new $root.protoManage.ReqNodeReportValList();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.ReportID != null)
                if ($util.Long)
                    (message.ReportID = $util.Long.fromValue(object.ReportID)).unsigned = false;
                else if (typeof object.ReportID === "string")
                    message.ReportID = parseInt(object.ReportID, 10);
                else if (typeof object.ReportID === "number")
                    message.ReportID = object.ReportID;
                else if (typeof object.ReportID === "object")
                    message.ReportID = new $util.LongBits(object.ReportID.low >>> 0, object.ReportID.high >>> 0).toNumber();
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeReportValList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeReportValList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeReportValList
         * @static
         * @param {protoManage.ReqNodeReportValList} message ReqNodeReportValList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeReportValList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ReportID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ReportID = options.longs === String ? "0" : 0;
                object.Page = null;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (typeof message.ReportID === "number")
                    object.ReportID = options.longs === String ? String(message.ReportID) : message.ReportID;
                else
                    object.ReportID = options.longs === String ? $util.Long.prototype.toString.call(message.ReportID) : options.longs === Number ? new $util.LongBits(message.ReportID.low >>> 0, message.ReportID.high >>> 0).toNumber() : message.ReportID;
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeReportValList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeReportValList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeReportValList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeReportValList;
    })();

    protoManage.AnsNodeReportValList = (function() {

        /**
         * Properties of an AnsNodeReportValList.
         * @memberof protoManage
         * @interface IAnsNodeReportValList
         * @property {Array.<protoManage.INodeReportVal>|null} [NodeReportValList] AnsNodeReportValList NodeReportValList
         */

        /**
         * Constructs a new AnsNodeReportValList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeReportValList.
         * @implements IAnsNodeReportValList
         * @constructor
         * @param {protoManage.IAnsNodeReportValList=} [properties] Properties to set
         */
        function AnsNodeReportValList(properties) {
            this.NodeReportValList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeReportValList NodeReportValList.
         * @member {Array.<protoManage.INodeReportVal>} NodeReportValList
         * @memberof protoManage.AnsNodeReportValList
         * @instance
         */
        AnsNodeReportValList.prototype.NodeReportValList = $util.emptyArray;

        /**
         * Creates a new AnsNodeReportValList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {protoManage.IAnsNodeReportValList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeReportValList} AnsNodeReportValList instance
         */
        AnsNodeReportValList.create = function create(properties) {
            return new AnsNodeReportValList(properties);
        };

        /**
         * Encodes the specified AnsNodeReportValList message. Does not implicitly {@link protoManage.AnsNodeReportValList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {protoManage.IAnsNodeReportValList} message AnsNodeReportValList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeReportValList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeReportValList != null && message.NodeReportValList.length)
                for (let i = 0; i < message.NodeReportValList.length; ++i)
                    $root.protoManage.NodeReportVal.encode(message.NodeReportValList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeReportValList message, length delimited. Does not implicitly {@link protoManage.AnsNodeReportValList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {protoManage.IAnsNodeReportValList} message AnsNodeReportValList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeReportValList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeReportValList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeReportValList} AnsNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeReportValList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeReportValList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NodeReportValList && message.NodeReportValList.length))
                        message.NodeReportValList = [];
                    message.NodeReportValList.push($root.protoManage.NodeReportVal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeReportValList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeReportValList} AnsNodeReportValList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeReportValList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeReportValList message.
         * @function verify
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeReportValList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeReportValList != null && message.hasOwnProperty("NodeReportValList")) {
                if (!Array.isArray(message.NodeReportValList))
                    return "NodeReportValList: array expected";
                for (let i = 0; i < message.NodeReportValList.length; ++i) {
                    let error = $root.protoManage.NodeReportVal.verify(message.NodeReportValList[i]);
                    if (error)
                        return "NodeReportValList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeReportValList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeReportValList} AnsNodeReportValList
         */
        AnsNodeReportValList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeReportValList)
                return object;
            let message = new $root.protoManage.AnsNodeReportValList();
            if (object.NodeReportValList) {
                if (!Array.isArray(object.NodeReportValList))
                    throw TypeError(".protoManage.AnsNodeReportValList.NodeReportValList: array expected");
                message.NodeReportValList = [];
                for (let i = 0; i < object.NodeReportValList.length; ++i) {
                    if (typeof object.NodeReportValList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeReportValList.NodeReportValList: object expected");
                    message.NodeReportValList[i] = $root.protoManage.NodeReportVal.fromObject(object.NodeReportValList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeReportValList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeReportValList
         * @static
         * @param {protoManage.AnsNodeReportValList} message AnsNodeReportValList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeReportValList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeReportValList = [];
            if (message.NodeReportValList && message.NodeReportValList.length) {
                object.NodeReportValList = [];
                for (let j = 0; j < message.NodeReportValList.length; ++j)
                    object.NodeReportValList[j] = $root.protoManage.NodeReportVal.toObject(message.NodeReportValList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeReportValList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeReportValList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeReportValList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeReportValList;
    })();

    protoManage.ReqNodeNotifyList = (function() {

        /**
         * Properties of a ReqNodeNotifyList.
         * @memberof protoManage
         * @interface IReqNodeNotifyList
         * @property {Array.<string>|null} [Message] ReqNodeNotifyList Message
         * @property {Array.<protoManage.State>|null} [State] ReqNodeNotifyList State
         * @property {Array.<string>|null} [SenderName] ReqNodeNotifyList SenderName
         * @property {Array.<protoManage.NotifySenderType>|null} [SenderType] ReqNodeNotifyList SenderType
         * @property {Array.<protoManage.ITime>|null} [SenderTime] ReqNodeNotifyList SenderTime
         * @property {protoManage.IPage|null} [Page] ReqNodeNotifyList Page
         */

        /**
         * Constructs a new ReqNodeNotifyList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeNotifyList.
         * @implements IReqNodeNotifyList
         * @constructor
         * @param {protoManage.IReqNodeNotifyList=} [properties] Properties to set
         */
        function ReqNodeNotifyList(properties) {
            this.Message = [];
            this.State = [];
            this.SenderName = [];
            this.SenderType = [];
            this.SenderTime = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeNotifyList Message.
         * @member {Array.<string>} Message
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.Message = $util.emptyArray;

        /**
         * ReqNodeNotifyList State.
         * @member {Array.<protoManage.State>} State
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.State = $util.emptyArray;

        /**
         * ReqNodeNotifyList SenderName.
         * @member {Array.<string>} SenderName
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.SenderName = $util.emptyArray;

        /**
         * ReqNodeNotifyList SenderType.
         * @member {Array.<protoManage.NotifySenderType>} SenderType
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.SenderType = $util.emptyArray;

        /**
         * ReqNodeNotifyList SenderTime.
         * @member {Array.<protoManage.ITime>} SenderTime
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.SenderTime = $util.emptyArray;

        /**
         * ReqNodeNotifyList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.Page = null;

        /**
         * Creates a new ReqNodeNotifyList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {protoManage.IReqNodeNotifyList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeNotifyList} ReqNodeNotifyList instance
         */
        ReqNodeNotifyList.create = function create(properties) {
            return new ReqNodeNotifyList(properties);
        };

        /**
         * Encodes the specified ReqNodeNotifyList message. Does not implicitly {@link protoManage.ReqNodeNotifyList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {protoManage.IReqNodeNotifyList} message ReqNodeNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeNotifyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Message != null && message.Message.length)
                for (let i = 0; i < message.Message.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message[i]);
            if (message.State != null && message.State.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.State.length; ++i)
                    writer.int32(message.State[i]);
                writer.ldelim();
            }
            if (message.SenderName != null && message.SenderName.length)
                for (let i = 0; i < message.SenderName.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.SenderName[i]);
            if (message.SenderType != null && message.SenderType.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.SenderType.length; ++i)
                    writer.int32(message.SenderType[i]);
                writer.ldelim();
            }
            if (message.SenderTime != null && message.SenderTime.length)
                for (let i = 0; i < message.SenderTime.length; ++i)
                    $root.protoManage.Time.encode(message.SenderTime[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeNotifyList message, length delimited. Does not implicitly {@link protoManage.ReqNodeNotifyList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {protoManage.IReqNodeNotifyList} message ReqNodeNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeNotifyList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeNotifyList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeNotifyList} ReqNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeNotifyList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeNotifyList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Message && message.Message.length))
                        message.Message = [];
                    message.Message.push(reader.string());
                    break;
                case 2:
                    if (!(message.State && message.State.length))
                        message.State = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.State.push(reader.int32());
                    } else
                        message.State.push(reader.int32());
                    break;
                case 3:
                    if (!(message.SenderName && message.SenderName.length))
                        message.SenderName = [];
                    message.SenderName.push(reader.string());
                    break;
                case 4:
                    if (!(message.SenderType && message.SenderType.length))
                        message.SenderType = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SenderType.push(reader.int32());
                    } else
                        message.SenderType.push(reader.int32());
                    break;
                case 5:
                    if (!(message.SenderTime && message.SenderTime.length))
                        message.SenderTime = [];
                    message.SenderTime.push($root.protoManage.Time.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeNotifyList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeNotifyList} ReqNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeNotifyList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeNotifyList message.
         * @function verify
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeNotifyList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Message != null && message.hasOwnProperty("Message")) {
                if (!Array.isArray(message.Message))
                    return "Message: array expected";
                for (let i = 0; i < message.Message.length; ++i)
                    if (!$util.isString(message.Message[i]))
                        return "Message: string[] expected";
            }
            if (message.State != null && message.hasOwnProperty("State")) {
                if (!Array.isArray(message.State))
                    return "State: array expected";
                for (let i = 0; i < message.State.length; ++i)
                    switch (message.State[i]) {
                    default:
                        return "State: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            if (message.SenderName != null && message.hasOwnProperty("SenderName")) {
                if (!Array.isArray(message.SenderName))
                    return "SenderName: array expected";
                for (let i = 0; i < message.SenderName.length; ++i)
                    if (!$util.isString(message.SenderName[i]))
                        return "SenderName: string[] expected";
            }
            if (message.SenderType != null && message.hasOwnProperty("SenderType")) {
                if (!Array.isArray(message.SenderType))
                    return "SenderType: array expected";
                for (let i = 0; i < message.SenderType.length; ++i)
                    switch (message.SenderType[i]) {
                    default:
                        return "SenderType: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            if (message.SenderTime != null && message.hasOwnProperty("SenderTime")) {
                if (!Array.isArray(message.SenderTime))
                    return "SenderTime: array expected";
                for (let i = 0; i < message.SenderTime.length; ++i) {
                    let error = $root.protoManage.Time.verify(message.SenderTime[i]);
                    if (error)
                        return "SenderTime." + error;
                }
            }
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeNotifyList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeNotifyList} ReqNodeNotifyList
         */
        ReqNodeNotifyList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeNotifyList)
                return object;
            let message = new $root.protoManage.ReqNodeNotifyList();
            if (object.Message) {
                if (!Array.isArray(object.Message))
                    throw TypeError(".protoManage.ReqNodeNotifyList.Message: array expected");
                message.Message = [];
                for (let i = 0; i < object.Message.length; ++i)
                    message.Message[i] = String(object.Message[i]);
            }
            if (object.State) {
                if (!Array.isArray(object.State))
                    throw TypeError(".protoManage.ReqNodeNotifyList.State: array expected");
                message.State = [];
                for (let i = 0; i < object.State.length; ++i)
                    switch (object.State[i]) {
                    default:
                    case "StateNot":
                    case 0:
                        message.State[i] = 0;
                        break;
                    case "StateUnknow":
                    case 1:
                        message.State[i] = 1;
                        break;
                    case "StateNormal":
                    case 2:
                        message.State[i] = 2;
                        break;
                    case "StateWarn":
                    case 3:
                        message.State[i] = 3;
                        break;
                    case "StateError":
                    case 4:
                        message.State[i] = 4;
                        break;
                    }
            }
            if (object.SenderName) {
                if (!Array.isArray(object.SenderName))
                    throw TypeError(".protoManage.ReqNodeNotifyList.SenderName: array expected");
                message.SenderName = [];
                for (let i = 0; i < object.SenderName.length; ++i)
                    message.SenderName[i] = String(object.SenderName[i]);
            }
            if (object.SenderType) {
                if (!Array.isArray(object.SenderType))
                    throw TypeError(".protoManage.ReqNodeNotifyList.SenderType: array expected");
                message.SenderType = [];
                for (let i = 0; i < object.SenderType.length; ++i)
                    switch (object.SenderType[i]) {
                    default:
                    case "NotifySenderTypeUnknow":
                    case 0:
                        message.SenderType[i] = 0;
                        break;
                    case "NotifySenderTypeUser":
                    case 1:
                        message.SenderType[i] = 1;
                        break;
                    case "NotifySenderTypeNode":
                    case 2:
                        message.SenderType[i] = 2;
                        break;
                    }
            }
            if (object.SenderTime) {
                if (!Array.isArray(object.SenderTime))
                    throw TypeError(".protoManage.ReqNodeNotifyList.SenderTime: array expected");
                message.SenderTime = [];
                for (let i = 0; i < object.SenderTime.length; ++i) {
                    if (typeof object.SenderTime[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeNotifyList.SenderTime: object expected");
                    message.SenderTime[i] = $root.protoManage.Time.fromObject(object.SenderTime[i]);
                }
            }
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeNotifyList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeNotifyList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeNotifyList
         * @static
         * @param {protoManage.ReqNodeNotifyList} message ReqNodeNotifyList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeNotifyList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.Message = [];
                object.State = [];
                object.SenderName = [];
                object.SenderType = [];
                object.SenderTime = [];
            }
            if (options.defaults)
                object.Page = null;
            if (message.Message && message.Message.length) {
                object.Message = [];
                for (let j = 0; j < message.Message.length; ++j)
                    object.Message[j] = message.Message[j];
            }
            if (message.State && message.State.length) {
                object.State = [];
                for (let j = 0; j < message.State.length; ++j)
                    object.State[j] = options.enums === String ? $root.protoManage.State[message.State[j]] : message.State[j];
            }
            if (message.SenderName && message.SenderName.length) {
                object.SenderName = [];
                for (let j = 0; j < message.SenderName.length; ++j)
                    object.SenderName[j] = message.SenderName[j];
            }
            if (message.SenderType && message.SenderType.length) {
                object.SenderType = [];
                for (let j = 0; j < message.SenderType.length; ++j)
                    object.SenderType[j] = options.enums === String ? $root.protoManage.NotifySenderType[message.SenderType[j]] : message.SenderType[j];
            }
            if (message.SenderTime && message.SenderTime.length) {
                object.SenderTime = [];
                for (let j = 0; j < message.SenderTime.length; ++j)
                    object.SenderTime[j] = $root.protoManage.Time.toObject(message.SenderTime[j], options);
            }
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeNotifyList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeNotifyList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeNotifyList;
    })();

    protoManage.AnsNodeNotifyList = (function() {

        /**
         * Properties of an AnsNodeNotifyList.
         * @memberof protoManage
         * @interface IAnsNodeNotifyList
         * @property {number|null} [Length] AnsNodeNotifyList Length
         * @property {Array.<protoManage.INodeNotify>|null} [NodeNotifyList] AnsNodeNotifyList NodeNotifyList
         */

        /**
         * Constructs a new AnsNodeNotifyList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeNotifyList.
         * @implements IAnsNodeNotifyList
         * @constructor
         * @param {protoManage.IAnsNodeNotifyList=} [properties] Properties to set
         */
        function AnsNodeNotifyList(properties) {
            this.NodeNotifyList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeNotifyList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeNotifyList
         * @instance
         */
        AnsNodeNotifyList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeNotifyList NodeNotifyList.
         * @member {Array.<protoManage.INodeNotify>} NodeNotifyList
         * @memberof protoManage.AnsNodeNotifyList
         * @instance
         */
        AnsNodeNotifyList.prototype.NodeNotifyList = $util.emptyArray;

        /**
         * Creates a new AnsNodeNotifyList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {protoManage.IAnsNodeNotifyList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeNotifyList} AnsNodeNotifyList instance
         */
        AnsNodeNotifyList.create = function create(properties) {
            return new AnsNodeNotifyList(properties);
        };

        /**
         * Encodes the specified AnsNodeNotifyList message. Does not implicitly {@link protoManage.AnsNodeNotifyList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {protoManage.IAnsNodeNotifyList} message AnsNodeNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeNotifyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeNotifyList != null && message.NodeNotifyList.length)
                for (let i = 0; i < message.NodeNotifyList.length; ++i)
                    $root.protoManage.NodeNotify.encode(message.NodeNotifyList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeNotifyList message, length delimited. Does not implicitly {@link protoManage.AnsNodeNotifyList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {protoManage.IAnsNodeNotifyList} message AnsNodeNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeNotifyList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeNotifyList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeNotifyList} AnsNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeNotifyList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeNotifyList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeNotifyList && message.NodeNotifyList.length))
                        message.NodeNotifyList = [];
                    message.NodeNotifyList.push($root.protoManage.NodeNotify.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeNotifyList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeNotifyList} AnsNodeNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeNotifyList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeNotifyList message.
         * @function verify
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeNotifyList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeNotifyList != null && message.hasOwnProperty("NodeNotifyList")) {
                if (!Array.isArray(message.NodeNotifyList))
                    return "NodeNotifyList: array expected";
                for (let i = 0; i < message.NodeNotifyList.length; ++i) {
                    let error = $root.protoManage.NodeNotify.verify(message.NodeNotifyList[i]);
                    if (error)
                        return "NodeNotifyList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeNotifyList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeNotifyList} AnsNodeNotifyList
         */
        AnsNodeNotifyList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeNotifyList)
                return object;
            let message = new $root.protoManage.AnsNodeNotifyList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeNotifyList) {
                if (!Array.isArray(object.NodeNotifyList))
                    throw TypeError(".protoManage.AnsNodeNotifyList.NodeNotifyList: array expected");
                message.NodeNotifyList = [];
                for (let i = 0; i < object.NodeNotifyList.length; ++i) {
                    if (typeof object.NodeNotifyList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeNotifyList.NodeNotifyList: object expected");
                    message.NodeNotifyList[i] = $root.protoManage.NodeNotify.fromObject(object.NodeNotifyList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeNotifyList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeNotifyList
         * @static
         * @param {protoManage.AnsNodeNotifyList} message AnsNodeNotifyList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeNotifyList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeNotifyList = [];
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Length = options.longs === String ? "0" : 0;
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (typeof message.Length === "number")
                    object.Length = options.longs === String ? String(message.Length) : message.Length;
                else
                    object.Length = options.longs === String ? $util.Long.prototype.toString.call(message.Length) : options.longs === Number ? new $util.LongBits(message.Length.low >>> 0, message.Length.high >>> 0).toNumber() : message.Length;
            if (message.NodeNotifyList && message.NodeNotifyList.length) {
                object.NodeNotifyList = [];
                for (let j = 0; j < message.NodeNotifyList.length; ++j)
                    object.NodeNotifyList[j] = $root.protoManage.NodeNotify.toObject(message.NodeNotifyList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeNotifyList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeNotifyList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeNotifyList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeNotifyList;
    })();

    protoManage.ReqNodeResourceList = (function() {

        /**
         * Properties of a ReqNodeResourceList.
         * @memberof protoManage
         * @interface IReqNodeResourceList
         * @property {Array.<string>|null} [Name] ReqNodeResourceList Name
         * @property {Array.<protoManage.State>|null} [State] ReqNodeResourceList State
         * @property {Array.<string>|null} [UploaderName] ReqNodeResourceList UploaderName
         * @property {Array.<protoManage.NotifySenderType>|null} [UploaderType] ReqNodeResourceList UploaderType
         * @property {Array.<protoManage.ITime>|null} [UploadTime] ReqNodeResourceList UploadTime
         * @property {protoManage.IPage|null} [Page] ReqNodeResourceList Page
         */

        /**
         * Constructs a new ReqNodeResourceList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeResourceList.
         * @implements IReqNodeResourceList
         * @constructor
         * @param {protoManage.IReqNodeResourceList=} [properties] Properties to set
         */
        function ReqNodeResourceList(properties) {
            this.Name = [];
            this.State = [];
            this.UploaderName = [];
            this.UploaderType = [];
            this.UploadTime = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeResourceList Name.
         * @member {Array.<string>} Name
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.Name = $util.emptyArray;

        /**
         * ReqNodeResourceList State.
         * @member {Array.<protoManage.State>} State
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.State = $util.emptyArray;

        /**
         * ReqNodeResourceList UploaderName.
         * @member {Array.<string>} UploaderName
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.UploaderName = $util.emptyArray;

        /**
         * ReqNodeResourceList UploaderType.
         * @member {Array.<protoManage.NotifySenderType>} UploaderType
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.UploaderType = $util.emptyArray;

        /**
         * ReqNodeResourceList UploadTime.
         * @member {Array.<protoManage.ITime>} UploadTime
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.UploadTime = $util.emptyArray;

        /**
         * ReqNodeResourceList Page.
         * @member {protoManage.IPage|null|undefined} Page
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         */
        ReqNodeResourceList.prototype.Page = null;

        /**
         * Creates a new ReqNodeResourceList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {protoManage.IReqNodeResourceList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeResourceList} ReqNodeResourceList instance
         */
        ReqNodeResourceList.create = function create(properties) {
            return new ReqNodeResourceList(properties);
        };

        /**
         * Encodes the specified ReqNodeResourceList message. Does not implicitly {@link protoManage.ReqNodeResourceList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {protoManage.IReqNodeResourceList} message ReqNodeResourceList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.Name.length)
                for (let i = 0; i < message.Name.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name[i]);
            if (message.State != null && message.State.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.State.length; ++i)
                    writer.int32(message.State[i]);
                writer.ldelim();
            }
            if (message.UploaderName != null && message.UploaderName.length)
                for (let i = 0; i < message.UploaderName.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.UploaderName[i]);
            if (message.UploaderType != null && message.UploaderType.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.UploaderType.length; ++i)
                    writer.int32(message.UploaderType[i]);
                writer.ldelim();
            }
            if (message.UploadTime != null && message.UploadTime.length)
                for (let i = 0; i < message.UploadTime.length; ++i)
                    $root.protoManage.Time.encode(message.UploadTime[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Page != null && Object.hasOwnProperty.call(message, "Page"))
                $root.protoManage.Page.encode(message.Page, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeResourceList message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {protoManage.IReqNodeResourceList} message ReqNodeResourceList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeResourceList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeResourceList} ReqNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeResourceList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Name && message.Name.length))
                        message.Name = [];
                    message.Name.push(reader.string());
                    break;
                case 2:
                    if (!(message.State && message.State.length))
                        message.State = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.State.push(reader.int32());
                    } else
                        message.State.push(reader.int32());
                    break;
                case 3:
                    if (!(message.UploaderName && message.UploaderName.length))
                        message.UploaderName = [];
                    message.UploaderName.push(reader.string());
                    break;
                case 4:
                    if (!(message.UploaderType && message.UploaderType.length))
                        message.UploaderType = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UploaderType.push(reader.int32());
                    } else
                        message.UploaderType.push(reader.int32());
                    break;
                case 5:
                    if (!(message.UploadTime && message.UploadTime.length))
                        message.UploadTime = [];
                    message.UploadTime.push($root.protoManage.Time.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Page = $root.protoManage.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeResourceList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeResourceList} ReqNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeResourceList message.
         * @function verify
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeResourceList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name")) {
                if (!Array.isArray(message.Name))
                    return "Name: array expected";
                for (let i = 0; i < message.Name.length; ++i)
                    if (!$util.isString(message.Name[i]))
                        return "Name: string[] expected";
            }
            if (message.State != null && message.hasOwnProperty("State")) {
                if (!Array.isArray(message.State))
                    return "State: array expected";
                for (let i = 0; i < message.State.length; ++i)
                    switch (message.State[i]) {
                    default:
                        return "State: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            if (message.UploaderName != null && message.hasOwnProperty("UploaderName")) {
                if (!Array.isArray(message.UploaderName))
                    return "UploaderName: array expected";
                for (let i = 0; i < message.UploaderName.length; ++i)
                    if (!$util.isString(message.UploaderName[i]))
                        return "UploaderName: string[] expected";
            }
            if (message.UploaderType != null && message.hasOwnProperty("UploaderType")) {
                if (!Array.isArray(message.UploaderType))
                    return "UploaderType: array expected";
                for (let i = 0; i < message.UploaderType.length; ++i)
                    switch (message.UploaderType[i]) {
                    default:
                        return "UploaderType: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            if (message.UploadTime != null && message.hasOwnProperty("UploadTime")) {
                if (!Array.isArray(message.UploadTime))
                    return "UploadTime: array expected";
                for (let i = 0; i < message.UploadTime.length; ++i) {
                    let error = $root.protoManage.Time.verify(message.UploadTime[i]);
                    if (error)
                        return "UploadTime." + error;
                }
            }
            if (message.Page != null && message.hasOwnProperty("Page")) {
                let error = $root.protoManage.Page.verify(message.Page);
                if (error)
                    return "Page." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeResourceList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeResourceList} ReqNodeResourceList
         */
        ReqNodeResourceList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeResourceList)
                return object;
            let message = new $root.protoManage.ReqNodeResourceList();
            if (object.Name) {
                if (!Array.isArray(object.Name))
                    throw TypeError(".protoManage.ReqNodeResourceList.Name: array expected");
                message.Name = [];
                for (let i = 0; i < object.Name.length; ++i)
                    message.Name[i] = String(object.Name[i]);
            }
            if (object.State) {
                if (!Array.isArray(object.State))
                    throw TypeError(".protoManage.ReqNodeResourceList.State: array expected");
                message.State = [];
                for (let i = 0; i < object.State.length; ++i)
                    switch (object.State[i]) {
                    default:
                    case "StateNot":
                    case 0:
                        message.State[i] = 0;
                        break;
                    case "StateUnknow":
                    case 1:
                        message.State[i] = 1;
                        break;
                    case "StateNormal":
                    case 2:
                        message.State[i] = 2;
                        break;
                    case "StateWarn":
                    case 3:
                        message.State[i] = 3;
                        break;
                    case "StateError":
                    case 4:
                        message.State[i] = 4;
                        break;
                    }
            }
            if (object.UploaderName) {
                if (!Array.isArray(object.UploaderName))
                    throw TypeError(".protoManage.ReqNodeResourceList.UploaderName: array expected");
                message.UploaderName = [];
                for (let i = 0; i < object.UploaderName.length; ++i)
                    message.UploaderName[i] = String(object.UploaderName[i]);
            }
            if (object.UploaderType) {
                if (!Array.isArray(object.UploaderType))
                    throw TypeError(".protoManage.ReqNodeResourceList.UploaderType: array expected");
                message.UploaderType = [];
                for (let i = 0; i < object.UploaderType.length; ++i)
                    switch (object.UploaderType[i]) {
                    default:
                    case "NotifySenderTypeUnknow":
                    case 0:
                        message.UploaderType[i] = 0;
                        break;
                    case "NotifySenderTypeUser":
                    case 1:
                        message.UploaderType[i] = 1;
                        break;
                    case "NotifySenderTypeNode":
                    case 2:
                        message.UploaderType[i] = 2;
                        break;
                    }
            }
            if (object.UploadTime) {
                if (!Array.isArray(object.UploadTime))
                    throw TypeError(".protoManage.ReqNodeResourceList.UploadTime: array expected");
                message.UploadTime = [];
                for (let i = 0; i < object.UploadTime.length; ++i) {
                    if (typeof object.UploadTime[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeResourceList.UploadTime: object expected");
                    message.UploadTime[i] = $root.protoManage.Time.fromObject(object.UploadTime[i]);
                }
            }
            if (object.Page != null) {
                if (typeof object.Page !== "object")
                    throw TypeError(".protoManage.ReqNodeResourceList.Page: object expected");
                message.Page = $root.protoManage.Page.fromObject(object.Page);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeResourceList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeResourceList
         * @static
         * @param {protoManage.ReqNodeResourceList} message ReqNodeResourceList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeResourceList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.Name = [];
                object.State = [];
                object.UploaderName = [];
                object.UploaderType = [];
                object.UploadTime = [];
            }
            if (options.defaults)
                object.Page = null;
            if (message.Name && message.Name.length) {
                object.Name = [];
                for (let j = 0; j < message.Name.length; ++j)
                    object.Name[j] = message.Name[j];
            }
            if (message.State && message.State.length) {
                object.State = [];
                for (let j = 0; j < message.State.length; ++j)
                    object.State[j] = options.enums === String ? $root.protoManage.State[message.State[j]] : message.State[j];
            }
            if (message.UploaderName && message.UploaderName.length) {
                object.UploaderName = [];
                for (let j = 0; j < message.UploaderName.length; ++j)
                    object.UploaderName[j] = message.UploaderName[j];
            }
            if (message.UploaderType && message.UploaderType.length) {
                object.UploaderType = [];
                for (let j = 0; j < message.UploaderType.length; ++j)
                    object.UploaderType[j] = options.enums === String ? $root.protoManage.NotifySenderType[message.UploaderType[j]] : message.UploaderType[j];
            }
            if (message.UploadTime && message.UploadTime.length) {
                object.UploadTime = [];
                for (let j = 0; j < message.UploadTime.length; ++j)
                    object.UploadTime[j] = $root.protoManage.Time.toObject(message.UploadTime[j], options);
            }
            if (message.Page != null && message.hasOwnProperty("Page"))
                object.Page = $root.protoManage.Page.toObject(message.Page, options);
            return object;
        };

        /**
         * Converts this ReqNodeResourceList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeResourceList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeResourceList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeResourceList;
    })();

    protoManage.AnsNodeResourceList = (function() {

        /**
         * Properties of an AnsNodeResourceList.
         * @memberof protoManage
         * @interface IAnsNodeResourceList
         * @property {number|null} [Length] AnsNodeResourceList Length
         * @property {Array.<protoManage.INodeResource>|null} [NodeResourceList] AnsNodeResourceList NodeResourceList
         */

        /**
         * Constructs a new AnsNodeResourceList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeResourceList.
         * @implements IAnsNodeResourceList
         * @constructor
         * @param {protoManage.IAnsNodeResourceList=} [properties] Properties to set
         */
        function AnsNodeResourceList(properties) {
            this.NodeResourceList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeResourceList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeResourceList
         * @instance
         */
        AnsNodeResourceList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeResourceList NodeResourceList.
         * @member {Array.<protoManage.INodeResource>} NodeResourceList
         * @memberof protoManage.AnsNodeResourceList
         * @instance
         */
        AnsNodeResourceList.prototype.NodeResourceList = $util.emptyArray;

        /**
         * Creates a new AnsNodeResourceList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {protoManage.IAnsNodeResourceList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeResourceList} AnsNodeResourceList instance
         */
        AnsNodeResourceList.create = function create(properties) {
            return new AnsNodeResourceList(properties);
        };

        /**
         * Encodes the specified AnsNodeResourceList message. Does not implicitly {@link protoManage.AnsNodeResourceList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {protoManage.IAnsNodeResourceList} message AnsNodeResourceList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeResourceList != null && message.NodeResourceList.length)
                for (let i = 0; i < message.NodeResourceList.length; ++i)
                    $root.protoManage.NodeResource.encode(message.NodeResourceList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeResourceList message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {protoManage.IAnsNodeResourceList} message AnsNodeResourceList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeResourceList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeResourceList} AnsNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeResourceList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeResourceList && message.NodeResourceList.length))
                        message.NodeResourceList = [];
                    message.NodeResourceList.push($root.protoManage.NodeResource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeResourceList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeResourceList} AnsNodeResourceList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeResourceList message.
         * @function verify
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeResourceList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeResourceList != null && message.hasOwnProperty("NodeResourceList")) {
                if (!Array.isArray(message.NodeResourceList))
                    return "NodeResourceList: array expected";
                for (let i = 0; i < message.NodeResourceList.length; ++i) {
                    let error = $root.protoManage.NodeResource.verify(message.NodeResourceList[i]);
                    if (error)
                        return "NodeResourceList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeResourceList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeResourceList} AnsNodeResourceList
         */
        AnsNodeResourceList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeResourceList)
                return object;
            let message = new $root.protoManage.AnsNodeResourceList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeResourceList) {
                if (!Array.isArray(object.NodeResourceList))
                    throw TypeError(".protoManage.AnsNodeResourceList.NodeResourceList: array expected");
                message.NodeResourceList = [];
                for (let i = 0; i < object.NodeResourceList.length; ++i) {
                    if (typeof object.NodeResourceList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeResourceList.NodeResourceList: object expected");
                    message.NodeResourceList[i] = $root.protoManage.NodeResource.fromObject(object.NodeResourceList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeResourceList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeResourceList
         * @static
         * @param {protoManage.AnsNodeResourceList} message AnsNodeResourceList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeResourceList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeResourceList = [];
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Length = options.longs === String ? "0" : 0;
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (typeof message.Length === "number")
                    object.Length = options.longs === String ? String(message.Length) : message.Length;
                else
                    object.Length = options.longs === String ? $util.Long.prototype.toString.call(message.Length) : options.longs === Number ? new $util.LongBits(message.Length.low >>> 0, message.Length.high >>> 0).toNumber() : message.Length;
            if (message.NodeResourceList && message.NodeResourceList.length) {
                object.NodeResourceList = [];
                for (let j = 0; j < message.NodeResourceList.length; ++j)
                    object.NodeResourceList[j] = $root.protoManage.NodeResource.toObject(message.NodeResourceList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeResourceList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeResourceList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeResourceList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeResourceList;
    })();

    protoManage.ReqNodeResourceUpload = (function() {

        /**
         * Properties of a ReqNodeResourceUpload.
         * @memberof protoManage
         * @interface IReqNodeResourceUpload
         * @property {Uint8Array|null} [Data] ReqNodeResourceUpload Data
         */

        /**
         * Constructs a new ReqNodeResourceUpload.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeResourceUpload.
         * @implements IReqNodeResourceUpload
         * @constructor
         * @param {protoManage.IReqNodeResourceUpload=} [properties] Properties to set
         */
        function ReqNodeResourceUpload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeResourceUpload Data.
         * @member {Uint8Array} Data
         * @memberof protoManage.ReqNodeResourceUpload
         * @instance
         */
        ReqNodeResourceUpload.prototype.Data = $util.newBuffer([]);

        /**
         * Creates a new ReqNodeResourceUpload instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {protoManage.IReqNodeResourceUpload=} [properties] Properties to set
         * @returns {protoManage.ReqNodeResourceUpload} ReqNodeResourceUpload instance
         */
        ReqNodeResourceUpload.create = function create(properties) {
            return new ReqNodeResourceUpload(properties);
        };

        /**
         * Encodes the specified ReqNodeResourceUpload message. Does not implicitly {@link protoManage.ReqNodeResourceUpload.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {protoManage.IReqNodeResourceUpload} message ReqNodeResourceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
            return writer;
        };

        /**
         * Encodes the specified ReqNodeResourceUpload message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {protoManage.IReqNodeResourceUpload} message ReqNodeResourceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeResourceUpload message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeResourceUpload} ReqNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeResourceUpload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeResourceUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeResourceUpload} ReqNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeResourceUpload message.
         * @function verify
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeResourceUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                    return "Data: buffer expected";
            return null;
        };

        /**
         * Creates a ReqNodeResourceUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeResourceUpload} ReqNodeResourceUpload
         */
        ReqNodeResourceUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeResourceUpload)
                return object;
            let message = new $root.protoManage.ReqNodeResourceUpload();
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeResourceUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeResourceUpload
         * @static
         * @param {protoManage.ReqNodeResourceUpload} message ReqNodeResourceUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeResourceUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            return object;
        };

        /**
         * Converts this ReqNodeResourceUpload to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeResourceUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeResourceUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeResourceUpload;
    })();

    protoManage.AnsNodeResourceUpload = (function() {

        /**
         * Properties of an AnsNodeResourceUpload.
         * @memberof protoManage
         * @interface IAnsNodeResourceUpload
         * @property {protoManage.INodeResource|null} [NodeResource] AnsNodeResourceUpload NodeResource
         */

        /**
         * Constructs a new AnsNodeResourceUpload.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeResourceUpload.
         * @implements IAnsNodeResourceUpload
         * @constructor
         * @param {protoManage.IAnsNodeResourceUpload=} [properties] Properties to set
         */
        function AnsNodeResourceUpload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeResourceUpload NodeResource.
         * @member {protoManage.INodeResource|null|undefined} NodeResource
         * @memberof protoManage.AnsNodeResourceUpload
         * @instance
         */
        AnsNodeResourceUpload.prototype.NodeResource = null;

        /**
         * Creates a new AnsNodeResourceUpload instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {protoManage.IAnsNodeResourceUpload=} [properties] Properties to set
         * @returns {protoManage.AnsNodeResourceUpload} AnsNodeResourceUpload instance
         */
        AnsNodeResourceUpload.create = function create(properties) {
            return new AnsNodeResourceUpload(properties);
        };

        /**
         * Encodes the specified AnsNodeResourceUpload message. Does not implicitly {@link protoManage.AnsNodeResourceUpload.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {protoManage.IAnsNodeResourceUpload} message AnsNodeResourceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeResource != null && Object.hasOwnProperty.call(message, "NodeResource"))
                $root.protoManage.NodeResource.encode(message.NodeResource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeResourceUpload message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {protoManage.IAnsNodeResourceUpload} message AnsNodeResourceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeResourceUpload message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeResourceUpload} AnsNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeResourceUpload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NodeResource = $root.protoManage.NodeResource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeResourceUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeResourceUpload} AnsNodeResourceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeResourceUpload message.
         * @function verify
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeResourceUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeResource != null && message.hasOwnProperty("NodeResource")) {
                let error = $root.protoManage.NodeResource.verify(message.NodeResource);
                if (error)
                    return "NodeResource." + error;
            }
            return null;
        };

        /**
         * Creates an AnsNodeResourceUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeResourceUpload} AnsNodeResourceUpload
         */
        AnsNodeResourceUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeResourceUpload)
                return object;
            let message = new $root.protoManage.AnsNodeResourceUpload();
            if (object.NodeResource != null) {
                if (typeof object.NodeResource !== "object")
                    throw TypeError(".protoManage.AnsNodeResourceUpload.NodeResource: object expected");
                message.NodeResource = $root.protoManage.NodeResource.fromObject(object.NodeResource);
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeResourceUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeResourceUpload
         * @static
         * @param {protoManage.AnsNodeResourceUpload} message AnsNodeResourceUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeResourceUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.NodeResource = null;
            if (message.NodeResource != null && message.hasOwnProperty("NodeResource"))
                object.NodeResource = $root.protoManage.NodeResource.toObject(message.NodeResource, options);
            return object;
        };

        /**
         * Converts this AnsNodeResourceUpload to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeResourceUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeResourceUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeResourceUpload;
    })();

    protoManage.ReqNodeResourceDownload = (function() {

        /**
         * Properties of a ReqNodeResourceDownload.
         * @memberof protoManage
         * @interface IReqNodeResourceDownload
         * @property {protoManage.INodeResource|null} [NodeResource] ReqNodeResourceDownload NodeResource
         */

        /**
         * Constructs a new ReqNodeResourceDownload.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeResourceDownload.
         * @implements IReqNodeResourceDownload
         * @constructor
         * @param {protoManage.IReqNodeResourceDownload=} [properties] Properties to set
         */
        function ReqNodeResourceDownload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeResourceDownload NodeResource.
         * @member {protoManage.INodeResource|null|undefined} NodeResource
         * @memberof protoManage.ReqNodeResourceDownload
         * @instance
         */
        ReqNodeResourceDownload.prototype.NodeResource = null;

        /**
         * Creates a new ReqNodeResourceDownload instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {protoManage.IReqNodeResourceDownload=} [properties] Properties to set
         * @returns {protoManage.ReqNodeResourceDownload} ReqNodeResourceDownload instance
         */
        ReqNodeResourceDownload.create = function create(properties) {
            return new ReqNodeResourceDownload(properties);
        };

        /**
         * Encodes the specified ReqNodeResourceDownload message. Does not implicitly {@link protoManage.ReqNodeResourceDownload.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {protoManage.IReqNodeResourceDownload} message ReqNodeResourceDownload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceDownload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeResource != null && Object.hasOwnProperty.call(message, "NodeResource"))
                $root.protoManage.NodeResource.encode(message.NodeResource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeResourceDownload message, length delimited. Does not implicitly {@link protoManage.ReqNodeResourceDownload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {protoManage.IReqNodeResourceDownload} message ReqNodeResourceDownload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeResourceDownload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeResourceDownload message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeResourceDownload} ReqNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceDownload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeResourceDownload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NodeResource = $root.protoManage.NodeResource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeResourceDownload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeResourceDownload} ReqNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeResourceDownload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeResourceDownload message.
         * @function verify
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeResourceDownload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeResource != null && message.hasOwnProperty("NodeResource")) {
                let error = $root.protoManage.NodeResource.verify(message.NodeResource);
                if (error)
                    return "NodeResource." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeResourceDownload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeResourceDownload} ReqNodeResourceDownload
         */
        ReqNodeResourceDownload.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeResourceDownload)
                return object;
            let message = new $root.protoManage.ReqNodeResourceDownload();
            if (object.NodeResource != null) {
                if (typeof object.NodeResource !== "object")
                    throw TypeError(".protoManage.ReqNodeResourceDownload.NodeResource: object expected");
                message.NodeResource = $root.protoManage.NodeResource.fromObject(object.NodeResource);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeResourceDownload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeResourceDownload
         * @static
         * @param {protoManage.ReqNodeResourceDownload} message ReqNodeResourceDownload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeResourceDownload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.NodeResource = null;
            if (message.NodeResource != null && message.hasOwnProperty("NodeResource"))
                object.NodeResource = $root.protoManage.NodeResource.toObject(message.NodeResource, options);
            return object;
        };

        /**
         * Converts this ReqNodeResourceDownload to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeResourceDownload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeResourceDownload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeResourceDownload;
    })();

    protoManage.AnsNodeResourceDownload = (function() {

        /**
         * Properties of an AnsNodeResourceDownload.
         * @memberof protoManage
         * @interface IAnsNodeResourceDownload
         * @property {Uint8Array|null} [Data] AnsNodeResourceDownload Data
         */

        /**
         * Constructs a new AnsNodeResourceDownload.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeResourceDownload.
         * @implements IAnsNodeResourceDownload
         * @constructor
         * @param {protoManage.IAnsNodeResourceDownload=} [properties] Properties to set
         */
        function AnsNodeResourceDownload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeResourceDownload Data.
         * @member {Uint8Array} Data
         * @memberof protoManage.AnsNodeResourceDownload
         * @instance
         */
        AnsNodeResourceDownload.prototype.Data = $util.newBuffer([]);

        /**
         * Creates a new AnsNodeResourceDownload instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {protoManage.IAnsNodeResourceDownload=} [properties] Properties to set
         * @returns {protoManage.AnsNodeResourceDownload} AnsNodeResourceDownload instance
         */
        AnsNodeResourceDownload.create = function create(properties) {
            return new AnsNodeResourceDownload(properties);
        };

        /**
         * Encodes the specified AnsNodeResourceDownload message. Does not implicitly {@link protoManage.AnsNodeResourceDownload.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {protoManage.IAnsNodeResourceDownload} message AnsNodeResourceDownload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceDownload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
            return writer;
        };

        /**
         * Encodes the specified AnsNodeResourceDownload message, length delimited. Does not implicitly {@link protoManage.AnsNodeResourceDownload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {protoManage.IAnsNodeResourceDownload} message AnsNodeResourceDownload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeResourceDownload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeResourceDownload message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeResourceDownload} AnsNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceDownload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeResourceDownload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeResourceDownload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeResourceDownload} AnsNodeResourceDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeResourceDownload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeResourceDownload message.
         * @function verify
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeResourceDownload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                    return "Data: buffer expected";
            return null;
        };

        /**
         * Creates an AnsNodeResourceDownload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeResourceDownload} AnsNodeResourceDownload
         */
        AnsNodeResourceDownload.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeResourceDownload)
                return object;
            let message = new $root.protoManage.AnsNodeResourceDownload();
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeResourceDownload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeResourceDownload
         * @static
         * @param {protoManage.AnsNodeResourceDownload} message AnsNodeResourceDownload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeResourceDownload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            return object;
        };

        /**
         * Converts this AnsNodeResourceDownload to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeResourceDownload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeResourceDownload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeResourceDownload;
    })();

    protoManage.ReqNodeTest = (function() {

        /**
         * Properties of a ReqNodeTest.
         * @memberof protoManage
         * @interface IReqNodeTest
         * @property {number|null} [ID] ReqNodeTest ID
         * @property {number|null} [Type] ReqNodeTest Type
         * @property {string|null} [Message] ReqNodeTest Message
         * @property {protoManage.State|null} [State] ReqNodeTest State
         */

        /**
         * Constructs a new ReqNodeTest.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeTest.
         * @implements IReqNodeTest
         * @constructor
         * @param {protoManage.IReqNodeTest=} [properties] Properties to set
         */
        function ReqNodeTest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeTest ID.
         * @member {number} ID
         * @memberof protoManage.ReqNodeTest
         * @instance
         */
        ReqNodeTest.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqNodeTest Type.
         * @member {number} Type
         * @memberof protoManage.ReqNodeTest
         * @instance
         */
        ReqNodeTest.prototype.Type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqNodeTest Message.
         * @member {string} Message
         * @memberof protoManage.ReqNodeTest
         * @instance
         */
        ReqNodeTest.prototype.Message = "";

        /**
         * ReqNodeTest State.
         * @member {protoManage.State} State
         * @memberof protoManage.ReqNodeTest
         * @instance
         */
        ReqNodeTest.prototype.State = 0;

        /**
         * Creates a new ReqNodeTest instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {protoManage.IReqNodeTest=} [properties] Properties to set
         * @returns {protoManage.ReqNodeTest} ReqNodeTest instance
         */
        ReqNodeTest.create = function create(properties) {
            return new ReqNodeTest(properties);
        };

        /**
         * Encodes the specified ReqNodeTest message. Does not implicitly {@link protoManage.ReqNodeTest.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {protoManage.IReqNodeTest} message ReqNodeTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ID);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Type);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Message);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified ReqNodeTest message, length delimited. Does not implicitly {@link protoManage.ReqNodeTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {protoManage.IReqNodeTest} message ReqNodeTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeTest message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeTest} ReqNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeTest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.Type = reader.int64();
                    break;
                case 3:
                    message.Message = reader.string();
                    break;
                case 4:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeTest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeTest} ReqNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeTest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeTest message.
         * @function verify
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type) && !(message.Type && $util.isInteger(message.Type.low) && $util.isInteger(message.Type.high)))
                    return "Type: integer|Long expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a ReqNodeTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeTest} ReqNodeTest
         */
        ReqNodeTest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeTest)
                return object;
            let message = new $root.protoManage.ReqNodeTest();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.Type != null)
                if ($util.Long)
                    (message.Type = $util.Long.fromValue(object.Type)).unsigned = false;
                else if (typeof object.Type === "string")
                    message.Type = parseInt(object.Type, 10);
                else if (typeof object.Type === "number")
                    message.Type = object.Type;
                else if (typeof object.Type === "object")
                    message.Type = new $util.LongBits(object.Type.low >>> 0, object.Type.high >>> 0).toNumber();
            if (object.Message != null)
                message.Message = String(object.Message);
            switch (object.State) {
            case "StateNot":
            case 0:
                message.State = 0;
                break;
            case "StateUnknow":
            case 1:
                message.State = 1;
                break;
            case "StateNormal":
            case 2:
                message.State = 2;
                break;
            case "StateWarn":
            case 3:
                message.State = 3;
                break;
            case "StateError":
            case 4:
                message.State = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeTest
         * @static
         * @param {protoManage.ReqNodeTest} message ReqNodeTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeTest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Type = options.longs === String ? "0" : 0;
                object.Message = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (typeof message.Type === "number")
                    object.Type = options.longs === String ? String(message.Type) : message.Type;
                else
                    object.Type = options.longs === String ? $util.Long.prototype.toString.call(message.Type) : options.longs === Number ? new $util.LongBits(message.Type.low >>> 0, message.Type.high >>> 0).toNumber() : message.Type;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this ReqNodeTest to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeTest;
    })();

    protoManage.AnsNodeTest = (function() {

        /**
         * Properties of an AnsNodeTest.
         * @memberof protoManage
         * @interface IAnsNodeTest
         */

        /**
         * Constructs a new AnsNodeTest.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeTest.
         * @implements IAnsNodeTest
         * @constructor
         * @param {protoManage.IAnsNodeTest=} [properties] Properties to set
         */
        function AnsNodeTest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AnsNodeTest instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {protoManage.IAnsNodeTest=} [properties] Properties to set
         * @returns {protoManage.AnsNodeTest} AnsNodeTest instance
         */
        AnsNodeTest.create = function create(properties) {
            return new AnsNodeTest(properties);
        };

        /**
         * Encodes the specified AnsNodeTest message. Does not implicitly {@link protoManage.AnsNodeTest.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {protoManage.IAnsNodeTest} message AnsNodeTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeTest message, length delimited. Does not implicitly {@link protoManage.AnsNodeTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {protoManage.IAnsNodeTest} message AnsNodeTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeTest message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeTest} AnsNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeTest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeTest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeTest} AnsNodeTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeTest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeTest message.
         * @function verify
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AnsNodeTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeTest} AnsNodeTest
         */
        AnsNodeTest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeTest)
                return object;
            return new $root.protoManage.AnsNodeTest();
        };

        /**
         * Creates a plain object from an AnsNodeTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeTest
         * @static
         * @param {protoManage.AnsNodeTest} message AnsNodeTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeTest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AnsNodeTest to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeTest;
    })();

    return protoManage;
})();

export { $root as default };
