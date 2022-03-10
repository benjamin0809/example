async function awaitAll(funs) {
    if(!funs.length)return []
    const promiseAll = funs.map(x  => x())
    let i = promiseAll.length
    let result = []
    while(i--) {
        result.push(await promiseAll[i]) 
    } 
    return result
}

let getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Math.random())
        }, Math.random() * 10000) 
    })
}

awaitAll([getData, getData, getData]).then(console.log)