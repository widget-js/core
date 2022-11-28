import { NotificationType } from "../model/Notification";
type NotificationCallback = (type: NotificationType, message: string, duration: number) => void;
export declare class NotificationApi {
    static call(duration?: number): Promise<void>;
    static advanceCountdown(message: string, targetTime: string, title?: string): Promise<void>;
    static countdown(message: string, targetTime: string): Promise<void>;
    static success(message: string, duration?: number): Promise<void>;
    static error(message: string, duration?: number): Promise<void>;
    static warning(message: string, duration?: number): Promise<void>;
    static message(message: string, duration?: number): Promise<void>;
    private static callback;
    static setDebugNotification(callback: NotificationCallback): void;
}
export {};
