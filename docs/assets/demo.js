"use strict";

for (const demo of document.querySelectorAll("[data-demo]")) {
  const controls = demo.querySelector(".demo-controls");
  const output = demo.querySelector("[data-demo-output]");
  const label = demo.querySelector("[data-demo-label]");
  if (!controls || !output) continue;

  const steps = Array.from(controls.querySelectorAll("button[data-step][data-output]"));
  const initial = steps.find(button => button.dataset.step === demo.dataset.current);
  if (!initial) continue;

  function showStep(selected) {
    demo.dataset.current = selected.dataset.step;
    if (output.textContent !== selected.dataset.output) {
      output.textContent = selected.dataset.output;
    }
    if (label && selected.dataset.stageLabel) label.textContent = selected.dataset.stageLabel;
    for (const button of steps) {
      button.setAttribute("aria-pressed", String(button === selected));
    }
  }

  for (const button of steps) {
    button.addEventListener("click", () => showStep(button));
  }
  showStep(initial);
  controls.hidden = false;
}
