/**
 * 组件参数，如宽，高，id，语言等环境参数
 */
export declare class WidgetParams {
    static readonly PARAM_PREFIX = "w_";
    static readonly PARAM_ID = "id";
    static readonly PARAM_W = "w";
    static readonly PARAM_H = "h";
    static readonly PARAM_WIDTH = "width";
    static readonly PARAM_HEIGHT = "height";
    static readonly PARAM_X = "x";
    static readonly PARAM_Y = "y";
    static readonly PARAM_LANG = "lang";
    static readonly PARAM_THEME = "theme";
    static readonly PARAM_MODE = "mode";
    static readonly PARAM_RADIUS = "radius";
    static readonly PARAM_NAME = "name";
    static readonly PARAM_TITLE = "title";
    static readonly PARAM_PREVIEW = "preview";
    static readonly PARAMS: string[];
    id?: string;
    w?: number;
    width?: number;
    height?: number;
    h?: number;
    x?: number;
    y?: number;
    preview?: boolean;
    lang?: string;
    theme?: ThemeMode;
    mode?: WidgetHostMode;
    radius?: number;
    name?: string;
    title?: string;
    /**
     * 将组件参数转为url参数
     * @param object
     * @return URLSearchParams  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156
     */
    toUrlParams(): URLSearchParams;
    getPersistKey(): string;
    /**
     * 从对象键值对中初始化组件参数
     *  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156=>
     *  {w:2,h:2,id:21,width:156,height:156}
     * @param object
     */
    static fromUrlParams(queryString: string): WidgetParams;
    private static setValue;
    /**
     * 从对象键值对中初始化组件参数
     * {w_w:2,w_h:2,w_id:21,w_width:156,w_height:156}=>
     *  {w:2,h:2,id:21,width:156,height:156}
     * @param object
     */
    static fromObject(object: any): WidgetParams;
}
export declare enum ThemeMode {
    AUTO = "auto",
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare enum WidgetHostMode {
    DEFAULT = 0,
    OVERLAP = 1
}
