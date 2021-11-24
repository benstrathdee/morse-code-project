import { alphaToMorse, morseToAlpha } from "./translation-keys.js";

export const translate = (translator, inputFrom) => {
    const error = "Invalid characters present, please try again.";
    let toTranslate = document.getElementById(inputFrom).value;
    let translateArr = [];
    let translatedArr = [];

    if (translator === alphaToMorse) {
        translateArr = toTranslate.toLowerCase().split('');
        const entriesArray = Object.values(morseToAlpha);
        const everyCheck = (item) => entriesArray.includes(item);

        if (translateArr.every((item) => everyCheck(item))) {
            translatedArr = translateArr.map((char) => {
                if (char === " ") {
                    return " / "
                }
                for (const [key, value] of Object.entries(alphaToMorse)) {
                    if (key === char) {
                        return value + " ";
                    };
                }
            })

        } else {
            return error;
        }
        
    } else {

        translateArr = toTranslate.split(' ');
        const checkArr = toTranslate.split('').filter((item) => item != "/");
        const entriesArray = Object.values(alphaToMorse);
        const everyCheck = (item) => entriesArray.includes(item);

        if (checkArr.every((item) => everyCheck(item))) {
            translatedArr = translateArr.map((char) => {
                if (char === "/") {
                    return " "
                }
                for (const [key, value] of Object.entries(morseToAlpha)) {
                    if (key === char) {
                        return value;
                    };
                }
            })
        } else {
            return error;
        }
        
    }
    return translatedArr.join('');
}