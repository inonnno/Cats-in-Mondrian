let cat1 // Declare a variable to hold your image
let cat2
let canvas
let refreshButton
function preload () {
  // Load the image and store it in the variable
  // img = loadImage('cat.webp')
  cat1 = loadImage('cat1.png')
  cat2 = loadImage('cat2.png')
}
function setup () {
  canvas = createCanvas(809, 500)//width,height
  canvas.id('mondrian')
  // canvas.style('border', '3px solid black')
  canvas.parent('mondrian-container')
  noLoop()
}

function draw () {
  drawMondrian()
  // Make the background of the image transparent
}
let colors = ['#FFFFFF',
  '#FFFFFF',
  '#FF0000',
  '#0000FF',
  '#FFFF00']
function drawMondrian () {
  background(255)
  let randomWidth = random(100, width - 100)
  strokeWeight(2.5)
  line(randomWidth, 0, randomWidth, height)

  let randomHeight = random(100, height - 100)
  strokeWeight(2.5)
  line(0, randomHeight, width, randomHeight)
  //left down
  let x1 = random(3, randomWidth - 3)
  let y1 = randomHeight
  let w1 = randomWidth - x1
  let h1 = random(5, height - y1)
  createRect(x1, y1, w1, h1)

  let x2 = x1
  let y2 = y1 + h1
  let w2 = w1
  let h2 = random(3, height - y2 - 4)
  createRect(x2, y2, w2, h2)

  let x3 = x2
  let y3 = y2 + h2
  let w3 = w1
  let h3 = height - y3 + 5
  createRect(x3, y3, w3, h3)

  //letf down left
  let x6 = -5
  let y6 = randomHeight
  let w6 = x1 + 5
  let h6 = height - randomHeight + 5
  createRect(x6, y6, w6, h6)

  //left up
  let catSize = random(40, 100)
  let x5 = -5
  let y5 = -5
  let w5 = randomWidth + 5
  let h5 = random(catSize, randomHeight - 3)

  createRect(x5, y5, w5, h5)
  let x4 = -5
  let y4 = h5 - 5
  let w4 = randomWidth + 5
  let h4 = randomHeight - h5 + 5
  createRect(x4, y4, w4, h4)

  //right down
  let x7 = random(randomWidth, width - 100)
  let y7 = randomHeight
  let w7 = width - x7 + 5
  let h7 = random(100, height - y7 - 10)
  createRect(x7, y7, w7, h7)

  let x8 = x7
  let y8 = y7 + h7
  let w8 = width - x7 + 5
  let h8 = height - y8 + 5
  createRect(x8, y8, w8, h8)

  let x9 = randomWidth
  let y9 = randomHeight
  let w9 = x7 - randomWidth
  let h9 = random(0, height - y9)
  createRect(x9, y9, w9, h9)

  let x11 = randomWidth
  let y11 = randomHeight + h9
  let w11 = x7 - randomWidth
  let h11 = height - y11 + 5
  createRect(x11, y11, w11, h11)

  //right up
  let x10 = randomWidth
  let y10 = -5
  let w10 = width - x10 + 5
  let h10 = randomHeight + 5
  createRect(x10, y10, w10, h10)

  let x12 = random(randomWidth, width)
  let y12 = -5
  let w12 = random(0, width - x12)
  let h12 = randomHeight + 5
  createRect(x12, y12, w12, h12)

  let x13 = x12
  let y13 = -5
  let w13 = width - x13 + 5
  let h13 = random(5, randomHeight)
  createRect(x13, y13, w13, h13)



  let catSize2 = random(60, 100)
  catX2 = random(x7, width - 100)
  catY2 = y7 + h7 - catSize2 + 4
  cat2.loadPixels() // Load the image pixels for manipulation
  for (let y = 0; y < cat2.height; y++) {
    for (let x = 0; x < cat2.width; x++) {
      let index = (x + y * cat2.width) * 4 // Calculate the index for the pixel's RGBA values
      let r = cat2.pixels[index]
      let g = cat2.pixels[index + 1]
      let b = cat2.pixels[index + 2]
      // Check if the pixel color is white (or whatever color you want to make transparent)
      if (r >= 50 || g >= 50 || b >= 50) {
        cat2.pixels[index + 3] = 0 // Set the alpha to 0 to make it transparent
      }
    }
  }
  cat2.updatePixels() // Update the image with the new pixel values
  image(cat2, catX2, catY2, catSize2, catSize2)

  // Display the cat1
  catX = random(0, randomWidth - 100)
  catY = y4 - catSize + 4
  cat1.loadPixels() // Load the image pixels for manipulation
  for (let y = 0; y < cat1.height; y++) {
    for (let x = 0; x < cat1.width; x++) {
      let index = (x + y * cat1.width) * 4 // Calculate the index for the pixel's RGBA values
      let r = cat1.pixels[index]
      let g = cat1.pixels[index + 1]
      let b = cat1.pixels[index + 2]
      // Check if the pixel color is white (or whatever color you want to make transparent)
      if (r >= 50 || g >= 50 || b >= 50) {
        cat1.pixels[index + 3] = 0 // Set the alpha to 0 to make it transparent
      }
    }
  }
  cat1.updatePixels() // Update the image with the new pixel values
  image(cat1, catX, catY, catSize, catSize)
}

function createRect (x, y, w, h) {
  fill(random(colors))
  stroke(0) // black boarder
  weight = 4
  strokeWeight(weight)
  rect(x, y, w, h)
}

function refreshArt () {
  clear()
  drawMondrian()
}
document.getElementById('refresh').addEventListener('click', function () {
  refreshArt() // Call the function to refresh the art
})