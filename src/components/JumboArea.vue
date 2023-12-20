<!--JS/VUE-->
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
<!--/JS/VUE-->

<!--HTML-->
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

            <!--links e button-->
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
                <button class="btn btn-grey">GET IN TOUCH</button>
                <!--/button-->

            </div>
            <!--links e button-->

        </nav>
        <!--/Navbar-->

        <!--container form-->
        <div class="container form ">

            <!--titles-->
            <h5>FUSIONS & ACQUISITIONS</h5>
            <h1>Insurance Consulting</h1>
            <!--/titles-->

            <!--form-->
            <form action="#" class="flex wrap">

                <!--inputs-->
                <input type="text" name="name" placeholder="Name">
                <input type="email" name="email" placeholder="Email">
                <input type="text" name="number" placeholder="Phone">
                <!--/inputs-->

                <!--select-->
                <select name="More-info">
                    <option value="">More Info</option>
                    <option value="">info1</option>
                    <option value="">info2</option>
                </select>
                <!--/select-->

                <!--buttons-->
                <button class="btn btn-grey">GET IN TOUCH</button>
                <button class="btn btn-white">READ MORE</button>
                <!--/buttons-->

            </form>
            <!--/form-->

        </div>
        <!--/container form-->


    </div>
    <!--/jumbotron-->
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/utils.scss";
@import "../scss/variable.scss";

.jumbo {
    background-image: url("../assets/bg-6.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

nav {
    padding-top: 1.25rem;

    .word {
        padding: 0 .25rem;
        font-weight: 800;
    }

    .logo-1 {
        background-color: #bfdcdd;
        color: $subtitle;
        padding: .9375rem .25rem .9375rem 1.875rem;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
    }

    .logo-2 {
        color: $titleDarkText;
        padding: .9375rem .3125rem .9375rem .25rem;
    }

    li {

        padding: .9375rem .9375rem;

        a {
            color: #21333e;
        }
    }

    button {
        margin: 0 8px 0 15px;
        padding: .75rem 1.75rem;
    }
}

.form {
    margin: 10rem 0 0 auto;
    padding-bottom: 10rem;
    width: 500px;

    h5 {
        color: $subtitle;
        margin-bottom: .9375rem;
    }

    h1 {
        font-size: 60px;
        color: $titleDarkText;
        margin-bottom: 1.25rem;
    }

    form {
        gap: .625rem;

        input {
            border: none;
            background-color: #ccd1d1;
            padding: .9375rem 0 .875rem .9375rem;
            border-radius: .3125rem
        }

        select {
            border: none;
            background-color: #ccd1d1;
            padding: .9375rem 0 .875rem .9375rem;
            border-radius: .3125rem;
            width: 11.5rem;
            color: #6c759a;

        }

        button {
            padding: .75rem 1.75rem;
        }
    }
}
</style>
<!--/SCSS-->