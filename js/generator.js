const a = Array.from({
  length: 30
}, (k, v) => {
  return '2023-05-' + v
})

console.log(a)


const b = Array.from({
  length: 30
}, (k, v) => {
  return rand(300, 100)
})

console.log(b)


function rand (max, min) {
  return parseInt(Math.random() * max + min)
}


const c = Array.from({
  length: 30
}, (k, v) => {
  return { number: rand(2000, 1000), name: '2023-05-' + (v + 1) }
})
console.log(c)


const d = Array.from({
  length: 12
}, (k, v) => {
  return { number: rand(2000, 1000), name: '2023-' + (v + 1) }
})
console.log(d)

const f = Array.from({
  length: 60
}, (k, v) => {
  return { number: rand(2000, 1000), date: '2023-' + (v + 1) }
})
console.log(f)

