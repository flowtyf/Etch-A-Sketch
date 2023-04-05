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

//Add an event listener that listens for mouseover, change color of grid square to black

// init button for resizing
const gridSizeButton = document.createElement('button');
gridSizeButton.className = 'size-button';
gridSizeButton.innerHTML = '64x64';
document.body.appendChild(gridSizeButton);

// Append event listener to button that changes the grid size

// Render container
renderGrid(16);
