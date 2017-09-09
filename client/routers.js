

//组件引入
import login from './entry/login/login.vue';
const  test = {template:'<div>test.....</div>'};



const routers=  [
    {
        path: '/login',
        component: login
    },
    {
        path: '/home',
        component: test
    },
    {
        path: '/monitor',
        // component: monitor
    },
    {
        path: '*',
        redirect: '/login'
    }
];

export  default routers;