const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: () => { },
  set: () => { },
}

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function () {
    return target[sourceKey][key]
  }

  sharedPropertyDefinition.set = function (val) {
    target[sourceKey][key] = val
  }

  Object.defineProperty(target, key, sharedPropertyDefinition)
}

const obj = {
  _data: {
    age: 22,
    name: 'dzh'
  }
}

const keys = Object.keys(obj._data)
let i = keys.length

while (i--) {
  const key = keys[i]
  proxy(obj, '_data', key)
}

obj.age = 23

console.log(obj)
console.log(obj.age)
console.log(obj.name)

