"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationApi = void 0;
const Notification_1 = require("../model/Notification");
const Channel_1 = require("./Channel");
const ElectronUtils_1 = require("../utils/ElectronUtils");
class NotificationApi {
    static async call(duration = 5000) {
        ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
            title: "章鱼哥",
            type: "call",
            message: "下班提醒",
            duration: duration
        }));
    }
    static async advanceCountdown(message, targetTime, title) {
        ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
            title,
            message,
            targetTime,
            type: "advance-countdown"
        }));
    }
    static async countdown(message, targetTime) {
        ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
            message,
            targetTime,
            type: "countdown"
        }));
    }
    static async success(message, duration = 5000) {
        if (ElectronUtils_1.ElectronUtils.hasElectronApi()) {
            ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
                message,
                type: "success",
                duration
            }));
        }
        else {
            this.callback("success", message, duration);
        }
    }
    static async error(message, duration = 5000) {
        if (ElectronUtils_1.ElectronUtils.hasElectronApi()) {
            ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
                message,
                type: "error",
                duration
            }));
        }
        else {
            this.callback("error", message, duration);
        }
    }
    static async warning(message, duration = 5000) {
        if (ElectronUtils_1.ElectronUtils.hasElectronApi()) {
            ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
                message,
                type: "warning",
                duration
            }));
        }
        else {
            this.callback("warning", message, duration);
        }
    }
    static async message(message, duration = 5000) {
        if (ElectronUtils_1.ElectronUtils.hasElectronApi()) {
            ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.NOTIFICATION, new Notification_1.Notification({
                message,
                type: "message",
                duration
            }));
        }
        else {
            this.callback("message", message, duration);
        }
    }
    static setDebugNotification(callback) {
        this.callback = callback;
    }
}
exports.NotificationApi = NotificationApi;
