import {WidgetPackage} from "../../src";

test('parseObject', () => {
    const widget = WidgetPackage.parseObject({
        name: "test",
        url: "/widget",
        other: false
    })

    expect(widget.name).toBe("test");
    expect(widget.url).toBe("/widget");
})
