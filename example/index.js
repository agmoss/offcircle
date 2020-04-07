import fs from 'fs'
import path from 'path'
import Canvas from 'canvas'
import offCircle from '../index'

var canvas = Canvas.createCanvas(500, 500)
var ctx = canvas.getContext('2d')
offCircle(ctx, 120)

var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = canvas.createPNGStream()
stream.on('data', function (chunk) {
  out.write(chunk)
})
