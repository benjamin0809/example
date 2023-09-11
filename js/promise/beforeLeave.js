module.exports = function run (option) {
  return new Promise((resolve, reject) => {
    if (typeof option.beforeLeave === 'function') {
      const res = option.beforeLeave()
      if (res instanceof Promise) {
        res.then((r) => {
          resolve(r)
        }).catch((e) => {
          reject(new Error(e))
        })
      } else if (res) {
        resolve(res)
      } else {
        reject(new Error(res))
      }
    }
  })
}

