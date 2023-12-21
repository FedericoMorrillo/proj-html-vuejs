<!--JS/VUE-->
<script>
export default {
    data() {
        return {
            cards: [
                {
                    name: "news-1",
                    img: "../src/assets/news-1.jpg",
                    title: "Increasing creativity is possible for everyone",
                },
                {
                    name: "news-2",
                    img: "../src/assets/news-2.jpg",
                    title: "Because market research is part of the business plan",
                },
                {
                    name: "news-3",
                    img: "../src/assets/news-3.jpg",
                    title: "Working from home is now a trend",
                },
            ]
        }
    }
}
</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
    <!--container-->
    <section class="container">

        <!--titles-->
        <h5>OUR EDITORIAL CONTENT</h5>
        <div class="flex">
            <h2>LATEST</h2>
            <h2 class="h2-last-text">NEWS</h2>
        </div>
        <!--/titles-->

        <!--description & button-->
        <div class="flex justify-btn align-end">
            <p>Every week we publish content about what is best in the business world</p>
            <button class="btn btn-grey">SEE ALL</button>
        </div>
        <!--/description & button-->

        <!--cards box-->
        <div class="cards-box flex">

            <!--cards-->
            <div class="card" v-for="card in cards">

                <!--img-->
                <img :src="card.img" :alt="card.name">
                <!--/img-->

                <!--title-->
                <div class="title flex align-end">
                    <h3>{{ card.title }}</h3>
                </div>
                <!--/title-->

            </div>
            <!--/cards-->

        </div>
        <!--/cards box-->

    </section>
    <!--/container-->
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/utils.scss";
@import "../scss/variable.scss";

section {
    padding: 8.125rem 0 7.5rem 0;

    h5 {
        color: $subtitle;
        margin-bottom: 1.25rem;
    }

    h2 {
        font-size: $fontTitle;
        color: $titleDarkText;
        padding: .3125rem .625rem;
    }

    .h2-last-text {
        background-color: $backgroundText;
        color: #058283;
    }

    p {
        color: $subtitle;
        font-size: $fontBase;
    }

    button {
        height: 2.5rem;
        padding: 0 1.25rem;
    }

    .cards-box {
        gap: 1.875rem;
        margin-top: 2.5rem;

        .card {
            width: calc(100% / 3 - 1.25rem);
            object-fit: cover;
            position: relative;

            img {
                width: 100%;
                border-radius: .3125rem;
                display: block;
            }

            .title {
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 1.25rem 1.25rem;
                text-align: center;
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;
                height: 100%;
                border-radius: .3125rem;

                h3 {
                    font-size: 1.5625rem;
                    color: white;
                }
            }
        }
    }

}
</style>
<!--/SCSS-->