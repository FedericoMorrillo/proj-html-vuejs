<script>
export default {
    data() {
        return {
            navsections: [
                {
                    name: "HOME",
                },
                {
                    name: "ABOUT",
                },
                {
                    name: "SERVICES",
                },
                {
                    name: "PROCESS",
                },
                {
                    name: "TEAM",
                },
                {
                    name: "BLOG",
                },
            ]
        }
    }
};
</script>

<template>
    <!--jumbotron-->
    <div class="jumbo">

        <!--Navbar-->
        <nav class="container flex justify-btn">
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

            <div class="flex">

                <!--links-->
                <ul class="flex">

                    <!--voci navbar-->
                    <li v-for="section in navsections">
                        <a href="#">{{ section.name }}</a>
                    </li>
                    <!--/voci navbar-->

                </ul>
                <!--/links-->

                <!--button-->
                <button>GET TOUCH</button>
                <!--/button-->

            </div>
        </nav>
        <!--/Navbar-->

    </div>
    <!--/jumbotron-->
</template>

<style scoped lang="scss">
@import "../scss/utils.scss";

nav {
    padding-top: 1.25rem;

    .word {
        padding: 0 .25rem;
        font-weight: 800;
    }

    .logo-1 {
        background-color: #bfdcdd;
        color: #00a6a6;
        padding: .9375rem .25rem .9375rem 1.875rem;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
    }

    .logo-2 {
        color: #21333e;
        padding: .9375rem .3125rem .9375rem .25rem;
    }

    li {

        padding: .9375rem .9375rem;

        a {
            color: #21333e;
        }
    }

    button {
        width: 10.625rem;
        padding: .75rem 1.75rem;
        margin: 0 8px 0 15px;
        background-color: #058283;
        border: none;
        border-radius: .3125rem;
        color: white;
        font-weight: 600;
    }
}
</style>