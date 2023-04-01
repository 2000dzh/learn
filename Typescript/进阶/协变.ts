interface Person {
  name: string
  age: number
}

interface Guang {
  name: string
  age: number
  hobbies: string[]
}

// Guang是Person的子类型

let person: Person = {
  name: 'dzh',
  age: 18,
}
let guang: Guang = {
  name: 'dzh',
  age: 18,
  hobbies: ['睡觉'],
}

person = guang
// console.log(person.hobbies)


type a = 'a' | never
