<template>
    <div>
        <div class="navWrap">
            <a class="btn navBtn icon-btn" @click="selectMenu">logo</a>
            <router-link to="/account" class="btn navBtn">采集账号</router-link>
            <router-link to="/account" class="btn navBtn">采集账号</router-link>
            <router-link to="/equipment" class="btn navBtn">采集设备</router-link>
            <router-link to="/monitor" class="btn navBtn">监测点</router-link>
            <a class="btn navBtn logOut" @click="loginOut"></a>

        </div>
    </div>
</template>
<script type="text/babel">

    export default{
        methods: {
            selectMenu(e){
//                this.$router.push({path: 'account'});
            },
            loginOut(){
//                this.$http.get('/logout').then(ret => {
//
//                    if (ret.body.success) {
//                        let location = window.location;
//                        window.location.href = location.origin + '/login' + location.hash;
//                    }
//                });
            }
        }
    };

</script>

