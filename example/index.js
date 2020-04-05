'use strict'

import fs from 'fs'
import path from 'path'
import offCircle from '../index'
var canvasWithEllipse = offCircle()

var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = canvasWithEllipse.createPNGStream()

stream.on('data', function (chunk) {
  out.write(chunk)
})
