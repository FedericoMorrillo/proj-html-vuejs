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
            <div class="working-hours">Open Hours: Mon - Sat - 9:00 - 18:00</div>
            <ul class="contact flex">
                <li class="info">+1 (305) 1234-5678</li>
                <li class="info">hello@example.com</li>
                <li class="info">fb</li>
                <li class="info">twt</li>
                <li class="info">in</li>
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
}
</style>
<!--/SCSS-->