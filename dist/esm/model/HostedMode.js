export var HostedMode;
(function (HostedMode) {
    HostedMode[HostedMode["NORMAL"] = 1] = "NORMAL";
    /**
     * 悬浮窗
     */
    HostedMode[HostedMode["OVERLAP"] = 16] = "OVERLAP";
    HostedMode[HostedMode["WALLPAPER"] = 256] = "WALLPAPER";
    HostedMode[HostedMode["SCREEN"] = 4096] = "SCREEN";
    HostedMode[HostedMode["ALL"] = 4369] = "ALL";
})(HostedMode || (HostedMode = {}));
