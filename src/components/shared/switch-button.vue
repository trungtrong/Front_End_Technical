<template>
    <button :aria-checked="value ? 'true' : 'false'"
            role="switch"
            type="button"
            class="custom-switch-btn"
            :class="{
                'is-enabled': value
            }"
            @click="onSwitch()">
        <div class="custom-switch-btn_round"
            :class="{
                'left-round': !value,
                'right-round': value
            }">
        </div>
    </button>
</template>

<script>
export default {
    name: 'CustomSwitchButton',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onSwitch() {
            this.value = !this.value;
            this.$emit('on-value-changed', this.value);
        },
    }
}
</script>

<style lang="scss" scoped>
    .custom-switch-btn {
        width: 48px;
        height: 32px;
        outline: none;
        border: none;
        background-color: #ccc;
        border-radius: 18px;
        cursor: pointer;
        position: relative;

        &.is-enabled {
            background-color: #224395;
        }
    }

    .custom-switch-btn_round {
        width: 28px;
        height: 28px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: -ms-transform 250ms ease-in-out 0s, -webkit-transform 250ms ease-in-out 0s, transform 250ms ease-in-out 0s !important;

        &.left-round {
            transform: translate3d(0px, 0px, 0px) !important;
        }

        &.right-round {
            transform: translate3d(16px, 0px, 0px) !important;
        }
    }
</style>
