export declare enum WebSocketEventType {
    RESISTER_WIDGETS = "ws::fun.zujian.core.resister_widgets"
}
export declare class WebSocketEvent {
    type: WebSocketEventType;
    payload: any;
    constructor(type: WebSocketEventType, payload: any);
}
