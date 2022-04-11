<template>
  <div>
    <!-- <HomeItem/> -->

    <!-- <Learn1Com :name="name" :user="user" :getFunction="getFunction"/> -->
    <!-- <li v-for="item in users" :key="item" class="list-div">
      <UserComp :data="item" :getGreet="getGreet"/>   Reuseable Components  
    </li> -->
    <!-- <div v-html="tag"></div> -->
    <!-- <Learn2Comp /> -->
    <!-- <ParentComp/> -->
    <!-- <FormComp/> -->
    <!-- <Learn3Comp/> -->
    <!-- <Learn4Comp/> -->
    <!-- to display something ouside of vue app  -->
    <!-- <teleport to="#footer">
      <FooterComp/>
    </teleport> -->


    <!-- <LifeCycleComp  v-if="show"/>
      <button v-on:click="show=!show">Toggle</button> -->


      <!-- router links -->
      <router-link to="/">Home</router-link><br>
      <router-link to="/login">Login</router-link><br>

      <!-- Dynamic Routing  -->
      <router-link to="/profile/vishal">Vishal's Profile</router-link><br>
      <router-link to="/profile/harsh">Harsh's Profile</router-link><br>
      <router-link to="/profile/sanju">Sanju's Profile</router-link><br>



      <router-view></router-view>


      <!-- display api data -->
      <ul v-for="item in list" :key="item.id" class="item">
        <li>{{item.id}}</li>
        <li>{{item.first_name}}</li>
        <li>{{item.email}}</li>
        <li><img :src="item.avatar" alt="" srcset=""></li>
      </ul>
  </div>
</template>

<script>
// import Learn1Com from './components/LearnCom.vue';
// import HomeItem from "./components/HomeItem.vue"
// import UserComp from "./components/UserComp.vue"
// import Learn2Comp from "./components/Learn2Comp.vue"
  //  import ParentComp from "./components/ParentComp.vue"
  // import FormComp from "./components/FormComp.vue"
  // import Learn3Comp from "./components/Learn3Comp.vue"
  // import Learn4Comp from "./components/Learn4Comp.vue"
// import FooterComp from "./components/FooterComp.vue"
// import LifeCycleComp from "./components/LifeCycleComp.vue"

import axios from "axios"

export default {
  name: "App",
  components: {
    // HomeItem,
    // LearnCom,
    // UserComp,
    // Learn2Comp,
    // ParentComp,
    // FormComp,
    // Learn3Comp,
    // Learn4Comp,
    // FooterComp,
    // LifeCycleComp
  },
  data(){
    return {
      name: "vishal",
      user: {name: "user", email: "user@gmail.com"},
      users: [
        {name: "vishal", email: "vishal@gmail.com"},
        {name: "harsh", email: "harsh@gmail.com"},
        {name: "sanju", email: "sanju@gmail.com"},
        {name: "chirag", email: "chirag@gmail.com"},

      ],
      tag: "<h1>Inject Tag</h1>",
      show: true,

      // api list
      list: []
    }
  },
  methods: {
    getFunction(){
      alert("Parent Component's Function is Called")
    },
    getGreet(name){
      alert(`Hello ${name}`)
    }
  },

  // working with api
  async mounted(){
    let api_data = await axios.get("https://reqres.in/api/users?page=1")
    // console.log(api_data.data.data)
    this.list = api_data.data.data

  }
};
</script>

<style scoped>
.list-div{
    height: 200px;
    border: 1px solid black;
    background: red;
    margin: 20px;
}
.item{
  display: flex;
}
.item li{
    display: inline-block;
    width: 200px;
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    background-color: azure;
}
.item img{
  width: 60px;
}
</style>