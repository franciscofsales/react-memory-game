import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "boardContainer": {
        "display": "flex",
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginTop": 20,
        "marginLeft": "auto",
        "marginRight": "auto",
        "width": "80%",
        "height": "80%",
        "justifyContent": "space-between",
        "alignItems": "space-between",
        "borderRadius": 3,
        "background": "url(../bg.png)",
        "border": "1px solid black",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    }
});