Function.prototype.myBind = function(ctx, ...args) {
    ctx = ctx || window
    let fn = Symbol('') 
    ctx[fn] = this
    return function() { 
        const result = ctx[fn](...args.concat(Array.prototype.slice.call(arguments) ))
        delete ctx[fn]
        return result
    }  
}

var name = 'benjamin'
function print(key,ll) {
    console.log(this.name,key,ll)
}

var obj = {
    name: 'bind'
} 
var bound = print.myBind(obj, '5555')
bound(';;')