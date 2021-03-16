<template>
    <div class="route">
        <div>
            <div class="route_nav grid-x">
                <div class="cell small-7">
                    <div class="callout route_info">
                        <p class="route_info">{{ routeNum }} - {{ stopNum }}</p>
                        <p class="loc">{{ address }}</p>
                    </div>
                </div>
                <div class="cell small-5">
                    <div class="cell next_stop">
                        <p>
                            Next Stop<span
                                ><i class="fas fa-chevron-right"></i
                            ></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RouteNav",
    props: {
        routeNum: {
            type: String,
            default: "Route-1",
        },
        stopNum: {
            type: String,
            default: "Stop-1",
        },
        address: {
            type: String,
            default: "Location Address",
        },
    },
};
</script>

<style scoped>
.route_nav {
    position: absolute;
    width: 85vw;
    height: 3.1rem;
    z-index: 10;
    top: 20px;
    border-radius: 7px;
    /* padding: 5px 10px 5px 50px; */
    background-color: #f8f8f8;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
    right: 1.5rem;
}

.route_info {
    text-align: left;
    font-size: 1rem;
    color: #4f4f4f;
    background-color: #f8f8f8;
    line-height: 1;
}
.callout.route_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin-left: 48px;
}
.callout {
    padding: 0;
    border: none;
    margin-bottom: 0;
}

.loc {
    font-size: 0.8rem;
    line-height: 1;
}

.next_stop p {
    font-weight: 700;
    text-align: center;
    line-height: 3rem;
    color: #3360a9;
    white-space: nowrap;
}
.next_stop p:hover,
.next_stop span:hover {
    color: #ff9900;
}

.next_stop span {
    margin-left: 5px;
}
</style>
