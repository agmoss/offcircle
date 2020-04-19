const fs = require('fs')
const path = require('path')
const Canvas = require('canvas')
const offCircle = require('../lib')

var canvas = Canvas.createCanvas(500, 500)
var ctx = canvas.getContext('2d')
offCircle(ctx, 120)

var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = canvas.createPNGStream()
stream.on('data', function (chunk) {
  out.write(chunk)
})
