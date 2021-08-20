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
     * @property {number} TopLinkFind=1 TopLinkFind value
     * @property {number} TopLinkFindByID=2 TopLinkFindByID value
     * @property {number} TopLinkAdd=3 TopLinkAdd value
     * @property {number} TopLinkDel=4 TopLinkDel value
     * @property {number} TopLinkUpdate=5 TopLinkUpdate value
     * @property {number} NodeTest=6 NodeTest value
     * @property {number} ManagerLogin=101 ManagerLogin value
     * @property {number} ManagerAdd=102 ManagerAdd value
     * @property {number} ManagerFind=103 ManagerFind value
     * @property {number} ManagerFindByID=104 ManagerFindByID value
     * @property {number} ManagerUpdatePassword=105 ManagerUpdatePassword value
     * @property {number} ManagerUpdateSetting=106 ManagerUpdateSetting value
     * @property {number} ManagerFindByLevel=107 ManagerFindByLevel value
     * @property {number} NodeGroupAdd=201 NodeGroupAdd value
     * @property {number} NodeGroupDel=202 NodeGroupDel value
     * @property {number} NodeGroupFind=203 NodeGroupFind value
     * @property {number} NodeGroupFindByID=204 NodeGroupFindByID value
     * @property {number} NodeTypeAdd=301 NodeTypeAdd value
     * @property {number} NodeTypeDel=302 NodeTypeDel value
     * @property {number} NodeTypeFind=303 NodeTypeFind value
     * @property {number} NodeTypeFindByID=304 NodeTypeFindByID value
     * @property {number} NodeAdd=401 NodeAdd value
     * @property {number} NodeDel=402 NodeDel value
     * @property {number} NodeUpdateState=403 NodeUpdateState value
     * @property {number} NodeFind=404 NodeFind value
     * @property {number} NodeFindByID=405 NodeFindByID value
     * @property {number} NodeLinkAdd=501 NodeLinkAdd value
     * @property {number} NodeLinkDel=502 NodeLinkDel value
     * @property {number} NodeLinkDelAllWithNodeID=503 NodeLinkDelAllWithNodeID value
     * @property {number} NodeLinkUpdateState=504 NodeLinkUpdateState value
     * @property {number} NodeLinkFind=505 NodeLinkFind value
     * @property {number} NodeLinkFindByID=506 NodeLinkFindByID value
     * @property {number} NodeFuncAdd=601 NodeFuncAdd value
     * @property {number} NodeFuncDel=602 NodeFuncDel value
     * @property {number} NodeFuncDelAllWithNodeID=603 NodeFuncDelAllWithNodeID value
     * @property {number} NodeFuncUpdateDesc=604 NodeFuncUpdateDesc value
     * @property {number} NodeFuncUpdatePara=605 NodeFuncUpdatePara value
     * @property {number} NodeFuncFind=606 NodeFuncFind value
     * @property {number} NodeFuncFindByID=607 NodeFuncFindByID value
     * @property {number} NodeFuncCallReq=608 NodeFuncCallReq value
     * @property {number} NodeFuncCallAns=609 NodeFuncCallAns value
     * @property {number} NodeFuncCallFind=611 NodeFuncCallFind value
     * @property {number} NodeFuncCallFindByID=610 NodeFuncCallFindByID value
     * @property {number} NodeReportAdd=701 NodeReportAdd value
     * @property {number} NodeReportDel=702 NodeReportDel value
     * @property {number} NodeReportDelAllWithNodeID=703 NodeReportDelAllWithNodeID value
     * @property {number} NodeReportUpdateVal=704 NodeReportUpdateVal value
     * @property {number} NodeReportFind=705 NodeReportFind value
     * @property {number} NodeReportFindByID=706 NodeReportFindByID value
     * @property {number} NodeReportValFind=707 NodeReportValFind value
     * @property {number} NodeNotifyAdd=801 NodeNotifyAdd value
     * @property {number} NodeNotifyFind=802 NodeNotifyFind value
     * @property {number} NodeNotifyError=803 NodeNotifyError value
     */
    protoManage.Order = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknow"] = 0;
        values[valuesById[1] = "TopLinkFind"] = 1;
        values[valuesById[2] = "TopLinkFindByID"] = 2;
        values[valuesById[3] = "TopLinkAdd"] = 3;
        values[valuesById[4] = "TopLinkDel"] = 4;
        values[valuesById[5] = "TopLinkUpdate"] = 5;
        values[valuesById[6] = "NodeTest"] = 6;
        values[valuesById[101] = "ManagerLogin"] = 101;
        values[valuesById[102] = "ManagerAdd"] = 102;
        values[valuesById[103] = "ManagerFind"] = 103;
        values[valuesById[104] = "ManagerFindByID"] = 104;
        values[valuesById[105] = "ManagerUpdatePassword"] = 105;
        values[valuesById[106] = "ManagerUpdateSetting"] = 106;
        values[valuesById[107] = "ManagerFindByLevel"] = 107;
        values[valuesById[201] = "NodeGroupAdd"] = 201;
        values[valuesById[202] = "NodeGroupDel"] = 202;
        values[valuesById[203] = "NodeGroupFind"] = 203;
        values[valuesById[204] = "NodeGroupFindByID"] = 204;
        values[valuesById[301] = "NodeTypeAdd"] = 301;
        values[valuesById[302] = "NodeTypeDel"] = 302;
        values[valuesById[303] = "NodeTypeFind"] = 303;
        values[valuesById[304] = "NodeTypeFindByID"] = 304;
        values[valuesById[401] = "NodeAdd"] = 401;
        values[valuesById[402] = "NodeDel"] = 402;
        values[valuesById[403] = "NodeUpdateState"] = 403;
        values[valuesById[404] = "NodeFind"] = 404;
        values[valuesById[405] = "NodeFindByID"] = 405;
        values[valuesById[501] = "NodeLinkAdd"] = 501;
        values[valuesById[502] = "NodeLinkDel"] = 502;
        values[valuesById[503] = "NodeLinkDelAllWithNodeID"] = 503;
        values[valuesById[504] = "NodeLinkUpdateState"] = 504;
        values[valuesById[505] = "NodeLinkFind"] = 505;
        values[valuesById[506] = "NodeLinkFindByID"] = 506;
        values[valuesById[601] = "NodeFuncAdd"] = 601;
        values[valuesById[602] = "NodeFuncDel"] = 602;
        values[valuesById[603] = "NodeFuncDelAllWithNodeID"] = 603;
        values[valuesById[604] = "NodeFuncUpdateDesc"] = 604;
        values[valuesById[605] = "NodeFuncUpdatePara"] = 605;
        values[valuesById[606] = "NodeFuncFind"] = 606;
        values[valuesById[607] = "NodeFuncFindByID"] = 607;
        values[valuesById[608] = "NodeFuncCallReq"] = 608;
        values[valuesById[609] = "NodeFuncCallAns"] = 609;
        values[valuesById[611] = "NodeFuncCallFind"] = 611;
        values[valuesById[610] = "NodeFuncCallFindByID"] = 610;
        values[valuesById[701] = "NodeReportAdd"] = 701;
        values[valuesById[702] = "NodeReportDel"] = 702;
        values[valuesById[703] = "NodeReportDelAllWithNodeID"] = 703;
        values[valuesById[704] = "NodeReportUpdateVal"] = 704;
        values[valuesById[705] = "NodeReportFind"] = 705;
        values[valuesById[706] = "NodeReportFindByID"] = 706;
        values[valuesById[707] = "NodeReportValFind"] = 707;
        values[valuesById[801] = "NodeNotifyAdd"] = 801;
        values[valuesById[802] = "NodeNotifyFind"] = 802;
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
     * ManagerLevel enum.
     * @name protoManage.ManagerLevel
     * @enum {number}
     * @property {number} ManagerLevelPrimary=0 ManagerLevelPrimary value
     * @property {number} ManagerLevelIntermediate=1 ManagerLevelIntermediate value
     * @property {number} ManagerLevelSenior=2 ManagerLevelSenior value
     * @property {number} ManagerLevelSuper=3 ManagerLevelSuper value
     */
    protoManage.ManagerLevel = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ManagerLevelPrimary"] = 0;
        values[valuesById[1] = "ManagerLevelIntermediate"] = 1;
        values[valuesById[2] = "ManagerLevelSenior"] = 2;
        values[valuesById[3] = "ManagerLevelSuper"] = 3;
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
     * HttpError enum.
     * @name protoManage.HttpError
     * @enum {number}
     * @property {number} HttpErrorNull=0 HttpErrorNull value
     * @property {number} HttpErrorMarshal=601 HttpErrorMarshal value
     * @property {number} HttpErrorUnmarshal=602 HttpErrorUnmarshal value
     * @property {number} HttpErrorRegister=603 HttpErrorRegister value
     * @property {number} HttpErrorLogin=604 HttpErrorLogin value
     * @property {number} HttpErrorRequest=605 HttpErrorRequest value
     */
    protoManage.HttpError = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HttpErrorNull"] = 0;
        values[valuesById[601] = "HttpErrorMarshal"] = 601;
        values[valuesById[602] = "HttpErrorUnmarshal"] = 602;
        values[valuesById[603] = "HttpErrorRegister"] = 603;
        values[valuesById[604] = "HttpErrorLogin"] = 604;
        values[valuesById[605] = "HttpErrorRequest"] = 605;
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
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 201:
                case 202:
                case 203:
                case 204:
                case 301:
                case 302:
                case 303:
                case 304:
                case 401:
                case 402:
                case 403:
                case 404:
                case 405:
                case 501:
                case 502:
                case 503:
                case 504:
                case 505:
                case 506:
                case 601:
                case 602:
                case 603:
                case 604:
                case 605:
                case 606:
                case 607:
                case 608:
                case 609:
                case 611:
                case 610:
                case 701:
                case 702:
                case 703:
                case 704:
                case 705:
                case 706:
                case 707:
                case 801:
                case 802:
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
            case "TopLinkFind":
            case 1:
                message.order = 1;
                break;
            case "TopLinkFindByID":
            case 2:
                message.order = 2;
                break;
            case "TopLinkAdd":
            case 3:
                message.order = 3;
                break;
            case "TopLinkDel":
            case 4:
                message.order = 4;
                break;
            case "TopLinkUpdate":
            case 5:
                message.order = 5;
                break;
            case "NodeTest":
            case 6:
                message.order = 6;
                break;
            case "ManagerLogin":
            case 101:
                message.order = 101;
                break;
            case "ManagerAdd":
            case 102:
                message.order = 102;
                break;
            case "ManagerFind":
            case 103:
                message.order = 103;
                break;
            case "ManagerFindByID":
            case 104:
                message.order = 104;
                break;
            case "ManagerUpdatePassword":
            case 105:
                message.order = 105;
                break;
            case "ManagerUpdateSetting":
            case 106:
                message.order = 106;
                break;
            case "ManagerFindByLevel":
            case 107:
                message.order = 107;
                break;
            case "NodeGroupAdd":
            case 201:
                message.order = 201;
                break;
            case "NodeGroupDel":
            case 202:
                message.order = 202;
                break;
            case "NodeGroupFind":
            case 203:
                message.order = 203;
                break;
            case "NodeGroupFindByID":
            case 204:
                message.order = 204;
                break;
            case "NodeTypeAdd":
            case 301:
                message.order = 301;
                break;
            case "NodeTypeDel":
            case 302:
                message.order = 302;
                break;
            case "NodeTypeFind":
            case 303:
                message.order = 303;
                break;
            case "NodeTypeFindByID":
            case 304:
                message.order = 304;
                break;
            case "NodeAdd":
            case 401:
                message.order = 401;
                break;
            case "NodeDel":
            case 402:
                message.order = 402;
                break;
            case "NodeUpdateState":
            case 403:
                message.order = 403;
                break;
            case "NodeFind":
            case 404:
                message.order = 404;
                break;
            case "NodeFindByID":
            case 405:
                message.order = 405;
                break;
            case "NodeLinkAdd":
            case 501:
                message.order = 501;
                break;
            case "NodeLinkDel":
            case 502:
                message.order = 502;
                break;
            case "NodeLinkDelAllWithNodeID":
            case 503:
                message.order = 503;
                break;
            case "NodeLinkUpdateState":
            case 504:
                message.order = 504;
                break;
            case "NodeLinkFind":
            case 505:
                message.order = 505;
                break;
            case "NodeLinkFindByID":
            case 506:
                message.order = 506;
                break;
            case "NodeFuncAdd":
            case 601:
                message.order = 601;
                break;
            case "NodeFuncDel":
            case 602:
                message.order = 602;
                break;
            case "NodeFuncDelAllWithNodeID":
            case 603:
                message.order = 603;
                break;
            case "NodeFuncUpdateDesc":
            case 604:
                message.order = 604;
                break;
            case "NodeFuncUpdatePara":
            case 605:
                message.order = 605;
                break;
            case "NodeFuncFind":
            case 606:
                message.order = 606;
                break;
            case "NodeFuncFindByID":
            case 607:
                message.order = 607;
                break;
            case "NodeFuncCallReq":
            case 608:
                message.order = 608;
                break;
            case "NodeFuncCallAns":
            case 609:
                message.order = 609;
                break;
            case "NodeFuncCallFind":
            case 611:
                message.order = 611;
                break;
            case "NodeFuncCallFindByID":
            case 610:
                message.order = 610;
                break;
            case "NodeReportAdd":
            case 701:
                message.order = 701;
                break;
            case "NodeReportDel":
            case 702:
                message.order = 702;
                break;
            case "NodeReportDelAllWithNodeID":
            case 703:
                message.order = 703;
                break;
            case "NodeReportUpdateVal":
            case 704:
                message.order = 704;
                break;
            case "NodeReportFind":
            case 705:
                message.order = 705;
                break;
            case "NodeReportFindByID":
            case 706:
                message.order = 706;
                break;
            case "NodeReportValFind":
            case 707:
                message.order = 707;
                break;
            case "NodeNotifyAdd":
            case 801:
                message.order = 801;
                break;
            case "NodeNotifyFind":
            case 802:
                message.order = 802;
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
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 201:
                case 202:
                case 203:
                case 204:
                case 301:
                case 302:
                case 303:
                case 304:
                case 401:
                case 402:
                case 403:
                case 404:
                case 405:
                case 501:
                case 502:
                case 503:
                case 504:
                case 505:
                case 506:
                case 601:
                case 602:
                case 603:
                case 604:
                case 605:
                case 606:
                case 607:
                case 608:
                case 609:
                case 611:
                case 610:
                case 701:
                case 702:
                case 703:
                case 704:
                case 705:
                case 706:
                case 707:
                case 801:
                case 802:
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
            case "TopLinkFind":
            case 1:
                message.order = 1;
                break;
            case "TopLinkFindByID":
            case 2:
                message.order = 2;
                break;
            case "TopLinkAdd":
            case 3:
                message.order = 3;
                break;
            case "TopLinkDel":
            case 4:
                message.order = 4;
                break;
            case "TopLinkUpdate":
            case 5:
                message.order = 5;
                break;
            case "NodeTest":
            case 6:
                message.order = 6;
                break;
            case "ManagerLogin":
            case 101:
                message.order = 101;
                break;
            case "ManagerAdd":
            case 102:
                message.order = 102;
                break;
            case "ManagerFind":
            case 103:
                message.order = 103;
                break;
            case "ManagerFindByID":
            case 104:
                message.order = 104;
                break;
            case "ManagerUpdatePassword":
            case 105:
                message.order = 105;
                break;
            case "ManagerUpdateSetting":
            case 106:
                message.order = 106;
                break;
            case "ManagerFindByLevel":
            case 107:
                message.order = 107;
                break;
            case "NodeGroupAdd":
            case 201:
                message.order = 201;
                break;
            case "NodeGroupDel":
            case 202:
                message.order = 202;
                break;
            case "NodeGroupFind":
            case 203:
                message.order = 203;
                break;
            case "NodeGroupFindByID":
            case 204:
                message.order = 204;
                break;
            case "NodeTypeAdd":
            case 301:
                message.order = 301;
                break;
            case "NodeTypeDel":
            case 302:
                message.order = 302;
                break;
            case "NodeTypeFind":
            case 303:
                message.order = 303;
                break;
            case "NodeTypeFindByID":
            case 304:
                message.order = 304;
                break;
            case "NodeAdd":
            case 401:
                message.order = 401;
                break;
            case "NodeDel":
            case 402:
                message.order = 402;
                break;
            case "NodeUpdateState":
            case 403:
                message.order = 403;
                break;
            case "NodeFind":
            case 404:
                message.order = 404;
                break;
            case "NodeFindByID":
            case 405:
                message.order = 405;
                break;
            case "NodeLinkAdd":
            case 501:
                message.order = 501;
                break;
            case "NodeLinkDel":
            case 502:
                message.order = 502;
                break;
            case "NodeLinkDelAllWithNodeID":
            case 503:
                message.order = 503;
                break;
            case "NodeLinkUpdateState":
            case 504:
                message.order = 504;
                break;
            case "NodeLinkFind":
            case 505:
                message.order = 505;
                break;
            case "NodeLinkFindByID":
            case 506:
                message.order = 506;
                break;
            case "NodeFuncAdd":
            case 601:
                message.order = 601;
                break;
            case "NodeFuncDel":
            case 602:
                message.order = 602;
                break;
            case "NodeFuncDelAllWithNodeID":
            case 603:
                message.order = 603;
                break;
            case "NodeFuncUpdateDesc":
            case 604:
                message.order = 604;
                break;
            case "NodeFuncUpdatePara":
            case 605:
                message.order = 605;
                break;
            case "NodeFuncFind":
            case 606:
                message.order = 606;
                break;
            case "NodeFuncFindByID":
            case 607:
                message.order = 607;
                break;
            case "NodeFuncCallReq":
            case 608:
                message.order = 608;
                break;
            case "NodeFuncCallAns":
            case 609:
                message.order = 609;
                break;
            case "NodeFuncCallFind":
            case 611:
                message.order = 611;
                break;
            case "NodeFuncCallFindByID":
            case 610:
                message.order = 610;
                break;
            case "NodeReportAdd":
            case 701:
                message.order = 701;
                break;
            case "NodeReportDel":
            case 702:
                message.order = 702;
                break;
            case "NodeReportDelAllWithNodeID":
            case 703:
                message.order = 703;
                break;
            case "NodeReportUpdateVal":
            case 704:
                message.order = 704;
                break;
            case "NodeReportFind":
            case 705:
                message.order = 705;
                break;
            case "NodeReportFindByID":
            case 706:
                message.order = 706;
                break;
            case "NodeReportValFind":
            case 707:
                message.order = 707;
                break;
            case "NodeNotifyAdd":
            case 801:
                message.order = 801;
                break;
            case "NodeNotifyFind":
            case 802:
                message.order = 802;
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

    protoManage.StateCount = (function() {

        /**
         * Properties of a StateCount.
         * @memberof protoManage
         * @interface IStateCount
         * @property {number|null} [ID] StateCount ID
         * @property {number|null} [NotCount] StateCount NotCount
         * @property {number|null} [NormalCount] StateCount NormalCount
         * @property {number|null} [WarnCount] StateCount WarnCount
         * @property {number|null} [ErrorCount] StateCount ErrorCount
         * @property {number|null} [UnknowCount] StateCount UnknowCount
         */

        /**
         * Constructs a new StateCount.
         * @memberof protoManage
         * @classdesc Represents a StateCount.
         * @implements IStateCount
         * @constructor
         * @param {protoManage.IStateCount=} [properties] Properties to set
         */
        function StateCount(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateCount ID.
         * @member {number} ID
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StateCount NotCount.
         * @member {number} NotCount
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.NotCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StateCount NormalCount.
         * @member {number} NormalCount
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.NormalCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StateCount WarnCount.
         * @member {number} WarnCount
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.WarnCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StateCount ErrorCount.
         * @member {number} ErrorCount
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.ErrorCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StateCount UnknowCount.
         * @member {number} UnknowCount
         * @memberof protoManage.StateCount
         * @instance
         */
        StateCount.prototype.UnknowCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StateCount instance using the specified properties.
         * @function create
         * @memberof protoManage.StateCount
         * @static
         * @param {protoManage.IStateCount=} [properties] Properties to set
         * @returns {protoManage.StateCount} StateCount instance
         */
        StateCount.create = function create(properties) {
            return new StateCount(properties);
        };

        /**
         * Encodes the specified StateCount message. Does not implicitly {@link protoManage.StateCount.verify|verify} messages.
         * @function encode
         * @memberof protoManage.StateCount
         * @static
         * @param {protoManage.IStateCount} message StateCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ID);
            if (message.NotCount != null && Object.hasOwnProperty.call(message, "NotCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NotCount);
            if (message.NormalCount != null && Object.hasOwnProperty.call(message, "NormalCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.NormalCount);
            if (message.WarnCount != null && Object.hasOwnProperty.call(message, "WarnCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WarnCount);
            if (message.ErrorCount != null && Object.hasOwnProperty.call(message, "ErrorCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.ErrorCount);
            if (message.UnknowCount != null && Object.hasOwnProperty.call(message, "UnknowCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.UnknowCount);
            return writer;
        };

        /**
         * Encodes the specified StateCount message, length delimited. Does not implicitly {@link protoManage.StateCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.StateCount
         * @static
         * @param {protoManage.IStateCount} message StateCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StateCount message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.StateCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.StateCount} StateCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.StateCount();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.NotCount = reader.int64();
                    break;
                case 3:
                    message.NormalCount = reader.int64();
                    break;
                case 4:
                    message.WarnCount = reader.int64();
                    break;
                case 5:
                    message.ErrorCount = reader.int64();
                    break;
                case 6:
                    message.UnknowCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StateCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.StateCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.StateCount} StateCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateCount message.
         * @function verify
         * @memberof protoManage.StateCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateCount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.NotCount != null && message.hasOwnProperty("NotCount"))
                if (!$util.isInteger(message.NotCount) && !(message.NotCount && $util.isInteger(message.NotCount.low) && $util.isInteger(message.NotCount.high)))
                    return "NotCount: integer|Long expected";
            if (message.NormalCount != null && message.hasOwnProperty("NormalCount"))
                if (!$util.isInteger(message.NormalCount) && !(message.NormalCount && $util.isInteger(message.NormalCount.low) && $util.isInteger(message.NormalCount.high)))
                    return "NormalCount: integer|Long expected";
            if (message.WarnCount != null && message.hasOwnProperty("WarnCount"))
                if (!$util.isInteger(message.WarnCount) && !(message.WarnCount && $util.isInteger(message.WarnCount.low) && $util.isInteger(message.WarnCount.high)))
                    return "WarnCount: integer|Long expected";
            if (message.ErrorCount != null && message.hasOwnProperty("ErrorCount"))
                if (!$util.isInteger(message.ErrorCount) && !(message.ErrorCount && $util.isInteger(message.ErrorCount.low) && $util.isInteger(message.ErrorCount.high)))
                    return "ErrorCount: integer|Long expected";
            if (message.UnknowCount != null && message.hasOwnProperty("UnknowCount"))
                if (!$util.isInteger(message.UnknowCount) && !(message.UnknowCount && $util.isInteger(message.UnknowCount.low) && $util.isInteger(message.UnknowCount.high)))
                    return "UnknowCount: integer|Long expected";
            return null;
        };

        /**
         * Creates a StateCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.StateCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.StateCount} StateCount
         */
        StateCount.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.StateCount)
                return object;
            let message = new $root.protoManage.StateCount();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.NotCount != null)
                if ($util.Long)
                    (message.NotCount = $util.Long.fromValue(object.NotCount)).unsigned = false;
                else if (typeof object.NotCount === "string")
                    message.NotCount = parseInt(object.NotCount, 10);
                else if (typeof object.NotCount === "number")
                    message.NotCount = object.NotCount;
                else if (typeof object.NotCount === "object")
                    message.NotCount = new $util.LongBits(object.NotCount.low >>> 0, object.NotCount.high >>> 0).toNumber();
            if (object.NormalCount != null)
                if ($util.Long)
                    (message.NormalCount = $util.Long.fromValue(object.NormalCount)).unsigned = false;
                else if (typeof object.NormalCount === "string")
                    message.NormalCount = parseInt(object.NormalCount, 10);
                else if (typeof object.NormalCount === "number")
                    message.NormalCount = object.NormalCount;
                else if (typeof object.NormalCount === "object")
                    message.NormalCount = new $util.LongBits(object.NormalCount.low >>> 0, object.NormalCount.high >>> 0).toNumber();
            if (object.WarnCount != null)
                if ($util.Long)
                    (message.WarnCount = $util.Long.fromValue(object.WarnCount)).unsigned = false;
                else if (typeof object.WarnCount === "string")
                    message.WarnCount = parseInt(object.WarnCount, 10);
                else if (typeof object.WarnCount === "number")
                    message.WarnCount = object.WarnCount;
                else if (typeof object.WarnCount === "object")
                    message.WarnCount = new $util.LongBits(object.WarnCount.low >>> 0, object.WarnCount.high >>> 0).toNumber();
            if (object.ErrorCount != null)
                if ($util.Long)
                    (message.ErrorCount = $util.Long.fromValue(object.ErrorCount)).unsigned = false;
                else if (typeof object.ErrorCount === "string")
                    message.ErrorCount = parseInt(object.ErrorCount, 10);
                else if (typeof object.ErrorCount === "number")
                    message.ErrorCount = object.ErrorCount;
                else if (typeof object.ErrorCount === "object")
                    message.ErrorCount = new $util.LongBits(object.ErrorCount.low >>> 0, object.ErrorCount.high >>> 0).toNumber();
            if (object.UnknowCount != null)
                if ($util.Long)
                    (message.UnknowCount = $util.Long.fromValue(object.UnknowCount)).unsigned = false;
                else if (typeof object.UnknowCount === "string")
                    message.UnknowCount = parseInt(object.UnknowCount, 10);
                else if (typeof object.UnknowCount === "number")
                    message.UnknowCount = object.UnknowCount;
                else if (typeof object.UnknowCount === "object")
                    message.UnknowCount = new $util.LongBits(object.UnknowCount.low >>> 0, object.UnknowCount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StateCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.StateCount
         * @static
         * @param {protoManage.StateCount} message StateCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateCount.toObject = function toObject(message, options) {
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
                    object.NotCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NotCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.NormalCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NormalCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.WarnCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WarnCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ErrorCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ErrorCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.UnknowCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UnknowCount = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.NotCount != null && message.hasOwnProperty("NotCount"))
                if (typeof message.NotCount === "number")
                    object.NotCount = options.longs === String ? String(message.NotCount) : message.NotCount;
                else
                    object.NotCount = options.longs === String ? $util.Long.prototype.toString.call(message.NotCount) : options.longs === Number ? new $util.LongBits(message.NotCount.low >>> 0, message.NotCount.high >>> 0).toNumber() : message.NotCount;
            if (message.NormalCount != null && message.hasOwnProperty("NormalCount"))
                if (typeof message.NormalCount === "number")
                    object.NormalCount = options.longs === String ? String(message.NormalCount) : message.NormalCount;
                else
                    object.NormalCount = options.longs === String ? $util.Long.prototype.toString.call(message.NormalCount) : options.longs === Number ? new $util.LongBits(message.NormalCount.low >>> 0, message.NormalCount.high >>> 0).toNumber() : message.NormalCount;
            if (message.WarnCount != null && message.hasOwnProperty("WarnCount"))
                if (typeof message.WarnCount === "number")
                    object.WarnCount = options.longs === String ? String(message.WarnCount) : message.WarnCount;
                else
                    object.WarnCount = options.longs === String ? $util.Long.prototype.toString.call(message.WarnCount) : options.longs === Number ? new $util.LongBits(message.WarnCount.low >>> 0, message.WarnCount.high >>> 0).toNumber() : message.WarnCount;
            if (message.ErrorCount != null && message.hasOwnProperty("ErrorCount"))
                if (typeof message.ErrorCount === "number")
                    object.ErrorCount = options.longs === String ? String(message.ErrorCount) : message.ErrorCount;
                else
                    object.ErrorCount = options.longs === String ? $util.Long.prototype.toString.call(message.ErrorCount) : options.longs === Number ? new $util.LongBits(message.ErrorCount.low >>> 0, message.ErrorCount.high >>> 0).toNumber() : message.ErrorCount;
            if (message.UnknowCount != null && message.hasOwnProperty("UnknowCount"))
                if (typeof message.UnknowCount === "number")
                    object.UnknowCount = options.longs === String ? String(message.UnknowCount) : message.UnknowCount;
                else
                    object.UnknowCount = options.longs === String ? $util.Long.prototype.toString.call(message.UnknowCount) : options.longs === Number ? new $util.LongBits(message.UnknowCount.low >>> 0, message.UnknowCount.high >>> 0).toNumber() : message.UnknowCount;
            return object;
        };

        /**
         * Converts this StateCount to JSON.
         * @function toJSON
         * @memberof protoManage.StateCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateCount;
    })();

    protoManage.Filter = (function() {

        /**
         * Properties of a Filter.
         * @memberof protoManage
         * @interface IFilter
         * @property {number|null} [ID] Filter ID
         * @property {number|null} [GroupID] Filter GroupID
         * @property {number|null} [TypeID] Filter TypeID
         * @property {number|null} [NodeID] Filter NodeID
         * @property {number|null} [SourceID] Filter SourceID
         * @property {number|null} [TargetID] Filter TargetID
         * @property {number|null} [FuncID] Filter FuncID
         * @property {number|null} [ReportID] Filter ReportID
         * @property {string|null} [Name] Filter Name
         * @property {string|null} [Flag] Filter Flag
         * @property {string|null} [Value] Filter Value
         * @property {protoManage.State|null} [State] Filter State
         * @property {number|null} [PageSize] Filter PageSize
         * @property {number|null} [PageNum] Filter PageNum
         * @property {string|null} [SenderName] Filter SenderName
         * @property {protoManage.NotifySenderType|null} [SenderType] Filter SenderType
         * @property {number|null} [SenderBeginTime] Filter SenderBeginTime
         * @property {number|null} [SenderEndTime] Filter SenderEndTime
         * @property {string|null} [Message] Filter Message
         */

        /**
         * Constructs a new Filter.
         * @memberof protoManage
         * @classdesc Represents a Filter.
         * @implements IFilter
         * @constructor
         * @param {protoManage.IFilter=} [properties] Properties to set
         */
        function Filter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Filter ID.
         * @member {number} ID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter GroupID.
         * @member {number} GroupID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.GroupID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter TypeID.
         * @member {number} TypeID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.TypeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter NodeID.
         * @member {number} NodeID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.NodeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter SourceID.
         * @member {number} SourceID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.SourceID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter TargetID.
         * @member {number} TargetID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.TargetID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter FuncID.
         * @member {number} FuncID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.FuncID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter ReportID.
         * @member {number} ReportID
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.ReportID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter Name.
         * @member {string} Name
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.Name = "";

        /**
         * Filter Flag.
         * @member {string} Flag
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.Flag = "";

        /**
         * Filter Value.
         * @member {string} Value
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.Value = "";

        /**
         * Filter State.
         * @member {protoManage.State} State
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.State = 0;

        /**
         * Filter PageSize.
         * @member {number} PageSize
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.PageSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter PageNum.
         * @member {number} PageNum
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.PageNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter SenderName.
         * @member {string} SenderName
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.SenderName = "";

        /**
         * Filter SenderType.
         * @member {protoManage.NotifySenderType} SenderType
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.SenderType = 0;

        /**
         * Filter SenderBeginTime.
         * @member {number} SenderBeginTime
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.SenderBeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter SenderEndTime.
         * @member {number} SenderEndTime
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.SenderEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Filter Message.
         * @member {string} Message
         * @memberof protoManage.Filter
         * @instance
         */
        Filter.prototype.Message = "";

        /**
         * Creates a new Filter instance using the specified properties.
         * @function create
         * @memberof protoManage.Filter
         * @static
         * @param {protoManage.IFilter=} [properties] Properties to set
         * @returns {protoManage.Filter} Filter instance
         */
        Filter.create = function create(properties) {
            return new Filter(properties);
        };

        /**
         * Encodes the specified Filter message. Does not implicitly {@link protoManage.Filter.verify|verify} messages.
         * @function encode
         * @memberof protoManage.Filter
         * @static
         * @param {protoManage.IFilter} message Filter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Filter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ID);
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.GroupID);
            if (message.TypeID != null && Object.hasOwnProperty.call(message, "TypeID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.TypeID);
            if (message.NodeID != null && Object.hasOwnProperty.call(message, "NodeID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.NodeID);
            if (message.SourceID != null && Object.hasOwnProperty.call(message, "SourceID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SourceID);
            if (message.TargetID != null && Object.hasOwnProperty.call(message, "TargetID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.TargetID);
            if (message.FuncID != null && Object.hasOwnProperty.call(message, "FuncID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FuncID);
            if (message.ReportID != null && Object.hasOwnProperty.call(message, "ReportID"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.ReportID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.Name);
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Flag);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.Value);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.State);
            if (message.PageSize != null && Object.hasOwnProperty.call(message, "PageSize"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.PageSize);
            if (message.PageNum != null && Object.hasOwnProperty.call(message, "PageNum"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.PageNum);
            if (message.SenderName != null && Object.hasOwnProperty.call(message, "SenderName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.SenderName);
            if (message.SenderType != null && Object.hasOwnProperty.call(message, "SenderType"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.SenderType);
            if (message.SenderBeginTime != null && Object.hasOwnProperty.call(message, "SenderBeginTime"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.SenderBeginTime);
            if (message.SenderEndTime != null && Object.hasOwnProperty.call(message, "SenderEndTime"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.SenderEndTime);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Filter message, length delimited. Does not implicitly {@link protoManage.Filter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.Filter
         * @static
         * @param {protoManage.IFilter} message Filter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Filter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Filter message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.Filter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.Filter} Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Filter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.Filter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.GroupID = reader.int64();
                    break;
                case 3:
                    message.TypeID = reader.int64();
                    break;
                case 4:
                    message.NodeID = reader.int64();
                    break;
                case 5:
                    message.SourceID = reader.int64();
                    break;
                case 6:
                    message.TargetID = reader.int64();
                    break;
                case 7:
                    message.FuncID = reader.int64();
                    break;
                case 8:
                    message.ReportID = reader.int64();
                    break;
                case 9:
                    message.Name = reader.string();
                    break;
                case 10:
                    message.Flag = reader.string();
                    break;
                case 11:
                    message.Value = reader.string();
                    break;
                case 12:
                    message.State = reader.int32();
                    break;
                case 13:
                    message.PageSize = reader.int64();
                    break;
                case 14:
                    message.PageNum = reader.int64();
                    break;
                case 15:
                    message.SenderName = reader.string();
                    break;
                case 16:
                    message.SenderType = reader.int32();
                    break;
                case 17:
                    message.SenderBeginTime = reader.int64();
                    break;
                case 18:
                    message.SenderEndTime = reader.int64();
                    break;
                case 19:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Filter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.Filter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.Filter} Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Filter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Filter message.
         * @function verify
         * @memberof protoManage.Filter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Filter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID) && !(message.GroupID && $util.isInteger(message.GroupID.low) && $util.isInteger(message.GroupID.high)))
                    return "GroupID: integer|Long expected";
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                if (!$util.isInteger(message.TypeID) && !(message.TypeID && $util.isInteger(message.TypeID.low) && $util.isInteger(message.TypeID.high)))
                    return "TypeID: integer|Long expected";
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (!$util.isInteger(message.NodeID) && !(message.NodeID && $util.isInteger(message.NodeID.low) && $util.isInteger(message.NodeID.high)))
                    return "NodeID: integer|Long expected";
            if (message.SourceID != null && message.hasOwnProperty("SourceID"))
                if (!$util.isInteger(message.SourceID) && !(message.SourceID && $util.isInteger(message.SourceID.low) && $util.isInteger(message.SourceID.high)))
                    return "SourceID: integer|Long expected";
            if (message.TargetID != null && message.hasOwnProperty("TargetID"))
                if (!$util.isInteger(message.TargetID) && !(message.TargetID && $util.isInteger(message.TargetID.low) && $util.isInteger(message.TargetID.high)))
                    return "TargetID: integer|Long expected";
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (!$util.isInteger(message.FuncID) && !(message.FuncID && $util.isInteger(message.FuncID.low) && $util.isInteger(message.FuncID.high)))
                    return "FuncID: integer|Long expected";
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (!$util.isInteger(message.ReportID) && !(message.ReportID && $util.isInteger(message.ReportID.low) && $util.isInteger(message.ReportID.high)))
                    return "ReportID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!$util.isString(message.Flag))
                    return "Flag: string expected";
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
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                if (!$util.isInteger(message.PageSize) && !(message.PageSize && $util.isInteger(message.PageSize.low) && $util.isInteger(message.PageSize.high)))
                    return "PageSize: integer|Long expected";
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (!$util.isInteger(message.PageNum) && !(message.PageNum && $util.isInteger(message.PageNum.low) && $util.isInteger(message.PageNum.high)))
                    return "PageNum: integer|Long expected";
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
            if (message.SenderBeginTime != null && message.hasOwnProperty("SenderBeginTime"))
                if (!$util.isInteger(message.SenderBeginTime) && !(message.SenderBeginTime && $util.isInteger(message.SenderBeginTime.low) && $util.isInteger(message.SenderBeginTime.high)))
                    return "SenderBeginTime: integer|Long expected";
            if (message.SenderEndTime != null && message.hasOwnProperty("SenderEndTime"))
                if (!$util.isInteger(message.SenderEndTime) && !(message.SenderEndTime && $util.isInteger(message.SenderEndTime.low) && $util.isInteger(message.SenderEndTime.high)))
                    return "SenderEndTime: integer|Long expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.Filter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.Filter} Filter
         */
        Filter.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.Filter)
                return object;
            let message = new $root.protoManage.Filter();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.GroupID != null)
                if ($util.Long)
                    (message.GroupID = $util.Long.fromValue(object.GroupID)).unsigned = false;
                else if (typeof object.GroupID === "string")
                    message.GroupID = parseInt(object.GroupID, 10);
                else if (typeof object.GroupID === "number")
                    message.GroupID = object.GroupID;
                else if (typeof object.GroupID === "object")
                    message.GroupID = new $util.LongBits(object.GroupID.low >>> 0, object.GroupID.high >>> 0).toNumber();
            if (object.TypeID != null)
                if ($util.Long)
                    (message.TypeID = $util.Long.fromValue(object.TypeID)).unsigned = false;
                else if (typeof object.TypeID === "string")
                    message.TypeID = parseInt(object.TypeID, 10);
                else if (typeof object.TypeID === "number")
                    message.TypeID = object.TypeID;
                else if (typeof object.TypeID === "object")
                    message.TypeID = new $util.LongBits(object.TypeID.low >>> 0, object.TypeID.high >>> 0).toNumber();
            if (object.NodeID != null)
                if ($util.Long)
                    (message.NodeID = $util.Long.fromValue(object.NodeID)).unsigned = false;
                else if (typeof object.NodeID === "string")
                    message.NodeID = parseInt(object.NodeID, 10);
                else if (typeof object.NodeID === "number")
                    message.NodeID = object.NodeID;
                else if (typeof object.NodeID === "object")
                    message.NodeID = new $util.LongBits(object.NodeID.low >>> 0, object.NodeID.high >>> 0).toNumber();
            if (object.SourceID != null)
                if ($util.Long)
                    (message.SourceID = $util.Long.fromValue(object.SourceID)).unsigned = false;
                else if (typeof object.SourceID === "string")
                    message.SourceID = parseInt(object.SourceID, 10);
                else if (typeof object.SourceID === "number")
                    message.SourceID = object.SourceID;
                else if (typeof object.SourceID === "object")
                    message.SourceID = new $util.LongBits(object.SourceID.low >>> 0, object.SourceID.high >>> 0).toNumber();
            if (object.TargetID != null)
                if ($util.Long)
                    (message.TargetID = $util.Long.fromValue(object.TargetID)).unsigned = false;
                else if (typeof object.TargetID === "string")
                    message.TargetID = parseInt(object.TargetID, 10);
                else if (typeof object.TargetID === "number")
                    message.TargetID = object.TargetID;
                else if (typeof object.TargetID === "object")
                    message.TargetID = new $util.LongBits(object.TargetID.low >>> 0, object.TargetID.high >>> 0).toNumber();
            if (object.FuncID != null)
                if ($util.Long)
                    (message.FuncID = $util.Long.fromValue(object.FuncID)).unsigned = false;
                else if (typeof object.FuncID === "string")
                    message.FuncID = parseInt(object.FuncID, 10);
                else if (typeof object.FuncID === "number")
                    message.FuncID = object.FuncID;
                else if (typeof object.FuncID === "object")
                    message.FuncID = new $util.LongBits(object.FuncID.low >>> 0, object.FuncID.high >>> 0).toNumber();
            if (object.ReportID != null)
                if ($util.Long)
                    (message.ReportID = $util.Long.fromValue(object.ReportID)).unsigned = false;
                else if (typeof object.ReportID === "string")
                    message.ReportID = parseInt(object.ReportID, 10);
                else if (typeof object.ReportID === "number")
                    message.ReportID = object.ReportID;
                else if (typeof object.ReportID === "object")
                    message.ReportID = new $util.LongBits(object.ReportID.low >>> 0, object.ReportID.high >>> 0).toNumber();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Flag != null)
                message.Flag = String(object.Flag);
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
            if (object.PageSize != null)
                if ($util.Long)
                    (message.PageSize = $util.Long.fromValue(object.PageSize)).unsigned = false;
                else if (typeof object.PageSize === "string")
                    message.PageSize = parseInt(object.PageSize, 10);
                else if (typeof object.PageSize === "number")
                    message.PageSize = object.PageSize;
                else if (typeof object.PageSize === "object")
                    message.PageSize = new $util.LongBits(object.PageSize.low >>> 0, object.PageSize.high >>> 0).toNumber();
            if (object.PageNum != null)
                if ($util.Long)
                    (message.PageNum = $util.Long.fromValue(object.PageNum)).unsigned = false;
                else if (typeof object.PageNum === "string")
                    message.PageNum = parseInt(object.PageNum, 10);
                else if (typeof object.PageNum === "number")
                    message.PageNum = object.PageNum;
                else if (typeof object.PageNum === "object")
                    message.PageNum = new $util.LongBits(object.PageNum.low >>> 0, object.PageNum.high >>> 0).toNumber();
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
            if (object.SenderBeginTime != null)
                if ($util.Long)
                    (message.SenderBeginTime = $util.Long.fromValue(object.SenderBeginTime)).unsigned = false;
                else if (typeof object.SenderBeginTime === "string")
                    message.SenderBeginTime = parseInt(object.SenderBeginTime, 10);
                else if (typeof object.SenderBeginTime === "number")
                    message.SenderBeginTime = object.SenderBeginTime;
                else if (typeof object.SenderBeginTime === "object")
                    message.SenderBeginTime = new $util.LongBits(object.SenderBeginTime.low >>> 0, object.SenderBeginTime.high >>> 0).toNumber();
            if (object.SenderEndTime != null)
                if ($util.Long)
                    (message.SenderEndTime = $util.Long.fromValue(object.SenderEndTime)).unsigned = false;
                else if (typeof object.SenderEndTime === "string")
                    message.SenderEndTime = parseInt(object.SenderEndTime, 10);
                else if (typeof object.SenderEndTime === "number")
                    message.SenderEndTime = object.SenderEndTime;
                else if (typeof object.SenderEndTime === "object")
                    message.SenderEndTime = new $util.LongBits(object.SenderEndTime.low >>> 0, object.SenderEndTime.high >>> 0).toNumber();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a Filter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.Filter
         * @static
         * @param {protoManage.Filter} message Filter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Filter.toObject = function toObject(message, options) {
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
                    object.GroupID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.TypeID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TypeID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.NodeID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NodeID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.SourceID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SourceID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.TargetID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.FuncID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FuncID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ReportID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ReportID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Flag = "";
                object.Value = "";
                object.State = options.enums === String ? "StateNot" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.PageSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PageSize = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.PageNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PageNum = options.longs === String ? "0" : 0;
                object.SenderName = "";
                object.SenderType = options.enums === String ? "NotifySenderTypeUnknow" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.SenderBeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderBeginTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.SenderEndTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderEndTime = options.longs === String ? "0" : 0;
                object.Message = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (typeof message.GroupID === "number")
                    object.GroupID = options.longs === String ? String(message.GroupID) : message.GroupID;
                else
                    object.GroupID = options.longs === String ? $util.Long.prototype.toString.call(message.GroupID) : options.longs === Number ? new $util.LongBits(message.GroupID.low >>> 0, message.GroupID.high >>> 0).toNumber() : message.GroupID;
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                if (typeof message.TypeID === "number")
                    object.TypeID = options.longs === String ? String(message.TypeID) : message.TypeID;
                else
                    object.TypeID = options.longs === String ? $util.Long.prototype.toString.call(message.TypeID) : options.longs === Number ? new $util.LongBits(message.TypeID.low >>> 0, message.TypeID.high >>> 0).toNumber() : message.TypeID;
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (typeof message.NodeID === "number")
                    object.NodeID = options.longs === String ? String(message.NodeID) : message.NodeID;
                else
                    object.NodeID = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID) : options.longs === Number ? new $util.LongBits(message.NodeID.low >>> 0, message.NodeID.high >>> 0).toNumber() : message.NodeID;
            if (message.SourceID != null && message.hasOwnProperty("SourceID"))
                if (typeof message.SourceID === "number")
                    object.SourceID = options.longs === String ? String(message.SourceID) : message.SourceID;
                else
                    object.SourceID = options.longs === String ? $util.Long.prototype.toString.call(message.SourceID) : options.longs === Number ? new $util.LongBits(message.SourceID.low >>> 0, message.SourceID.high >>> 0).toNumber() : message.SourceID;
            if (message.TargetID != null && message.hasOwnProperty("TargetID"))
                if (typeof message.TargetID === "number")
                    object.TargetID = options.longs === String ? String(message.TargetID) : message.TargetID;
                else
                    object.TargetID = options.longs === String ? $util.Long.prototype.toString.call(message.TargetID) : options.longs === Number ? new $util.LongBits(message.TargetID.low >>> 0, message.TargetID.high >>> 0).toNumber() : message.TargetID;
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (typeof message.FuncID === "number")
                    object.FuncID = options.longs === String ? String(message.FuncID) : message.FuncID;
                else
                    object.FuncID = options.longs === String ? $util.Long.prototype.toString.call(message.FuncID) : options.longs === Number ? new $util.LongBits(message.FuncID.low >>> 0, message.FuncID.high >>> 0).toNumber() : message.FuncID;
            if (message.ReportID != null && message.hasOwnProperty("ReportID"))
                if (typeof message.ReportID === "number")
                    object.ReportID = options.longs === String ? String(message.ReportID) : message.ReportID;
                else
                    object.ReportID = options.longs === String ? $util.Long.prototype.toString.call(message.ReportID) : options.longs === Number ? new $util.LongBits(message.ReportID.low >>> 0, message.ReportID.high >>> 0).toNumber() : message.ReportID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                if (typeof message.PageSize === "number")
                    object.PageSize = options.longs === String ? String(message.PageSize) : message.PageSize;
                else
                    object.PageSize = options.longs === String ? $util.Long.prototype.toString.call(message.PageSize) : options.longs === Number ? new $util.LongBits(message.PageSize.low >>> 0, message.PageSize.high >>> 0).toNumber() : message.PageSize;
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (typeof message.PageNum === "number")
                    object.PageNum = options.longs === String ? String(message.PageNum) : message.PageNum;
                else
                    object.PageNum = options.longs === String ? $util.Long.prototype.toString.call(message.PageNum) : options.longs === Number ? new $util.LongBits(message.PageNum.low >>> 0, message.PageNum.high >>> 0).toNumber() : message.PageNum;
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                object.SenderName = message.SenderName;
            if (message.SenderType != null && message.hasOwnProperty("SenderType"))
                object.SenderType = options.enums === String ? $root.protoManage.NotifySenderType[message.SenderType] : message.SenderType;
            if (message.SenderBeginTime != null && message.hasOwnProperty("SenderBeginTime"))
                if (typeof message.SenderBeginTime === "number")
                    object.SenderBeginTime = options.longs === String ? String(message.SenderBeginTime) : message.SenderBeginTime;
                else
                    object.SenderBeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.SenderBeginTime) : options.longs === Number ? new $util.LongBits(message.SenderBeginTime.low >>> 0, message.SenderBeginTime.high >>> 0).toNumber() : message.SenderBeginTime;
            if (message.SenderEndTime != null && message.hasOwnProperty("SenderEndTime"))
                if (typeof message.SenderEndTime === "number")
                    object.SenderEndTime = options.longs === String ? String(message.SenderEndTime) : message.SenderEndTime;
                else
                    object.SenderEndTime = options.longs === String ? $util.Long.prototype.toString.call(message.SenderEndTime) : options.longs === Number ? new $util.LongBits(message.SenderEndTime.low >>> 0, message.SenderEndTime.high >>> 0).toNumber() : message.SenderEndTime;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Filter to JSON.
         * @function toJSON
         * @memberof protoManage.Filter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Filter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Filter;
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
         * @property {number|null} [Level] Manager Level
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
         * @member {number} Level
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
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
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
            if (object.Level != null)
                message.Level = object.Level | 0;
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
                object.Level = 0;
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
                object.Level = message.Level;
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

    protoManage.NodeGroup = (function() {

        /**
         * Properties of a NodeGroup.
         * @memberof protoManage
         * @interface INodeGroup
         * @property {protoManage.IBase|null} [Base] NodeGroup Base
         * @property {string|null} [Name] NodeGroup Name
         */

        /**
         * Constructs a new NodeGroup.
         * @memberof protoManage
         * @classdesc Represents a NodeGroup.
         * @implements INodeGroup
         * @constructor
         * @param {protoManage.INodeGroup=} [properties] Properties to set
         */
        function NodeGroup(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeGroup Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeGroup
         * @instance
         */
        NodeGroup.prototype.Base = null;

        /**
         * NodeGroup Name.
         * @member {string} Name
         * @memberof protoManage.NodeGroup
         * @instance
         */
        NodeGroup.prototype.Name = "";

        /**
         * Creates a new NodeGroup instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeGroup
         * @static
         * @param {protoManage.INodeGroup=} [properties] Properties to set
         * @returns {protoManage.NodeGroup} NodeGroup instance
         */
        NodeGroup.create = function create(properties) {
            return new NodeGroup(properties);
        };

        /**
         * Encodes the specified NodeGroup message. Does not implicitly {@link protoManage.NodeGroup.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeGroup
         * @static
         * @param {protoManage.INodeGroup} message NodeGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified NodeGroup message, length delimited. Does not implicitly {@link protoManage.NodeGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeGroup
         * @static
         * @param {protoManage.INodeGroup} message NodeGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeGroup message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeGroup} NodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeGroup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeGroup} NodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeGroup message.
         * @function verify
         * @memberof protoManage.NodeGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeGroup.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a NodeGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeGroup} NodeGroup
         */
        NodeGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeGroup)
                return object;
            let message = new $root.protoManage.NodeGroup();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeGroup.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a NodeGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeGroup
         * @static
         * @param {protoManage.NodeGroup} message NodeGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this NodeGroup to JSON.
         * @function toJSON
         * @memberof protoManage.NodeGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeGroup;
    })();

    protoManage.NodeType = (function() {

        /**
         * Properties of a NodeType.
         * @memberof protoManage
         * @interface INodeType
         * @property {protoManage.IBase|null} [Base] NodeType Base
         * @property {string|null} [Name] NodeType Name
         */

        /**
         * Constructs a new NodeType.
         * @memberof protoManage
         * @classdesc Represents a NodeType.
         * @implements INodeType
         * @constructor
         * @param {protoManage.INodeType=} [properties] Properties to set
         */
        function NodeType(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeType Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeType
         * @instance
         */
        NodeType.prototype.Base = null;

        /**
         * NodeType Name.
         * @member {string} Name
         * @memberof protoManage.NodeType
         * @instance
         */
        NodeType.prototype.Name = "";

        /**
         * Creates a new NodeType instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeType
         * @static
         * @param {protoManage.INodeType=} [properties] Properties to set
         * @returns {protoManage.NodeType} NodeType instance
         */
        NodeType.create = function create(properties) {
            return new NodeType(properties);
        };

        /**
         * Encodes the specified NodeType message. Does not implicitly {@link protoManage.NodeType.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeType
         * @static
         * @param {protoManage.INodeType} message NodeType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified NodeType message, length delimited. Does not implicitly {@link protoManage.NodeType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeType
         * @static
         * @param {protoManage.INodeType} message NodeType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeType message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeType} NodeType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeType();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeType} NodeType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeType message.
         * @function verify
         * @memberof protoManage.NodeType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeType.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a NodeType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeType} NodeType
         */
        NodeType.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeType)
                return object;
            let message = new $root.protoManage.NodeType();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeType.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a NodeType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeType
         * @static
         * @param {protoManage.NodeType} message NodeType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                object.Name = "";
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this NodeType to JSON.
         * @function toJSON
         * @memberof protoManage.NodeType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeType;
    })();

    protoManage.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof protoManage
         * @interface INode
         * @property {protoManage.IBase|null} [Base] Node Base
         * @property {number|null} [GroupID] Node GroupID
         * @property {number|null} [TypeID] Node TypeID
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
         * Node GroupID.
         * @member {number} GroupID
         * @memberof protoManage.Node
         * @instance
         */
        Node.prototype.GroupID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Node TypeID.
         * @member {number} TypeID
         * @memberof protoManage.Node
         * @instance
         */
        Node.prototype.TypeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.GroupID);
            if (message.TypeID != null && Object.hasOwnProperty.call(message, "TypeID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.TypeID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Name);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
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
                    message.GroupID = reader.int64();
                    break;
                case 3:
                    message.TypeID = reader.int64();
                    break;
                case 4:
                    message.Name = reader.string();
                    break;
                case 5:
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
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID) && !(message.GroupID && $util.isInteger(message.GroupID.low) && $util.isInteger(message.GroupID.high)))
                    return "GroupID: integer|Long expected";
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                if (!$util.isInteger(message.TypeID) && !(message.TypeID && $util.isInteger(message.TypeID.low) && $util.isInteger(message.TypeID.high)))
                    return "TypeID: integer|Long expected";
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
            if (object.GroupID != null)
                if ($util.Long)
                    (message.GroupID = $util.Long.fromValue(object.GroupID)).unsigned = false;
                else if (typeof object.GroupID === "string")
                    message.GroupID = parseInt(object.GroupID, 10);
                else if (typeof object.GroupID === "number")
                    message.GroupID = object.GroupID;
                else if (typeof object.GroupID === "object")
                    message.GroupID = new $util.LongBits(object.GroupID.low >>> 0, object.GroupID.high >>> 0).toNumber();
            if (object.TypeID != null)
                if ($util.Long)
                    (message.TypeID = $util.Long.fromValue(object.TypeID)).unsigned = false;
                else if (typeof object.TypeID === "string")
                    message.TypeID = parseInt(object.TypeID, 10);
                else if (typeof object.TypeID === "number")
                    message.TypeID = object.TypeID;
                else if (typeof object.TypeID === "object")
                    message.TypeID = new $util.LongBits(object.TypeID.low >>> 0, object.TypeID.high >>> 0).toNumber();
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.GroupID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.TypeID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TypeID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (typeof message.GroupID === "number")
                    object.GroupID = options.longs === String ? String(message.GroupID) : message.GroupID;
                else
                    object.GroupID = options.longs === String ? $util.Long.prototype.toString.call(message.GroupID) : options.longs === Number ? new $util.LongBits(message.GroupID.low >>> 0, message.GroupID.high >>> 0).toNumber() : message.GroupID;
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                if (typeof message.TypeID === "number")
                    object.TypeID = options.longs === String ? String(message.TypeID) : message.TypeID;
                else
                    object.TypeID = options.longs === String ? $util.Long.prototype.toString.call(message.TypeID) : options.longs === Number ? new $util.LongBits(message.TypeID.low >>> 0, message.TypeID.high >>> 0).toNumber() : message.TypeID;
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

    protoManage.NodeLink = (function() {

        /**
         * Properties of a NodeLink.
         * @memberof protoManage
         * @interface INodeLink
         * @property {protoManage.IBase|null} [Base] NodeLink Base
         * @property {number|null} [SourceID] NodeLink SourceID
         * @property {number|null} [TargetID] NodeLink TargetID
         * @property {protoManage.State|null} [State] NodeLink State
         */

        /**
         * Constructs a new NodeLink.
         * @memberof protoManage
         * @classdesc Represents a NodeLink.
         * @implements INodeLink
         * @constructor
         * @param {protoManage.INodeLink=} [properties] Properties to set
         */
        function NodeLink(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeLink Base.
         * @member {protoManage.IBase|null|undefined} Base
         * @memberof protoManage.NodeLink
         * @instance
         */
        NodeLink.prototype.Base = null;

        /**
         * NodeLink SourceID.
         * @member {number} SourceID
         * @memberof protoManage.NodeLink
         * @instance
         */
        NodeLink.prototype.SourceID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeLink TargetID.
         * @member {number} TargetID
         * @memberof protoManage.NodeLink
         * @instance
         */
        NodeLink.prototype.TargetID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NodeLink State.
         * @member {protoManage.State} State
         * @memberof protoManage.NodeLink
         * @instance
         */
        NodeLink.prototype.State = 0;

        /**
         * Creates a new NodeLink instance using the specified properties.
         * @function create
         * @memberof protoManage.NodeLink
         * @static
         * @param {protoManage.INodeLink=} [properties] Properties to set
         * @returns {protoManage.NodeLink} NodeLink instance
         */
        NodeLink.create = function create(properties) {
            return new NodeLink(properties);
        };

        /**
         * Encodes the specified NodeLink message. Does not implicitly {@link protoManage.NodeLink.verify|verify} messages.
         * @function encode
         * @memberof protoManage.NodeLink
         * @static
         * @param {protoManage.INodeLink} message NodeLink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeLink.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Base != null && Object.hasOwnProperty.call(message, "Base"))
                $root.protoManage.Base.encode(message.Base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.SourceID != null && Object.hasOwnProperty.call(message, "SourceID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SourceID);
            if (message.TargetID != null && Object.hasOwnProperty.call(message, "TargetID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.TargetID);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified NodeLink message, length delimited. Does not implicitly {@link protoManage.NodeLink.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.NodeLink
         * @static
         * @param {protoManage.INodeLink} message NodeLink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeLink.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeLink message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.NodeLink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.NodeLink} NodeLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeLink.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.NodeLink();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Base = $root.protoManage.Base.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.SourceID = reader.int64();
                    break;
                case 3:
                    message.TargetID = reader.int64();
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
         * Decodes a NodeLink message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.NodeLink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.NodeLink} NodeLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeLink.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeLink message.
         * @function verify
         * @memberof protoManage.NodeLink
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeLink.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Base != null && message.hasOwnProperty("Base")) {
                let error = $root.protoManage.Base.verify(message.Base);
                if (error)
                    return "Base." + error;
            }
            if (message.SourceID != null && message.hasOwnProperty("SourceID"))
                if (!$util.isInteger(message.SourceID) && !(message.SourceID && $util.isInteger(message.SourceID.low) && $util.isInteger(message.SourceID.high)))
                    return "SourceID: integer|Long expected";
            if (message.TargetID != null && message.hasOwnProperty("TargetID"))
                if (!$util.isInteger(message.TargetID) && !(message.TargetID && $util.isInteger(message.TargetID.low) && $util.isInteger(message.TargetID.high)))
                    return "TargetID: integer|Long expected";
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
         * Creates a NodeLink message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.NodeLink
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.NodeLink} NodeLink
         */
        NodeLink.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.NodeLink)
                return object;
            let message = new $root.protoManage.NodeLink();
            if (object.Base != null) {
                if (typeof object.Base !== "object")
                    throw TypeError(".protoManage.NodeLink.Base: object expected");
                message.Base = $root.protoManage.Base.fromObject(object.Base);
            }
            if (object.SourceID != null)
                if ($util.Long)
                    (message.SourceID = $util.Long.fromValue(object.SourceID)).unsigned = false;
                else if (typeof object.SourceID === "string")
                    message.SourceID = parseInt(object.SourceID, 10);
                else if (typeof object.SourceID === "number")
                    message.SourceID = object.SourceID;
                else if (typeof object.SourceID === "object")
                    message.SourceID = new $util.LongBits(object.SourceID.low >>> 0, object.SourceID.high >>> 0).toNumber();
            if (object.TargetID != null)
                if ($util.Long)
                    (message.TargetID = $util.Long.fromValue(object.TargetID)).unsigned = false;
                else if (typeof object.TargetID === "string")
                    message.TargetID = parseInt(object.TargetID, 10);
                else if (typeof object.TargetID === "number")
                    message.TargetID = object.TargetID;
                else if (typeof object.TargetID === "object")
                    message.TargetID = new $util.LongBits(object.TargetID.low >>> 0, object.TargetID.high >>> 0).toNumber();
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
         * Creates a plain object from a NodeLink message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.NodeLink
         * @static
         * @param {protoManage.NodeLink} message NodeLink
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeLink.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Base = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.SourceID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SourceID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.TargetID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetID = options.longs === String ? "0" : 0;
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.SourceID != null && message.hasOwnProperty("SourceID"))
                if (typeof message.SourceID === "number")
                    object.SourceID = options.longs === String ? String(message.SourceID) : message.SourceID;
                else
                    object.SourceID = options.longs === String ? $util.Long.prototype.toString.call(message.SourceID) : options.longs === Number ? new $util.LongBits(message.SourceID.low >>> 0, message.SourceID.high >>> 0).toNumber() : message.SourceID;
            if (message.TargetID != null && message.hasOwnProperty("TargetID"))
                if (typeof message.TargetID === "number")
                    object.TargetID = options.longs === String ? String(message.TargetID) : message.TargetID;
                else
                    object.TargetID = options.longs === String ? $util.Long.prototype.toString.call(message.TargetID) : options.longs === Number ? new $util.LongBits(message.TargetID.low >>> 0, message.TargetID.high >>> 0).toNumber() : message.TargetID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
            return object;
        };

        /**
         * Converts this NodeLink to JSON.
         * @function toJSON
         * @memberof protoManage.NodeLink
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeLink.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeLink;
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
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
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
         * @property {number|null} [ManagerID] NodeFuncCall ManagerID
         * @property {number|null} [FuncID] NodeFuncCall FuncID
         * @property {string|null} [Parameter] NodeFuncCall Parameter
         * @property {string|null} [ReturnVal] NodeFuncCall ReturnVal
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
         * NodeFuncCall ManagerID.
         * @member {number} ManagerID
         * @memberof protoManage.NodeFuncCall
         * @instance
         */
        NodeFuncCall.prototype.ManagerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.ManagerID != null && Object.hasOwnProperty.call(message, "ManagerID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ManagerID);
            if (message.FuncID != null && Object.hasOwnProperty.call(message, "FuncID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FuncID);
            if (message.Parameter != null && Object.hasOwnProperty.call(message, "Parameter"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Parameter);
            if (message.ReturnVal != null && Object.hasOwnProperty.call(message, "ReturnVal"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ReturnVal);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.State);
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
                    message.ManagerID = reader.int64();
                    break;
                case 3:
                    message.FuncID = reader.int64();
                    break;
                case 4:
                    message.Parameter = reader.string();
                    break;
                case 5:
                    message.ReturnVal = reader.string();
                    break;
                case 6:
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
            if (message.ManagerID != null && message.hasOwnProperty("ManagerID"))
                if (!$util.isInteger(message.ManagerID) && !(message.ManagerID && $util.isInteger(message.ManagerID.low) && $util.isInteger(message.ManagerID.high)))
                    return "ManagerID: integer|Long expected";
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (!$util.isInteger(message.FuncID) && !(message.FuncID && $util.isInteger(message.FuncID.low) && $util.isInteger(message.FuncID.high)))
                    return "FuncID: integer|Long expected";
            if (message.Parameter != null && message.hasOwnProperty("Parameter"))
                if (!$util.isString(message.Parameter))
                    return "Parameter: string expected";
            if (message.ReturnVal != null && message.hasOwnProperty("ReturnVal"))
                if (!$util.isString(message.ReturnVal))
                    return "ReturnVal: string expected";
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
            if (object.ManagerID != null)
                if ($util.Long)
                    (message.ManagerID = $util.Long.fromValue(object.ManagerID)).unsigned = false;
                else if (typeof object.ManagerID === "string")
                    message.ManagerID = parseInt(object.ManagerID, 10);
                else if (typeof object.ManagerID === "number")
                    message.ManagerID = object.ManagerID;
                else if (typeof object.ManagerID === "object")
                    message.ManagerID = new $util.LongBits(object.ManagerID.low >>> 0, object.ManagerID.high >>> 0).toNumber();
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
                    object.ManagerID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ManagerID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.FuncID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FuncID = options.longs === String ? "0" : 0;
                object.Parameter = "";
                object.ReturnVal = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.ManagerID != null && message.hasOwnProperty("ManagerID"))
                if (typeof message.ManagerID === "number")
                    object.ManagerID = options.longs === String ? String(message.ManagerID) : message.ManagerID;
                else
                    object.ManagerID = options.longs === String ? $util.Long.prototype.toString.call(message.ManagerID) : options.longs === Number ? new $util.LongBits(message.ManagerID.low >>> 0, message.ManagerID.high >>> 0).toNumber() : message.ManagerID;
            if (message.FuncID != null && message.hasOwnProperty("FuncID"))
                if (typeof message.FuncID === "number")
                    object.FuncID = options.longs === String ? String(message.FuncID) : message.FuncID;
                else
                    object.FuncID = options.longs === String ? $util.Long.prototype.toString.call(message.FuncID) : options.longs === Number ? new $util.LongBits(message.FuncID.low >>> 0, message.FuncID.high >>> 0).toNumber() : message.FuncID;
            if (message.Parameter != null && message.hasOwnProperty("Parameter"))
                object.Parameter = message.Parameter;
            if (message.ReturnVal != null && message.hasOwnProperty("ReturnVal"))
                object.ReturnVal = message.ReturnVal;
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
         * @property {string|null} [Func] NodeReport Func
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
         * NodeReport Func.
         * @member {string} Func
         * @memberof protoManage.NodeReport
         * @instance
         */
        NodeReport.prototype.Func = "";

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
            if (message.Func != null && Object.hasOwnProperty.call(message, "Func"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Func);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Name);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
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
                case 4:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Func = reader.string();
                    break;
                case 5:
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
            if (message.Func != null && message.hasOwnProperty("Func"))
                if (!$util.isString(message.Func))
                    return "Func: string expected";
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
            if (object.Func != null)
                message.Func = String(object.Func);
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
                object.Func = "";
                object.Name = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.NodeID != null && message.hasOwnProperty("NodeID"))
                if (typeof message.NodeID === "number")
                    object.NodeID = options.longs === String ? String(message.NodeID) : message.NodeID;
                else
                    object.NodeID = options.longs === String ? $util.Long.prototype.toString.call(message.NodeID) : options.longs === Number ? new $util.LongBits(message.NodeID.low >>> 0, message.NodeID.high >>> 0).toNumber() : message.NodeID;
            if (message.Func != null && message.hasOwnProperty("Func"))
                object.Func = message.Func;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
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
         * @property {number|null} [Value] NodeReportVal Value
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
         * @member {number} Value
         * @memberof protoManage.NodeReportVal
         * @instance
         */
        NodeReportVal.prototype.Value = 0;

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
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Value);
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
                    message.Value = reader.double();
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
                if (typeof message.Value !== "number")
                    return "Value: number expected";
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
                message.Value = Number(object.Value);
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
                object.Value = 0;
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
                object.Value = options.json && !isFinite(message.Value) ? String(message.Value) : message.Value;
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
         * @property {protoManage.NotifySenderType|null} [SenderType] NodeNotify SenderType
         * @property {string|null} [Message] NodeNotify Message
         * @property {protoManage.State|null} [State] NodeNotify State
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
            if (message.SenderType != null && Object.hasOwnProperty.call(message, "SenderType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SenderType);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Message);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
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
                    message.SenderType = reader.int32();
                    break;
                case 4:
                    message.Message = reader.string();
                    break;
                case 5:
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
                object.SenderType = options.enums === String ? "NotifySenderTypeUnknow" : 0;
                object.Message = "";
                object.State = options.enums === String ? "StateNot" : 0;
            }
            if (message.Base != null && message.hasOwnProperty("Base"))
                object.Base = $root.protoManage.Base.toObject(message.Base, options);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber() : message.SenderID;
            if (message.SenderType != null && message.hasOwnProperty("SenderType"))
                object.SenderType = options.enums === String ? $root.protoManage.NotifySenderType[message.SenderType] : message.SenderType;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.protoManage.State[message.State] : message.State;
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

    protoManage.ReqNodeLogin = (function() {

        /**
         * Properties of a ReqNodeLogin.
         * @memberof protoManage
         * @interface IReqNodeLogin
         * @property {protoManage.INodeGroup|null} [NodeGroup] ReqNodeLogin NodeGroup
         * @property {protoManage.INodeType|null} [NodeType] ReqNodeLogin NodeType
         * @property {protoManage.INode|null} [Node] ReqNodeLogin Node
         */

        /**
         * Constructs a new ReqNodeLogin.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeLogin.
         * @implements IReqNodeLogin
         * @constructor
         * @param {protoManage.IReqNodeLogin=} [properties] Properties to set
         */
        function ReqNodeLogin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeLogin NodeGroup.
         * @member {protoManage.INodeGroup|null|undefined} NodeGroup
         * @memberof protoManage.ReqNodeLogin
         * @instance
         */
        ReqNodeLogin.prototype.NodeGroup = null;

        /**
         * ReqNodeLogin NodeType.
         * @member {protoManage.INodeType|null|undefined} NodeType
         * @memberof protoManage.ReqNodeLogin
         * @instance
         */
        ReqNodeLogin.prototype.NodeType = null;

        /**
         * ReqNodeLogin Node.
         * @member {protoManage.INode|null|undefined} Node
         * @memberof protoManage.ReqNodeLogin
         * @instance
         */
        ReqNodeLogin.prototype.Node = null;

        /**
         * Creates a new ReqNodeLogin instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {protoManage.IReqNodeLogin=} [properties] Properties to set
         * @returns {protoManage.ReqNodeLogin} ReqNodeLogin instance
         */
        ReqNodeLogin.create = function create(properties) {
            return new ReqNodeLogin(properties);
        };

        /**
         * Encodes the specified ReqNodeLogin message. Does not implicitly {@link protoManage.ReqNodeLogin.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {protoManage.IReqNodeLogin} message ReqNodeLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NodeGroup != null && Object.hasOwnProperty.call(message, "NodeGroup"))
                $root.protoManage.NodeGroup.encode(message.NodeGroup, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NodeType != null && Object.hasOwnProperty.call(message, "NodeType"))
                $root.protoManage.NodeType.encode(message.NodeType, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Node != null && Object.hasOwnProperty.call(message, "Node"))
                $root.protoManage.Node.encode(message.Node, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeLogin message, length delimited. Does not implicitly {@link protoManage.ReqNodeLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {protoManage.IReqNodeLogin} message ReqNodeLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeLogin message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeLogin} ReqNodeLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeLogin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NodeGroup = $root.protoManage.NodeGroup.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.NodeType = $root.protoManage.NodeType.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Node = $root.protoManage.Node.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeLogin} ReqNodeLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeLogin message.
         * @function verify
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NodeGroup != null && message.hasOwnProperty("NodeGroup")) {
                let error = $root.protoManage.NodeGroup.verify(message.NodeGroup);
                if (error)
                    return "NodeGroup." + error;
            }
            if (message.NodeType != null && message.hasOwnProperty("NodeType")) {
                let error = $root.protoManage.NodeType.verify(message.NodeType);
                if (error)
                    return "NodeType." + error;
            }
            if (message.Node != null && message.hasOwnProperty("Node")) {
                let error = $root.protoManage.Node.verify(message.Node);
                if (error)
                    return "Node." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeLogin} ReqNodeLogin
         */
        ReqNodeLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeLogin)
                return object;
            let message = new $root.protoManage.ReqNodeLogin();
            if (object.NodeGroup != null) {
                if (typeof object.NodeGroup !== "object")
                    throw TypeError(".protoManage.ReqNodeLogin.NodeGroup: object expected");
                message.NodeGroup = $root.protoManage.NodeGroup.fromObject(object.NodeGroup);
            }
            if (object.NodeType != null) {
                if (typeof object.NodeType !== "object")
                    throw TypeError(".protoManage.ReqNodeLogin.NodeType: object expected");
                message.NodeType = $root.protoManage.NodeType.fromObject(object.NodeType);
            }
            if (object.Node != null) {
                if (typeof object.Node !== "object")
                    throw TypeError(".protoManage.ReqNodeLogin.Node: object expected");
                message.Node = $root.protoManage.Node.fromObject(object.Node);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeLogin
         * @static
         * @param {protoManage.ReqNodeLogin} message ReqNodeLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.NodeGroup = null;
                object.NodeType = null;
                object.Node = null;
            }
            if (message.NodeGroup != null && message.hasOwnProperty("NodeGroup"))
                object.NodeGroup = $root.protoManage.NodeGroup.toObject(message.NodeGroup, options);
            if (message.NodeType != null && message.hasOwnProperty("NodeType"))
                object.NodeType = $root.protoManage.NodeType.toObject(message.NodeType, options);
            if (message.Node != null && message.hasOwnProperty("Node"))
                object.Node = $root.protoManage.Node.toObject(message.Node, options);
            return object;
        };

        /**
         * Converts this ReqNodeLogin to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeLogin;
    })();

    protoManage.ReqNodeOnline = (function() {

        /**
         * Properties of a ReqNodeOnline.
         * @memberof protoManage
         * @interface IReqNodeOnline
         * @property {protoManage.INode|null} [Node] ReqNodeOnline Node
         * @property {Array.<protoManage.INodeLink>|null} [NodeLinkList] ReqNodeOnline NodeLinkList
         */

        /**
         * Constructs a new ReqNodeOnline.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeOnline.
         * @implements IReqNodeOnline
         * @constructor
         * @param {protoManage.IReqNodeOnline=} [properties] Properties to set
         */
        function ReqNodeOnline(properties) {
            this.NodeLinkList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeOnline Node.
         * @member {protoManage.INode|null|undefined} Node
         * @memberof protoManage.ReqNodeOnline
         * @instance
         */
        ReqNodeOnline.prototype.Node = null;

        /**
         * ReqNodeOnline NodeLinkList.
         * @member {Array.<protoManage.INodeLink>} NodeLinkList
         * @memberof protoManage.ReqNodeOnline
         * @instance
         */
        ReqNodeOnline.prototype.NodeLinkList = $util.emptyArray;

        /**
         * Creates a new ReqNodeOnline instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {protoManage.IReqNodeOnline=} [properties] Properties to set
         * @returns {protoManage.ReqNodeOnline} ReqNodeOnline instance
         */
        ReqNodeOnline.create = function create(properties) {
            return new ReqNodeOnline(properties);
        };

        /**
         * Encodes the specified ReqNodeOnline message. Does not implicitly {@link protoManage.ReqNodeOnline.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {protoManage.IReqNodeOnline} message ReqNodeOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeOnline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Node != null && Object.hasOwnProperty.call(message, "Node"))
                $root.protoManage.Node.encode(message.Node, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NodeLinkList != null && message.NodeLinkList.length)
                for (let i = 0; i < message.NodeLinkList.length; ++i)
                    $root.protoManage.NodeLink.encode(message.NodeLinkList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeOnline message, length delimited. Does not implicitly {@link protoManage.ReqNodeOnline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {protoManage.IReqNodeOnline} message ReqNodeOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeOnline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeOnline message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeOnline} ReqNodeOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeOnline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeOnline();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Node = $root.protoManage.Node.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.NodeLinkList && message.NodeLinkList.length))
                        message.NodeLinkList = [];
                    message.NodeLinkList.push($root.protoManage.NodeLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeOnline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeOnline} ReqNodeOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeOnline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeOnline message.
         * @function verify
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeOnline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Node != null && message.hasOwnProperty("Node")) {
                let error = $root.protoManage.Node.verify(message.Node);
                if (error)
                    return "Node." + error;
            }
            if (message.NodeLinkList != null && message.hasOwnProperty("NodeLinkList")) {
                if (!Array.isArray(message.NodeLinkList))
                    return "NodeLinkList: array expected";
                for (let i = 0; i < message.NodeLinkList.length; ++i) {
                    let error = $root.protoManage.NodeLink.verify(message.NodeLinkList[i]);
                    if (error)
                        return "NodeLinkList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReqNodeOnline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeOnline} ReqNodeOnline
         */
        ReqNodeOnline.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeOnline)
                return object;
            let message = new $root.protoManage.ReqNodeOnline();
            if (object.Node != null) {
                if (typeof object.Node !== "object")
                    throw TypeError(".protoManage.ReqNodeOnline.Node: object expected");
                message.Node = $root.protoManage.Node.fromObject(object.Node);
            }
            if (object.NodeLinkList) {
                if (!Array.isArray(object.NodeLinkList))
                    throw TypeError(".protoManage.ReqNodeOnline.NodeLinkList: array expected");
                message.NodeLinkList = [];
                for (let i = 0; i < object.NodeLinkList.length; ++i) {
                    if (typeof object.NodeLinkList[i] !== "object")
                        throw TypeError(".protoManage.ReqNodeOnline.NodeLinkList: object expected");
                    message.NodeLinkList[i] = $root.protoManage.NodeLink.fromObject(object.NodeLinkList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeOnline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeOnline
         * @static
         * @param {protoManage.ReqNodeOnline} message ReqNodeOnline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeOnline.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.NodeLinkList = [];
            if (options.defaults)
                object.Node = null;
            if (message.Node != null && message.hasOwnProperty("Node"))
                object.Node = $root.protoManage.Node.toObject(message.Node, options);
            if (message.NodeLinkList && message.NodeLinkList.length) {
                object.NodeLinkList = [];
                for (let j = 0; j < message.NodeLinkList.length; ++j)
                    object.NodeLinkList[j] = $root.protoManage.NodeLink.toObject(message.NodeLinkList[j], options);
            }
            return object;
        };

        /**
         * Converts this ReqNodeOnline to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeOnline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeOnline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeOnline;
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

    protoManage.ReqNodeGroupList = (function() {

        /**
         * Properties of a ReqNodeGroupList.
         * @memberof protoManage
         * @interface IReqNodeGroupList
         * @property {protoManage.IFilter|null} [filter] ReqNodeGroupList filter
         */

        /**
         * Constructs a new ReqNodeGroupList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeGroupList.
         * @implements IReqNodeGroupList
         * @constructor
         * @param {protoManage.IReqNodeGroupList=} [properties] Properties to set
         */
        function ReqNodeGroupList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeGroupList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeGroupList
         * @instance
         */
        ReqNodeGroupList.prototype.filter = null;

        /**
         * Creates a new ReqNodeGroupList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {protoManage.IReqNodeGroupList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeGroupList} ReqNodeGroupList instance
         */
        ReqNodeGroupList.create = function create(properties) {
            return new ReqNodeGroupList(properties);
        };

        /**
         * Encodes the specified ReqNodeGroupList message. Does not implicitly {@link protoManage.ReqNodeGroupList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {protoManage.IReqNodeGroupList} message ReqNodeGroupList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeGroupList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeGroupList message, length delimited. Does not implicitly {@link protoManage.ReqNodeGroupList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {protoManage.IReqNodeGroupList} message ReqNodeGroupList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeGroupList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeGroupList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeGroupList} ReqNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeGroupList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeGroupList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeGroupList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeGroupList} ReqNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeGroupList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeGroupList message.
         * @function verify
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeGroupList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeGroupList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeGroupList} ReqNodeGroupList
         */
        ReqNodeGroupList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeGroupList)
                return object;
            let message = new $root.protoManage.ReqNodeGroupList();
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeGroupList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeGroupList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeGroupList
         * @static
         * @param {protoManage.ReqNodeGroupList} message ReqNodeGroupList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeGroupList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
            return object;
        };

        /**
         * Converts this ReqNodeGroupList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeGroupList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeGroupList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeGroupList;
    })();

    protoManage.AnsNodeGroupList = (function() {

        /**
         * Properties of an AnsNodeGroupList.
         * @memberof protoManage
         * @interface IAnsNodeGroupList
         * @property {number|null} [Length] AnsNodeGroupList Length
         * @property {Array.<protoManage.INodeGroup>|null} [NodeGroupList] AnsNodeGroupList NodeGroupList
         * @property {Array.<protoManage.IStateCount>|null} [NodeStateCountList] AnsNodeGroupList NodeStateCountList
         */

        /**
         * Constructs a new AnsNodeGroupList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeGroupList.
         * @implements IAnsNodeGroupList
         * @constructor
         * @param {protoManage.IAnsNodeGroupList=} [properties] Properties to set
         */
        function AnsNodeGroupList(properties) {
            this.NodeGroupList = [];
            this.NodeStateCountList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeGroupList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeGroupList
         * @instance
         */
        AnsNodeGroupList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeGroupList NodeGroupList.
         * @member {Array.<protoManage.INodeGroup>} NodeGroupList
         * @memberof protoManage.AnsNodeGroupList
         * @instance
         */
        AnsNodeGroupList.prototype.NodeGroupList = $util.emptyArray;

        /**
         * AnsNodeGroupList NodeStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeStateCountList
         * @memberof protoManage.AnsNodeGroupList
         * @instance
         */
        AnsNodeGroupList.prototype.NodeStateCountList = $util.emptyArray;

        /**
         * Creates a new AnsNodeGroupList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {protoManage.IAnsNodeGroupList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeGroupList} AnsNodeGroupList instance
         */
        AnsNodeGroupList.create = function create(properties) {
            return new AnsNodeGroupList(properties);
        };

        /**
         * Encodes the specified AnsNodeGroupList message. Does not implicitly {@link protoManage.AnsNodeGroupList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {protoManage.IAnsNodeGroupList} message AnsNodeGroupList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeGroupList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeStateCountList != null && message.NodeStateCountList.length)
                for (let i = 0; i < message.NodeStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeStateCountList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.NodeGroupList != null && message.NodeGroupList.length)
                for (let i = 0; i < message.NodeGroupList.length; ++i)
                    $root.protoManage.NodeGroup.encode(message.NodeGroupList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeGroupList message, length delimited. Does not implicitly {@link protoManage.AnsNodeGroupList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {protoManage.IAnsNodeGroupList} message AnsNodeGroupList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeGroupList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeGroupList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeGroupList} AnsNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeGroupList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeGroupList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 3:
                    if (!(message.NodeGroupList && message.NodeGroupList.length))
                        message.NodeGroupList = [];
                    message.NodeGroupList.push($root.protoManage.NodeGroup.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.NodeStateCountList && message.NodeStateCountList.length))
                        message.NodeStateCountList = [];
                    message.NodeStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeGroupList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeGroupList} AnsNodeGroupList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeGroupList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeGroupList message.
         * @function verify
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeGroupList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeGroupList != null && message.hasOwnProperty("NodeGroupList")) {
                if (!Array.isArray(message.NodeGroupList))
                    return "NodeGroupList: array expected";
                for (let i = 0; i < message.NodeGroupList.length; ++i) {
                    let error = $root.protoManage.NodeGroup.verify(message.NodeGroupList[i]);
                    if (error)
                        return "NodeGroupList." + error;
                }
            }
            if (message.NodeStateCountList != null && message.hasOwnProperty("NodeStateCountList")) {
                if (!Array.isArray(message.NodeStateCountList))
                    return "NodeStateCountList: array expected";
                for (let i = 0; i < message.NodeStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeStateCountList[i]);
                    if (error)
                        return "NodeStateCountList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeGroupList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeGroupList} AnsNodeGroupList
         */
        AnsNodeGroupList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeGroupList)
                return object;
            let message = new $root.protoManage.AnsNodeGroupList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeGroupList) {
                if (!Array.isArray(object.NodeGroupList))
                    throw TypeError(".protoManage.AnsNodeGroupList.NodeGroupList: array expected");
                message.NodeGroupList = [];
                for (let i = 0; i < object.NodeGroupList.length; ++i) {
                    if (typeof object.NodeGroupList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeGroupList.NodeGroupList: object expected");
                    message.NodeGroupList[i] = $root.protoManage.NodeGroup.fromObject(object.NodeGroupList[i]);
                }
            }
            if (object.NodeStateCountList) {
                if (!Array.isArray(object.NodeStateCountList))
                    throw TypeError(".protoManage.AnsNodeGroupList.NodeStateCountList: array expected");
                message.NodeStateCountList = [];
                for (let i = 0; i < object.NodeStateCountList.length; ++i) {
                    if (typeof object.NodeStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeGroupList.NodeStateCountList: object expected");
                    message.NodeStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeStateCountList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeGroupList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeGroupList
         * @static
         * @param {protoManage.AnsNodeGroupList} message AnsNodeGroupList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeGroupList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.NodeStateCountList = [];
                object.NodeGroupList = [];
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
            if (message.NodeStateCountList && message.NodeStateCountList.length) {
                object.NodeStateCountList = [];
                for (let j = 0; j < message.NodeStateCountList.length; ++j)
                    object.NodeStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeStateCountList[j], options);
            }
            if (message.NodeGroupList && message.NodeGroupList.length) {
                object.NodeGroupList = [];
                for (let j = 0; j < message.NodeGroupList.length; ++j)
                    object.NodeGroupList[j] = $root.protoManage.NodeGroup.toObject(message.NodeGroupList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeGroupList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeGroupList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeGroupList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeGroupList;
    })();

    protoManage.ReqNodeTypeList = (function() {

        /**
         * Properties of a ReqNodeTypeList.
         * @memberof protoManage
         * @interface IReqNodeTypeList
         * @property {protoManage.IFilter|null} [filter] ReqNodeTypeList filter
         */

        /**
         * Constructs a new ReqNodeTypeList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeTypeList.
         * @implements IReqNodeTypeList
         * @constructor
         * @param {protoManage.IReqNodeTypeList=} [properties] Properties to set
         */
        function ReqNodeTypeList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeTypeList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeTypeList
         * @instance
         */
        ReqNodeTypeList.prototype.filter = null;

        /**
         * Creates a new ReqNodeTypeList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {protoManage.IReqNodeTypeList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeTypeList} ReqNodeTypeList instance
         */
        ReqNodeTypeList.create = function create(properties) {
            return new ReqNodeTypeList(properties);
        };

        /**
         * Encodes the specified ReqNodeTypeList message. Does not implicitly {@link protoManage.ReqNodeTypeList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {protoManage.IReqNodeTypeList} message ReqNodeTypeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeTypeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeTypeList message, length delimited. Does not implicitly {@link protoManage.ReqNodeTypeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {protoManage.IReqNodeTypeList} message ReqNodeTypeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeTypeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeTypeList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeTypeList} ReqNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeTypeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeTypeList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeTypeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeTypeList} ReqNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeTypeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeTypeList message.
         * @function verify
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeTypeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeTypeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeTypeList} ReqNodeTypeList
         */
        ReqNodeTypeList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeTypeList)
                return object;
            let message = new $root.protoManage.ReqNodeTypeList();
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeTypeList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeTypeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeTypeList
         * @static
         * @param {protoManage.ReqNodeTypeList} message ReqNodeTypeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeTypeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
            return object;
        };

        /**
         * Converts this ReqNodeTypeList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeTypeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeTypeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeTypeList;
    })();

    protoManage.AnsNodeTypeList = (function() {

        /**
         * Properties of an AnsNodeTypeList.
         * @memberof protoManage
         * @interface IAnsNodeTypeList
         * @property {number|null} [Length] AnsNodeTypeList Length
         * @property {Array.<protoManage.INodeType>|null} [NodeTypeList] AnsNodeTypeList NodeTypeList
         * @property {Array.<protoManage.IStateCount>|null} [NodeStateCountList] AnsNodeTypeList NodeStateCountList
         */

        /**
         * Constructs a new AnsNodeTypeList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeTypeList.
         * @implements IAnsNodeTypeList
         * @constructor
         * @param {protoManage.IAnsNodeTypeList=} [properties] Properties to set
         */
        function AnsNodeTypeList(properties) {
            this.NodeTypeList = [];
            this.NodeStateCountList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeTypeList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeTypeList
         * @instance
         */
        AnsNodeTypeList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeTypeList NodeTypeList.
         * @member {Array.<protoManage.INodeType>} NodeTypeList
         * @memberof protoManage.AnsNodeTypeList
         * @instance
         */
        AnsNodeTypeList.prototype.NodeTypeList = $util.emptyArray;

        /**
         * AnsNodeTypeList NodeStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeStateCountList
         * @memberof protoManage.AnsNodeTypeList
         * @instance
         */
        AnsNodeTypeList.prototype.NodeStateCountList = $util.emptyArray;

        /**
         * Creates a new AnsNodeTypeList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {protoManage.IAnsNodeTypeList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeTypeList} AnsNodeTypeList instance
         */
        AnsNodeTypeList.create = function create(properties) {
            return new AnsNodeTypeList(properties);
        };

        /**
         * Encodes the specified AnsNodeTypeList message. Does not implicitly {@link protoManage.AnsNodeTypeList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {protoManage.IAnsNodeTypeList} message AnsNodeTypeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeTypeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeTypeList != null && message.NodeTypeList.length)
                for (let i = 0; i < message.NodeTypeList.length; ++i)
                    $root.protoManage.NodeType.encode(message.NodeTypeList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.NodeStateCountList != null && message.NodeStateCountList.length)
                for (let i = 0; i < message.NodeStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeStateCountList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeTypeList message, length delimited. Does not implicitly {@link protoManage.AnsNodeTypeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {protoManage.IAnsNodeTypeList} message AnsNodeTypeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeTypeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeTypeList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeTypeList} AnsNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeTypeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeTypeList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeTypeList && message.NodeTypeList.length))
                        message.NodeTypeList = [];
                    message.NodeTypeList.push($root.protoManage.NodeType.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.NodeStateCountList && message.NodeStateCountList.length))
                        message.NodeStateCountList = [];
                    message.NodeStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnsNodeTypeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeTypeList} AnsNodeTypeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeTypeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeTypeList message.
         * @function verify
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeTypeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeTypeList != null && message.hasOwnProperty("NodeTypeList")) {
                if (!Array.isArray(message.NodeTypeList))
                    return "NodeTypeList: array expected";
                for (let i = 0; i < message.NodeTypeList.length; ++i) {
                    let error = $root.protoManage.NodeType.verify(message.NodeTypeList[i]);
                    if (error)
                        return "NodeTypeList." + error;
                }
            }
            if (message.NodeStateCountList != null && message.hasOwnProperty("NodeStateCountList")) {
                if (!Array.isArray(message.NodeStateCountList))
                    return "NodeStateCountList: array expected";
                for (let i = 0; i < message.NodeStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeStateCountList[i]);
                    if (error)
                        return "NodeStateCountList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnsNodeTypeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeTypeList} AnsNodeTypeList
         */
        AnsNodeTypeList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeTypeList)
                return object;
            let message = new $root.protoManage.AnsNodeTypeList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeTypeList) {
                if (!Array.isArray(object.NodeTypeList))
                    throw TypeError(".protoManage.AnsNodeTypeList.NodeTypeList: array expected");
                message.NodeTypeList = [];
                for (let i = 0; i < object.NodeTypeList.length; ++i) {
                    if (typeof object.NodeTypeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeTypeList.NodeTypeList: object expected");
                    message.NodeTypeList[i] = $root.protoManage.NodeType.fromObject(object.NodeTypeList[i]);
                }
            }
            if (object.NodeStateCountList) {
                if (!Array.isArray(object.NodeStateCountList))
                    throw TypeError(".protoManage.AnsNodeTypeList.NodeStateCountList: array expected");
                message.NodeStateCountList = [];
                for (let i = 0; i < object.NodeStateCountList.length; ++i) {
                    if (typeof object.NodeStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeTypeList.NodeStateCountList: object expected");
                    message.NodeStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeStateCountList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeTypeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeTypeList
         * @static
         * @param {protoManage.AnsNodeTypeList} message AnsNodeTypeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeTypeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.NodeTypeList = [];
                object.NodeStateCountList = [];
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
            if (message.NodeTypeList && message.NodeTypeList.length) {
                object.NodeTypeList = [];
                for (let j = 0; j < message.NodeTypeList.length; ++j)
                    object.NodeTypeList[j] = $root.protoManage.NodeType.toObject(message.NodeTypeList[j], options);
            }
            if (message.NodeStateCountList && message.NodeStateCountList.length) {
                object.NodeStateCountList = [];
                for (let j = 0; j < message.NodeStateCountList.length; ++j)
                    object.NodeStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeStateCountList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeTypeList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeTypeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeTypeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeTypeList;
    })();

    protoManage.ReqNodeList = (function() {

        /**
         * Properties of a ReqNodeList.
         * @memberof protoManage
         * @interface IReqNodeList
         * @property {protoManage.IFilter|null} [filter] ReqNodeList filter
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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeList
         * @instance
         */
        ReqNodeList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {Array.<protoManage.INodeGroup>|null} [NodeGroupList] AnsNodeList NodeGroupList
         * @property {Array.<protoManage.INodeType>|null} [NodeTypeList] AnsNodeList NodeTypeList
         * @property {Array.<protoManage.IStateCount>|null} [NodeLinkSourceStateCountList] AnsNodeList NodeLinkSourceStateCountList
         * @property {Array.<protoManage.IStateCount>|null} [NodeLinkTargetStateCountList] AnsNodeList NodeLinkTargetStateCountList
         * @property {Array.<protoManage.IStateCount>|null} [NodeFuncStateCountList] AnsNodeList NodeFuncStateCountList
         * @property {Array.<protoManage.IStateCount>|null} [NodeReportStateCountList] AnsNodeList NodeReportStateCountList
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
            this.NodeGroupList = [];
            this.NodeTypeList = [];
            this.NodeLinkSourceStateCountList = [];
            this.NodeLinkTargetStateCountList = [];
            this.NodeFuncStateCountList = [];
            this.NodeReportStateCountList = [];
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
         * AnsNodeList NodeGroupList.
         * @member {Array.<protoManage.INodeGroup>} NodeGroupList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeGroupList = $util.emptyArray;

        /**
         * AnsNodeList NodeTypeList.
         * @member {Array.<protoManage.INodeType>} NodeTypeList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeTypeList = $util.emptyArray;

        /**
         * AnsNodeList NodeLinkSourceStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeLinkSourceStateCountList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeLinkSourceStateCountList = $util.emptyArray;

        /**
         * AnsNodeList NodeLinkTargetStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeLinkTargetStateCountList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeLinkTargetStateCountList = $util.emptyArray;

        /**
         * AnsNodeList NodeFuncStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeFuncStateCountList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeFuncStateCountList = $util.emptyArray;

        /**
         * AnsNodeList NodeReportStateCountList.
         * @member {Array.<protoManage.IStateCount>} NodeReportStateCountList
         * @memberof protoManage.AnsNodeList
         * @instance
         */
        AnsNodeList.prototype.NodeReportStateCountList = $util.emptyArray;

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
            if (message.NodeGroupList != null && message.NodeGroupList.length)
                for (let i = 0; i < message.NodeGroupList.length; ++i)
                    $root.protoManage.NodeGroup.encode(message.NodeGroupList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.NodeTypeList != null && message.NodeTypeList.length)
                for (let i = 0; i < message.NodeTypeList.length; ++i)
                    $root.protoManage.NodeType.encode(message.NodeTypeList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.NodeLinkSourceStateCountList != null && message.NodeLinkSourceStateCountList.length)
                for (let i = 0; i < message.NodeLinkSourceStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeLinkSourceStateCountList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.NodeLinkTargetStateCountList != null && message.NodeLinkTargetStateCountList.length)
                for (let i = 0; i < message.NodeLinkTargetStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeLinkTargetStateCountList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.NodeFuncStateCountList != null && message.NodeFuncStateCountList.length)
                for (let i = 0; i < message.NodeFuncStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeFuncStateCountList[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.NodeReportStateCountList != null && message.NodeReportStateCountList.length)
                for (let i = 0; i < message.NodeReportStateCountList.length; ++i)
                    $root.protoManage.StateCount.encode(message.NodeReportStateCountList[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
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
                case 3:
                    if (!(message.NodeGroupList && message.NodeGroupList.length))
                        message.NodeGroupList = [];
                    message.NodeGroupList.push($root.protoManage.NodeGroup.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.NodeTypeList && message.NodeTypeList.length))
                        message.NodeTypeList = [];
                    message.NodeTypeList.push($root.protoManage.NodeType.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.NodeLinkSourceStateCountList && message.NodeLinkSourceStateCountList.length))
                        message.NodeLinkSourceStateCountList = [];
                    message.NodeLinkSourceStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.NodeLinkTargetStateCountList && message.NodeLinkTargetStateCountList.length))
                        message.NodeLinkTargetStateCountList = [];
                    message.NodeLinkTargetStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.NodeFuncStateCountList && message.NodeFuncStateCountList.length))
                        message.NodeFuncStateCountList = [];
                    message.NodeFuncStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.NodeReportStateCountList && message.NodeReportStateCountList.length))
                        message.NodeReportStateCountList = [];
                    message.NodeReportStateCountList.push($root.protoManage.StateCount.decode(reader, reader.uint32()));
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
            if (message.NodeGroupList != null && message.hasOwnProperty("NodeGroupList")) {
                if (!Array.isArray(message.NodeGroupList))
                    return "NodeGroupList: array expected";
                for (let i = 0; i < message.NodeGroupList.length; ++i) {
                    let error = $root.protoManage.NodeGroup.verify(message.NodeGroupList[i]);
                    if (error)
                        return "NodeGroupList." + error;
                }
            }
            if (message.NodeTypeList != null && message.hasOwnProperty("NodeTypeList")) {
                if (!Array.isArray(message.NodeTypeList))
                    return "NodeTypeList: array expected";
                for (let i = 0; i < message.NodeTypeList.length; ++i) {
                    let error = $root.protoManage.NodeType.verify(message.NodeTypeList[i]);
                    if (error)
                        return "NodeTypeList." + error;
                }
            }
            if (message.NodeLinkSourceStateCountList != null && message.hasOwnProperty("NodeLinkSourceStateCountList")) {
                if (!Array.isArray(message.NodeLinkSourceStateCountList))
                    return "NodeLinkSourceStateCountList: array expected";
                for (let i = 0; i < message.NodeLinkSourceStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeLinkSourceStateCountList[i]);
                    if (error)
                        return "NodeLinkSourceStateCountList." + error;
                }
            }
            if (message.NodeLinkTargetStateCountList != null && message.hasOwnProperty("NodeLinkTargetStateCountList")) {
                if (!Array.isArray(message.NodeLinkTargetStateCountList))
                    return "NodeLinkTargetStateCountList: array expected";
                for (let i = 0; i < message.NodeLinkTargetStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeLinkTargetStateCountList[i]);
                    if (error)
                        return "NodeLinkTargetStateCountList." + error;
                }
            }
            if (message.NodeFuncStateCountList != null && message.hasOwnProperty("NodeFuncStateCountList")) {
                if (!Array.isArray(message.NodeFuncStateCountList))
                    return "NodeFuncStateCountList: array expected";
                for (let i = 0; i < message.NodeFuncStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeFuncStateCountList[i]);
                    if (error)
                        return "NodeFuncStateCountList." + error;
                }
            }
            if (message.NodeReportStateCountList != null && message.hasOwnProperty("NodeReportStateCountList")) {
                if (!Array.isArray(message.NodeReportStateCountList))
                    return "NodeReportStateCountList: array expected";
                for (let i = 0; i < message.NodeReportStateCountList.length; ++i) {
                    let error = $root.protoManage.StateCount.verify(message.NodeReportStateCountList[i]);
                    if (error)
                        return "NodeReportStateCountList." + error;
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
            if (object.NodeGroupList) {
                if (!Array.isArray(object.NodeGroupList))
                    throw TypeError(".protoManage.AnsNodeList.NodeGroupList: array expected");
                message.NodeGroupList = [];
                for (let i = 0; i < object.NodeGroupList.length; ++i) {
                    if (typeof object.NodeGroupList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeGroupList: object expected");
                    message.NodeGroupList[i] = $root.protoManage.NodeGroup.fromObject(object.NodeGroupList[i]);
                }
            }
            if (object.NodeTypeList) {
                if (!Array.isArray(object.NodeTypeList))
                    throw TypeError(".protoManage.AnsNodeList.NodeTypeList: array expected");
                message.NodeTypeList = [];
                for (let i = 0; i < object.NodeTypeList.length; ++i) {
                    if (typeof object.NodeTypeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeTypeList: object expected");
                    message.NodeTypeList[i] = $root.protoManage.NodeType.fromObject(object.NodeTypeList[i]);
                }
            }
            if (object.NodeLinkSourceStateCountList) {
                if (!Array.isArray(object.NodeLinkSourceStateCountList))
                    throw TypeError(".protoManage.AnsNodeList.NodeLinkSourceStateCountList: array expected");
                message.NodeLinkSourceStateCountList = [];
                for (let i = 0; i < object.NodeLinkSourceStateCountList.length; ++i) {
                    if (typeof object.NodeLinkSourceStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeLinkSourceStateCountList: object expected");
                    message.NodeLinkSourceStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeLinkSourceStateCountList[i]);
                }
            }
            if (object.NodeLinkTargetStateCountList) {
                if (!Array.isArray(object.NodeLinkTargetStateCountList))
                    throw TypeError(".protoManage.AnsNodeList.NodeLinkTargetStateCountList: array expected");
                message.NodeLinkTargetStateCountList = [];
                for (let i = 0; i < object.NodeLinkTargetStateCountList.length; ++i) {
                    if (typeof object.NodeLinkTargetStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeLinkTargetStateCountList: object expected");
                    message.NodeLinkTargetStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeLinkTargetStateCountList[i]);
                }
            }
            if (object.NodeFuncStateCountList) {
                if (!Array.isArray(object.NodeFuncStateCountList))
                    throw TypeError(".protoManage.AnsNodeList.NodeFuncStateCountList: array expected");
                message.NodeFuncStateCountList = [];
                for (let i = 0; i < object.NodeFuncStateCountList.length; ++i) {
                    if (typeof object.NodeFuncStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeFuncStateCountList: object expected");
                    message.NodeFuncStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeFuncStateCountList[i]);
                }
            }
            if (object.NodeReportStateCountList) {
                if (!Array.isArray(object.NodeReportStateCountList))
                    throw TypeError(".protoManage.AnsNodeList.NodeReportStateCountList: array expected");
                message.NodeReportStateCountList = [];
                for (let i = 0; i < object.NodeReportStateCountList.length; ++i) {
                    if (typeof object.NodeReportStateCountList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeList.NodeReportStateCountList: object expected");
                    message.NodeReportStateCountList[i] = $root.protoManage.StateCount.fromObject(object.NodeReportStateCountList[i]);
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
            if (options.arrays || options.defaults) {
                object.NodeList = [];
                object.NodeGroupList = [];
                object.NodeTypeList = [];
                object.NodeLinkSourceStateCountList = [];
                object.NodeLinkTargetStateCountList = [];
                object.NodeFuncStateCountList = [];
                object.NodeReportStateCountList = [];
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
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
            }
            if (message.NodeGroupList && message.NodeGroupList.length) {
                object.NodeGroupList = [];
                for (let j = 0; j < message.NodeGroupList.length; ++j)
                    object.NodeGroupList[j] = $root.protoManage.NodeGroup.toObject(message.NodeGroupList[j], options);
            }
            if (message.NodeTypeList && message.NodeTypeList.length) {
                object.NodeTypeList = [];
                for (let j = 0; j < message.NodeTypeList.length; ++j)
                    object.NodeTypeList[j] = $root.protoManage.NodeType.toObject(message.NodeTypeList[j], options);
            }
            if (message.NodeLinkSourceStateCountList && message.NodeLinkSourceStateCountList.length) {
                object.NodeLinkSourceStateCountList = [];
                for (let j = 0; j < message.NodeLinkSourceStateCountList.length; ++j)
                    object.NodeLinkSourceStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeLinkSourceStateCountList[j], options);
            }
            if (message.NodeLinkTargetStateCountList && message.NodeLinkTargetStateCountList.length) {
                object.NodeLinkTargetStateCountList = [];
                for (let j = 0; j < message.NodeLinkTargetStateCountList.length; ++j)
                    object.NodeLinkTargetStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeLinkTargetStateCountList[j], options);
            }
            if (message.NodeFuncStateCountList && message.NodeFuncStateCountList.length) {
                object.NodeFuncStateCountList = [];
                for (let j = 0; j < message.NodeFuncStateCountList.length; ++j)
                    object.NodeFuncStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeFuncStateCountList[j], options);
            }
            if (message.NodeReportStateCountList && message.NodeReportStateCountList.length) {
                object.NodeReportStateCountList = [];
                for (let j = 0; j < message.NodeReportStateCountList.length; ++j)
                    object.NodeReportStateCountList[j] = $root.protoManage.StateCount.toObject(message.NodeReportStateCountList[j], options);
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

    protoManage.ReqNodeLinkList = (function() {

        /**
         * Properties of a ReqNodeLinkList.
         * @memberof protoManage
         * @interface IReqNodeLinkList
         * @property {protoManage.IFilter|null} [filter] ReqNodeLinkList filter
         */

        /**
         * Constructs a new ReqNodeLinkList.
         * @memberof protoManage
         * @classdesc Represents a ReqNodeLinkList.
         * @implements IReqNodeLinkList
         * @constructor
         * @param {protoManage.IReqNodeLinkList=} [properties] Properties to set
         */
        function ReqNodeLinkList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeLinkList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeLinkList
         * @instance
         */
        ReqNodeLinkList.prototype.filter = null;

        /**
         * Creates a new ReqNodeLinkList instance using the specified properties.
         * @function create
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {protoManage.IReqNodeLinkList=} [properties] Properties to set
         * @returns {protoManage.ReqNodeLinkList} ReqNodeLinkList instance
         */
        ReqNodeLinkList.create = function create(properties) {
            return new ReqNodeLinkList(properties);
        };

        /**
         * Encodes the specified ReqNodeLinkList message. Does not implicitly {@link protoManage.ReqNodeLinkList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {protoManage.IReqNodeLinkList} message ReqNodeLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeLinkList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqNodeLinkList message, length delimited. Does not implicitly {@link protoManage.ReqNodeLinkList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {protoManage.IReqNodeLinkList} message ReqNodeLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqNodeLinkList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqNodeLinkList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.ReqNodeLinkList} ReqNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeLinkList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.ReqNodeLinkList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqNodeLinkList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.ReqNodeLinkList} ReqNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNodeLinkList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqNodeLinkList message.
         * @function verify
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqNodeLinkList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
            }
            return null;
        };

        /**
         * Creates a ReqNodeLinkList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.ReqNodeLinkList} ReqNodeLinkList
         */
        ReqNodeLinkList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.ReqNodeLinkList)
                return object;
            let message = new $root.protoManage.ReqNodeLinkList();
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeLinkList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqNodeLinkList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.ReqNodeLinkList
         * @static
         * @param {protoManage.ReqNodeLinkList} message ReqNodeLinkList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqNodeLinkList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
            return object;
        };

        /**
         * Converts this ReqNodeLinkList to JSON.
         * @function toJSON
         * @memberof protoManage.ReqNodeLinkList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqNodeLinkList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqNodeLinkList;
    })();

    protoManage.AnsNodeLinkList = (function() {

        /**
         * Properties of an AnsNodeLinkList.
         * @memberof protoManage
         * @interface IAnsNodeLinkList
         * @property {number|null} [Length] AnsNodeLinkList Length
         * @property {Array.<protoManage.INodeLink>|null} [NodeLinkList] AnsNodeLinkList NodeLinkList
         * @property {Array.<protoManage.INode>|null} [NodeList] AnsNodeLinkList NodeList
         */

        /**
         * Constructs a new AnsNodeLinkList.
         * @memberof protoManage
         * @classdesc Represents an AnsNodeLinkList.
         * @implements IAnsNodeLinkList
         * @constructor
         * @param {protoManage.IAnsNodeLinkList=} [properties] Properties to set
         */
        function AnsNodeLinkList(properties) {
            this.NodeLinkList = [];
            this.NodeList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnsNodeLinkList Length.
         * @member {number} Length
         * @memberof protoManage.AnsNodeLinkList
         * @instance
         */
        AnsNodeLinkList.prototype.Length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AnsNodeLinkList NodeLinkList.
         * @member {Array.<protoManage.INodeLink>} NodeLinkList
         * @memberof protoManage.AnsNodeLinkList
         * @instance
         */
        AnsNodeLinkList.prototype.NodeLinkList = $util.emptyArray;

        /**
         * AnsNodeLinkList NodeList.
         * @member {Array.<protoManage.INode>} NodeList
         * @memberof protoManage.AnsNodeLinkList
         * @instance
         */
        AnsNodeLinkList.prototype.NodeList = $util.emptyArray;

        /**
         * Creates a new AnsNodeLinkList instance using the specified properties.
         * @function create
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {protoManage.IAnsNodeLinkList=} [properties] Properties to set
         * @returns {protoManage.AnsNodeLinkList} AnsNodeLinkList instance
         */
        AnsNodeLinkList.create = function create(properties) {
            return new AnsNodeLinkList(properties);
        };

        /**
         * Encodes the specified AnsNodeLinkList message. Does not implicitly {@link protoManage.AnsNodeLinkList.verify|verify} messages.
         * @function encode
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {protoManage.IAnsNodeLinkList} message AnsNodeLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeLinkList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Length != null && Object.hasOwnProperty.call(message, "Length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Length);
            if (message.NodeLinkList != null && message.NodeLinkList.length)
                for (let i = 0; i < message.NodeLinkList.length; ++i)
                    $root.protoManage.NodeLink.encode(message.NodeLinkList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.NodeList != null && message.NodeList.length)
                for (let i = 0; i < message.NodeList.length; ++i)
                    $root.protoManage.Node.encode(message.NodeList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnsNodeLinkList message, length delimited. Does not implicitly {@link protoManage.AnsNodeLinkList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {protoManage.IAnsNodeLinkList} message AnsNodeLinkList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnsNodeLinkList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnsNodeLinkList message from the specified reader or buffer.
         * @function decode
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoManage.AnsNodeLinkList} AnsNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeLinkList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoManage.AnsNodeLinkList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Length = reader.int64();
                    break;
                case 2:
                    if (!(message.NodeLinkList && message.NodeLinkList.length))
                        message.NodeLinkList = [];
                    message.NodeLinkList.push($root.protoManage.NodeLink.decode(reader, reader.uint32()));
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
         * Decodes an AnsNodeLinkList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoManage.AnsNodeLinkList} AnsNodeLinkList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnsNodeLinkList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnsNodeLinkList message.
         * @function verify
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnsNodeLinkList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Length != null && message.hasOwnProperty("Length"))
                if (!$util.isInteger(message.Length) && !(message.Length && $util.isInteger(message.Length.low) && $util.isInteger(message.Length.high)))
                    return "Length: integer|Long expected";
            if (message.NodeLinkList != null && message.hasOwnProperty("NodeLinkList")) {
                if (!Array.isArray(message.NodeLinkList))
                    return "NodeLinkList: array expected";
                for (let i = 0; i < message.NodeLinkList.length; ++i) {
                    let error = $root.protoManage.NodeLink.verify(message.NodeLinkList[i]);
                    if (error)
                        return "NodeLinkList." + error;
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
         * Creates an AnsNodeLinkList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoManage.AnsNodeLinkList} AnsNodeLinkList
         */
        AnsNodeLinkList.fromObject = function fromObject(object) {
            if (object instanceof $root.protoManage.AnsNodeLinkList)
                return object;
            let message = new $root.protoManage.AnsNodeLinkList();
            if (object.Length != null)
                if ($util.Long)
                    (message.Length = $util.Long.fromValue(object.Length)).unsigned = false;
                else if (typeof object.Length === "string")
                    message.Length = parseInt(object.Length, 10);
                else if (typeof object.Length === "number")
                    message.Length = object.Length;
                else if (typeof object.Length === "object")
                    message.Length = new $util.LongBits(object.Length.low >>> 0, object.Length.high >>> 0).toNumber();
            if (object.NodeLinkList) {
                if (!Array.isArray(object.NodeLinkList))
                    throw TypeError(".protoManage.AnsNodeLinkList.NodeLinkList: array expected");
                message.NodeLinkList = [];
                for (let i = 0; i < object.NodeLinkList.length; ++i) {
                    if (typeof object.NodeLinkList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeLinkList.NodeLinkList: object expected");
                    message.NodeLinkList[i] = $root.protoManage.NodeLink.fromObject(object.NodeLinkList[i]);
                }
            }
            if (object.NodeList) {
                if (!Array.isArray(object.NodeList))
                    throw TypeError(".protoManage.AnsNodeLinkList.NodeList: array expected");
                message.NodeList = [];
                for (let i = 0; i < object.NodeList.length; ++i) {
                    if (typeof object.NodeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeLinkList.NodeList: object expected");
                    message.NodeList[i] = $root.protoManage.Node.fromObject(object.NodeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnsNodeLinkList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoManage.AnsNodeLinkList
         * @static
         * @param {protoManage.AnsNodeLinkList} message AnsNodeLinkList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnsNodeLinkList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.NodeLinkList = [];
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
            if (message.NodeLinkList && message.NodeLinkList.length) {
                object.NodeLinkList = [];
                for (let j = 0; j < message.NodeLinkList.length; ++j)
                    object.NodeLinkList[j] = $root.protoManage.NodeLink.toObject(message.NodeLinkList[j], options);
            }
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
            }
            return object;
        };

        /**
         * Converts this AnsNodeLinkList to JSON.
         * @function toJSON
         * @memberof protoManage.AnsNodeLinkList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnsNodeLinkList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnsNodeLinkList;
    })();

    protoManage.ReqNodeFuncList = (function() {

        /**
         * Properties of a ReqNodeFuncList.
         * @memberof protoManage
         * @interface IReqNodeFuncList
         * @property {protoManage.IFilter|null} [filter] ReqNodeFuncList filter
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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeFuncList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeFuncList
         * @instance
         */
        ReqNodeFuncList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeFuncList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {Array.<protoManage.INodeFuncCall>|null} [NodeFuncCallList] AnsNodeFuncList NodeFuncCallList
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
            this.NodeFuncCallList = [];
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
         * AnsNodeFuncList NodeFuncCallList.
         * @member {Array.<protoManage.INodeFuncCall>} NodeFuncCallList
         * @memberof protoManage.AnsNodeFuncList
         * @instance
         */
        AnsNodeFuncList.prototype.NodeFuncCallList = $util.emptyArray;

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
            if (message.NodeFuncCallList != null && message.NodeFuncCallList.length)
                for (let i = 0; i < message.NodeFuncCallList.length; ++i)
                    $root.protoManage.NodeFuncCall.encode(message.NodeFuncCallList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                case 4:
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
            if (object.NodeFuncCallList) {
                if (!Array.isArray(object.NodeFuncCallList))
                    throw TypeError(".protoManage.AnsNodeFuncList.NodeFuncCallList: array expected");
                message.NodeFuncCallList = [];
                for (let i = 0; i < object.NodeFuncCallList.length; ++i) {
                    if (typeof object.NodeFuncCallList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeFuncList.NodeFuncCallList: object expected");
                    message.NodeFuncCallList[i] = $root.protoManage.NodeFuncCall.fromObject(object.NodeFuncCallList[i]);
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
                object.NodeFuncCallList = [];
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
            if (message.NodeFuncCallList && message.NodeFuncCallList.length) {
                object.NodeFuncCallList = [];
                for (let j = 0; j < message.NodeFuncCallList.length; ++j)
                    object.NodeFuncCallList[j] = $root.protoManage.NodeFuncCall.toObject(message.NodeFuncCallList[j], options);
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
         * @property {protoManage.IFilter|null} [filter] ReqNodeReportList filter
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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeReportList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeReportList
         * @instance
         */
        ReqNodeReportList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeReportList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {Array.<protoManage.INodeReportVal>|null} [NodeReportValList] AnsNodeReportList NodeReportValList
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
            this.NodeReportValList = [];
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
         * AnsNodeReportList NodeReportValList.
         * @member {Array.<protoManage.INodeReportVal>} NodeReportValList
         * @memberof protoManage.AnsNodeReportList
         * @instance
         */
        AnsNodeReportList.prototype.NodeReportValList = $util.emptyArray;

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
            if (message.NodeReportValList != null && message.NodeReportValList.length)
                for (let i = 0; i < message.NodeReportValList.length; ++i)
                    $root.protoManage.NodeReportVal.encode(message.NodeReportValList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                case 4:
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
            if (object.NodeReportValList) {
                if (!Array.isArray(object.NodeReportValList))
                    throw TypeError(".protoManage.AnsNodeReportList.NodeReportValList: array expected");
                message.NodeReportValList = [];
                for (let i = 0; i < object.NodeReportValList.length; ++i) {
                    if (typeof object.NodeReportValList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeReportList.NodeReportValList: object expected");
                    message.NodeReportValList[i] = $root.protoManage.NodeReportVal.fromObject(object.NodeReportValList[i]);
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
                object.NodeReportValList = [];
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
            if (message.NodeReportValList && message.NodeReportValList.length) {
                object.NodeReportValList = [];
                for (let j = 0; j < message.NodeReportValList.length; ++j)
                    object.NodeReportValList[j] = $root.protoManage.NodeReportVal.toObject(message.NodeReportValList[j], options);
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
            if (options.defaults)
                object.NodeFuncCall = null;
            if (message.NodeFuncCall != null && message.hasOwnProperty("NodeFuncCall"))
                object.NodeFuncCall = $root.protoManage.NodeFuncCall.toObject(message.NodeFuncCall, options);
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
         * @property {protoManage.IFilter|null} [filter] ReqNodeFuncCallList filter
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
         * ReqNodeFuncCallList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeFuncCallList
         * @instance
         */
        ReqNodeFuncCallList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeFuncCallList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {protoManage.IFilter|null} [filter] ReqNodeReportValList filter
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
         * ReqNodeReportValList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeReportValList
         * @instance
         */
        ReqNodeReportValList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeReportValList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {protoManage.IFilter|null} [filter] ReqNodeNotifyList filter
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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqNodeNotifyList filter.
         * @member {protoManage.IFilter|null|undefined} filter
         * @memberof protoManage.ReqNodeNotifyList
         * @instance
         */
        ReqNodeNotifyList.prototype.filter = null;

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
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.protoManage.Filter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.filter = $root.protoManage.Filter.decode(reader, reader.uint32());
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
            if (message.filter != null && message.hasOwnProperty("filter")) {
                let error = $root.protoManage.Filter.verify(message.filter);
                if (error)
                    return "filter." + error;
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
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".protoManage.ReqNodeNotifyList.filter: object expected");
                message.filter = $root.protoManage.Filter.fromObject(object.filter);
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
            if (options.defaults)
                object.filter = null;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = $root.protoManage.Filter.toObject(message.filter, options);
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
         * @property {Array.<protoManage.INode>|null} [NodeList] AnsNodeNotifyList NodeList
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
            this.NodeList = [];
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
         * AnsNodeNotifyList NodeList.
         * @member {Array.<protoManage.INode>} NodeList
         * @memberof protoManage.AnsNodeNotifyList
         * @instance
         */
        AnsNodeNotifyList.prototype.NodeList = $util.emptyArray;

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
            if (message.NodeList != null && message.NodeList.length)
                for (let i = 0; i < message.NodeList.length; ++i)
                    $root.protoManage.Node.encode(message.NodeList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
            if (object.NodeList) {
                if (!Array.isArray(object.NodeList))
                    throw TypeError(".protoManage.AnsNodeNotifyList.NodeList: array expected");
                message.NodeList = [];
                for (let i = 0; i < object.NodeList.length; ++i) {
                    if (typeof object.NodeList[i] !== "object")
                        throw TypeError(".protoManage.AnsNodeNotifyList.NodeList: object expected");
                    message.NodeList[i] = $root.protoManage.Node.fromObject(object.NodeList[i]);
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
            if (options.arrays || options.defaults) {
                object.NodeNotifyList = [];
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
            if (message.NodeNotifyList && message.NodeNotifyList.length) {
                object.NodeNotifyList = [];
                for (let j = 0; j < message.NodeNotifyList.length; ++j)
                    object.NodeNotifyList[j] = $root.protoManage.NodeNotify.toObject(message.NodeNotifyList[j], options);
            }
            if (message.NodeList && message.NodeList.length) {
                object.NodeList = [];
                for (let j = 0; j < message.NodeList.length; ++j)
                    object.NodeList[j] = $root.protoManage.Node.toObject(message.NodeList[j], options);
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
