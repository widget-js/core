import {ElectronUtils} from "../utils/ElectronUtils";
import {Channel} from "./Channel";

export class ClipboardApi {
    static readonly GET_SELECTED_TEXT = "get-selected-text"

    /**
     * 选取单个文件
     * @param extensions 允许的文件后缀格式，如：["txt","docx","gif"]
     */
    static async getSelectedText(extensions?: string[]): Promise<string | undefined> {
        return await ElectronUtils.getAPI()?.invoke(Channel.CLIPBOARD, this.GET_SELECTED_TEXT);
    }

}
