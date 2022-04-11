<template>
<!-- Class/ CSS Binding -->
<div>
    <h1 :class="applyStyle">Class Binding</h1>
    <h2 :class="{tag:colorful}">One Class Changes</h2>
    <button v-on:click="colorful=!colorful">Change Color</button>
</div>
</template>

<script>
export default {
    name: "Learn2Comp",
    data(){
        return{
            colorful: false
        }
    },
    // applied more than one classes on single element
    computed:{
        applyStyle(){
            return{
                tag:this.colorful,
                tag1: true,
                tag2: true
            }
        }
    }
}
</script>

<style scoped>
.tag{
background-color: aquamarine;
width: 200px;
}
.tag1{
    font-size: 50px;
}
.tag2{
    text-align: center;
}
</style>