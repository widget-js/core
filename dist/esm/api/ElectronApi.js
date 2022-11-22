var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Keys } from "./Keys";
var ElectronApi = /** @class */ (function () {
    function ElectronApi() {
    }
    ElectronApi.openAddWidgetWindow = function () {
        if (this.hasElectronApi()) {
            // @ts-ignore
            window.electronAPI.invokeIpc("openAddWidgetWindow");
        }
    };
    ElectronApi.registerWidgets = function (widgets) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        data = JSON.parse(JSON.stringify(widgets.map(function (item) { return JSON.stringify(item); })));
                        // @ts-ignore
                        return [4 /*yield*/, window.electronAPI.invokeIpc("registerWidgets", data)];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.setConfig = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        // @ts-ignore
                        return [4 /*yield*/, window.electronAPI.invokeIpc("setConfig", { key: key, value: value })];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.sendBroadcastEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        // @ts-ignore
                        return [4 /*yield*/, window.electronAPI.invokeIpc(Keys.BROADCAST_EVENT, JSON.stringify(event))];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.registerBroadcast = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addIpcListener(Keys.BROADCAST_EVENT, function (json) {
                            callback(JSON.parse(json));
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.unregisterBroadcast = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeIpcListener(Keys.BROADCAST_EVENT)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.addIpcListener = function (key, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        // @ts-ignore
                        return [4 /*yield*/, window.electronAPI.addIpcListener(key, f)];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.removeIpcListener = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        // @ts-ignore
                        return [4 /*yield*/, window.electronAPI.removeIpcListener(key)];
                    case 1:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.getConfig = function (key, defaultValue) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElectronApi()) return [3 /*break*/, 2];
                        return [4 /*yield*/, window.electronAPI.invokeIpc("getConfig", key)];
                    case 1:
                        value = _a.sent();
                        if (value === null || value === undefined) {
                            return [2 /*return*/, defaultValue];
                        }
                        if (typeof defaultValue == "boolean") {
                            return [2 /*return*/, value === "true"];
                        }
                        return [2 /*return*/, value];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ElectronApi.hasElectronApi = function () {
        return Reflect.has(window, "electronAPI");
    };
    return ElectronApi;
}());
export { ElectronApi };
