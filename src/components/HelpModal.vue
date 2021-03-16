<template>
    <div class="helpHeader grid-x grid-padding-x">
        <div class="helpMenu grid-x small-11 small-offset-1">
            <button class="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="grid-y   grid-padding-y    small-12">
                <div class="grid-x paddImage">
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3 " src="../assets/img/restaurant.svg">
                        <p>Restaurant</p>
                    </div>
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3 " src="../assets/img/school.svg">
                        <p>School</p>
                    </div>
                </div>
                <div class="grid-x paddImage">
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3 " src="../assets/img/park.svg">
                        <p>Park</p>
                    </div>
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3 " src="../assets/img/camera.svg">
                        <p>Photo Spot</p>
                    </div>
                </div>
                <div class="grid-x paddImage">
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3" src="../assets/img/store.svg">
                        <p>Stores</p>
                    </div>
                    <div class="grid-x small-6 iconContainer">
                        <img class="small-3" src="../assets/img/supermarket.svg">
                        <p>Groceries</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelpModal',
}
</script>

<style scoped>
.helpHeader{
    position: relative;
    text-align: right;
    z-index: 2;
    background-color: #647eb5;
}
.helpMenu{
    position: absolute;
    top:30%;
    right:4%;
    margin:0 auto 0 auto;
    border: solid 4px #f8971d;
    z-index: 2;
    background-color: rgba(255,255,255,0.9);
    border-radius: 20px;
}
.paddImage{
    margin:10px 0 10px 0;
    padding: 0;
}

.iconContainer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center ;
}




</style>