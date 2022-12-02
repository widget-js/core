export declare class BrowserWindowApi {
    static readonly IGNORE_MOUSE_EVENT = "ignore-mouse-event";
    static readonly WINDOW_VISIBILITY = "window-visibility";
    static readonly ALWAYS_ON_TOP = "always-on-top";
    static setIgnoreMouseEvent(ignore: boolean): Promise<void>;
    static setWindowVisibility(show: boolean): Promise<void>;
    static setAlwaysOnTop(alwaysOnTop: boolean): Promise<void>;
}
