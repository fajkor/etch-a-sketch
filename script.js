const container = document.querySelector(`.container`);
/* When the mouse pointer enters the container area, createGridSquares runs only once */
container.addEventListener(`mouseenter`, createGridSquares, {once: true});
// console.log(gridSquare);

/* Clear container, create grid squares and append them to container */
function createGridSquares() {
  container.textContent = ``;
  let gridSquare = ``;
  let gridSquareArray = [];

  /* create 16x16 squares, push them to an array, give them size and append them to container */
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      gridSquare = document.createElement(`div`);
      gridSquareArray.push(gridSquare);
      gridSquare.classList.add(`gridSquare`);
      gridSquare.setAttribute(`style`, `width: ${100/16}%`);
      container.appendChild(gridSquare);
    }
  }

  /* Add an event listener to each item of the array, and then execute the arrow function once that event is triggered. */
  for (let i = 0; i < 256; i++) {
    gridSquareArray[i].addEventListener(`mouseover`, ()=> {
      gridSquareArray[i].style.backgroundColor = `black`;
    }, {once: true});
  }
}







