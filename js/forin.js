function Person(name) {
    this.name = name
    this.id = 'parent'
}


const child1 = new Person('child1') 
const child2 = new Person('child2') 

Person.prototype.extra = 'extra'
child1.age = 18;
(()=>{
    let keys = []
    for(let key in child1) {
        keys.push(key)
    }
    console.log('for in ... :',keys) // for in ... : [ 'name', 'id', 'age', 'extra' ]
})()
 
console.log('Object.keys:', Object.keys(child1)) // Object.keys: [ 'name', 'id', 'age' ]