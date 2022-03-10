Function.prototype.myCall = function(ctx, ...args) {
    let fn = Symbol('')
    ctx = ctx || window
    ctx[fn] = this
    const result = ctx[fn](...args)
    delete ctx[fn]
    return result
}

var name = 'benjamin'
function print() {
    console.log(this.name)
}

var obj = {
    name: 'bind'
}
print()
print.myCall(obj)