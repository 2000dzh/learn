class LRU {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  has (key) {
    return this.cache.has(key)
  }

  get (key) {
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, val)

    return value
  }

  put (key, value) {
    const len = this.cache.size
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (len >= this.capacity) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    this.cache.set(key, value)
  }
}