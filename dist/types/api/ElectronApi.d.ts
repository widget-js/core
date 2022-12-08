export declare class ElectronApi {
    static addIpcListener(key: String, f: Function): Promise<void>;
    static removeIpcListener(key: String): Promise<void>;
}
