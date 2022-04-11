<template>
    <h1>The Sum is {{num1+num2}}</h1>    <!-- Normal data passed -->

    <!-- computed propety is fast it using Caching memory-->
    <h1> {{getSum}} </h1>

    <!--  Watch Example-->
    <h1>{{count}}</h1>
    <button v-on:click="count+=1">+</button>
    <button v-on:click="count-=1">-</button>

    <!-- Passing html to ChildComp Using Slots -->
    <ChildComp data="test"/>
    <ChildComp data="test1"/>

    <ChildComp>
        <h1>This html come from Learn3Comp using Slots</h1>
    </ChildComp>

    
    <ChildComp>
        <h1>another slot</h1>
    </ChildComp>

    <ChildComp>
        <template v-slot:header>
            <h1>This is header</h1>
        </template>
        <template v-slot:main>
            <h1>This is main</h1>
        </template>
        <template v-slot:footer>
            <h1>This is footer</h1>
        </template>
    </ChildComp>

</template>

<script>
import ChildComp from "./ChildComp.vue"
export default {
    name: "Learn3Comp",
    components:{
        ChildComp
    },
    data(){
        return {
            num1: 10,
            num2: 20,
            count: 0
        }
    },
    computed: {
        getSum(){
            return `The Sum is ${this.num1 + this.num2}`
        }
    },
    // to keep eye on property changes
    watch: {
        count(val, prev){
            if(val > 5 && val > prev){
                this.count = 0
            }
        }
    }
}
</script>

<style>

</style>