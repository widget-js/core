type Position = {
    x: number;
    y: number;
};
export declare class BrowserWindowApi {
    static readonly IGNORE_MOUSE_EVENT = "ignore-mouse-event";
    static readonly WINDOW_VISIBILITY = "window-visibility";
    static readonly ALWAYS_ON_TOP = "always-on-top";
    static readonly IS_ALWAYS_ON_TOP = "is-always-on-top";
    static readonly OPEN_URL = "open-url";
    static readonly SET_POSITION = "set-position";
    static readonly GET_POSITION = "get-position";
    static readonly BLUR = "blur";
    static readonly FOCUS = "focus";
    static readonly SET_RESIZABLE = "set-resizable";
    static setIgnoreMouseEvent(ignore: boolean): Promise<void>;
    static setWindowVisibility(show: boolean): Promise<void>;
    static setAlwaysOnTop(alwaysOnTop: boolean): Promise<void>;
    static isAlwaysOnTop(): Promise<boolean>;
    static openUrl(url: string): Promise<void>;
    /**
     * 设置窗口位置
     * @param x
     * @param y
     * @param animation 动画只在mac系统有效
     */
    static setPosition(x: number, y: number, animation: boolean): Promise<void>;
    static getPosition(): Promise<Position>;
    static blur(): Promise<any>;
    static focus(): Promise<any>;
    /**
     * 设置窗口是否可以拉伸
     * @param resizable
     */
    static setResizable(resizable: boolean): Promise<any>;
}
export {};
