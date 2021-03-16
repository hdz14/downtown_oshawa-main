<template>
    <div class="header grid-x grid-padding-x">
        <div class="cell logo large-12 small-12">
            <img class="logoImg" src="../assets/img/oshawa_city_logo.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.logo {
    /* height: 5rem; */
    border-radius: 5px;
    background-color: #ffffff;
    /* margin: 5px; */
    display: flex;
    place-content: center; 

}
.logoImg{
    width: 50%;
    padding: 1rem;
}
.header{
    background-color: #00539b;
    z-index: 2;
    padding: 10px 1rem;
}
</style>