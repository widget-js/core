export var WebSocketEventType;
(function (WebSocketEventType) {
    WebSocketEventType["RESISTER_WIDGETS"] = "ws::fun.zujian.core.resister_widgets";
})(WebSocketEventType || (WebSocketEventType = {}));
export class WebSocketEvent {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
