Function.prototype.myApply = function(ctx, args) {
    let fn = Symbol('')
    ctx = ctx || window
    ctx[fn] = this
    const result = ctx[fn](...args)
    delete ctx[fn]
    return result
}

var name = 'benjamin'
function print(key) {
    console.log(this.name, key)
}

var obj = {
    name: 'bind'
}
print()
print.myApply(obj, ['keyVal'])