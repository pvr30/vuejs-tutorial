<template>
<div>
    <label for="python">Python</label>
    <input type="checkbox" value="python" id="" v-model="languages">

    <br>
    <label for="javascript">javascript</label>
    <input type="checkbox" value="javascript" id="" v-model="languages">

    <br>

    <label for="ruby">Ruby</label>
    <input type="checkbox" value="ruby" id="" v-model="languages">

    <h5>Language List: {{languages}}</h5>

    <label for="student">Student</label>
    <input type="radio" value="student" id="" v-model="role">

    <label for="developer">Developer</label>
    <input type="radio" value="developer" id="" v-model="role">

    <h5>Role: {{role}}</h5>

    <!-- If else conditions -->

    <h4 v-if="show">If Block</h4>
    <h4 v-else>Else Block</h4>
    <button v-on:click="show = !show">Toggle</button>


    <!-- for loop -->

    <ul>
        <li v-for="item in frameworks" :key="item"> {{item}}</li>
    </ul>

    
    <ul>
        <li v-for="item in users" :key="item">
             Name: {{item.name}}, Email: {{item.email}} 
        </li>
    </ul>

    <!-- getting data from parent class -->
    <h1>{{name}}</h1>
    <h1>{{user}}</h1>
    <button v-on:click="getFunction()" type="button">Call parent component's function</button>
</div>
</template>

<script>
export default {
    name: "Learn1Com",
    props:{
        name: String,
        user: Object,
        getFunction: Function
    },
    data() {
        return {
            languages: [],
            role: null,
            show: true,

            frameworks: ['django', 'flask', 'vue.js', 'node.js'],
            users: [
                {
                    name:"vishal",
                    email: "vishal@gmail.com"
                },

                {
                    name:"harsh",
                    email: "harsh@gmail.com"
                },

                {
                    name:"sanju",
                    email: "sanju@gmail.com"
                }
            ]
        }
    },

    
}
</script>

<style>

</style>
