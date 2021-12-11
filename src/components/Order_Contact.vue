

<template>
    <div class="order-contact">
        <div class="order"> 
            <div class="how-to"> 
                <h2 class="title"> {{ Constants.HOW_TO_ORDER_TITLE }} </h2>
                <p v-for="How_TO in Constants.HOW_TO_ORDER_TEXT" v-bind:key="How_TO" v-html="How_TO"> </p>
            </div>
        </div>

        <div class="contact">
            <h2 class="title"> {{ Constants.CONTACT_TITLE }} </h2>
        </div>
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

    .order { 
        box-shadow: 0 -10px 20px 0px rgb(0 0 0 / 5%), 0 15px 20px 0px rgb(0 0 0 / 5%);
        background: linear-gradient(45deg, #1e879a, #22bc90);
        margin-bottom: 25px;
    }

    .how-to { 
        width: 725px;
        padding: 40px 30px;
        margin: 0 auto;
        backdrop-filter: brightness(1.15);
        height: auto;
        position: relative;
    }

    .how-to p { 
        color: whitesmoke;
        font-size: 0.9rem;
        font-weight: 100;
    }

    .how-to h2.title { color: white;}

    .contact { 
        margin: 0 auto;
        margin-top: 25px;
        padding: 40px 30px;
        width: 725px;
        height: auto;
        position: relative;
    }

    .contact h2.title {
        color: grey;
    }
    
    h2.title { 
        font-size: 2.5rem;
        margin: 0;
        color: white;
        font-weight: 200;
        letter-spacing: 2px;
    }

    @media only screen and (max-width: 600px) {
      .how-to { width: 90%; box-shadow: none; border-radius: 0; }
   }

</style>