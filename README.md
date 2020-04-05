<h1 align="center">offcircle</h1>

<div align="center">
  <img src="./example/example.png" alt="Logo" width="500" height="500"/>
</div>
<div align="center">
  <strong>JavaScript Generative Art</strong>
</div>
<div align="center">
  <i>A recreation of the Matplotlib Ellipse Demo in JavaScript</i>
</div>
<br />
<div align="center">
  <a>
    <img src="https://img.shields.io/npm/v/offcircle" alt="NPM Version">
  </a>
</div>


## Installation

```bash
npm install offcircle
```


## API

```javascript
// default
offCircle() // defaults to offCircle({width:500, height: 500, ellipseCount:120})

// custom 
offCircle({width:200, height: 900, ellipseCount:500})
```

## Usage

### CommonJS
```javascript 
var fs = require('fs')
var path = require('path')
var offCircle = require('offcircle')

var canvasWithEllipses = offCircle()
var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = canvasWithEllipses.createPNGStream()

stream.on('data', function (chunk) {
  out.write(chunk)
})

```

### ES6 modules
```javascript
import fs from 'fs'
import path from 'path'
import offCircle from 'offcircle'

var canvasWithEllipses = offCircle()
var out = fs.createWriteStream(path.join(__dirname, '/example.png'))
var stream = canvasWithEllipses.createPNGStream()

stream.on('data', function (chunk) {
  out.write(chunk)
})

```
## License
MIT

## Original Matplotlib Python Demo
[Ellipse Demo](https://matplotlib.org/3.1.1/gallery/shapes_and_collections/ellipse_demo.html#sphx-glr-gallery-shapes-and-collections-ellipse-demo-py)