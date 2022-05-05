/* Remove p tags from container, create grid squares and append it to container */
function createGridSquares() {
  let container = document.querySelector(`.container`);
  container.textContent = ``;
  let gridSquare = ``;

  /* create 16x16 squares, give them size and append them to container */
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      gridSquare = document.createElement(`div`);
      gridSquare.classList.add(`gridSquare`);
      gridSquare.setAttribute(`style`, `width: ${100/16}%`);
      container.appendChild(gridSquare);
    }
  }
}

createGridSquares();





