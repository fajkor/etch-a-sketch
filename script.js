/* Remove p tags from container, create grid squares and append it to container */
function createGridSquares() {
  let container = document.querySelector(`.container`);

  container.textContent = ``;
  let gridSquare = ``;
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      gridSquare = document.createElement(`div`);
      gridSquare.classList.add(`gridSquare`);
      /* I need to subtract 2px from the width and 2px from the height because of the border(1px on each side) */
      gridSquare.setAttribute(`style`, `width:${450/16 - 2}px; height:${450/16- 2}px`);

      container.appendChild(gridSquare);
    }
  }
}

createGridSquares();





