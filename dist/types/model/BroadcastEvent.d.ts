export declare class BroadcastEvent {
    static TYPE_WIDGET_UPDATED: string;
    type: string;
    from: string;
    payload: any;
    constructor(type: string, from: string, payload: any);
}
