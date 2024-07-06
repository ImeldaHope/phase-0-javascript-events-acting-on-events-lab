// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

// Using style.right won't work because changing the style.right property doesn't change the style.left property, 
//which means we'd have conflicting information about where the dodger should be on the screen.
//JavaScript solves this problem by giving precedence to style.left. Thus, any changes to style.right will be entirely ignored.

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
      }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});
