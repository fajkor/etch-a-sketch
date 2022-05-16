const body = document.querySelector(`body`);
const container = document.querySelector(`.container`);
const inputContainer = document.createElement(`div`);
const buttonsContainer = document.createElement(`div`);
const label = document.createElement(`label`);
const input = document.createElement(`input`);
const rgbColors = document.createElement(`button`);
const blackColor = document.createElement(`button`);
let gridSize = 16;

/* When the mouse pointer enters the container area, create grid squares, append input field, add New Grid button */
container.addEventListener(`mouseenter`, createGridSquares, {once: true});
container.addEventListener(`mouseenter`, addInputContainer, {once: true});
container.addEventListener(`mouseenter`, addNumberInput, {once: true});
container.addEventListener(`mouseenter`, addNewGridButton, {once: true});
/* Add a container for 'Clear Grid' button and 'Change To RGB' button */
container.addEventListener(`mouseenter`, addButtonsContainer, {once: true});
/* Append 'Clear Grid' button */
container.addEventListener(`mouseenter`, addClearGridButton, {once: true});
/* Append 'Change To RGB' button */
container.addEventListener(`mouseenter`, toggleGridColor, {once: true});


/* Clear container, create grid squares and append them to container */
function createGridSquares() {
  let gridSquareArray = [];
  container.textContent = ``; /* Clear container */
  let gridSquare = ``;
  
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
    });
  }
}

/* Append a container for the input field and a button */
function addInputContainer() {
  inputContainer.classList.add(`inputContainer`);
  body.insertBefore(inputContainer, container);
}

/* Append an input field and its button. Add an event listener to input field. */
function addNumberInput() {
  label.setAttribute(`for`, `newGrid`);
  label.textContent = `Enter a number (1-100)`;
  inputContainer.appendChild(label);

  input.setAttribute(`type`, `number`);
  input.setAttribute(`id`, `newGrid`);
  input.setAttribute(`name`, `newGrid`);
  input.setAttribute(`min`, `1`);
  input.setAttribute(`max`, `100`);
  inputContainer.appendChild(input);


  input.addEventListener(`keypress`, (e) => {
    if(e.key === `Enter`) {
      /* Get the number that the user entered in the input field and store it into gridSize */
      gridSize = document.querySelector(`#newGrid`).value;
      if ((gridSize <= 0) || (gridSize > 100) || Number.isNaN(gridSize)) {
        alert(`Invalid Input! Enter a number between 1 and 100!`);
      } else if (gridSize > 0 || gridSize <= 100) {
        /* If 'Change To RGB' exists in the HTML */
        if(document.querySelector(`.rgbColors`)) {
          createGridSquares();

          /* If 'Change To Black' button exists in the HTML */
        } else if (document.querySelector(`.blackColor`)) {
          let gridSquareArray = [];
          container.textContent = ``;
          let gridSquare = ``;
  
        /* create grid squares, push them to an array, give them size and append them to container */
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
              gridSquareArray[i].style.backgroundColor = `rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`;
            });
          }
        }
      }
          
    }
    });
  }

/* Create New Grid button, append it, add event listener to it. */
function addNewGridButton() {
  let newGrid = document.createElement(`button`);
  newGrid.classList.add(`newGrid`);
  newGrid.setAttribute(`type`, `button`);
  newGrid.textContent = `New Grid`;
  inputContainer.appendChild(newGrid);


  newGrid.addEventListener(`click`, () => {
    /* Get the number that the user entered in the input field and store it into gridSize */
    gridSize = document.querySelector(`#newGrid`).value;
    if ((gridSize <= 0) || (gridSize > 100) || Number.isNaN(gridSize)) {
      alert(`Invalid Input! Enter a number between 1 and 100!`);
    } else if (gridSize > 0 || gridSize <= 100) {
      /* If 'Change To RGB' exists in the HTML */
      if(document.querySelector(`.rgbColors`)) {
        createGridSquares();
        /* If 'Change To Black' button exists in the HTML */
      } else if (document.querySelector(`.blackColor`)) {
        let gridSquareArray = [];
        container.textContent = ``;
        let gridSquare = ``;

      /* create grid squares, push them to an array, give them size and append them to container */
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
            gridSquareArray[i].style.backgroundColor = `rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`;
          });
        }
      }
    }
  });
}

function addButtonsContainer () {
  buttonsContainer.classList.add(`buttonsContainer`);
  body.appendChild(buttonsContainer);
}

/* Create Clear Grid button, append it, add event listener to it. */
function addClearGridButton() {
  let clearGrid = document.createElement(`button`);
  clearGrid.classList.add(`clearGrid`);
  clearGrid.setAttribute(`type`, `button`);
  clearGrid.textContent = `Clear Grid`;
  buttonsContainer.appendChild(clearGrid);

  clearGrid.addEventListener(`click`, () => {
    /* Select all the elements with the class .gridSquare and store them into gridSquareNodeList. */
    let gridSquareNodeList = document.querySelectorAll(`.gridSquare`);
    for (let i = 0; i < gridSquareNodeList.length; i++) {
      /* Give each element with the class gridSquare the color white. */
      gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color:#fff`);
      /* Give each element with the class gridSquare an event listener. When this event is triggered, a random RGB color will be added to the gridSquare. */
      gridSquareNodeList[i].addEventListener(`mouseover`, () => {
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`);
        });
    }

     /* If 'Change To RGB' button exists */
     if (document.querySelector(`.rgbColors`)) {
      for (let i = 0; i < gridSquareNodeList.length; i++) {
        /* Give each element with the class gridSquare an event listener. When this event is triggered, black color will be added to the gridSquare. */
        gridSquareNodeList[i].addEventListener(`mouseover`, () => {
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: black`);
        });
      } 
    }
  });
}

/* Insert 'Change To RGB' button and add an event listener to it. Also, insert 'Change To Black' button and add event listener to it */
function toggleGridColor() {
  rgbColors.classList.add(`rgbColors`);
  rgbColors.setAttribute(`type`, `button`);
  rgbColors.textContent = `Change To RGB`;
  buttonsContainer.appendChild(rgbColors);

  blackColor.classList.add(`blackColor`);
  blackColor.setAttribute(`type`, `button`);
  blackColor.textContent = `Change To Black`;
  
  rgbColors.addEventListener(`click`, () => {
    let gridSquareNodeList = document.querySelectorAll(`.gridSquare`);

    for (let i = 0; i < gridSquareNodeList.length; i++) {
      gridSquareNodeList[i].addEventListener(`mouseover`, () => {
        /* On mouseover, give the square grid for whom the mouseover event is triggered, a random RGB background color. */
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`);
      });
    }

    /* Remove 'Change To RGB' button and add 'Change To Black' button. */
    buttonsContainer.removeChild(rgbColors);
    buttonsContainer.appendChild(blackColor);
  });

  blackColor.addEventListener(`click`, () => {
    let gridSquareNodeList = document.querySelectorAll(`.gridSquare`);

    for (let i = 0; i < gridSquareNodeList.length; i++) {
      /* On mouseover, give the square grid for whom the mouseover event is triggered, the color black. */
      gridSquareNodeList[i].addEventListener(`mouseover`, () => {
      gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: black`);
      });
    } 

    /* Remove 'Change To Black' button and add 'Change to RGB' button. */
    buttonsContainer.removeChild(blackColor);
    buttonsContainer.appendChild(rgbColors);
  });
}

function generateRGBValue() {
  return Math.floor(Math.random() * 256);
}