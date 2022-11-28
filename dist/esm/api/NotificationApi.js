import { Notification } from "../model/Notification";
import { Channel } from "./Channel";
import { ElectronUtils } from "../utils/ElectronUtils";
export class NotificationApi {
    static async call(duration = 5000) {
        ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
            title: "章鱼哥",
            type: "call",
            message: "下班提醒",
            duration: duration
        }));
    }
    static async advanceCountdown(message, targetTime, title) {
        ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
            title,
            message,
            targetTime,
            type: "advance-countdown"
        }));
    }
    static async countdown(message, targetTime) {
        ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
            message,
            targetTime,
            type: "countdown"
        }));
    }
    static async success(message, duration = 5000) {
        if (ElectronUtils.hasElectronApi()) {
            ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
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
        if (ElectronUtils.hasElectronApi()) {
            ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
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
        if (ElectronUtils.hasElectronApi()) {
            ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
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
        if (ElectronUtils.hasElectronApi()) {
            ElectronUtils.getAPI().invokeIpc(Channel.NOTIFICATION, new Notification({
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
