import { BroadcastEvent } from "../model/event/BroadcastEvent";
export declare class BroadcastApi {
    static sendBroadcastEvent(event: BroadcastEvent): Promise<void>;
    static registerBroadcast(callback: (event: BroadcastEvent) => void): Promise<void>;
    static unregisterBroadcast(): Promise<void>;
}
