import { alphaToMorse, morseToAlpha } from "./translation-keys.js";

export const translate = (translator, inputFrom) => {
    const morseRegex = new RegExp(/\.|-| |\/|/g);
    const alphaRegex = new RegExp(/[A-za-z0–9]/g);
    const error = "Invalid characters present, please try again.";
    let toTranslate = document.getElementById(inputFrom).value;
    let translateArr = [];
    let translatedArr = [];
    if (translator === alphaToMorse) {
        translateArr = toTranslate.toLowerCase().split('');
        if (alphaRegex.test(translateArr)) {
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
        if (morseRegex.test(translateArr)) {
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