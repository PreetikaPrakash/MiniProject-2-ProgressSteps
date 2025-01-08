const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Add event listener to next button

next.addEventListener("click", () => {
  currentActive++;

  // so that user cannot move forward 4, it stays on 4th circle
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(`currentActive${currentActive}`);
  update();
});

// Add event listener to prev button
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// for activating circles based on the next & prev button click
function update() {
  circles.forEach((circle, circle_index) => {
    if (circle_index < currentActive) {
      circle.classList.add("active");
    } else {
      // used when we are clicking prev button
      circle.classList.remove("active");
    }
  });

  // assemble all the active circles
  const actives = document.querySelectorAll(".active");
  // move the progress line forward with below logic using width property
  console.log(`actives = ${actives.length - 1}`);
  console.log(`circles = ${circles.length - 1}`);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // previous functionality
  // setting prev disabled when circle is highlighted at 1st place
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
