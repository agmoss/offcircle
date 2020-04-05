'use strict'

import { assert } from 'chai'
import { describe, it } from 'mocha'

var offCircle = require('../index')

describe('offCircle', function () {
  it('should have a width', function () {
    var result = offCircle()
    assert('width' in result)
  })
  it('should have a height', function () {
    var result = offCircle()
    assert('height' in result)
  })
  it('should be image type', function () {
    var result = offCircle()
    assert(result.type, 'image')
  })
  it('should not be invalid', function () {
    assert.equal(null, offCircle().getContext('invalid'))
  })
})
