/**
 * 组件参数，如宽，高，id，语言等环境参数
 */
var WidgetParams = /** @class */ (function () {
    function WidgetParams() {
    }
    /**
     * 将组件参数转为url参数
     * @param object
     * @return URLSearchParams  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156
     */
    WidgetParams.prototype.toUrlParams = function () {
        var urlParams = new URLSearchParams();
        var ownPropertyNames = Object.getOwnPropertyNames(this);
        for (var _i = 0, ownPropertyNames_1 = ownPropertyNames; _i < ownPropertyNames_1.length; _i++) {
            var ownPropertyName = ownPropertyNames_1[_i];
            var key = ownPropertyName;
            var value = this[key];
            if (value) {
                urlParams.append(WidgetParams.PARAM_PREFIX + ownPropertyName, value.toString());
            }
        }
        return urlParams;
    };
    WidgetParams.prototype.getPersistKey = function () {
        return "".concat(this.name, "-").concat(this.id);
    };
    /**
     * 从对象键值对中初始化组件参数
     *  w_w=2&w_h=2&w_id=21&w_width=156&w_height=156=>
     *  {w:2,h:2,id:21,width:156,height:156}
     * @param object
     */
    WidgetParams.fromUrlParams = function (queryString) {
        var widgetEnv = new WidgetParams();
        var urlParams = new URLSearchParams(queryString);
        for (var key in urlParams.keys) {
            if (!key.startsWith(this.PARAM_PREFIX)) {
                continue;
            }
            this.setValue(widgetEnv, key, urlParams.get(key));
        }
        return widgetEnv;
    };
    WidgetParams.setValue = function (widgetEnv, key, value) {
        var keyWithoutPrefix = key.replace(this.PARAM_PREFIX, "");
        if (keyWithoutPrefix == WidgetParams.PARAM_ID) {
            widgetEnv.id = value;
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_X) {
            widgetEnv.x = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_Y) {
            widgetEnv.y = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_H) {
            widgetEnv.h = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_W) {
            widgetEnv.w = parseInt(value);
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
        else if (keyWithoutPrefix == WidgetParams.PARAM_WIDTH) {
            widgetEnv.width = parseInt(value);
        }
        else if (keyWithoutPrefix == WidgetParams.PARAM_HEIGHT) {
            widgetEnv.height = parseInt(value);
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
    };
    /**
     * 从对象键值对中初始化组件参数
     * {w_w:2,w_h:2,w_id:21,w_width:156,w_height:156}=>
     *  {w:2,h:2,id:21,width:156,height:156}
     * @param object
     */
    WidgetParams.fromObject = function (object) {
        var widgetEnv = new WidgetParams();
        var ownPropertyNames = Object.getOwnPropertyNames(object);
        for (var _i = 0, ownPropertyNames_2 = ownPropertyNames; _i < ownPropertyNames_2.length; _i++) {
            var ownPropertyName = ownPropertyNames_2[_i];
            var key = ownPropertyName;
            var value = object[key];
            this.setValue(widgetEnv, key, value);
        }
        return widgetEnv;
    };
    WidgetParams.PARAM_PREFIX = "w_";
    WidgetParams.PARAM_ID = "id";
    WidgetParams.PARAM_W = "w";
    WidgetParams.PARAM_H = "h";
    WidgetParams.PARAM_WIDTH = "width";
    WidgetParams.PARAM_HEIGHT = "height";
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
    return WidgetParams;
}());
export { WidgetParams };
export var ThemeMode;
(function (ThemeMode) {
    ThemeMode["AUTO"] = "auto";
    ThemeMode["LIGHT"] = "LIGHT";
    ThemeMode["DARK"] = "DARK";
})(ThemeMode || (ThemeMode = {}));
export var WidgetHostMode;
(function (WidgetHostMode) {
    WidgetHostMode[WidgetHostMode["DEFAULT"] = 0] = "DEFAULT";
    WidgetHostMode[WidgetHostMode["OVERLAP"] = 1] = "OVERLAP";
})(WidgetHostMode || (WidgetHostMode = {}));
