export declare class DialogApi {
    static readonly PICK_FILE = "pick-file";
    /**
     * 选取单个文件
     * @param extensions 允许的文件后缀格式，如：["txt","docx","gif"]
     */
    static pickFile(extensions?: string[]): Promise<string | undefined>;
}
