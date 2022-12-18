import { ElectronUtils } from "../utils/ElectronUtils";
import { Channel } from "./Channel";
export class DialogApi {
    /**
     * 选取单个文件
     * @param extensions 允许的文件后缀格式，如：["txt","docx","gif"]
     */
    static async pickFile(extensions) {
        return await ElectronUtils.getAPI().invoke(Channel.DIALOG, this.PICK_FILE, extensions);
    }
}
DialogApi.PICK_FILE = "pick-file";
