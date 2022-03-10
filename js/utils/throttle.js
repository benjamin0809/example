// 时间戳版本
function throttle(fn ,wait) {
    let prev 
    return function() {
        if(!prev) {
            prev = Date.now()
            fn()
        }else if(wait + prev < Date.now()) {
            fn()
            prev = Date.now()
        } 
    }
}

// 定时器版本
function throttle1(fn ,wait) {
    let timer 
    return function() {
        if(!timer) { 
            fn()
            timer = setTimeout(() => {
                timer = null
            }, wait)
        } 
    }
}

function print() {
    console.log('name', Date.now())
} 
function test1() {
    const bind = throttle(print, 1000)
    for(let i =0;i< 10;i++) {
        setTimeout(() => {
            bind()
        }, i * 550)
    }
}

function test2() {
    const bind = throttle1(print, 1000)
    for(let i =0;i< 10;i++) {
        setTimeout(() => {
            bind()
        }, i * 450)
    }
}
 // test1()
test2()
