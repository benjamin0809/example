function myInstanceof(left, right) {
    let __proto__ = left.__proto__
    const proto = right.prototype
    while(__proto__) {
        if(__proto__ === proto) {
            return true
        } else {
            __proto__ = __proto__. __proto__
        }
    }
    return false
}

function Person(){
    
}
let p = new Person()
console.log(myInstanceof(p, Object)) // true

console.log(myInstanceof(p, Person)) // true

console.log(myInstanceof(1, Person)) // false



