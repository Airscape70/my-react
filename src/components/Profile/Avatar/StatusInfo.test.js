import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StatusInfoWithHooks from "./StatusInfoWithHooks";
import { createRoot } from "react-dom/client";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<StatusInfoWithHooks status="bob"/>, container)
  });
  expect(container.textContent).toBe("bob");
});