<!--JS/VUE-->
<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: "icona",
                    arrow: "arrow",
                    name: "Audit & Assurance",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: "icona",
                    arrow: "arrow",
                    name: "Financial Advisory",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: "icona",
                    arrow: "arrow",
                    name: "Analytics and M&A",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: "icona",
                    arrow: "arrow",
                    name: "Middle Marketing",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: "icona",
                    arrow: "arrow",
                    name: "Legal Consulting",
                    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                },
                {
                    icon: "icona",
                    arrow: "arrow",
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
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt impedit beatae quibusdam,
                    voluptatibus eum inventore, rerum aliquam dolor cumque commodi. Officiis assumenda fugit reprehenderit,
                    cupiditate eum temporibus ratione</article>
                <button class="btn btn-grey">SEE ALL</button>
            </div>
            <!--/description-->

            <!--contenitore delle cards-->
            <div class="card-box flex wrap">

                <!--card-->
                <div class="card flex" v-for="service in services">
                    <div class="col1">
                        <div>{{ service.icon }}</div>
                        <h3>{{ service.name }}</h3>
                        <p>{{ service.desc }}</p>
                    </div>
                    <div class="col2">
                        <div>{{ service.arrow }}</div>
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

section {
    background-color: #eef4ed;

    h5 {
        padding-top: 6.25rem;
        margin-bottom: 1.25rem;
        color: $subtitle;
    }

    h2 {
        font-size: 2.1875rem;
        margin-bottom: 20px;

    }

    .h2-first-text {
        color: #21333e;
        padding: .3125rem .3125rem .3125rem 0;
    }

    .h2-second-text {
        color: #058283;
        background-color: #cce3de;
        padding: .3125rem .625rem;
    }

    article {
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