import {getLoginUser} from "../api";

// 系统管理员
export const adminMenus = {
    path: '/home',
    name: 'home',
    component: require("../views/home.vue").default,
    children: [
        {
            path: '/index',
            name: '系统首页',
            icon: "fa fa-home",
            component: require("../views/pages/Index.vue").default
        },
        {
            path: '/users',
            name: '球员信息管理',
            icon: "fa fa-address-book-o",
            component: require("../views/pages/Users.vue").default
        },
        {
            path: '/teamTypes',
            name: '球队小组管理',
            icon: "fa fa-building-o",
            component: require("../views/pages/TeamTypes.vue").default
        },
        {
            path: '/teams',
            name: '球队信息管理',
            icon: "fa fa-subway",
            component: require("../views/pages/Teams.vue").default
        },
        {
            path: '/members',
            name: '球队成员管理',
            icon: "fa fa-cubes",
            component: require("../views/pages/Members.vue").default
        },
        {
            path: '/activities',
            name: '球队活动管理',
            icon: "fa fa-calculator",
            component: require("../views/pages/Activities.vue").default
        },
        {
            path: '/notices',
            name: '通知信息管理',
            icon: "fa fa-bullhorn",
            component: require("../views/pages/Notices.vue").default
        },
        {
            path: '/applyLogs',
            name: '入队申请记录',
            icon: "fa fa-envelope-open",
            component: require("../views/pages/ApplyLogs.vue").default
        },
        {
            path: '/payLogs',
            name: '费用记录管理',
            icon: "fa fa-clock-o",
            component: require("../views/pages/PayLogs.vue").default
        }
    ]
};

// 社团管理员
export const manMenus = {
    path: '/home',
    name: 'home',
    component: require("../views/home.vue").default,
    children: [
        {
            path: '/index',
            name: '系统首页',
            icon: "fa fa-home",
            component: require("../views/pages/Index.vue").default
        },
        {
            path: '/teams',
            name: '小组信息浏览',
            icon: "fa fa-subway",
            component: require("../views/pages/Teams.vue").default
        },
        {
            path: '/members',
            name: '小组成员管理',
            icon: "fa fa-cubes",
            component: require("../views/pages/Members.vue").default
        },
        {
            path: '/applyLogs',
            name: '入队申请处理',
            icon: "fa fa-envelope-open",
            component: require("../views/pages/ApplyLogs.vue").default
        },
        {
            path: '/activities',
            name: '球队活动浏览',
            icon: "fa fa-calculator",
            component: require("../views/pages/Activities.vue").default
        },
        {
            path: '/notices',
            name: '通知信息管理',
            icon: "fa fa-bullhorn",
            component: require("../views/pages/Notices.vue").default
        },
        {
            path: '/payLogs',
            name: '费用记录管理',
            icon: "fa fa-clock-o",
            component: require("../views/pages/PayLogs.vue").default
        }
    ]
};

export const memYMenus = {
    path: '/home',
    name: 'home',
    component: require("../views/home.vue").default,
    children: [
        {
            path: '/index',
            name: '系统首页',
            icon: "fa fa-home",
            component: require("../views/pages/Index.vue").default
        },
        {
            path: '/teams',
            name: '小组信息浏览',
            icon: "fa fa-subway",
            component: require("../views/pages/Teams.vue").default
        },
        {
            path: '/activities',
            name: '球队活动浏览',
            icon: "fa fa-calculator",
            component: require("../views/pages/Activities.vue").default
        },
        {
            path: '/applyLogs',
            name: '入队申请记录',
            icon: "fa fa-envelope-open",
            component: require("../views/pages/ApplyLogs.vue").default
        },
        {
            path: '/payLogs',
            name: '球队费用记录',
            icon: "fa fa-clock-o",
            component: require("../views/pages/PayLogs.vue").default
        }
    ]
};

export const memNMenus = {
    path: '/home',
    name: 'home',
    component: require("../views/home.vue").default,
    children: [
        {
            path: '/index',
            name: '系统首页',
            icon: "fa fa-home",
            component: require("../views/pages/Index.vue").default
        }
    ]
};

export default function initMenu(router, store){

    let token = null;
    if(store.state.token){

        token = store.state.token;
    }else{

        token = sessionStorage.getItem("token");
        store.state.token = sessionStorage.getItem("token");
    }

    getLoginUser(token).then(resp =>{

        if(resp.data.type == 0){
            router.addRoute(adminMenus);
            store.commit("setMenus", adminMenus);
        }
    
        if(resp.data.type == 1){
            router.addRoute(manMenus);
            store.commit("setMenus", manMenus);
        }

        if(resp.data.type == 2){

            if(resp.data.status == 0){

                router.addRoute(memNMenus);
                store.commit("setMenus", memNMenus);
            }else{

                router.addRoute(memYMenus);
                store.commit("setMenus", memYMenus);
            }
            
        }
    });
}

