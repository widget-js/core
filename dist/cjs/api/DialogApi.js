"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogApi = void 0;
const ElectronUtils_1 = require("../utils/ElectronUtils");
const Channel_1 = require("./Channel");
class DialogApi {
    /**
     * 选取单个文件
     * @param extensions 允许的文件后缀格式，如：["txt","docx","gif"]
     */
    static async pickFile(extensions) {
        return await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.DIALOG, this.PICK_FILE, extensions);
    }
}
exports.DialogApi = DialogApi;
DialogApi.PICK_FILE = "pick-file";
