<template>
    <div id="routeInfo">
        <div class="grid-x align-center">
            <div
                class="scroll_up cell small-4"
                @click="showExtended()"
                id="open"
            >
                <i v-if="open" class="fas fa-chevron-up"></i>
                <p v-else>CLOSE</p>
            </div>
        </div>
        <div class="info_container grid-x">
            <div class="cell small-12 slider_container">
                <splide
                    :options="options"
                    @splide:moved="moved"
                    :hasSliderWrapper="true"
                    style="height: 100%"
                >
                    <!-- <splide-slide v-for="slide in slides" :key="slide.src">
                        <img :src="slide.src" alt="slide.alt" />
                    </splide-slide> -->
                    <splide-slide>
                        <img src="" />
                    </splide-slide>

                    <splide-slide>
                        <img src="" />
                    </splide-slide>

                    <splide-slide>
                        <img src="" />
                    </splide-slide>

                    <splide-slide>
                        <img src="" />
                    </splide-slide>
                </splide>
            </div>
            <div class="info cell small-12">
                <!-- <div class="list_table"> -->
                <ul class="tabs" data-tabs id="info-tabs">
                    <li class="tabs-title is-active">
                        <a href="#tab1" aria-selected="true">Information</a>
                    </li>
                    <li class="tabs-title">
                        <a data-tabs-target="tab2" href="#tab2">Contact</a>
                    </li>
                </ul>
                <!-- </div> -->

                <div class="tab-content" data-tabs-content="info-tabs">
                    <div class="tabs-panel is-active" id="tab1">
                        <div class="stop_info">
                            <p class="info_text">
                                Name: Full Steam Ahead
                            </p>
                            <p class="info_text">
                                Year: 1995
                            </p>
                            <p class="info_text">
                                Painters: Gus Froese
                            </p>
                            <p class="info_text">
                                Story: Commissioned by the City of Oshawa in
                                1995. The mural was created by Gus Froese. Full
                                Steam Ahead is a collage celebrating the history
                                of Oshawa and the Oshawa Carriage Works. Located
                                at the back of the mural is Parkwood and how it
                                stands today. Also painted in the mural is one
                                of Oshawa Carriage works cars, a 1924 McLaughlin
                                Buick. On the extreme right is an original
                                depiction of the Queen's Hotel. Established in
                                1874 boasted state of the art technology with
                                ensuite bathrooms, running water, and
                                electricity. Painted in the centre is the Oshawa
                                Carriage Works with their employees out front.
                                Back behind the Oshawa Carriage Works is
                                Oshawa's Newspaper at the time. "The Oshawa
                                Daily Reformer" later to become the "Oshawa
                                Times". On the far left of the mural is a
                                depiction of the Oshawa Harbour and Barnhart's
                                Pavilion, the local dance hall, where the youth
                                went to socialize and dance.
                            </p>
                        </div>
                    </div>
                    <div class="tabs-panel" id="tab2">
                        <div class="contact_info">
                            <h2 class="sub_heading">
                                <span
                                    ><i class="fas fa-map-marker-alt"></i></span
                                >Address:
                            </h2>
                            <p class="tab_text">64 Simcoe Street S</p>
                        </div>
                        <div class="contact_info">
                            <h2 class="sub_heading">
                                <span><i class="fas fa-paper-plane"></i></span
                                >Email:
                            </h2>
                            <p class="tab_text">service@oshawa.ca</p>
                        </div>
                        <div class="contact_info">
                            <h2 class="sub_heading">
                                <span><i class="fas fa-phone-alt"></i></span
                                >Phone:
                            </h2>
                            <p class="tab_text">905-436-3311</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Extended Info -->
            <div class="ext_info">
                <div class="ext_contact ext-container cell small-12">
                    <div class="ext_heading">
                        <h1 class="ext_heading_text">Contact</h1>
                    </div>
                    <div class="contact_info">
                        <h2 class="sub_heading">
                            <span><i class="fas fa-map-marker-alt"></i></span
                            >Address:
                        </h2>
                        <p class="tab_text">123 Fleet Street</p>
                    </div>
                    <div class="contact_info">
                        <h2 class="sub_heading">
                            <span><i class="fas fa-paper-plane"></i></span
                            >Email:
                        </h2>
                        <p class="tab_text">example@gmail.com</p>
                    </div>
                    <div class="contact_info">
                        <h2 class="sub_heading">
                            <span><i class="fas fa-phone-alt"></i></span>Phone
                        </h2>
                        <p class="tab_text">(905) 567-9341</p>
                    </div>
                </div>

                <div class="ext_info_tab ext-container cell small-12">
                    <div class="ext_heading">
                        <h1 class="ext_heading_text">Infomation</h1>
                    </div>
                    <p class="info_text">
                        Name: Full Steam Ahead
                    </p>
                    <p class="info_text">
                        Year: 1995
                    </p>
                    <p class="info_text">
                        Painters: Gus Froese
                    </p>
                    <p class="info_text">
                        Story: Commissioned by the City of Oshawa in 1995. The
                        mural was created by Gus Froese. Full Steam Ahead is a
                        collage celebrating the history of Oshawa and the Oshawa
                        Carriage Works. Located at the back of the mural is
                        Parkwood and how it stands today. Also painted in the
                        mural is one of Oshawa Carriage works cars, a 1924
                        McLaughlin Buick. On the extreme right is an original
                        depiction of the Queen's Hotel. Established in 1874
                        boasted state of the art technology with ensuite
                        bathrooms, running water, and electricity. Painted in
                        the centre is the Oshawa Carriage Works with their
                        employees out front. Back behind the Oshawa Carriage
                        Works is Oshawa's Newspaper at the time. "The Oshawa
                        Daily Reformer" later to become the "Oshawa Times". On
                        the far left of the mural is a depiction of the Oshawa
                        Harbour and Barnhart's Pavilion, the local dance hall,
                        where the youth went to socialize and dance.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import { createSlides } from "../assets/js/slide.js";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import "foundation-sites/dist/js/foundation.min.js";
import "foundation-sites/dist/js/plugins/foundation.core.js";
import "foundation-sites/dist/js/plugins/foundation.tabs.js";
import "foundation-sites/dist/js/plugins/foundation.util.keyboard.js";
import "foundation-sites/dist/js/plugins/foundation.util.imageLoader.js";

export default {
    name: "RouteInfo",
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            options: {
                type: "fade",
                rewind: true,
                gap: "1rem",
                perPage: 1,
                arrows: true,
                // autoplay: true,
                drag: true,
                cover: true,
                height: "10rem",
                pagination: true,
                direction: "ltr",
            },
            count: 0,
            open: true,
        };
    },
    methods: {
        moved(splide, newIndex) {
            console.log("moved", newIndex);
        },
        showExtended() {
            this.open = false;
            if ($(".scroll_up").is("#open")) {
                $(".info").hide();
                $("#routeInfo").css({ height: "85vh" });
                $(".info_container ").css({ height: "630px" });
                $(".ext_info").show();
                $(".scroll_up")
                    .remove("id")
                    .attr("id", "close");
            } else {
                this.open = true;
                $(".ext_info").hide();
                $("#routeInfo").css({ height: "55vh" });
                $(".info_container ").css({ height: "400px" });
                $(".info").show();
                $(".scroll_up")
                    .remove("id")
                    .attr("id", "open");
            }
        },
    },
    mounted() {
        $(document).foundation();
    },
};
</script>

<style scoped>
#routeInfo {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    height: 55vh;
    width: 100vw;
    position: absolute;
    z-index: 10;
    bottom: 0%;
    overflow: hidden;
}

.ext_info {
    display: none;
}

.scroll_up {
    height: 1.2rem;
    background-color: #3360a9;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    color: #fff;
}

.scroll_up p {
    font-weight: 800;
    font-size: 0.9rem;
}

.info_container {
    height: 400px;
    width: 100vw;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0.7rem;
    padding-top: 1rem;
    overflow-y: scroll;
    bottom: 6%;
    padding-bottom: 5vh;
}

.slider_container {
    height: 10rem;
    background: rgb(194, 216, 223);
    border-radius: 10px;
}

#info-tabs {
    background-color: #fff;
    border: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.list_table {
    display: table;
    margin: 0 auto;
}

.tabs-title {
    margin-left: 20px;
    margin-top: 5px;
}

.tabs-title > a {
    padding: 5px 30px;
    color: #ccc;
    font-size: 1rem;
    text-transform: uppercase;
    background: transparent;
    letter-spacing: 1px;
    margin-left: -10px;
}

.tabs-title > a:focus,
.tabs-title > a[aria-selected="true"] {
    color: #fff;
}

.info {
    margin-top: 15px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.tabs .is-active {
    background-color: #3360a9;
    color: #fff;
    text-decoration: underline;
    border-radius: 5px;
    text-underline-offset: 4px;
}

.tabs-panel {
    padding: 20px 20px 10px 20px;
}

.info_text {
    text-align: left;
}

.contact_info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 6px;
}

.sub_heading {
    text-align: left;
    padding-left: 10px;
}

.sub_heading span {
    margin-right: 10px;
}

.tab_text {
    text-align: right;
}

/* Extended Info CSS */
.ext_info {
    width: 100vw;
}

.ext-container {
    width: 100%;
    padding: 10px 1rem;
    border-radius: 7px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin: 20px 0;
}

.ext_heading {
    margin: 0 100px;
    margin-bottom: 20px;
    background-color: #3360a9;
    border-radius: 6px;
}

.ext_heading_text {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-transform: uppercase;
}

.contact_info i {
    color: #3360a9;
    font-size: 1.3rem;
}
</style>
