<template>
    <div class="footer grid-x grid-padding-x">
        <div class="cell small-12 footerContainer">
            <img
                class="footerLogo"
                src="../assets/img/oshawa_city_logo_copy.png"
                alt="oshawa city logo"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #3360a9;
    color: #ffffff;
    /* padding: 10px; */
    z-index: 1000;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 5vh;
}

/* logo-white 1 */
.footerContainer {
    display: flex;
    place-content: center;
    place-items: center;
}
.footerLogo {
    position: absolute;
    bottom: 0;
    width: 22%;
}
</style>
