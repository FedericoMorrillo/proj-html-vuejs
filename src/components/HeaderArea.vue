<!--JS/VUE-->
<script>
import JumboArea from './JumboArea.vue';
export default {
    components: { JumboArea }
}
</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
    <!--barra superiore contatti-->
    <div class="head-bar">
        <div class="container flex justify-btn">
            <div class="working-hours"><span class="icon"><font-awesome-icon :icon="['fas', 'clock']" /></span>Open Hours:
                Mon - Sat - 9:00 - 18:00</div>
            <ul class="contact flex">
                <li class="info"> <span class="icon"><font-awesome-icon :icon="['fas', 'phone']" /></span> +1 (305)
                    1234-5678</li>
                <li class="info"><span class="icon"><font-awesome-icon :icon="['fas', 'envelope']" /></span>
                    hello@example.com</li>
                <li class="info"><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                <li class="info"><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                <li class="info"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
            </ul>
        </div>
    </div>
    <!--/barra superiore contatti-->

    <JumboArea />
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/utils.scss";

.head-bar {
    background-color: #21333e;
    padding: 1.0625rem 0;
    color: #c0c3d0;
    font-size: .875rem;

    .info {
        margin: 0 .9375rem;
    }

    .icon {
        margin-right: .3125rem;
    }
}
</style>
<!--/SCSS-->