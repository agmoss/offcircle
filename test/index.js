'use strict'

import Canvas from 'canvas'
import { assert } from 'chai'
import { describe, it } from 'mocha'

// TODO: Make tests for the calling of offCircle()
var offCircle = require('../index')

describe('offCircle', function () {
  var canvas = Canvas.createCanvas(500, 500)
  var ctx = canvas.getContext('2d')
  offCircle(ctx, 120)

  it('should have a width', function () {
    assert('width' in canvas)
  })
  it('should have a height', function () {
    assert('height' in canvas)
  })
  it('should be image type', function () {
    assert(canvas.type, 'image')
  })
  it('should not be invalid', function () {
    assert.equal(null, canvas.getContext('invalid'))
  })
})
