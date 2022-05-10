const body = document.querySelector(`body`);
const container = document.querySelector(`.container`);
let gridSize = 16;

/* When the mouse pointer enters the container area, createGridSquares and addClearGridButton run only once */
container.addEventListener(`mouseenter`, createGridSquares, {once: true});
container.addEventListener(`mouseenter`, addClearGridButton, {once: true});


/* Clear container, create grid squares and append them to container */
function createGridSquares() {

  container.textContent = ``;
  let gridSquare = ``;
  let gridSquareArray = [];
  
  /* create 16x16 squares, push them to an array, give them size and append them to container */
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      gridSquare = document.createElement(`div`);
      /* I need to push the gridSquare nodes to an array, because later I am going to add an event listener to each one of them. */
      gridSquareArray.push(gridSquare);
      gridSquare.classList.add(`gridSquare`);
      gridSquare.setAttribute(`style`, `width: ${100/gridSize}%`);
      container.appendChild(gridSquare);
    }
  }

  /* Add an event listener to each item of the array, and then execute the arrow function when that event is triggered. */
  for (let i = 0; i < (gridSize * gridSize); i++) {
    gridSquareArray[i].addEventListener(`mouseover`, () => {
      gridSquareArray[i].style.backgroundColor = `black`;
    }, {once: true});
  }
}

/* Create Clear Grid button, append it, add event listener to it. */
function addClearGridButton() {
  let clearGrid = document.createElement(`button`);
  clearGrid.classList.add(`clearGrid`);
  clearGrid.setAttribute(`type`, `button`);
  clearGrid.textContent = `Clear Grid`;
  body.insertBefore(clearGrid, container);

  clearGrid.addEventListener(`click`, () => {
    gridSize = Number(prompt(`Please, enter grid size`, `1 - 100`));
    if ((gridSize <= 0) || (gridSize > 100) || Number.isNaN(gridSize)) {
      alert(`Invalid Input! Try again!`);
    } else if (gridSize > 0 || gridSize <= 100) {
      createGridSquares();
    }
  });
}







