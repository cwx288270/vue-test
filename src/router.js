import { User } from './views/user'

const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
},{
    path:'/user',
    component:(resolve) => require(['./views/user.vue'], resolve)
},{
    path:'/user',
    component:(resolve) => require(['./views/user.vue'], resolve)
}
];
export default routers;