<template>
    <div>
        <!--<navComplate></navComplate>-->
        ..........
        <router-view></router-view>
        <router-view></router-view>

    </div>



</template>

<script>
    import navComplate from '../../components/commons/nav.vue';

    export default {
        name: 'home',
        components: {
            navComplate
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../assets/less/index.less";

    #home {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
