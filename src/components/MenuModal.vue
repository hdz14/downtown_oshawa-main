<template>
    <div class="menuHeader grid-x grid-padding-x">
        <!-- <div class="restMenu grid-x">
            <img class="paddImage" src="../assets/img/orangeIcon.png">
            <img class="paddImage" src="../assets/img/orangeIcon.png">
            <img class="paddImage" src="../assets/img/orangeIcon.png">
        </div> -->
        <div class="routesMenu grid-y">
            <img class="paddroutes" src="../assets/img/orangeIcon.png">
            <img class="paddroutes" src="../assets/img/orangeIcon.png">
            <img class="paddroutes" src="../assets/img/orangeIcon.png">
        </div>
    </div>

    
    
</template>

<script>
export default {
    name: 'MenuModal',
}
</script>

<style scoped>
.menuHeader{
    position: relative;
    z-index: 2;
}
.restMenu{
    position: absolute;
    top:2%;
    left:15%;
    z-index: 2;
}

.routesMenu{
    position: absolute;
    top:70px;
    left:5%;
    z-index: 2;
}
.paddImage{
    padding-right: 10px;
}
.paddroutes{
    padding-bottom:10px;
}
</style>