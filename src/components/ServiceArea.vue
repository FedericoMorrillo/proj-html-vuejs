<!--JS/VUE-->
<script>
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default {
    data() {
        return {
            services: [
                {
                    icon: faNetworkWired,
                    arrow: faArrowRight,
                    name: "Audit & Assurance",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: faBriefcase,
                    arrow: faArrowRight,
                    name: "Financial Advisory",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: faChartSimple,
                    arrow: faArrowRight,
                    name: "Analytics and M&A",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: faPlaneUp,
                    arrow: faArrowRight,
                    name: "Middle Marketing",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: faEarthEurope,
                    arrow: faArrowRight,
                    name: "Legal Consulting",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: faInbox,
                    arrow: faArrowRight,
                    name: "Regulatory Risk",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
            ]
        }
    }
}
</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
    <section>
        <!--container-->
        <div class="container">

            <!--titles-->
            <h5>OUR BUSINESS AREA</h5>
            <div class="flex">
                <h2 class="h2-first-text">Excellence in</h2>
                <h2 class="h2-second-text">Service</h2>
            </div>
            <!--titles-->

            <!--description-->
            <div class="flex justify-btn align-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt impedit beatae quibusdam,
                    voluptatibus eum inventore, rerum aliquam dolor cumque commodi. Officiis assumenda fugit reprehenderit,
                    cupiditate eum temporibus ratione</p>
                <button class="btn btn-grey">SEE ALL</button>
            </div>
            <!--/description-->

            <!--contenitore delle cards-->
            <div class="card-box flex wrap">

                <!--card-->
                <div class="card flex" v-for="service in services">
                    <div class="col1">
                        <div><font-awesome-icon :icon=service.icon class="icon" />
                        </div>
                        <h3>{{ service.name }}</h3>
                        <p>{{ service.desc }}</p>
                    </div>
                    <div class="col2">
                        <div><font-awesome-icon class="icon arrow" :icon=service.arrow /></div>
                    </div>
                </div>
                <!--card-->

            </div>
            <!--contenitore delle cards-->

        </div>
        <!--/container-->
    </section>
</template>
<!--HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/variable.scss";
@import "../scss/utils.scss";

.icon {
    width: 2.5rem;
    height: 2.5rem;
    color: #058283;
}

.arrow {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    padding: .3125rem;
}

section {
    background-color: #eef4ed;

    h5 {
        padding-top: 6.25rem;
        margin-bottom: 1.25rem;
        color: $subtitle;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;

    }

    .h2-first-text {
        color: $titleDarkText;
        padding: .3125rem .3125rem .3125rem 0;
    }

    .h2-second-text {
        color: #058283;
        background-color: #cce3de;
        padding: .3125rem .625rem;
    }

    p {
        font-size: $fontBase;
        width: 80%;
        color: #058283;
    }

    .card-box {
        margin-top: 2.5rem;
        padding-bottom: 8.125rem;
        gap: 1.25rem;

        .card {
            width: calc(100% / 3 - .875rem);
            background-color: white;
            padding: 30px;
            border-radius: 5px;

            h3 {
                padding: 1.25rem 0;
                font-size: 1.5rem;
                color: $titleDarkText ;
            }

            .col1 {
                width: 90%;

                p {
                    margin-bottom: 10px;
                }
            }
        }
    }

}

button {
    height: 2.5rem;
    padding: 0 1.25rem;
}
</style>
<!--/SCSS-->