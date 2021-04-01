<template src="./header.html"></template>

<style lang="scss" scoped>
    @import "./header";
</style>

<script>
import HomeAlert from '@/components/home/home-alert/home-alert.vue'
import PopupContainer from '@/components/shared/popup-container.vue';
import ClickOutside from '@/components/shared/click-outside.vue';

export default {
    name: 'Header',
    components: {
        HomeAlert,
        PopupContainer,
        ClickOutside
    },

    data() {
        return {
            tabList: [
                {
                    name: 'Places to stay',
                    isSelected: true
                },
                {
                    name: 'Monthly stays',
                    isSelected: false
                },
                {
                    name: 'Experiences',
                    isSelected: false
                },
                {
                    name: 'Online Experiences',
                    isSelected: false
                }
            ],

            searchList: [
                {
                    isShow: true,
                    item: 'location',
                    isSelected: false,
                },
                {
                    isShow: true,
                    item: 'checkin',
                    isSelected: false,
                },
                {
                    isShow: true,
                    item: 'checkout',
                    isSelected: false,
                },
                {
                    isShow: true,
                    item: 'guests',
                    isSelected: false,
                },
            ],

            isShowPopup: false,
        }
    },

    methods: {
        onClickTabItem(index) {
           this.changeSelectedTab(index);
        },

        changeSelectedTab(index) {
            this.tabList.map((tabItem) => tabItem.isSelected = false);
            this.tabList[index].isSelected = true;
        },

        // Location Popup
        toggleLocationPopup() {
            this.isShowPopup = !this.isShowPopup;
        },

        closeLocationPopup() {
            this.isShowPopup = false;
        }
    },
}
</script>
