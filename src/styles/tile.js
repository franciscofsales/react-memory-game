import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "tile": {
        "borderRadius": 3,
        "border": "1px solid black",
        "background": "white"
    },
    "backgroundTile": {
        "width": "100%",
        "height": "100%",
        "background": "url(../icon.png) center center",
        "backgroundRepeat": "no-repeat",
        "WebkitBackgroundSize": "contain",
        "MozBackgroundSize": "contain",
        "OBackgroundSize": "contain",
        "backgroundSize": "contain"
    },
    "imgTile": {
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
    }
});