// 📚 Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
let baseValue = 10;

// Function with parameters and return value
function multiply(a, b) {
  return a * b;
}

// Function demonstrating scope
function runCalculation() {
  let localValue = 5;
  const result = multiply(baseValue, localValue);
  document.getElementById('calcOutput').textContent = `Result: ${baseValue} × ${localValue} = ${result}`;
}

// 🎬 Part 3: JS-Triggered Animation

// Reusable function to toggle animation class
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

// Event listener to trigger animation
document.getElementById('triggerBtn').addEventListener('click', () => {
  toggleAnimation('triggerBox', 'animate');
});
