<template>
    <div class="grid-y" id="home">
        <div class="help align-right align-self-bottom" data-open="modal">
            <i class="far fa-question-circle"></i>
        </div>
        <HelpModal class="reveal" id="modal" data-reveal>
        </HelpModal>
    </div>
    
</template>

<script>
// @ is an alias to /src

import HelpModal from "@/components/HelpModal.vue";
import "foundation-sites/dist/js/foundation.min.js";
import "foundation-sites/dist/js/plugins/foundation.core.js";
import "foundation-sites/dist/js/plugins/foundation.reveal.js";
import "foundation-sites/dist/js/plugins/foundation.util.keyboard.js";
import "foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js";
import "foundation-sites/dist/js/plugins/foundation.util.triggers.js";
import "foundation-sites/dist/js/plugins/foundation.util.motion.js";
import "foundation-sites/dist/js/plugins/foundation.util.touch.js";
import $ from "jquery";

export default {
    name: "Home",
    components: {
        HelpModal
    },
    mounted() {
        $(document).foundation();
    }
};
</script>

<style scoped>
#home{
    position: relative;
    background-color: #647eb5;
  /* height: 100vh; */
}
#modal {
    background: rgba(20,20,20,0.5);
}

.help {
    z-index: 200;
    background: orange;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f8f8f8;
    position: absolute;
    top: 20px;
    right: 14px;
    /* margin-top: 1.5rem;
    margin-right: 0.5rem; */
}

template {
    overflow-x: hidden;
}
</style>
