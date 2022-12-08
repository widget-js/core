"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastEvent = void 0;
class BroadcastEvent {
    constructor(type, from, payload) {
        this.type = type;
        this.from = from;
        this.payload = payload;
    }
}
exports.BroadcastEvent = BroadcastEvent;
BroadcastEvent.TYPE_WIDGET_UPDATED = "broadcast::fun.zujian.core.widget_updated";
BroadcastEvent.TYPE_APP_CONFIG_UPDATED = "broadcast::fun.zujian.core.app_config_updated";
BroadcastEvent.TYPE_THEME_CHANGED = "broadcast::fun.zujian.core.theme_changed";
