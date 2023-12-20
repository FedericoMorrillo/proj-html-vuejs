<!--JS/VUE-->
<script>
import TheCompanyArea from './TheCompanyArea.vue';
import ServiceArea from './ServiceArea.vue';
import ProcessManagementArea from './ProcessManagementArea.vue';

export default {
    components: { TheCompanyArea, ServiceArea, ProcessManagementArea }
}
</script>   
<!--/JS/VUE-->

<!--HTML-->
<template>
    <TheCompanyArea />
    <ServiceArea />
    <ProcessManagementArea />
</template>
<!--HTML-->

<!--SCSS-->
<style scoped lang="scss"></style>
<!--/SCSS-->