import {Widget} from "../model/Widget"

export class ElectronApi {
    static openAddWidgetWindow() {
        if (this.hasElectronApi()) {
            // @ts-ignore
            window.electronAPI.invokeIpc("openAddWidgetWindow");
        }
    }

    static async registerWidgets(widgets: Widget[]) {
        if (this.hasElectronApi()) {
            const data = JSON.parse(JSON.stringify(widgets.map(item => item.stringify())));
            // @ts-ignore
            await window.electronAPI.invokeIpc("registerWidgets", data);
        }
    }

    static hasElectronApi(): boolean {
        return Reflect.has(window, "electronAPI")
    }
}
