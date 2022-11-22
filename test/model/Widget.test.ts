import {Widget, WidgetKeyword} from "../../src";

test("stringify", () => {
    const name = "com.wisdom.widgets.clock";
    const title = new Map<string, string>();
    title.set("zh", "时钟")
    const description = new Map<string, string>();
    description.set("zh", "带动画的时钟")
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
        w: 2,
        h: 2,
        minW: 2,
        maxW: 4,
        minH: 2,
        maxH: 4
    })
    console.log(JSON.stringify(ClockWidgetDefine));
})

test("parse", () => {
    const json = "{\"lang\":\"zh\",\"name\":\"com.wisdom.widgets.clock\",\"title\":{\"zh\":\"时钟\"},\"description\":{},\"keywords\":[\"recommend\"],\"w\":2,\"h\":2,\"maxW\":4,\"maxH\":4,\"minW\":2,\"minH\":2,\"url\":\"/widget/clock\",\"configUrl\":\"/widget/config/clock\",\"extraUrl\":{},\"desc\":{\"zh\":\"带动画的时钟\"}}\n";
    let widget = Widget.parse(json);
    console.log(widget);
    console.log(widget.getTitle("zh"));
    console.log(widget.getTitle());
    console.log(widget.getDescription("zh"));
    console.log(widget.getDescription());
})
