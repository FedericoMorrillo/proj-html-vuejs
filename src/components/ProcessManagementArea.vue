<!--JS/VUE-->
<script>
export default {
    data() {
        return {
            process: [
                {
                    number: "1",
                    name: "Collection of information",
                    desc: "lorem ipsum dolor sit amet consectetur",
                },
                {
                    number: "2",
                    name: "Strategic planning",
                    desc: "lorem ipsum dolor sit amet consectetur",
                },
                {
                    number: "3",
                    name: "Assignment of responsibilities",
                    desc: "lorem ipsum dolor sit amet consectetur",
                },
                {
                    number: "4",
                    name: "Formatting process",
                    desc: "lorem ipsum dolor sit amet consectetur",
                },
                {
                    number: "5",
                    name: "Continuity formalization",
                    desc: "lorem ipsum dolor sit amet consectetur",
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
        <!--titles-->
        <h5>HOW IT WORKS IN PRACTICE</h5>
        <div class="flex justify-center">
            <h2 class="h2-first-text">Process</h2>
            <h2>Management</h2>
        </div>
        <!--/titles-->

        <!--description-->
        <p>We work with innovative methologies to ensure that the entire refommatting process is done from start to
            finish as planned.</p>
        <!--/description-->

        <!--process planning-->
        <div class="process-planning flex justify-center">

            <!--cards-->
            <div class="card flex" v-for="proces in process">
                <div class="number flex align-center justify-center">{{ proces.number }}</div>
                <h3>{{ proces.name }}</h3>
                <p>{{ proces.desc }}</p>
            </div>
            <!--/cards-->

        </div>
        <!--/process planning-->
    </section>
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import"../scss/utils.scss";
@import"../scss/variable.scss";

section {
    margin-top: 130px;
    text-align: center;

    h5 {
        font-size: .75rem;
        color: #00a6a6;
        margin-bottom: 1.25rem;
    }

    h2 {
        font-size: 40px;
        color: #21333e;
        padding: .3125rem .9375rem;
        margin-bottom: 1.25rem;
    }

    .h2-first-text {
        color: #058283;
        background-color: $backgroundText;

    }

    p {
        color: #058283;
    }

    .process-planning {
        margin-top: 3.75rem;
        border-top: 5px solid $backgroundText;
        gap: 1.25rem;
        padding-bottom: 8.125rem;

        .card {
            width: calc(100% / 5 - 40px);
            flex-direction: column;
            align-items: center;

            .number {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 100%;
                background-color: $backgroundText;
                position: relative;
                top: -22px;
            }

            h3 {
                font-size: 20px;
                color: #21333e;
                margin-bottom: 20px;
            }

        }
    }
}
</style>
<!--/SCSS-->