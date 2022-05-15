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
container.addEventListener(`mouseenter`, addButtonsContainer, {once: true});
container.addEventListener(`mouseenter`, addClearGridButton, {once: true});
container.addEventListener(`mouseenter`, toggleGridColor, {once: true});


/* Clear container, create grid squares and append them to container */
function createGridSquares() {
  let gridSquareArray = [];

  container.textContent = ``;
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
    }, {once: true});
  }
}

function addInputContainer() {
  inputContainer.classList.add(`inputContainer`);
  body.insertBefore(inputContainer, container);
}

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
    gridSize = document.querySelector(`#newGrid`).value;
      if ((gridSize <= 0) || (gridSize > 100) || Number.isNaN(gridSize)) {
        alert(`Invalid Input! Enter a number between 1 and 100!`);
      } else if (gridSize > 0 || gridSize <= 100) {
        if(document.querySelector(`.rgbColors`)) {
          createGridSquares();
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
    gridSize = document.querySelector(`#newGrid`).value;
    console.log(gridSize);
    if ((gridSize <= 0) || (gridSize > 100) || Number.isNaN(gridSize)) {
      alert(`Invalid Input! Enter a number between 1 and 100!`);
    } else if (gridSize > 0 || gridSize <= 100) {
      // createGridSquares();
      if(document.querySelector(`.rgbColors`)) {
        createGridSquares();
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
    let gridSquareNodeList = document.querySelectorAll(`.gridSquare`);
    for (let i = 0; i < gridSquareNodeList.length; i++) {
      gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color:#fff`);
      gridSquareNodeList[i].addEventListener(`mouseover`, () => {
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`);
        });
    }
     if (document.querySelector(`.rgbColors`)) {
      for (let i = 0; i < gridSquareNodeList.length; i++) {
        gridSquareNodeList[i].addEventListener(`mouseover`, () => {
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: black`);
        });
      } 
    }
  });
}

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
        gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`);
      });
    }
    buttonsContainer.removeChild(rgbColors);
    buttonsContainer.appendChild(blackColor);
  });

  blackColor.addEventListener(`click`, () => {
    let gridSquareNodeList = document.querySelectorAll(`.gridSquare`);

    for (let i = 0; i < gridSquareNodeList.length; i++) {
      gridSquareNodeList[i].addEventListener(`mouseover`, () => {
      gridSquareNodeList[i].setAttribute(`style`, `width: ${100/gridSize}%; background-color: black`);
      });
    } 
    buttonsContainer.removeChild(blackColor);
    buttonsContainer.appendChild(rgbColors);
  });
}

function generateRGBValue() {
  return Math.floor(Math.random() * 256);
}