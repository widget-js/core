export type NotificationType =
    "call"
    | "message"
    | "countdown"
    | "advance-countdown"
    | "error"
    | "success"
    | "warning"
    | "info"

export type NotificationOption = {
    type?: NotificationType;
    title?: string;
    message: string;
    targetTime?: string;
    duration?: number;
}

export class Notification {
    type: NotificationType = "message"
    message: string;
    title?: string;
    targetTime?: string;
    duration: number;

    constructor(option: NotificationOption) {
        this.type = option.type ?? "message";
        this.title = option.title;
        this.message = option.message;
        this.targetTime = option.targetTime;
        this.duration = option.duration ?? 5000;
    }

}
