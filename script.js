const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
document.body.appendChild(gridContainer);

const renderGrid = (squares) => {
  for (let i = 0; i < squares; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = `grid-square`;
    gridContainer.appendChild(gridSquare);
  }
};

renderGrid(16);


