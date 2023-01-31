//variables
var bg, bgimg
var ss, ssimg
var alien, alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien8
var score = 0
var gameState = "play"
var aliengroup, lasergroup
var laser
var edges
function preload() {
//loading images
    bgimg = loadImage("Assets/BG-1.jpg")
    ssimg = loadImage("Assets/Spaceship 10.png")
    alien1 = loadImage("Assets/Alien1.png")
    alien2 = loadImage("Assets/Alien2.png")
    alien3 = loadImage("Assets/Alien3.png")
    alien4 = loadImage("Assets/Alien 4.png")
    alien5 = loadImage("Assets/Alien 5.png")
    alien6 = loadImage("Assets/Alien 6.png")
    alien7 = loadImage("Assets/Alien 7.png")
    alien8 = loadImage("Assets/Alien 8.png")
}
function setup() {
    createCanvas(1600,700)
    bg = createSprite(800,350,1600,700)
    bg.addImage(bgimg)
    ss = createSprite(100,350)
    ss.addImage(ssimg)
}
function draw() {
    background(0);
    if(gameState==="play") {
        if(keyDown(UP_ARROW)) {
            ss.y-=5
        }
        if(keyDown(DOWN_ARROW)) {
            ss.y+=5
        }
    }
    drawSprites()
}