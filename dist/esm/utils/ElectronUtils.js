export class ElectronUtils {
    static hasElectronApi() {
        return Reflect.has(window, "electronAPI");
    }
    /**
     * 获取ElectronAPI
     * windows api
     */
    static getAPI() {
        if (Reflect.has(window, "electronAPI")) {
            //@ts-ignore
            return window.electronAPI;
        }
        else if (Reflect.has(window.parent, "electronAPI")) {
            //@ts-ignore
            return window.parent.electronAPI;
        }
        return null;
    }
}
