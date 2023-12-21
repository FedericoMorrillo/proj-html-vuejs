<!--JS/VUE-->
<script>
import InfoArea from './InfoArea.vue';
import NewsletterArea from './NewsletterArea.vue';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default { components: { NewsletterArea, InfoArea } }

</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
    <NewsletterArea />
    <InfoArea />
    <div class="footer-bar">
        <div class="container flex justify-btn">
            <div>Enjoy the low price. We are tracking any intention of piracy.</div>
            <div class="relative">
                <span>&copy; 2020 NEXGEN is Proudly Powered by</span><span class="coding">Coding</span>
                <span class="arrow-up"><a href="#"><font-awesome-icon class="icon" icon="fa-solid fa-arrow-up" /></a></span>
            </div>
        </div>
    </div>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
.footer-bar {
    background-color: #0d0d11;
    color: #c0c3d0;
    font-size: .75rem;
    padding: 20px 0;
}

.coding {
    color: #098079;
    margin-left: 5px;
    margin-right: 20px
}

.relative {
    position: relative;

    .arrow-up {
        position: absolute;
        right: -60px;
        bottom: -13px;
        background-color: #121216;
        padding: 10px;
        border-radius: 100%;

        .icon {
            font-size: 20px;
            color: #0d0f14;
        }
    }
}
</style>
<!--/SCSS-->