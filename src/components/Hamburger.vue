<template>
    <div class="hamburger">
        <div class="grid-container grid-x">
            <div class="cell small-12">
                <div
                    class="off-canvas-absolute position-left"
                    id="hamburger_menu"
                    data-off-canvas
                    data-transition="overlap"
                >
                    <div class="logo_container">
                        <router-link to="/">
                            <img src="../assets/img/oshawa_town_logo.png" />
                        </router-link>
                    </div>

                    <ul class="vertical accordion-menu" data-accordion-menu>
                        <li class="nav-wrap-item">
                            <div class="nav-item">
                                <img src="" alt="" />
                                <div class="title">
                                    <p class="titleText">ARM CHAIR</p>
                                    <p class="description">
                                        Malesuada bibendum arcu vitae elementum.
                                        Amet nisl purus in mollis nunc sed.
                                    </p>
                                </div>
                                <i
                                    class="fas fa-chevron-down drop-item"
                                    @click="setSelectedItem(1)"
                                ></i>
                            </div>
                            <div
                                v-show="selectedItem == 1"
                                class="nav-extended"
                            >
                                <ul>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 1</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 2</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 3</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-wrap-item">
                            <div class="nav-item">
                                <img src="" alt="" />
                                <div class="title">
                                    <p class="titleText">DEVELOPMENT</p>
                                    <p class="description">
                                        Malesuada bibendum arcu vitae elementum.
                                        Amet nisl purus in mollis nunc sed.
                                    </p>
                                </div>
                                <i
                                    class="fas fa-chevron-down drop-item"
                                    @click="setSelectedItem(2)"
                                ></i>
                            </div>
                            <div
                                v-show="selectedItem == 2"
                                class="nav-extended"
                            >
                                <ul>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 1</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 2</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 3</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-wrap-item">
                            <div class="nav-item">
                                <img src="" alt="" />
                                <div class="title">
                                    <p class="titleText">PUBLIC ART</p>
                                    <p class="description">
                                        Malesuada bibendum arcu vitae elementum.
                                        Amet nisl purus in mollis nunc sed.
                                    </p>
                                </div>
                                <i
                                    class="fas fa-chevron-down drop-item"
                                    @click="setSelectedItem(3)"
                                ></i>
                            </div>
                            <div
                                v-show="selectedItem == 3"
                                class="nav-extended"
                            >
                                <ul>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 1</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 2</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 3</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-wrap-item">
                            <div class="nav-item">
                                <img
                                    src="../assets/img/murals/2/4a79cbc2-4f5c-46b3-bec9-47ad822506ab_d.jpg"
                                    alt="murals"
                                />
                                <div class="title">
                                    <p class="titleText">MURALS</p>
                                    <p class="description">
                                        Discover artworks attached to buildings
                                        & enjoy free-standing sculptures and
                                        view a range of murals.
                                    </p>
                                </div>
                                <i
                                    class="fas fa-chevron-down drop-item"
                                    @click="setSelectedItem(4)"
                                ></i>
                            </div>
                            <div
                                v-show="selectedItem == 4"
                                class="nav-extended"
                            >
                                <ul>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 1</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 2</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/armChairRoute1"
                                            >Route 3</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- <li class="main_list">
                            <a href="#"
                                ><img class="img_container" src="" />Arm
                                Chair</a
                            >
                            <ul class="menu vertical nested sub_list">
                                <li>
                                    <router-link to="/armChairRoute1"
                                        >Route1</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="\">Route2</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="main_list">
                            <a href="#"
                                ><img
                                    class="img_container"
                                    src=""
                                />Devlopment</a
                            >
                            <ul class="menu vertical nested sub_list">
                                <li>
                                    <router-link to="\">Route1</router-link>
                                </li>
                                <li>
                                    <router-link to="\">Route2</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="main_list">
                            <a href="#"
                                ><img class="img_container" src="" />Public
                                Art</a
                            >
                            <ul class="menu vertical nested sub_list">
                                <li>
                                    <router-link to="\">Route1</router-link>
                                </li>
                                <li>
                                    <router-link to="\">Route2</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="main_list">
                            <a href="#"
                                ><img class="img_container" src="" />Mural</a
                            >
                            <ul class="menu vertical nested sub_list">
                                <li>
                                    <router-link to="\">Route1</router-link>
                                </li>
                                <li>
                                    <router-link to="\">Route2</router-link>
                                </li>
                            </ul>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import "foundation-sites/dist/js/foundation.min.js";
import "foundation-sites/dist/js/plugins/foundation.core.js";
import "foundation-sites/dist/js/plugins/foundation.offcanvas.js";
import "foundation-sites/dist/js/plugins/foundation.util.keyboard.js";
import "foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js";
import "foundation-sites/dist/js/plugins/foundation.util.triggers.js";

export default {
    name: "Hamburger",
    mounted() {
        $(document).foundation();
    },

    methods: {
        setSelectedItem(item) {
            if (this.selectedItem === item) {
                console.log("same", item);
                this.selectedItem = 0;
            } else {
                console.log("not same", item);
                this.selectedItem = item;
            }
        },
    },
    data: () => {
        return {
            selectedItem: 0,
        };
    },
};
</script>

<style scoped>
#hamburger_menu {
    height: 100%;
    background-color: #f8f8f8;
    width: 75vw;
    padding-bottom: 5.5vh;
}

.logo_container {
    height: 8rem;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7em;
}
.logo_container img {
    margin: 0 auto;
}

.img_container {
    background: grey;
    width: 4rem;
    height: 100%;
    border-radius: 10px;
}

ul {
    padding: 0 3%;
}

.nav-item {
    height: 5rem;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    position: relative;
    z-index: 300;
    align-items: center;
}
.nav-item img {
    background: rgb(191, 191, 191);
    height: 4rem;
    width: 4rem;
    border-radius: 10px;
    object-fit: cover;
}
.title {
    text-align: left;
    margin: 0 2%;
}
.titleText {
    font-weight: 900;
}
.description {
    font-size: 0.8rem;
    line-height: 1;
}
.drop-item {
    display: flex;
    align-items: center;
}

.accordion-menu a {
    padding: 0;
}
.nav-extended {
    background: #f2f5fa;
    padding: 4% 3% 1% 3%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 200;
    margin-top: -10px;
    padding-top: 15px;
    border-radius: 0px 0px 10px 10px;
}
.nav-extended ul {
    padding: 0;
    margin: 0;
    text-align: left;
}
.nav-extended ul li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.112);
    padding: 0.3rem 0;
}
.nav-extended ul li:hover {
    background-color: rgba(0, 0, 0, 0.153);
}
.nav-extended ul li:last-child {
    border: none;
}

.sub_list {
    z-index: 100;
}

.nav-item {
    height: auto;
}

.description {
    line-height: 1.1;
}
</style>
