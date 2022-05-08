const container = document.querySelector(`.container`);
/* When the mouse pointer enters the container area, createGridSquares runs only once */
container.addEventListener(`mouseenter`, createGridSquares, {once: true});
// console.log(gridSquare);

/* Clear container, create grid squares and append them to container */
function createGridSquares() {
  container.textContent = ``;
  let gridSquare = ``;
  let gridSquareArray = [];

  /* create 16x16 squares, give them size and append them to container */
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      gridSquare = document.createElement(`div`);
      gridSquareArray.push(gridSquare);
      gridSquare.classList.add(`gridSquare`);
      gridSquare.setAttribute(`style`, `width: ${100/16}%`);
      container.appendChild(gridSquare);

/*       let gridSquareCompStyles = window.getComputedStyle(gridSquare);
      console.log(gridSquareCompStyles); */

      /* So, what is really happening here: I have put an event listener to every gridSquare, but only the last gridSquare is being changed. Also, console.log only outputs the last element (<div class="gridSquare" style="width: 6.25%; background-color: black;"></div>) and not the element that it is "hovering" over. So, maybe that means that the value of gridSquare is filled with the value of the last gridSquare, and maybe thats why it's only last gridSquare that it's being changed. So, I need to figure out a solution that stores each gridSquare in different variables.  */
/*       gridSquare.addEventListener(`click`, ()=> {    
        gridSquare.style.backgroundColor = `black`; */
        /* 'this' doesn't seem to work because it seems to target parent container and not gridSquare */
        // this.setAttribute(`style`, `border: 2px solid red`);
/*         console.log(gridSquare);
      }); */
      
      /* Let's see if I can console.log gridSquare[i][j] (I can't!!) */
      // console.log(gridSquare[i][j]);
    }
  }
  // console.log(gridSquareArray);
  for (let i = 0; i < 256; i++) {
    gridSquareArray[i].addEventListener(`mouseover`, ()=> {
      gridSquareArray[i].style.backgroundColor = `black`;
    });
  }


/* So, what is really happening here: I have put an event listener only at the last gridSquare. */
/* gridSquare.addEventListener(`mouseover`, ()=> {    
  gridSquare.style.backgroundColor = `black`;
  console.log(gridSquare);
}); */
}


function changeToBlack() {
  gridSquare.setAttribute(`style`, `background-color: #fff`);
}






