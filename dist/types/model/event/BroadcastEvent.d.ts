export declare class BroadcastEvent {
    static readonly TYPE_WIDGET_UPDATED = "broadcast::cn.widgetjs.core.widget_updated";
    static readonly TYPE_APP_CONFIG_UPDATED = "broadcast::cn.widgetjs.core.app_config_updated";
    static readonly TYPE_THEME_CHANGED = "broadcast::cn.widgetjs.core.theme_changed";
    type: string;
    /**
     * 发送人，一般为组件名，如：com.example.widgets.countdown
     */
    from: string;
    payload: any;
    constructor(type: string, from: string, payload: any);
}
