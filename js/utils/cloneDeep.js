function cloneDeep(source, hash = new WeakMap()) {
    const type = typeof source
    const isReg = source instanceof RegExp
    const isFun = source instanceof Function
    const isDate = source instanceof Date
    if(type !== 'object' || type === null) {
        return source
    }
    if(isReg || isFun || isDate) {
        return source
    }
    if(hash.has(source)) {
        return source
    }
    hash.set(source, true)
    let result 
    if(source instanceof Array)  {
        result = []
    } else {
        result = {}
    }

    for(let key in source) {
        if(source.hasOwnProperty(key)) {
            result[key] = cloneDeep(source[key], hash)
        }
    }
    return result
}

var obj = {
    a: 1,
    b: 2
}
const cp = cloneDeep(obj)
cp.a = 2

console.log(obj, cp)