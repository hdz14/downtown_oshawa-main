<template>
    <div id="armChairRoute1">
        <RouteNav routeNum="Murals" stopNum="Stop 1" address="Location Address"></RouteNav>
        <div class="stop" id="stop1" @click="showInfo">
            <img src="../assets/img/park.svg" alt="POIs">
        </div>
        <RouteInfo></RouteInfo>
    </div>
</template>

<script>
import RouteNav from '@/components/RouteNav.vue'
import RouteInfo from '@/components/RouteInfo.vue'
export default {
    name: 'armChairRoute1',
    components: {
        RouteNav,
        RouteInfo
    },
    methods: {
        showInfo() {
            let info = document.querySelector('#routeInfo');
            info.style.display = "block";
        }
    }
}
</script>

<style scoped>
    .stop {
        position: fixed;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        z-index: 10;
        top: 250px;
        left: 30px;
    }

    .stop p {
        color: #fff;
        line-height: 50px;
        text-align: center;
    }

    .stop:hover {
        cursor: pointer;
    }

    #routeInfo {
        display: none;
    }
</style>