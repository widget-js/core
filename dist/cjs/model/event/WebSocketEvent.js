"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketEvent = exports.WebSocketEventType = void 0;
var WebSocketEventType;
(function (WebSocketEventType) {
    WebSocketEventType["RESISTER_WIDGETS"] = "ws::cn.widgetjs.core.resister_widgets";
})(WebSocketEventType = exports.WebSocketEventType || (exports.WebSocketEventType = {}));
class WebSocketEvent {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
exports.WebSocketEvent = WebSocketEvent;
