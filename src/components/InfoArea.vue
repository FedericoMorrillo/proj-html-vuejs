<!--JS/VUE-->
<script>
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default {
    data() {
        return {
            contacts: [
                {
                    title: "About",
                    infos: [
                        {
                            icon: faChevronRight,
                            name: "The Company",
                        },
                        {
                            icon: faChevronRight,
                            name: "Institutional",
                        },
                        {
                            icon: faChevronRight,
                            name: "Social & Events",
                        },
                        {
                            icon: faChevronRight,
                            name: "Innovation",
                        },
                        {
                            icon: faChevronRight,
                            name: "Environment",
                        },
                        {
                            icon: faChevronRight,
                            name: "Technology",
                        },
                    ],
                },
                {
                    title: "Services",
                    infos: [
                        {
                            icon: faChevronRight,
                            name: "Audit & Assurance",
                        },
                        {
                            icon: faChevronRight,
                            name: "Financial Advisory",
                        },
                        {
                            icon: faChevronRight,
                            name: "Analytics M&A",
                        },
                        {
                            icon: faChevronRight,
                            name: "Middle Marketing",
                        },
                        {
                            icon: faChevronRight,
                            name: "Legal Consulting",
                        },
                        {
                            icon: faChevronRight,
                            name: "Regulatory Risk",
                        },
                    ],
                },
                {
                    title: "Support",
                    infos: [
                        {
                            icon: faChevronRight,
                            name: "Responsibility",
                        },
                        {
                            icon: faChevronRight,
                            name: "Terms of Use",
                        },
                        {
                            icon: faChevronRight,
                            name: "About Cookies",
                        },
                        {
                            icon: faChevronRight,
                            name: "Privacy Policy",
                        },
                        {
                            icon: faChevronRight,
                            name: "Accessibility",
                        },
                        {
                            icon: faChevronRight,
                            name: "Information",
                        },
                    ],
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
        <div class="container flex">

            <!--col1-->
            <div class="col1">
                <!--logo-->
                <div class="logo flex">
                    <div class='logo-1 flex'>
                        <div class='word'>N</div>
                        <div class='word'>E</div>
                        <div class='word'>X</div>
                    </div>
                    <div class="logo-2 flex">
                        <div class='word'>G</div>
                        <div class='word'>E</div>
                        <div class='word'>N</div>
                    </div>
                </div>
                <!--/logo-->

                <div class="info">
                    <div class="pad-b">
                        A Functional HTML Template for Corporate & Business.
                    </div>
                    <div class="pad-t">
                        <span><font-awesome-icon icon="fa-solid fa-phone" /></span>+1(305) 1234-5678
                    </div>
                    <div class="pad-t">
                        <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>hello@example.com
                    </div>
                    <div class="pad-t pad-b">
                        <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>Main Avenue, 987
                    </div>
                    <button class="btn">GET IN TOUCH</button>
                </div>

            </div>
            <!--/col1-->

            <!--col2-->
            <div class="col2 flex">

                <!--card-->
                <div class="card" v-for="contact in contacts">

                    <!--title-->
                    <h2 class="pad-b">{{ contact.title }}</h2>
                    <!--/title-->
                    <ul>
                        <li v-for="info in contact.infos">
                            <span><font-awesome-icon :icon=info.icon /></span>
                            <a href="#">{{ info.name }}</a>
                        </li>
                    </ul>
                </div>
                <!--/card-->
            </div>
            <!--/col2-->
        </div>
    </section>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/utils.scss";
@import "../scss/variable.scss";
@import "../scss/general.scss";

span {
    margin-right: .625rem;
}

section {
    padding: 8.125rem 0 8.125rem 0;
    background-color: $backgroundDark;

    .col1 {
        width: 20%;

        .word {
            padding: 0 .25rem;
            font-weight: 800;
        }

        .logo-1 {
            background-color: $backgroundTextDark;
            color: $subtitle;
            padding: .9375rem .25rem .9375rem 1.875rem;
            border-top-left-radius: 40px;
            border-bottom-left-radius: 40px;
        }

        .logo-2 {
            color: #c0c3d0;
            padding: .9375rem .3125rem .9375rem .25rem;
        }

        .info {
            margin-top: 1.25rem;
            color: #c0c3d0;
        }

        button {
            background-color: transparent;
            border: 1px solid #c0c3d0;
            color: #f9f9f9;
            margin-top: .625rem;
            padding: .625rem 1.5625rem;
        }
    }

    .col2 {
        width: 70%;
        padding-left: .625rem;
        margin-left: 6%;
        gap: 31px;

        .card {
            width: calc(100% / 3 - 1.25rem);
            padding: 1.875rem 2.5rem;
            background-color: #19191f;
            color: #c0c3d0;

            h2 {
                color: white;
            }

            li {
                padding-bottom: 10px;

                a {
                    color: #c0c3d0;
                }
            }
        }
    }
}
</style>
<!--/SCSS-->