<template>
<div>
    <p>
        {{form}}
    </p>
    <ul>
        <li v-for="item in errors" :key="item">
            {{item}} not valid
        </li>
    </ul>
    <form>
        <label for="">Email</label>
        <input type="text" placeholder="Enter Email" v-model="form.email"><br>
        <label for="">Password</label>
        <input type="password" placeholder="Enter Password" v-model="form.password"><br>

        <br>
        <h1>Gender:</h1>
        <label for="">Male</label>
        <input type="radio" value="male" name="gender" v-model="form.gender"><br>
        <label for="">Female</label>
        <input type="radio" value="female" name="gender" v-model="form.gender"><br>
        <button v-on:click="login" type="button">Submit</button>

    </form>


    <!-- Modifiers -->
    <input type="text" v-model.lazy="data" placeholder="lazy"><br>
    <input type="text" v-model.trim="data" placeholder="trim"><br>
    <input type="number" v-model.number="data" placeholder="number"><br>

    <p>Data is: {{data}}</p>
</div>
</template>

<script>
export default {
    name: "FormComp",
    data() {
        return {
            form: {
                email: "",
                password: "",
                gender: "",
            },
            errors:[],
            data:""
        }
    },
    methods: {
        login() {
            // validate the form
            this.errors = []
            for(const item in this.form){
                if(this.form[item].length === 0){
                    this.errors.push(item)
                }
            }
            if(this.errors.length !== 0){
                console.log(this.errors)
            }
            else{
                alert('Form Submitted Successfully')
            }
        }
    }
}
</script>

<style>

</style>
