<template>
    <div id="info">
        <router-link to="/" class="goBack"></router-link>
        <div id="infoContainer" class="info grid-container">
            <header class="grid-x">
                <div class="circle">1</div>
                <div class="circle">2</div>
                <div class="circle">3</div>
                <div class="circle">4</div>
                <div class="circle">5</div>
            </header>
            <main>
                <div class="heading small-12">
                    <h1>Route 1</h1>
                </div>

                <section class="large-12 small-12 slider-container">
                    <splide :options="options" @splide:moved="moved">
                        <splide-slide v-for="slide in slides" :key="slide.src">
                            <img :src="slide.src" alt="slide.alt" />
                        </splide-slide>
                    </splide>
                </section>

                <vue-tiny-tabs
                    id="mytabs"
                    :anchor="false"
                    :closable="false"
                    :hideTitle="false"
                    @on-close="onClose"
                    @on-before="onBefore"
                    @on-after="onAfter"
                >
                    <div class="section" id="example">
                        <h3 class="title">Information</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div class="section" id="options">
                        <h3 class="title">Contact</h3>
                        <p>
                            akjhfdsljajdlaksjdl
                        </p>
                    </div>
                </vue-tiny-tabs>
            </main>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from "../assets/js/slide.js";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import VueTinyTabs from "vue-tiny-tabs";

export default {
    name: "TinyTabs",
    components: {
        Splide,
        SplideSlide,
        "vue-tiny-tabs": VueTinyTabs,
    },
    data() {
        return {
            options: {
                rewind: true,
                gap: "1rem",
                perPage: 1,
            },
            slides: createSlides(10),
            count: 0,
        };
    },
    methods: {
        add() {
            this.slides = this.slides.concat(
                createSlides(1, ++this.count + 100)
            );
        },
        onClose(id) {
            console.log(
                "Callback function that gets evaluated while closing the tab",
                id
            );
        },
        onBefore(id, tab) {
            console.log(
                "Callback function that gets evaluated before a tab is activated",
                id,
                tab
            );
        },
        onAfter(id, tab) {
            console.log(
                "Callback function that gets evaluated after a tab is activated",
                id,
                tab
            );
        },
    },
};
</script>

<style scoped>
#info {
    position: absolute;
    height: 100vh;
    overflow: scroll;
    width: 100vw;
    z-index: 200;
    bottom: 0;
    /* background: white; */
}
.tinytabs .tabs {
    margin-top: 40px;
    margin-left: 15px;
    display: flex;
    flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
    padding-left: 5px;
}
.tinytabs .tabs .tab {
    margin: 0 3px 0 0;
    background: #e1e1e1;
    display: block;
    padding: 6px 15px;
    text-decoration: none;
    color: #666;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
}
.tinytabs .section {
    background: #f1f1f1;
    overflow: hidden;
    padding: 15px;
    clear: both;
    border-radius: 3px;
}
.tinytabs .tab.sel {
    background: #f1f1f1;
    color: #333;
    text-shadow: none;
}
.goBack {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
}
#infoContainer {
    position: fixed;
    bottom: 0;
    height: 75%;
    width: 100vw;
    background: white;
    overflow: scroll;
    z-index: 250;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.slider-container {
    margin-top: 40px;
}

.slider-controls {
    text-align: center;
}

.tinytabs .tabs {
    margin-top: 40px;
    margin-left: 15px;
    display: flex;
    flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
    padding-left: 5px;
}
.tinytabs .tabs .tab {
    margin: 0 3px 0 0;
    background: #e1e1e1;
    display: block;
    padding: 6px 15px;
    text-decoration: none;
    color: #666;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
}
.tinytabs .section {
    background: #f1f1f1;
    overflow: hidden;
    padding: 15px;
    clear: both;
    border-radius: 3px;
}
.tinytabs .tab.sel {
    background: #f1f1f1;
    color: #333;
    text-shadow: none;
}

#myMap,
.controls {
    display: none;
}

header {
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    background: white;
    border: 2px solid lightblue;
    text-align: center;
    display: flex;
    place-items: center;
    place-content: center;
}

.heading {
    margin-top: 1.5rem;
    background-color: rgb(12, 68, 128);
    border-radius: 10px;
}

.heading h1 {
    font-size: 3rem;
    color: #fff;
}

.img_slider {
    height: 14rem;
    background-color: teal;
    margin-top: 2rem;
}

.container {
    background-color: thistle;
    height: 30rem;
    margin-top: 2rem;
}
</style>
