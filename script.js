//Title
const pageTitle = document.createElement('h1');
pageTitle.innerText = 'Pixel Sketch V1';
pageTitle.className = 'page-title';
document.body.appendChild(pageTitle);

//Button
// init button for resizing
const gridSizeButton = document.createElement('button');
gridSizeButton.className = 'size-button';
gridSizeButton.innerHTML = '8x8';
document.body.appendChild(gridSizeButton);

// Main container for etchasketch
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
document.body.appendChild(gridContainer);

// Set up the amount of squares for the etchasktech
const renderGrid = (squares) => {
  for (let i = 0; i < squares; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = `grid-square`;
    gridContainer.appendChild(gridSquare);
  }
  //mouseover - change grid square to black
  const getSquares = document.getElementsByClassName('grid-square');
  const squareArr = Array.from(getSquares);
  squareArr.forEach((el) => {
    el.addEventListener('mouseover', () => {
      el.classList.add('black-bg');
    });
  });
};

// Append event listener to button that changes the grid size
gridSizeButton.addEventListener('click', () => {
  // Remove the existing grid squares
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  if (gridSizeButton.innerHTML === '8x8') {
    gridContainer.classList.remove('grid-container');
    gridContainer.classList.add('grid-container-64');
    gridSizeButton.innerHTML = '16x16';
    renderGrid(64);
  } else if (gridSizeButton.innerHTML === '16x16') {
    gridContainer.classList.remove('grid-container-64');
    gridContainer.classList.add('grid-container-256');
    gridSizeButton.innerHTML = '4x4';
    renderGrid(256);
  } else if (gridSizeButton.innerHTML === '4x4') {
    gridContainer.classList.remove('grid-container-256');
    gridContainer.classList.add('grid-container');
    gridSizeButton.innerHTML = '8x8';
    renderGrid(16);
  }
});
// Init reset button
const resetButton = document.createElement('button');
resetButton.className = 'reset-button';
resetButton.innerHTML = 'Reset';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () => {
  const getSquares = document.getElementsByClassName('grid-square');
  const squareArr = Array.from(getSquares);
  squareArr.forEach((el) => {
    el.classList.remove('black-bg');
  });
});
// Render initial container
renderGrid(16);
