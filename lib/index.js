'use strict'

import Canvas from 'canvas'

/**
 * Draws an ellipse on a canvas using CanvasRenderingContext2D.ellipse()
 *
 * @name renderEllipse
 * @function
 *
 * Signature (from MDN)
 * void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
 *
 * @param {CanvasRenderingContext2D} ctx - canvas context to render on
 * @param {number} x - The x-axis (horizontal) coordinate of the ellipse's center.
 * @param {number} y - The y-axis (vertical) coordinate of the ellipse's center.
 * @param {number} radiusX - The ellipse's major-axis radius. Must be non-negative.
 * @param {number} radiusY - The ellipse's minor-axis radius. Must be non-negative.
 * @param {number} rotation - The rotation of the ellipse, expressed in radians.
 * @param {number} startAngle - The angle at which the ellipse starts, measured clockwise from the positive x-axis and expressed in radians.
 * @param {number} endAngle - The angle at which the ellipse ends, measured clockwise from the positive x-axis and expressed in radians.
 * @param {boolean} anticlockwise - An optional Boolean which, if true, draws the ellipse anticlockwise (counter-clockwise). The default value is false (clockwise).
 * @param {string} color - Hex color code for fill
 *
 * @return {void}
 */
const renderEllipse = (
  ctx,
  x,
  y,
  radiusX,
  radiusY,
  rotation,
  startAngle,
  endAngle,
  anticlockwise,
  color
) => {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.ellipse(
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    anticlockwise
  )
  ctx.fill()
}

/**
 * Create random properties for an ellipse
 *
 * @name randomEllipseParams
 * @function
 *
 * @param {number} maxSize - largest size for the ellipse
 * @param {number} minSize - smallest size for the ellipse
 * @param {number} maxX - width of canvas
 * @param {number} maxY - height of canvas
 *
 * @return {object} [opts] - Properties for the ellipse
 */
const randomEllipseParams = (maxSize, minSize, maxX, maxY) => {
  var size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize) // Num between maxSize and minSize
  var radiusY = Math.floor(Math.random() * size) // Height
  var radiusX = Math.floor(Math.random() * size) // Width
  var rotation = Math.random() * Math.PI * 2 // Angle
  var startAngle = 0
  var endAngle = Math.PI * 2
  var x = Math.floor(Math.random() * maxX) // x coordinate or ellipse
  var y = Math.floor(Math.random() * maxY) // y coordinate of ellipse
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16) // Random color
  var anticlockwise = false
  return {
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    color,
    anticlockwise
  }
}

/**
 * export
 *
 * @name main
 * @function
 *
 * @param {Object} obj - Inputs for offCircle
 * @param {number} obj.width - Width of canvas object
 * @param {number} obj.height - height of canvas object
 * @param {number} obj.ellipseCount - number of ellipses to draw
 *
 * @return {canvas} styled canvas!
 */
const main = ({ width = 500, height = 500, ellipseCount = 120 } = {}) => {
  var canvas = Canvas.createCanvas(width, height)
  var ctx = canvas.getContext('2d')
  var maxSize = 30
  var minSize = 20
  var maxX = canvas.width
  var maxY = canvas.height

  for (var i = 0; i < ellipseCount; i++) {
    var opts = randomEllipseParams(maxSize, minSize, maxX, maxY)
    renderEllipse(
      ctx,
      opts.x,
      opts.y,
      opts.radiusX,
      opts.radiusY,
      opts.rotation,
      opts.startAngle,
      opts.endAngle,
      opts.anticlockwise,
      opts.color
    )
  }
  return canvas
}

export default main
