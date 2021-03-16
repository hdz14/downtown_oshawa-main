<template>
    <div id="app">
        <router-view />
        <Splash></Splash>
        <dataRoute></dataRoute>
        <button type="button" class="button" data-toggle="hamburger_menu" :click="openMenu">
            <div class="menu-icon"></div>
        </button>
        <Hamburger />
        <Map />
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import Hamburger from './components/Hamburger.vue';
import Splash from './components/Splash.vue';
import dataRoute from './routers.json';


$(document).foundation();

export default {
    name: "App",
    components: {
        Map,
        Footer,
        Hamburger,
        Splash
    },
    data: function() { 
        return {
        data_Murals: dataRoute.Murals,
        data_Arm_Chair: dataRoute.Arm_Chair
        }
    },
    methods: {
        openMenu() {
            $(this.$el).foundation();
            console.log(this.data_Muralls);
            console.log(this.data_Arm_Chair);
        }
    },

    mounted() {
        $(this.$el).foundation();
    },

};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #647eb5;
}

#hamburger_menu {
    height: 100vh;
    background-color: #000;
}

.button {
    position: absolute;
    top: 20px;
    left: 14px;
    z-index: 100;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    background-color: #f8f8f8;
    color: #14679e;
    box-shadow: 1px 2px 5px #888;   
}

.button:focus, .button:hover {
    background-color: #f8f8f8;
    color: #3360A9;
    /* box-shadow: 1px 2px 5px #888; */
}

.menu-icon::after  {
    background:#3360A9;
    box-shadow: 0 7px 0 #3360A9, 0 14px 0 #3360A9;
}
.menu-icon:hover::after {
    background:#3360A9;
    box-shadow: 0 7px 0 #3360A9, 0 14px 0 #3360A9;
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
</style>
