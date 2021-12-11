

<template>
    <div class="production"> 
  
    </div>
</template>

<script>
    import { Constants } from '@/Globals'

    export default {
        data () {
            return { 
                Constants
            }
        }
    }
</script>

<style scoped>

    .production { 
        width: 100%;
        min-height: 85px;
        height: auto;
        box-shadow: 0 -10px 20px 0px rgb(0 0 0 / 5%), 0 15px 20px 0px rgb(0 0 0 / 5%);
        background: linear-gradient(45deg, #f5f5f5, #ffffff);
    }


    @media only screen and (max-width: 600px) {
   }

</style>