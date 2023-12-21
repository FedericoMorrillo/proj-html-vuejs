<!--JS/VUE-->
<script>
import TheCompanyArea from './TheCompanyArea.vue';
import ServiceArea from './ServiceArea.vue';
import ProcessManagementArea from './ProcessManagementArea.vue';
import TeamArea from './TeamArea.vue';
import LatestNewsArea from './LatestNewsArea.vue';

export default {
    components: { TheCompanyArea, ServiceArea, ProcessManagementArea, TeamArea, LatestNewsArea }
}
</script>   
<!--/JS/VUE-->

<!--HTML-->
<template>
    <TheCompanyArea />
    <ServiceArea />
    <ProcessManagementArea />
    <TeamArea />
    <LatestNewsArea />
</template>
<!--HTML-->