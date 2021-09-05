<template>
    <div class="home-container">
        <SideBar></SideBar>
        <div id="appContent">
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
const SideBar = () => import('@/components/layout/SideBar.component');

export default {
    name: 'HomeMainContent',
    components: {
        SideBar
    }
}
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    height: 100%;
    width: 100%;
}

#appContent {
    width: calc(100% - 240px);
    padding: 20px;
    transition: left ease-in-out 250ms;
    text-align: left;
    overflow: auto;
    height: 100vh;
    margin-left: 240px;
}

.content-wrapper {
    padding-left: 20px;
}

</style>
