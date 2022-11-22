var BroadcastEvent = /** @class */ (function () {
    function BroadcastEvent(type, from, payload) {
        this.type = type;
        this.from = from;
        this.payload = payload;
    }
    return BroadcastEvent;
}());
export { BroadcastEvent };
