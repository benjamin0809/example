var obj = {
    a: 'str',
    b: {
        name: 'benjamin'
    },
    c: function() {
        console.log(obj.a)
    }
}

setTimeout(() => {
    obj.b = 'delay'
    console.log(obj)
},200)
module.exports = obj