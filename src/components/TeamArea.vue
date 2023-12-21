<!--JS/VUE-->
<script>
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export default {
    data() {
        return {
            team: [
                {
                    img: "../src/assets/team-1.jpg",
                    name: "David Cooper",
                    profession: "CTO &CO-FOUNDER",
                    fb: faFacebookF,
                    twt: faTwitter,
                    in: faLinkedinIn,
                },
                {
                    img: "../src/assets/team-3.jpg",
                    name: "Oliver Jones",
                    profession: "CHIEF PROCUREMENT",
                    fb: faFacebookF,
                    twt: faTwitter,
                    in: faLinkedinIn,
                },
                {
                    img: "../src/assets/team-2.jpg",
                    name: "Emma Lopez",
                    profession: "CHIEF MARKETING",
                    fb: faFacebookF,
                    twt: faTwitter,
                    in: faLinkedinIn,
                },
                {
                    img: "../src/assets/team-4.jpg",
                    name: "T.JOHNSON",
                    profession: "CEO & PRESIDENT",
                    fb: faFacebookF,
                    twt: faTwitter,
                    in: faLinkedinIn,
                },
            ]
        }
    }
}
</script>
<!--JS/VUE-->

<!--HTML-->
<template>
    <section>
        <div class="container flex">

            <!--colonna1-->
            <div class="col1">
                <!--titles-->
                <h5>WE LIKE WHAT WE DO</h5>
                <div class="flex">
                    <h2 class="h2-first-text">Team</h2>
                    <h2>of Experts</h2>
                </div>
                <!--/titles-->

                <!--description-->
                <p>Ethics and integrity are the bases on which our professionals build thei careers. <br> They are
                    fundamentals
                    that become daily attitudes.</p>
                <!--/description-->

                <div class="team flex wrap">
                    <div class="card flex" v-for="user in  team ">
                        <div class="photo">
                            <img :src="user.img" :alt="user.name">
                        </div>
                        <div class="info">
                            <h3>{{ user.name }}</h3>
                            <h4>{{ user.profession }}</h4>
                            <div class="flex">
                                <span class="box-i"><a href=""><font-awesome-icon :icon=user.fb class="icon" /></a></span>
                                <span class="box-i"><a href=""><font-awesome-icon :icon=user.twt class="icon" /></a></span>
                                <span class="box-i"><a href=""><font-awesome-icon :icon=user.in class="icon" /></a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--/colonna1-->

            <!--colonna2-->
            <div class="col2">
                <h3>President Speech</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sint maxime doloremque perferendis
                    rem tempora.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Eos dolores quibusdam temporibus quam eveniet adipisci necessitatibus architecto
                    deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptatum neque dicta illo a at
                    quis, voluptate, natus, repellendus distinctio nulla magni ratione nihil vel!</p>

                <div class="flex justify-btn">
                    <h4>T.Johnson</h4>
                    <font-awesome-icon icon="fa-solid fa-quote-right" class="icon" />
                </div>

            </div>
            <!--/colonna2---->
        </div>

    </section>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import"../scss/variable.scss";
@import "../scss/utils.scss";

.box-i {
    background-color: #0f2128;
    padding: .625rem;
    border-radius: 100%;
    margin: 1.25rem .1875rem;
    cursor: pointer;

    .icon {
        width: .9375rem;
        height: .9375rem;
        color: $subtitle;
    }
}

.container {
    gap: 2.5rem;
}

h3 {
    font-size: 1.5625rem;
    color: white;
    margin-bottom: .625rem;
}

h4 {
    font-size: .875rem;
    color: $subtitle;
}

p {
    font-size: $fontBase;
    color: $subtitle;
    margin-bottom: 2.5rem;
}

section {
    background-color: $backgroundDark;
    padding: 6.25rem 0;

    .col1 {
        width: 60%;

        h5 {
            color: $subtitle;
        }

        h2 {
            font-size: $fontTitle;
            color: white;
            padding: .3125rem .625rem;
            margin: 1.25rem 0;
        }

        .h2-first-text {
            background-color: $backgroundTextDark;
        }

        .team {

            .card {
                width: calc(100% / 2 - 3.125rem);
                margin-bottom: 30px;
                margin-right: 50px;

                .photo {
                    border-radius: .3125rem;
                    width: 6.25rem;
                    object-fit: cover;
                    margin-right: 20px;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .col2 {
        width: 40%;
        background-color: #058283;
        margin-top: 1rem;
        border-radius: .3125rem;
        padding: 1.875rem;
        font-size: $fontBase;
        height: 100%;

        h4 {
            color: white;
            justify-self: flex-start;
            font-size: 1.25rem;
        }

        h3 {
            justify-self: flex-end;
        }

        p {
            margin-bottom: 20px;
        }

        .icon {
            width: 2.5rem;
            height: 2.5rem;
            color: #046162;
        }
    }
}
</style>
<!--SCSS-->