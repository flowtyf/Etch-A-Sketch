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

const drawPixel = () => {
  const getSquares = document.getElementsByClassName('grid-square');
  const squareArr = Array.from(getSquares);
  squareArr.forEach((el) => {
    el.addEventListener('mouseover', () => {
      el.classList.add('black-bg');
    });
  });
};

renderGrid(16);
drawPixel();
