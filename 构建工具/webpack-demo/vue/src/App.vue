<template>
  <div class="main">hello vue1</div>
  <ul>
    <li v-for="{ name } in data" :key="name">{{ name }}</li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// onMounted(() => {
//   alert('21212')
// })


console.log(process.env)
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP)


const data = ref([
  {
    name: 'dzh',
  },
])
console.log('21213')
</script>

<style scoped lang="scss">
.main {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
