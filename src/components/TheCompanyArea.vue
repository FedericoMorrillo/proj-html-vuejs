<!--JS/VUE-->
<script>
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
export default {
    data() {
        return {
            boxes: [
                {
                    icon: faMedal,
                    title: "Tradition",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    icon: faLock,
                    title: "Security",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    icon: faPenToSquare,
                    title: "Certificate",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    icon: faGraduationCap,
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
                <h5>ABOUT THE NETWORK</h5>

                <div class="flex">
                    <h2 class="the">The</h2>
                    <h2>Company</h2>
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
                    <h3><span><font-awesome-icon :icon=box.icon class="icon" /></span> {{ box.title }}</h3>
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

.icon {
    width: 1.875rem;
    height: 1.875rem;
}

section {
    background-color: $backgroundDark;
    color: white;

    .container {
        gap: 5rem;
        justify-content: space-between;


        .col {
            width: 45%;
            margin-top: 6.25rem;
            padding-bottom: 8.125rem;
            color: $subtitle;
            gap: 1.875rem;

            .box {
                margin-top: 1.875rem;

                max-width: 12.5rem;

                h3 {
                    color: white;
                    font-size: 1.5625rem;
                }

                p {
                    margin-top: 20px;
                }
            }

            h5 {
                color: $subtitle;
                margin-bottom: 1.625rem;
                font-size: .75rem;
            }

            .the {

                border-radius: 5px;
                background-color: $backgroundTextDark;
            }

            h2 {
                font-size: 2.5rem;
                padding: .625rem;
                color: white;
            }

            p {
                font-size: 1.125rem;
                margin-top: 1.5625rem;
            }
        }
    }



}
</style>
<!--/SCSS-->