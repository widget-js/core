export declare class BroadcastEvent {
    static readonly TYPE_WIDGET_UPDATED = "broadcast::fun.zujian.core.widget_updated";
    static readonly TYPE_APP_CONFIG_UPDATED = "broadcast::fun.zujian.core.app_config_updated";
    static readonly TYPE_THEME_CHANGED = "broadcast::fun.zujian.core.theme_changed";
    type: string;
    /**
     * 发送人，一般为组件名，如：com.example.widgets.countdown
     */
    from: string;
    payload: any;
    constructor(type: string, from: string, payload: any);
}
