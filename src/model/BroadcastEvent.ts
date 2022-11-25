export class BroadcastEvent {
    static TYPE_WIDGET_UPDATED = "BROADCAST:WIDGET_UPDATED"
    //类型
    type: string
    //who send this message
    from: string
    payload: any

    constructor(type: string, from: string, payload: any) {
        this.type = type;
        this.from = from;
        this.payload = payload;
    }
}
