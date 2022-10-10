import { extractEnteredNumberValue } from "./src/parser.js";

import { calcResult } from "./src/math.js";
import { generateResultText } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValue(form);
  const result = calcResult(numberValues);

  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
