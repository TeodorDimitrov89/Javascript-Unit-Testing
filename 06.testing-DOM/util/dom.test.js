import fs from "fs";
import path from "path";

import { it, vi, expect, beforeEach } from "vitest";
import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");

const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
  // document.getElementById("errors").innerHTML = "";
});
it("should add an error paragraph to the id='errors' element", () => {
  showError("Error!");
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;
  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;
  expect(errorParagraph).toBeNull();
});
