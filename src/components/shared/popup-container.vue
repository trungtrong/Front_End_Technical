<template>
    <transition>
        <div v-show="visible" class="popup-container">
            <slot></slot>
        </div>
    </transition>
</template>

<script>


export default {
    name: 'PopupContainer',
    components: {
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
        }
    },

    mounted() {
    },

    beforeDestroy() {
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
    .popup-container {
        position: absolute;
        z-index: 1;
        left: 0px;
        margin-top: 12px;
        max-height: calc(100vh - 220px);
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 32px;
        padding: 16px 32px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
    }
</style>
