export type NotificationType =
    "call"
    | "message"
    | "countdown"
    | "advance-countdown"
    | "error"
    | "success"
    | "warning"
    | "info"
    | "custom"

export interface NotificationOption {
    type?: NotificationType;
    title?: string;
    message: string;
    targetTime?: string;
    duration?: number;
    icon?: string;
}

export class Notification {
    type: NotificationType = "message"
    message: string;
    title?: string;
    targetTime?: string;
    duration: number;
    icon?: string;

    constructor(option: NotificationOption) {
        this.type = option.type ?? "message";
        this.title = option.title;
        this.message = option.message;
        this.targetTime = option.targetTime;
        this.duration = option.duration ?? 5000;
        this.icon = option.icon;
    }

}
