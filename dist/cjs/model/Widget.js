"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetKeyword = exports.Widget = void 0;
const HostedMode_1 = require("./HostedMode");
class Widget {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        /**
         * 组件默认语言
         */
        this.lang = "zh";
        this.name = options.name;
        this.title = options.title;
        this.description = options.description;
        this.keywords = options.keywords;
        this.lang = options.lang;
        this.width = options.width;
        this.height = options.height;
        this.maxWidth = (_a = options.maxWidth) !== null && _a !== void 0 ? _a : options.width;
        this.maxHeight = (_b = options.maxHeight) !== null && _b !== void 0 ? _b : options.height;
        this.minWidth = (_c = options.minWidth) !== null && _c !== void 0 ? _c : options.width;
        this.minHeight = (_d = options.minHeight) !== null && _d !== void 0 ? _d : options.height;
        this.url = options.url;
        this.packageName = options.packageName;
        this.configUrl = options.configUrl;
        this.extraUrl = (_e = options.extraUrl) !== null && _e !== void 0 ? _e : {};
        this.supportHostedMode = (_f = options.supportHostedMode) !== null && _f !== void 0 ? _f : HostedMode_1.HostedMode.NORMAL | HostedMode_1.HostedMode.OVERLAP;
    }
    /**
     * 获取组件标题
     * @param lang 语言环境，不传则获取默认语言
     */
    getTitle(lang) {
        var _a;
        return lang ? (_a = this.title[lang]) !== null && _a !== void 0 ? _a : this.title[this.lang] : this.title[this.lang];
    }
    /**
     * 获取组件标描述
     * @param lang 语言环境，不传则获取默认标题
     */
    getDescription(lang) {
        return lang ? this.description[lang] : this.description[this.lang];
    }
    static parseJSON(json) {
        const object = JSON.parse(json);
        return this.parseObject(object);
    }
    static parseObject(obj) {
        return new Widget({
            ...obj
        });
    }
    /**
     * 是否支持悬浮窗
     */
    isSupportOverlap() {
        return (this.supportHostedMode & HostedMode_1.HostedMode.OVERLAP) > 0;
    }
    /**
     * 是否支持普通模式
     */
    isSupportNormal() {
        return (this.supportHostedMode & HostedMode_1.HostedMode.NORMAL) > 0;
    }
}
exports.Widget = Widget;
var WidgetKeyword;
(function (WidgetKeyword) {
    WidgetKeyword["RECOMMEND"] = "recommend";
    WidgetKeyword["TOOLS"] = "tools";
    WidgetKeyword["EFFICIENCY"] = "efficiency";
    WidgetKeyword["PICTURE"] = "picture";
    WidgetKeyword["LIFE"] = "life";
    WidgetKeyword["SHORTCUT"] = "shortcut";
    WidgetKeyword["COUNTDOWN"] = "countdown";
    WidgetKeyword["TIMER"] = "timer";
    WidgetKeyword["INFO"] = "info";
    WidgetKeyword["DASHBOARD"] = "dashboard";
})(WidgetKeyword = exports.WidgetKeyword || (exports.WidgetKeyword = {}));
