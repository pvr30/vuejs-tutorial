<template>
    <div>
        <!-- <h1>this is before Created {{name}}</h1> -->
        <!-- <h1 ref="count">{{count}}</h1>
        <button v-on:click="count+=1">Update Count</button><br><br> -->

        <h1 ref="element">Element</h1>
    </div>
</template>

<script>
export default {
    name: "LifeCycleComp",
    data(){
        return {
            name:"vishal",
            count: 0,
        }
    },
    // 1. create
    // beforeCreate(){
    //     this.name = "vishal" // this will not change the name boz it execute before data() assign
    //     alert('before creation')
    // },
    // created(){
    //     this.name = "pvr" // this will change the name this is execute after data()

    //     alert('created')
    // }

    // 2. Mount
    // beforeMount(){  // this execute before template execution
    //     console.log("Before Mount", this.$el)
    // },
    // mounted(){  // this execute after template defined/execute
    //     console.log("Mounted", this.$el)
    // },

    //3. Update
    // beforeUpdate(){  //this execute before updated count value
    //     console.log("Before Update: ", this.$refs['count'].textContent)
    // },

    // updated(){  //this execute after updated count value
    //     console.log("Updated: ", this.$refs['count'].textContent)
    // },

    // 4. UnMount
    beforeUnmount(){ // before remove the element
        console.log("Before UnMount", this.$refs['element']) 
    },
    unmounted(){  //after removing the element
        console.log("UnMount", this.$refs['element'])
        
    }
}
</script>