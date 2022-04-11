<template>
<!-- getting data from child component -->
<div>
    <ChildComp :getChildData="getChildData" />
    <h1>Data Coming From Child: {{name}}</h1>

    <!-- Used of ref -->
    <!-- ref is used to get DOM elements -->
    <input type="text" ref="input">
    <button v-on:click="getRef()">Click Here</button>
</div>
</template>

<script>
import ChildComp from "./ChildComp.vue"
export default {
    name: "ParentComp",
    data() {
        return {
            name: ""
        }
    },
    methods: {
        getChildData(name) {
            this.name = name
        },

        // using ref
        getRef(){
            this.$refs.input.focus();
            console.log(this.$refs.input)
            this.$refs.input.style.color = "red"
        }
    },
    components: {
        ChildComp
    }
}
</script>

<style>

</style>
