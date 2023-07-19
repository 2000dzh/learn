// beforeCreated,created之间
// props   加载顺序: 1
// method  加载顺序: 2
// data 加载顺序: 3
// computed 加载顺序: 4
// watch 加载顺序: 5

axios({
  method: 'get',
  url: '/api',
  params: {
    myParam: 'myValue'
  },
  age: 19
});