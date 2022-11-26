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
BroadcastEvent.TYPE_WIDGET_UPDATED = "BROADCAST:WIDGET_UPDATED";
