// import { alphaToMorse, morseToAlpha } from "./translation-keys.js";

export const translate = (mode, object, text) => {
    const error = "Invalid characters present, please try again.";

    let charArr = [];

    const everyCheck = (item) => Object.keys(object).includes(item);

    if (mode === "alphaToMorse") {
        charArr = text.toLowerCase().split("");

        if (charArr.every((char) => everyCheck(char))) {
            return charArr
                .map((char) => {
                    for (const [key, value] of Object.entries(object)) {
                        if (key === char) {
                            return value + " ";
                        }
                    }
                })
                .join("");
        } else {
            return error;
        }
    } else {
        charArr = text.split(" ");
        
        if (charArr.every((item) => everyCheck(item))) {
            return charArr
                .map((char) => {
                    for (const [key, value] of Object.entries(object)) {
                        if (key === char) {
                            return value;
                        }
                    }
                })
                .join("");
        } else {
            return error;
        }
    }
};
