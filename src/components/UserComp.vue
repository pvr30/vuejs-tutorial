<template>
    <h1>{{ data.name }}</h1>
    <h1>{{ data.email }}</h1>
    <button v-on:click="getGreet(data.name)">Alert Name</button>
</template>

<script>
export default {
  name: "UserComp",
  props: {
    data: Object,
    getGreet: Function
  },
  data(){
      return {
      }
  }
};
</script>

<style scoped>

</style>