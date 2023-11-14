const targt = {
  id: 'target'
}

const handler = {}

const obj = new Proxy(targt, handler)
console.log(targt.id)
console.log(obj.id)