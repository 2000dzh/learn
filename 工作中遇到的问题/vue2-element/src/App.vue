<template>
  <!-- <router-view> </router-view> -->
  <Demo />
  <!-- <div>1</div> -->
</template>

<script>
import Demo from './views/demo.vue'
export default {
  name: 'App',
  components: {
    Demo,
  },
  data() {
    return {}
  },
  created() {
    console.log(process.env.NODE_ENV)
  },
  methods: {},
}
</script>

<style></style>
