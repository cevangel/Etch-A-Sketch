let amtOfGrids = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button')
const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb('+r+','+g+','+b+')';
  //create for loop in here?
  //for (let c= 0 ; c < 11; c++) {
  //  return 'rgb('+r+','+g+','+b+')';   
  //  if (c === 10) {
  //    return 'rgb(0,0,0)'
  //  } 
  //}
};

let createGrid = (amtOfGrids) => {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
  for (let i = 0; i < amtOfGrids; i++) { //for loop inside another one
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < amtOfGrids; j++) { //create each box for that row, in this inner loop
      const widthAndHeight = 960 / amtOfGrids //960=amt of pixels
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box') //listing properies of gridBox
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`

      gridBox.addEventListener("mouseenter", e => { //*add hover effect here*
        //Random color option belwo: 
        gridBox.style.backgroundColor = randomRgbColor(); //had syntax error here without style, remember kebab
        //+10% opacity option below:
        // const currentOpacity = gridBox.style.opacity
        // console.log(currentOpacity)
        // gridBox.style.background = 'rgb(0, 0, 0)'
        // gridBox.style.opacity= Number(currentOpacity) + .1
      })

    
      row.appendChild(gridBox) //append to above row element
    }

    container.appendChild(row)
  }
}

resetButton.addEventListener('click', () => {
  const userSize = Number(prompt('Pick dimensions for new grid:'))

  while (userSize > 100) {
    const userSize = Number(prompt('Pick dimensions for new grid 100 or less:'))
    createGrid(userSize)
  }
  container.removeChild
  createGrid(userSize)
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