/*global describe, it*/
import assert from 'power-assert'

describe('Array', () => {
  const array = [1, 2, 3]
  describe('#indexOf()', () => {
    it('should return index when the value is present', () => {
      const zero = 0
      const two = 2
      assert(array.indexOf(zero) === two)
    })

    it('should return -1 when the value is not present', () => {
      const minusOne = -1
      const two = 2
      assert.ok(array.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE')
    })
  })
})
