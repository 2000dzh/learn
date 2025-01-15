<template>
  <router-view> </router-view>
</template>

<script>
export default {
  name: 'App',
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
