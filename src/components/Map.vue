<template>
    <div class="map">
        <SvgPanZoom :contain="true" :minZoom="5" :mouseWheelZoomEnabled="false" :pinch="true">
            <BlueGold></BlueGold>
        </SvgPanZoom>
    </div>
</template>

<script>
import SvgPanZoom from "vue-svg-pan-zoom";
import BlueGold from "./blue_gold";

export default {
    name: "Map",
    components: {
        SvgPanZoom,
        BlueGold
    }
};
</script>

<style scoped>
.map_min {
    width: 100vw;
    height: 95vh;
}

.map {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #647eb5;
}
</style>
