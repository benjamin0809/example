async function beforeLeave() {
  // return Promise.resolve(1)
  // return Promise.reject('用户取消了')
  // return false
  return true
}

const option = {
  beforeLeave: beforeLeave
}

const next = (value) => {
  console.log('call next;value =', value)
}

const captureError = (error) => {
  console.log('call captureError;value =', error)
}
function run (option) {
  if (typeof option.beforeLeave === 'function') {
    const res = option.beforeLeave()
    if(res instanceof Promise) {
      res.then((r)=>{
        console.log("r:", r)
        next(r)
      }).catch((e) => {
        captureError(e)
      })
    } else if (res) {
      next(res)
    } else {
      captureError(res)
    }
  }
}

run(option)


// console.log('Promise.resolve', Promise.resolve(1))
// console.log('Promise.reject', Promise.reject(false))
// console.log('Promise.resolve', Promise.resolve(1))