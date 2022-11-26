/**
 * 组件参数，如宽，高，id，语言等环境参数
 */
import {parseQuery} from "../router/query";

export class WidgetParams {
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
    static readonly PARAMS = [
        WidgetParams.PARAM_ID,
        WidgetParams.PARAM_W,
        WidgetParams.PARAM_H,
        WidgetParams.PARAM_X,
        WidgetParams.PARAM_Y,
        WidgetParams.PARAM_LANG,
        WidgetParams.PARAM_THEME,
        WidgetParams.PARAM_MODE,
        WidgetParams.PARAM_WIDTH,
        WidgetParams.PARAM_HEIGHT,
        WidgetParams.PARAM_NAME,
        WidgetParams.PARAM_TITLE,
        WidgetParams.PARAM_PREVIEW,
    ];
    //组件id
    id?: string;
    //网格宽度，1就代表宽度占用1格
    w?: number;
    //宽度,单位px
    width?: number;
    //宽度,单位px
    height?: number;
    //网格高度，2就代表高度占用2格
    h?: number;
    x?: number;
    y?: number;
    //是否是预览模式，添加组件时，预览状态
    preview?: boolean;
    //语言环境：zh,en,jp...
    lang?: string;
    //主题：浅色，深色
    theme?: ThemeMode;
    //
    mode?: WidgetHostMode;
    //系统设置的组件圆角半径
    radius?: number;
    //组件名
    name?: string;
    title?: string;

    /**
     * 将组件参数转为url参数
     * @param object
     * @return URLSearchParams  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156
     */
    toUrlParams(): URLSearchParams {
        const urlParams = new URLSearchParams();
        const ownPropertyNames = Object.getOwnPropertyNames(this);
        for (let ownPropertyName of ownPropertyNames) {
            type ObjectKey = keyof typeof this;
            const key = ownPropertyName as ObjectKey;
            const value = this[key];
            if (value) {
                urlParams.append(WidgetParams.PARAM_PREFIX + ownPropertyName, value.toString())
            }
        }
        return urlParams
    }

    getPersistKey(): string {
        return `${this.name}-${this.id}`;
    }

    /**
     * 从当前地址解析组件参数：
     * http://localhost:8080/#/widget/config/labor_progress?w_w=2&w_h=2&w_width=156&w_height=156
     * =>
     *  {w:2,h:2,id:21,width:156,height:156}
     */
    static fromCurrentLocation(): WidgetParams {
        const href = window.location.href;
        let queryString = href.split("?")[1];
        return this.fromObject(parseQuery(queryString));
    }

    private static setValue(widgetEnv: WidgetParams, key: string, value: string) {
        const keyWithoutPrefix = key.replace(this.PARAM_PREFIX, "");
        if (keyWithoutPrefix == WidgetParams.PARAM_ID) {
            widgetEnv.id = value
        } else if (keyWithoutPrefix == WidgetParams.PARAM_X) {
            widgetEnv.x = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_Y) {
            widgetEnv.y = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_H) {
            widgetEnv.h = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_W) {
            widgetEnv.w = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_LANG) {
            widgetEnv.lang = value
        } else if (keyWithoutPrefix == WidgetParams.PARAM_THEME) {
            widgetEnv.theme = value as ThemeMode
        } else if (keyWithoutPrefix == WidgetParams.PARAM_MODE) {
            widgetEnv.mode = parseInt(value) as WidgetHostMode
        } else if (keyWithoutPrefix == WidgetParams.PARAM_RADIUS) {
            widgetEnv.radius = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_WIDTH) {
            widgetEnv.width = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_HEIGHT) {
            widgetEnv.height = parseInt(value)
        } else if (keyWithoutPrefix == WidgetParams.PARAM_NAME) {
            widgetEnv.name = value
        } else if (keyWithoutPrefix == WidgetParams.PARAM_TITLE) {
            widgetEnv.title = value
        } else if (keyWithoutPrefix == WidgetParams.PARAM_PREVIEW) {
            widgetEnv.preview = (value === 'true')
        }
    }

    /**
     * 从对象键值对中初始化组件参数
     * {w_w:2,w_h:2,w_id:21,w_width:156,w_height:156}=>
     *  {w:2,h:2,id:21,width:156,height:156}
     * @param object
     */
    static fromObject(object: any): WidgetParams {
        const widgetEnv = new WidgetParams();
        const ownPropertyNames = Object.getOwnPropertyNames(object);
        for (let ownPropertyName of ownPropertyNames) {
            type ObjectKey = keyof typeof this;
            const key = ownPropertyName as ObjectKey;
            const value = object[key];
            this.setValue(widgetEnv, key, value);
        }
        return widgetEnv;
    }
}

export enum ThemeMode {
    AUTO = "auto",
    LIGHT = "LIGHT",
    DARK = "DARK"
}

export enum WidgetHostMode {
    DEFAULT,
    OVERLAP,
}
