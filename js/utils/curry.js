function curry(fn) {
  return function _curry() {
    const args = [].slice.call(arguments)
    if (fn.length <= args.length) {
      return fn.apply(null, args)
    } else {
      return function() {
        const restArgs = [].slice.call(arguments)
        return _curry.apply(null, args.concat(restArgs))
      }
    }
  }
}


function add(a, b ,c) {
  return a + b + c
}
const _add = curry(add)
const addOne = curry(add)(1)
console.log(addOne(1, 2))
console.log(_add(1, 2))
console.log(_add(1, 2, 9))
console.log(_add(1, 2, 4, 5))