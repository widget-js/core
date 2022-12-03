export class BroadcastEvent {
    static readonly TYPE_WIDGET_UPDATED = "broadcast::fun.widget.core.widget_updated";
    static readonly TYPE_APP_CONFIG_UPDATED = "broadcast::fun.widget.core.app_config_updated";
    static readonly TYPE_THEME_CHANGED = "broadcast::fun.widget.core.theme_changed";
    //类型
    type: string
    //who send this message
    /**
     * 发送人，一般为组件名，如：com.example.widgets.countdown
     */
    from: string
    payload: any

    constructor(type: string, from: string, payload: any) {
        this.type = type;
        this.from = from;
        this.payload = payload;
    }
}
