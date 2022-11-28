"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(option) {
        var _a, _b;
        this.type = "message";
        this.type = (_a = option.type) !== null && _a !== void 0 ? _a : "message";
        this.title = option.title;
        this.message = option.message;
        this.targetTime = option.targetTime;
        this.duration = (_b = option.duration) !== null && _b !== void 0 ? _b : 5000;
    }
}
exports.Notification = Notification;
