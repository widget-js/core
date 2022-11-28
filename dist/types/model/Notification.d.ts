export type NotificationType = "call" | "message" | "countdown" | "advance-countdown" | "error" | "success" | "warning" | "info";
export type NotificationOption = {
    type?: NotificationType;
    title?: string;
    message: string;
    targetTime?: string;
    duration?: number;
};
export declare class Notification {
    type: NotificationType;
    message: string;
    title?: string;
    targetTime?: string;
    duration: number;
    constructor(option: NotificationOption);
}
