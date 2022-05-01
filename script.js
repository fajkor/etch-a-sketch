/* Remove p tags from container, create grid squares and append it to container */
function createGridSquares() {
  let container = document.querySelector(`.container`);
  const containerStyles = getComputedStyle(container);
  // let's take a look at **all** the styles of container!
  console.log(containerStyles);
  // that's a lot. How about just the ones related to us?
  console.log(`width: ${containerStyles['width']}, height: ${containerStyles['height']}`);
  console.log(typeof +containerStyles['width']);
  container.textContent = ``;
  let gridSquare = ``;
  for(let i = 0; i < 64; i++) {
    // for(let j = 0; j < 64; j++) {
      gridSquare = document.createElement(`div`);
      gridSquare.classList.add(`gridSquare`);
      // gridSquare.setAttribute(`style`, `width: ${(+containerStyles['width'])/Math.sqrt(64)}px; height: ${(+containerStyles[`height`])/Math.sqrt(64)}px`);

      // gridSquare.setAttribute(`style`, `width: ${(+containerStyles['width'])/Math.sqrt(64)}px; height: ${(+containerStyles[`height`])/Math.sqrt(64)}px`);
      
      console.log(containerStyles[`height`]);
      container.appendChild(gridSquare);

    // }
  }
}

createGridSquares();





