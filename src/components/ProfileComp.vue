<template>
    <h1>This is {{profilename}} Profile Component</h1>
</template>

<script>
import {useRoute} from "vue-router"
export default {
    name: 'ProfileComp',
    data(){
        return {
            profilename: ""
        }
    },
    mounted(){
        const route = useRoute()
        // console.log(route.params.name)
        this.profilename = route.params.name
    }
}
</script>
