<template>
<div>
<h1>Dynamics Components</h1>
<button @click="comp='DynamicComp1'">Load Component1</button>
<button @click="comp='DynamicComp2'">Load Component2</button>
<button @click="comp='DynamicComp3'">Load Component3</button>
<component :is="comp"/>
</div>
</template>

<script>
import DynamicComp1 from "./DynamicComp1.vue"
import DynamicComp2 from "./DynamicComp2.vue"
import DynamicComp3 from "./DynamicComp3.vue"


export default {
    name: "Learn4Comp",
    components:{
        DynamicComp1, DynamicComp2, DynamicComp3
    },
    data(){
        return {
            comp: ""
        }
    }
}
</script>