import {Widget, WidgetKeyword} from "../../src";

test("stringify", () => {
    const name = "com.wisdom.widgets.clock";
    const title = {"zh": "时钟"};
    const description = {"zh": "带动画的时钟"};
    const keywords = [WidgetKeyword.RECOMMEND];
    const url = "/widget/clock";
    const configUrl = "/widget/config/clock";
    const ClockWidgetDefine = new Widget({
        name: name,
        title: title,
        description: description,
        keywords: keywords,
        lang: "zh",
        url: url,
        configUrl: configUrl,
        width: 2,
        height: 2,
        minWidth: 2,
        maxWidth: 4,
        minHeight: 2,
        maxHeight: 4
    })
    console.log(JSON.stringify(ClockWidgetDefine));
})
test("stringify-array", () => {
    const name = "com.wisdom.widgets.clock";
    const title = {"zh":"时钟"};
    const description = {"zh":"带动画的时钟"};
    const keywords = [WidgetKeyword.RECOMMEND];
    const url = "/widget/clock";
    const configUrl = "/widget/config/clock";
    const ClockWidgetDefine = new Widget({
        name: name,
        title: title,
        description: description,
        keywords: keywords,
        lang: "zh",
        url: url,
        configUrl: configUrl,
        width: 2,
        height: 2,
        minWidth: 2,
        maxWidth: 4,
        minHeight: 2,
        maxHeight: 4
    })
    console.log(JSON.stringify([ClockWidgetDefine]));
})

test("parse", () => {
    const json = "{\"lang\":\"zh\",\"name\":\"com.wisdom.widgets.clock\",\"title\":{\"zh\":\"时钟\"},\"description\":{},\"keywords\":[\"recommend\"],\"w\":2,\"h\":2,\"maxW\":4,\"maxH\":4,\"minW\":2,\"minH\":2,\"url\":\"/widget/clock\",\"configUrl\":\"/widget/config/clock\",\"extraUrl\":{},\"desc\":{\"zh\":\"带动画的时钟\"}}\n";
    let widget = Widget.parseJSON(json);
    console.log(widget);
    console.log(widget.getTitle("zh"));
    console.log(widget.getTitle());
    console.log(widget.getDescription("zh"));
    console.log(widget.getDescription());
})
