require('dotenv').config({
  path: process.env.NODE_ENVIRONMENT === 'production' ? '.production.env' : '.env',
})

console.log('aaa', process.env.aaa);
console.log('bbb', process.env.bbb)

// export NODE_ENVIRONMENT='development'
// node ./index.js
// aaa 1
// bbb 2


// export NODE_ENVIRONMENT='production'
// node ./index.js
// aaa 111
// bbb 222