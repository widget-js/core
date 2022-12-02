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
        this.width = options.width;
        this.height = options.height;
        this.maxWidth = (_a = options.maxWidth) !== null && _a !== void 0 ? _a : options.width;
        this.maxHeight = (_b = options.maxHeight) !== null && _b !== void 0 ? _b : options.height;
        this.minWidth = (_c = options.minWidth) !== null && _c !== void 0 ? _c : options.width;
        this.minHeight = (_d = options.minHeight) !== null && _d !== void 0 ? _d : options.height;
        this.url = options.url;
        this.configUrl = options.configUrl;
        this.extraUrl = (_e = options.extraUrl) !== null && _e !== void 0 ? _e : {};
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
            configUrl: obj["configUrl"],
            description: obj["description"],
            extraUrl: obj["extraUrl"],
            width: obj["width"],
            keywords: obj["keywords"],
            lang: obj["lang"],
            maxHeight: obj["maxHeight"],
            maxWidth: obj["maxWidth"],
            height: obj["height"],
            minHeight: obj["minHeight"],
            minWidth: obj["minWidth"],
            name: obj["name"],
            title: obj["title"],
            url: obj["url"]
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
