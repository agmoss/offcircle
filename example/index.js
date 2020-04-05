import fs from 'fs'
import path from 'path'
import offCircle from '../index'

var ellipses = offCircle()

var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = ellipses.createPNGStream()
stream.on('data', function (chunk) {
  out.write(chunk)
})
