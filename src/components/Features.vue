


<template>
   <div class="features">
      <div class="feature clean-bg" v-on:click="setActive('hccp')">
         <div class="hider" v-bind:class="{ active: isActive('hccp') }"> 
            <div class="icon clean"> </div> 
         </div>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque a dui vitae semper. Donec non diam imperdiet, aliquam augue id, efficitur dui. Aliquam aliquet massa sed fringilla elementum. Cras scelerisque est a ligula laoreet commodo sit amet quis velit. Proin arcu est, tempus sed ex ac, sagittis hendrerit tortor. </p>
      </div>

      <div class="feature tasty-bg" v-on:click="setActive('taste')">
         <div class="hider" v-bind:class="{ active: isActive('taste') }">
            <div class="icon tasty"> </div>
            <i class="fas fa-angle-double-right"></i>


         </div>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque a dui vitae semper. Donec non diam imperdiet, aliquam augue id, efficitur dui. Aliquam aliquet massa sed fringilla elementum. Cras scelerisque est a ligula laoreet commodo sit amet quis velit. Proin arcu est, tempus sed ex ac, sagittis hendrerit tortor. </p>
      </div>

      <div class="feature halal-bg" v-on:click="setActive('halal')">
         <div class="hider" v-bind:class="{ active: isActive('halal') }">
            <div class="icon halal"> </div>
         </div>
         <p> {{ Constants.HALAL_TEXT }} </p>
      </div>
   </div>
</template>

<script>
   import { Constants } from '@/Globals';

   export default { 
      data () { 
         return { 
            Constants,
            States: { 
               'hccp': false,
               'taste': false,
               'halal': false
            }
         }
      },

      mounted () { 
         console.log(this.isMobile());
      },

      methods: { 

         isActive: function (i) { 
            return this.States[i];
         },

         setActive: function (i) {
            let Current = this.States[i];
            for (let i in this.States) { 
               this.States[i] = false;
            }
            this.States[i] = !Current;
         },

         isMobile : function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
         }
      }
   }

</script>

<style scoped>

   .features { 
      width: auto;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      height: auto;
   }

   .feature { 
      position: relative;
      width: 275px;
      border-radius: 15px;
      height: 275px;
      transition: all .3s ease;
      display: flex;
      margin: 15px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 5px rgb(0 0 0 / 5%), 0 8px 16px rgb(0 0 0 / 5%);
   }

   .feature:hover { 
      cursor: pointer;
   }
   
   .feature .hider { 
      transition: all .4s ease;
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 15px;
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
      justify-content: center;
      align-items: center;
   }

   .hider.active { 
      height: 0
   }

   .icon { width: 95px; height: 95px; background: white; }
   .icon.halal { -webkit-mask: url('../assets/images/icons/halal.svg') no-repeat center; mask: url('../assets/images/icons/halal.svg') no-repeat center; mask-size: cover; }
   .icon.tasty { -webkit-mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask-size: cover; }
   .icon.clean { -webkit-mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask-size: cover; background: tomato; }

   .feature p { 
      width: 90%;
      text-align: justify;
      color: rgb(117, 117, 117);
      font-weight: 600;
   }

   .clean-bg .hider { background: rgb(245, 245, 245); box-shadow: 0 0 70px 0 rgb(245 245 245 / 25%); }
   .halal-bg .hider { background: rgb(125, 206, 130); box-shadow: 0 0 70px 0 rgb(125 206 130 / 25%); }
   .tasty-bg .hider { background: rgb(255, 99, 71); box-shadow: 0 0 70px 0 rgb(255 99 71 / 25%); }


   @media only screen and (max-width: 600px) {
      .history p { width: auto; }
   }

   
</style>