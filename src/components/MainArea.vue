<!--JS/VUE-->
<script>
import TheCompanyArea from './TheCompanyArea.vue';
import ServiceArea from './ServiceArea.vue';
import ProcessManagementArea from './ProcessManagementArea.vue';
import TeamArea from './TeamArea.vue';

export default {
    components: { TheCompanyArea, ServiceArea, ProcessManagementArea, TeamArea }
}
</script>   
<!--/JS/VUE-->

<!--HTML-->
<template>
    <TheCompanyArea />
    <ServiceArea />
    <ProcessManagementArea />
    <TeamArea />
</template>
<!--HTML-->

<!--SCSS-->
<style scoped lang="scss"></style>
<!--/SCSS-->