"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeMode = exports.WidgetParams = void 0;
/**
 * 组件参数，如宽，高，id，语言等环境参数
 */
const query_1 = require("../router/query");
const change_case_1 = require("change-case");
class WidgetParams {
    /**
     * 将组件参数转为url参数
     * @param object
     * @return URLSearchParams  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156
     */
    toUrlParams() {
        const urlParams = new URLSearchParams();
        const ownPropertyNames = Object.getOwnPropertyNames(this);
        for (let ownPropertyName of ownPropertyNames) {
            const key = ownPropertyName;
            const value = this[key];
            if (value) {
                urlParams.append(WidgetParams.PARAM_PREFIX + (0, change_case_1.snakeCase)(ownPropertyName), value.toString());
            }
        }
        return urlParams;
    }
    getPersistKey() {
        return `${this.name}-${this.id}`;
    }
    /**
     * 从当前地址解析组件参数：
     * http://localhost:8080/#/widget/config/labor_progress?w_w=2&w_h=2&w_width=156&w_height=156
     * =>
     *  {width:2,height:2,id:21,width_px:156,height_px:156}
     */
    static fromCurrentLocation() {
        const href = window.location.href;
        let queryString = href.split("?")[1];
        return this.fromObject((0, query_1.parseQuery)(queryString));
    }
    static setValue(widgetEnv, key, value) {
        const keyWithoutPrefix = key.replace(this.PARAM_PREFIX, "");
        if (keyWithoutPrefix == WidgetParams.PARAM_ID) {
            widgetEnv.id = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_X) {
            widgetEnv.x = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_Y) {
            widgetEnv.y = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_HEIGHT) {
            widgetEnv.height = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_WIDTH) {
            widgetEnv.width = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_LANG) {
            widgetEnv.lang = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_THEME) {
            widgetEnv.theme = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_MODE) {
            widgetEnv.mode = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_RADIUS) {
            widgetEnv.radius = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_WIDTH_PX) {
            widgetEnv.widthPx = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_HEIGHT_PX) {
            widgetEnv.heightPx = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_NAME) {
            widgetEnv.name = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_TITLE) {
            widgetEnv.title = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_PREVIEW) {
            widgetEnv.preview = (value === 'true');
        }
    }
    /**
     * 从对象键值对中初始化组件参数
     * {w_width:2,w_height:2,w_id:21,w_width_px:156,w_height_px:156}=>
     *  {width:2,height:2,id:21,width_px:156,height_px:156}
     * @param object
     */
    static fromObject(object) {
        const widgetEnv = new WidgetParams();
        const ownPropertyNames = Object.getOwnPropertyNames(object);
        for (let ownPropertyName of ownPropertyNames) {
            const key = ownPropertyName;
            const value = object[key];
            this.setValue(widgetEnv, key, value);
        }
        return widgetEnv;
    }
}
exports.WidgetParams = WidgetParams;
WidgetParams.PARAM_PREFIX = "w_";
WidgetParams.PARAM_ID = "id";
WidgetParams.PARAM_WIDTH = "width";
WidgetParams.PARAM_HEIGHT = "height";
WidgetParams.PARAM_WIDTH_PX = "width_px";
WidgetParams.PARAM_HEIGHT_PX = "height_px";
WidgetParams.PARAM_X = "x";
WidgetParams.PARAM_Y = "y";
WidgetParams.PARAM_LANG = "lang";
WidgetParams.PARAM_THEME = "theme";
WidgetParams.PARAM_MODE = "mode";
WidgetParams.PARAM_RADIUS = "radius";
WidgetParams.PARAM_NAME = "name";
WidgetParams.PARAM_TITLE = "title";
WidgetParams.PARAM_PREVIEW = "preview";
WidgetParams.PARAMS = [
    WidgetParams.PARAM_ID,
    WidgetParams.PARAM_WIDTH,
    WidgetParams.PARAM_HEIGHT,
    WidgetParams.PARAM_X,
    WidgetParams.PARAM_Y,
    WidgetParams.PARAM_LANG,
    WidgetParams.PARAM_THEME,
    WidgetParams.PARAM_MODE,
    WidgetParams.PARAM_WIDTH_PX,
    WidgetParams.PARAM_HEIGHT_PX,
    WidgetParams.PARAM_NAME,
    WidgetParams.PARAM_TITLE,
    WidgetParams.PARAM_PREVIEW,
];
var ThemeMode;
(function (ThemeMode) {
    ThemeMode["AUTO"] = "auto";
    ThemeMode["LIGHT"] = "LIGHT";
    ThemeMode["DARK"] = "DARK";
})(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));
