<!--JS/VUE-->
<script>

export default {}

</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
    <section>

        <!--container-->
        <div class="container flex">

            <!--col1-->
            <div class="col">

                <!--title-->
                <h5>NEWSLETTER</h5>
                <div class="flex">
                    <h2 class="h2-first-text">Know</h2>
                    <h2>First</h2>
                </div>
                <!--/title-->

                <!--description-->
                <p>Follow closely and receive content about our company and the news of the current market.</p>
                <!--description-->

            </div>
            <!--/col1-->

            <!--col2-->
            <div class="col">

                <!--form-->
                <form action="#">
                    <input type="text" name="name" placeholder="Name">
                    <input type="email" name="email" placeholder="Email">
                    <button class="btn btn-grey">SUBSCRIBE</button>
                </form>
                <!--form-->

            </div>
            <!--/col2-->

        </div>
        <!--/container-->

    </section>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../scss/utils.scss";
@import "../scss/variable.scss";

section {
    padding: 6.25rem 0;
    background-image: url("../assets/bg-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        padding: 0 3.125rem;
        gap: 3.125rem;

        .col {
            width: 50%;

            h5 {
                color: $subtitle;
                margin-bottom: 1.25rem;
            }

            h2 {
                color: white;
                padding: .3125rem .625rem;
                font-size: $fontTitle;
                margin-bottom: 1.25rem;
            }

            .h2-first-text {
                background-color: #173338;
            }

            p {
                font-size: $fontBase;
                color: $subtitle;
            }

            input {
                width: 100%;
                display: block;
                border: none;
                font-size: 1.125rem;
                padding: .625rem;
                margin-bottom: 1.25rem;
                border-radius: .3125rem;
                color: #6c759a;
                background-color: hsla(180, 5%, 81%, 0.5);
            }

            button {
                padding: .9375rem 1.25rem;
            }
        }
    }
}
</style>
<!--/SCSS-->