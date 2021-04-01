<template src="./main-content.html"></template>

<style lang="scss" scoped>
    @import "./main-content";
</style>

<script>
import HomeBannerImage from '@/components/home/banner-image/banner-image.vue';
import ExperienceSection from '@/components/home/experience-section/experience-section.vue';
import AnnouncementSection from '@/components/home/announcement-section/announcement-section.vue';
import DestinationsSection from '@/components/home/destinations-section/destinations-section.vue';
import CustomSwitchButton from '@/components/shared/switch-button';

export default {
    name: 'HomeMainContent',
    components: {
        HomeBannerImage,
        ExperienceSection,
        AnnouncementSection,
        DestinationsSection,
        CustomSwitchButton
    },
    data() {
        return {
            switchBtnValue: true
        }
    },
    methods: {
        onSwitchValueChanged(value) {
            this.switchBtnValue = value;
        }
    }
}
</script>
