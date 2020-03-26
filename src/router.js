// define routers
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/p1',
        component: (resolve) => require(['./views/PageOne.vue'], resolve)
    }
];
export default routers;