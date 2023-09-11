function myNew (Fn) {
  var obj = Object.create({})
  const args = Array.prototype.slice.call(arguments, 1)

  Object.setPrototypeOf(obj, Fn.prototype)
  const res = Fn.apply(obj, args)
  return typeof res === 'object' ? res : obj
}


function Person (name) {
  this.name = name
  this.say = function say () {
    console.log(this.name)
  }
}

const p = myNew(Person, 'benjamin')
p.say()