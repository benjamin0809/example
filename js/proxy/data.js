function noop() {}
var sharedPropertyDefinition = { 
    configurable: true,
    enumerable: true,
    get: noop,
    set: noop
}
var option = {
    data: {
        sum: 3,
        name: 'benjamin'
    }
}

class Vue {
    constructor({ data, methods, computed}) {
        this.data = data
        if(data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                sharedPropertyDefinition.get = function proxyGet() {
                    return this.data[key]
                }
                sharedPropertyDefinition.set = function proxySet(value) {
                    this.data[key] = value
                }
                Object.defineProperty(this, key, sharedPropertyDefinition)
            })

        }
    }
}
const vue = new Vue({ data: {
    name: 'benjamin',
    age: 121
}})



console.dir(vue);
console.log(vue.age);