"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastEvent = void 0;
var BroadcastEvent = /** @class */ (function () {
    function BroadcastEvent(type, from, payload) {
        this.type = type;
        this.from = from;
        this.payload = payload;
    }
    BroadcastEvent.TYPE_WIDGET_UPDATED = "BROADCAST:WIDGET_UPDATED";
    return BroadcastEvent;
}());
exports.BroadcastEvent = BroadcastEvent;
