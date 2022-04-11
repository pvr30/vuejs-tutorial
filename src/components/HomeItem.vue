<template>
<div>
    <h1>This is Home Component</h1>
    <h2>Usename: {{ username }}</h2>
    <!-- Interpolation -->
    <h2>Email: {{ email }}</h2>
    <h2>{{ getinfo() }}</h2>
    <h3>{{ getName("harsh") }}</h3>
    <h3>{{ getData() }}</h3>

    <!-- counter onclick -->
    <div id="counter">
        <button v-on:click="increase_count()">Click Here</button>
        <h3>{{ count }}</h3>
    </div>

    <div class="box" v-on:mouseover="changeColor()" v-on:mouseleave="removeChanges()"></div>

    <!-- two way binding -->
    <br><br>
    <input type="text" v-model="text"> <!-- bind on text-->  
    <p>{{text}}</p>
    <br><br>

    <!-- form using binding -->

    <input type="text" v-model="username" placeholder="enter username">
    <input type="text" v-model="email" placeholder="enter email">
    <button type="button" v-on:click="getFormData()">Submit</button>

</div>
</template>

<script>
export default {
    name: "HomeItem",
    data() {
        return {
            username: null,      //"vishal",
            email: null,         //"vishal@gmail.com",
            getinfo: () => {
                return `user is ${this.username}`;
            },

            count: 0,
            text: "two way binding"
        };
    },

    // define methods
    methods: {
        getName(name) {
            return name;
        },
        getData() {
            return {
                username: this.username,
                email: this.email,
            };
        },

        increase_count() {
            this.count = this.count + 1;
        },
        changeColor(){
            var box = document.querySelector(".box")
            box.style.backgroundColor = "black"
        },
        removeChanges(){
             var box = document.querySelector(".box")
            box.style.backgroundColor = "blue"
        },
        getFormData(){
            // return {
            //     username: this.username,
            //     email: this.email
            // }
            console.log(this.username, this.email)
        }
    },
};
</script>

<style scoped>
/* scoped means css only applied on this component */
h1 {
    color: blue;
}

#counter {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.box{
    width: 200px;
    height: 200px;
    background-color: blue;
}
</style>
