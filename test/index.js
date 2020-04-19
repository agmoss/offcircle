'use strict'

const Canvas = require('canvas')
var chai = require('chai')
var mocha = require('mocha')
var assert = chai.assert
var describe = mocha.describe
var it = mocha.it

// TODO: Make tests for the calling of offCircle()
var offCircle = require('../lib')

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
