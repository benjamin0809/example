function once(fn) {
  let isCalled = false
  let res = null
  return function _once() {
    if (isCalled) {
      return res
    } else {
      fn()
      isCalled = true
    }
  }
}

function createApp() {
  console.log('create app')
}

 
const _createApp = once(createApp)
_createApp()
_createApp()
_createApp()
_createApp()