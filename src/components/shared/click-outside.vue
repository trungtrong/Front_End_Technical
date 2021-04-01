<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'ClickOutside',
    props: {
        targetRef: null,
        enabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: true
        }
    },

    watch: {
        enabled(newValue) {
            if (newValue) {
                // document.addEventListener('mousedown', this.onClickedOutSide);
                document.addEventListener('click', this.onClickedOutSide);
                document.addEventListener('touchstart', this.onClickedOutSide);
            } else {
                document.removeEventListener('click', this.onClickedOutSide);
                document.removeEventListener('touchstart', this.onClickedOutSide);
            }
        }
    },

    beforeDestroy() {
        document.removeEventListener('click', this.onClickedOutSide);
        document.removeEventListener('touchstart', this.onClickedOutSide);
    },
    methods: {
        /**
         * @param {MouseEvent | TouchEvent} event
         */
        onClickedOutSide(event) {
            const element = event.target;
            // Do nothing if clicking ref's element or descendant elements
            if (!this.targetRef || !element || this.targetRef.contains(element)) {
                return;
            }
            //
            this.$emit('on-clicked-outside');
        }
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
