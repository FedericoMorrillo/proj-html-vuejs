<!--JS/VUE-->
<script>
export default {
    data() {
        return {
            boxes: [
                {
                    title: "Tradition",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    title: "Security",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    title: "Certificate",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    title: "Expertise",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ]
        }
    }
}
</script>
<!--/JS/VUE -->

<!--HTML-->
<template>
    <section>

        <!--container-->
        <div class="container flex">

            <!--col1-->
            <div class="col">

                <!--titles-->
                <h6>ABOUT THE NETWORK</h6>

                <div class="flex">
                    <h1 class="the">The</h1>
                    <h1>Company</h1>
                </div>
                <!--/titles-->

                <!--contenuto-->
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error officiis rerum necessitatibus aperiam
                    laudantium consequuntur nam iste porro perferendis rerum necessitatibus aperiam</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque consequatur voluptates quod
                    excepturi</p>
                <!--/contenuto-->

            </div>
            <!--/col1-->

            <!--col2-->
            <div class="col flex wrap">

                <!--box-->
                <div class="box" v-for="box in boxes">
                    <h2>O {{ box.title }}</h2>
                    <p>{{ box.desc }}</p>
                </div>
                <!--/box-->

            </div>
            <!--/col2-->

        </div>
        <!--/container-->

    </section>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/variable.scss";

section {
    background-color: $background1;
    color: white;

    .container {
        gap: 5rem;
        justify-content: center;


        .col {
            width: 40%;
            margin-top: 6.25rem;
            padding-bottom: 8.125rem;
            color: $subtitle;

            .box {
                margin-top: 1.875rem;

                max-width: 12.5rem;

                h2 {
                    color: white;
                }

                p {
                    margin-top: 20px;
                }
            }

            h6 {
                color: $subtitle;
                margin-bottom: 1.625rem;
                font-size: .75rem;
            }

            .the {

                border-radius: 5px;
                background-color: #0e272d;
            }

            h1 {
                font-size: 2.5rem;
                padding: .625rem;
                color: white;
            }

            p {
                margin-top: 1.5625rem;
            }
        }
    }



}
</style>
<!--/SCSS-->