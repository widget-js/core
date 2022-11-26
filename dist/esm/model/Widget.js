export class Widget {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        /**
         * 组件默认语言
         */
        this.lang = "zh";
        this.name = options.name;
        this.title = options.title;
        this.description = options.description;
        this.keywords = options.keywords;
        this.lang = options.lang;
        this.w = options.w;
        this.h = options.h;
        this.maxW = (_a = options.maxW) !== null && _a !== void 0 ? _a : options.w;
        this.maxH = (_b = options.maxH) !== null && _b !== void 0 ? _b : options.h;
        this.minW = (_c = options.minW) !== null && _c !== void 0 ? _c : options.w;
        this.minH = (_d = options.minH) !== null && _d !== void 0 ? _d : options.h;
        this.url = options.url;
        this.configUrl = options.configUrl;
        this.extraUrl = (_e = options.extraUrl) !== null && _e !== void 0 ? _e : new Map();
    }
    /**
     * 获取组件标题
     * @param lang 语言环境，不传则获取默认语言
     */
    getTitle(lang) {
        return lang ? this.title.get(lang) : this.title.get(this.lang);
    }
    /**
     * 获取组件标描述
     * @param lang 语言环境，不传则获取默认标题
     */
    getDescription(lang) {
        return lang ? this.description.get(lang) : this.description.get(this.lang);
    }
    toJSON() {
        return {
            name: this.name,
            title: Object.fromEntries(this.title),
            description: Object.fromEntries(this.description),
            keywords: this.keywords,
            lang: this.lang,
            w: this.w,
            h: this.h,
            maxW: this.maxW,
            maxH: this.maxH,
            minW: this.minW,
            minH: this.minH,
            url: this.url,
            configUrl: this.configUrl,
            extraUrl: Object.fromEntries(this.extraUrl),
        };
    }
    static parse(json) {
        const object = JSON.parse(json);
        return new Widget({
            configUrl: object["configUrl"],
            description: new Map(Object.entries(object["description"])),
            extraUrl: new Map(Object.entries(object["extraUrl"])),
            h: object["h"],
            keywords: object["keywords"],
            lang: object["lang"],
            maxH: object["maxH"],
            maxW: object["maxW"],
            minH: object["minH"],
            minW: object["minW"],
            name: object["name"],
            title: new Map(Object.entries(object["title"])),
            url: object["url"],
            w: object["w"]
        });
    }
}
export var WidgetKeyword;
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
})(WidgetKeyword || (WidgetKeyword = {}));
