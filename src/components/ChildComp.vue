<template>
    <!-- <button v-on:click="getChildData(username)">Send Data From Child to Parent</button> -->

    <!-- getting data and using slot -->
    <!-- for slot we don't need to define props -->
    <br><br>
    {{data}}
    <slot></slot>

    <!-- if nothing is passed from parent the default html is shown -->
    <!-- <slot>default html</slot> -->

    <!-- give name to the slots -->
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>

</template>

<script>
export default {
    name: "ChildComp",
    data(){
        return{
            username: "vishal"
        }
    },
    props:{
        getChildData: Function,
        data: String
    }
}
</script>


<style>

</style>