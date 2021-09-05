<template>
    <div class="side-bar-container">
        <div class="menu-wrapper">
            <div v-for="(page, index) in pages" :key="index" class="menu-item">
                <router-link :to="page.routerLink" class="item-link">
                    <span class="item-content">{{page.text}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SideBar',
    props: {
    },
    data() {
        return {
            pages: [
                {
                    routerLink: '/airbnb-clone-1',
                    text: 'Airbnb Clone 1'
                },
                {
                    routerLink: '/aspect-ratio',
                    text: 'Aspect Ratio'
                },
                {
                    routerLink: '/accordion',
                    text: 'Accordion'
                },
                {
                    routerLink: '/image-responsive',
                    text: 'Image Responsive'
                },
                {
                    routerLink: '/preview-image',
                    text: 'Preview Image'
                },
                {
                    routerLink: '/cards-responsive',
                    text: 'Cards Responsive'
                }
            ]
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.side-bar-container {
    width: 240px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: left ease-in-out 250ms;
    flex-shrink: 0;
    background-color: rgba(134, 226, 184, 1);
}

.menu-wrapper {
    height: 100%;
    overflow-y: auto;
}

.item-link {
    text-decoration: none;
    display: block;
    text-align: left;
    color: #000;
    font-size: 18px;
    padding-top: 15px;
    padding-bottom: 15px;

    &:hover {
        background-color: #5aa080;
        color: #fff;
    }

    &.router-link-exact-active.router-link-active {
        background-color: #5aa080;
        color: #fff;
    }
}

.item-content {
    margin-left: 15px;
    margin-right: 15px;
}
</style>
