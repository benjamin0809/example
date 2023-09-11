const assert = require('assert')
const run = require('./beforeLeave')
async function beforeLeave () {
  // return Promise.resolve(1)
  // return Promise.reject('用户取消了')
  // return false
  return true
}

const option = {
  beforeLeave: beforeLeave
}
run(option)
.then((res) =>  {
  assert.equal(res === false, 'ok')
})
.catch((error) => {
  assert.equal(error, Error, 'error')
})
