import { alphaToMorse, morseToAlpha } from "./modules/translation-keys.js";
import { translate } from "./modules/translate.js";

const morseButton = document.getElementById("translateToMorse");
const alphaButton = document.getElementById("translateToAlpha");
const result = document.getElementById("result")

morseButton.addEventListener("click", () => {
    result.innerText = translate(alphaToMorse, "input");
})
alphaButton.addEventListener("click", () => {
    result.innerText = translate(morseToAlpha, "input")
})