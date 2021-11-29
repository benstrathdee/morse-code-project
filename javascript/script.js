import { alphaToMorse, morseToAlpha } from "./modules/translation-keys.js";
import { translate } from "./modules/translate.js";

const morseButton = document.getElementById("translateToMorse");
const alphaButton = document.getElementById("translateToAlpha");
const input = document.getElementById("input");
const result = document.getElementById("result");

morseButton.addEventListener("click", () => {
    result.innerText = translate("alphaToMorse", alphaToMorse, input.value);
});
alphaButton.addEventListener("click", () => {
    result.innerText = translate("morseToAlpha", morseToAlpha, input.value);
});
