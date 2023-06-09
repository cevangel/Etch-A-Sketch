const amtOfGrids = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button')

const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++) { //for loop inside another one
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < amtOfGrids; j++) { //create each box for that row, in this inner loop
      const widthAndHeight = 960 / amtOfGrids
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`

      gridBox.addEventListener("mouseenter", e => { //*add hover effect here*
        gridBox.style.backgroundColor = 'purple'; //had syntax error here without style, remember kebab
      });
      row.appendChild(gridBox) //append to above row element
    }

    container.appendChild(row)
  }
}

resetButton.addEventListener('click', () => {
  const userSize = Number(prompt('Pick dimensions for new grid:'))

  while (userSize > 100) {
    const userSize = Number.prompt('Pick dimensions for new grid 100 or less:')
    createGrid(userSize)
  }
  
})
createGrid(amtOfGrids);


// x Create the divs using JavaScript. 
// x Don’t try making them by hand with copy and pasting in your HTML file!
// x It’s best to put your grid squares inside another “container” div 
//(display: flex and flex-wrap: wrap?)
// x (which can go directly in your HTML).

//You need make the divs appear as a grid (versus just one on each line). 
//USE FLEXBOX
//Be careful with borders and margins, as they can adjust the size of the squares!