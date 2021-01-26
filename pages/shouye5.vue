<template>
    <div class="shouye5">
        <div class="container">
  <div class="shouye5-left">
            <Jiemudan/>
            <div class="zxf_pagediv"></div>
        </div>
        <div class="shouye5-right">
            <Zxzx/>
            <Rmpdzb/>
            <Dyrmbq/>
        </div>
        </div>
      
    </div>
</template>

<script>
import Jiemudan from "~/components/jiemudan.vue"
import Zxzx from "~/components/zxzx.vue"
import Dyrmbq from '../components/dyrmbq.vue';
import Rmpdzb from '../components/rmpdzb.vue';
    export default {
        head() {
                return { 
                        link: [{ rel: "stylesheet", href: "/css/toPage.css" }],  
                        // script: [
                        //         { src: "/js/toPage.js"},
                        //     ],
                };
        },

         components:{
            Jiemudan,Zxzx,Rmpdzb,
                  Dyrmbq
        }
    }
   
</script>

<style scoped>
.shouye5-right{
    width: 348px;
}
.shouye5-left{
    margin-right: 15px;
    width: 837px;
}
.container{
    width: 1200px;
    display: flex;
}
.shouye5{
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    min-width: 1200px;
    margin: 0 auto;
}
</style>