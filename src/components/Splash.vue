<template>
    <main id="splash">
        <div class="splashImg"  >
            <img id="logo" src="../assets/img/logo_w_tagline.png" alt="Downtown Oshawa" />
            <p id="welcome">Welcome to Oshawa</p>
            <img id="preloader" src="../assets/img/rolling-1s-200px.gif">
        </div>

    </main>
</template>

<script>
import gsap from "gsap";

export default {

    mounted: function(){

        let tl = gsap.timeline({duration: 1.2, delay: 0.5 });

        tl.from("#splash #logo", {
            delay: 0,
            scale: 0,
            opacity: 0.5,
            ease: "slow.in"
        });

        tl.from("#splash p", {
            scale: 0.6,
            y: 20,
            opacity: 0,
            ease: "slow.in"
        });

        tl.from("#splash #preloader", {
            opacity: 0,
        });

        tl.to("#splash", {
            delay: 1,
            autoAlpha: 0
        });
    }
}

</script>


<style scoped>
    #splash{
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 10000000;
        background: white;
    }
    main {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #3360A9;
        
    }
    .splashImg {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
    }

    #logo {
        padding: 2rem;
        margin-top: -10em;
    }

    #welcome {
        font-size: 1.4rem;
        font-weight: 500;
    }

    #preloader {
        width: 5%;
        margin-top: 2rem;
    }



</style>