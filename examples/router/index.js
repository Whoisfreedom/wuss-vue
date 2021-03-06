/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-08-14 09:47:12
 * @LastEditors: null
 * @LastEditTime: 2019-08-14 09:47:21
 * @Description: 
 * @form: (0 U 0)
 */
import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '../view/layout/layout.vue';

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
* */

/**
 * 需要用路由来设置页面权限，所有需要配置权限的页面一开始的hidden属性统一设置为false;
 * 在登陆结束以后获取用户权限来设置相应路由的hidden,达到权限配置的功能
 * 注：name 跟 path 需要设置相同
 * 需要配置权限的路由需要设置一个参数needPer用来表明是否需要进行权限设置
 */
export const constantRouterMap = [{
        path: '/',
        redirect: 'layout/addrPicker',
        component: () =>
            import ('../view/home/index'),
        hidden: true,
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../view/home/index'),
        hidden: true,
    },
    {
        path: '/layout',
        component: Layout,
        name: 'layout',
        children: [{
                path: 'buttons',
                component: () =>
                    import ('../view/buttons/index'),
                name: 'buttons',
                meta: {
                    title: '按钮',
                },
            }, {
                path: 'icon',
                component: () =>
                    import ('../view/icon/index'),
                name: 'icon',
                meta: {
                    title: 'icon',
                },
            }, {
                path: 'picker',
                component: () =>
                    import ('../view/picker/index'),
                name: 'picker',
                meta: {
                    title: '选择',
                },
            }, {
                path: 'steps',
                component: () =>
                    import ('../view/steps/index'),
                name: 'steps',
                meta: {
                    title: '步骤',
                },
            }, {
                path: 'tag',
                component: () =>
                    import ('../view/tag/index'),
                name: 'tag',
                meta: {
                    title: '标签',
                },
            }, {
                path: 'accordion',
                component: () =>
                    import ('../view/accordion/index'),
                name: 'accordion',
                meta: {
                    title: '手风琴',
                },
            }, {
                path: 'layoutPage',
                component: () =>
                    import ('../view/layoutPage/index'),
                name: 'layoutPage',
                meta: {
                    title: '布局',
                },
            }, {
                path: 'card',
                component: () =>
                    import ('../view/card/index'),
                name: 'card',
                meta: {
                    title: '卡片',
                },
            }, {
                path: 'cell',
                component: () =>
                    import ('../view/cell/index'),
                name: 'cell',
                meta: {
                    title: '列表',
                },
            }, {
                path: 'popup',
                component: () =>
                    import ('../view/popup/index'),
                name: 'popup',
                meta: {
                    title: '弹出层',
                },
            }, {
                path: 'tabs',
                component: () =>
                    import ('../view/tabs/index'),
                name: 'tabs',
                meta: {
                    title: '标签',
                },
            }, {
                path: 'toast',
                component: () =>
                    import ('../view/toast/index'),
                name: 'toast',
                meta: {
                    title: '提示框',
                },
            }, {
                path: 'alert',
                component: () =>
                    import ('../view/alert/index'),
                name: 'alert',
                meta: {
                    title: '弹框',
                },
            }, {
                path: 'radio',
                component: () =>
                    import ('../view/radio/index'),
                name: 'radio',
                meta: {
                    title: '单选框'
                }
            }, {
                path: 'checkbox',
                component: () =>
                    import ('../view/checkbox/index'),
                name: 'checkbox',
                meta: {
                    title: '多选框'
                }
            }, {
                path: 'checkboxGroup',
                component: () =>
                    import ('../view/checkboxGroup/index'),
                name: 'checkboxGroup',
                meta: {
                    title: '多选框组'
                }
            }, {
                path: 'switch',
                component: () =>
                    import ('../view/switch/index'),
                name: 'switch',
                meta: {
                    title: '开关'
                }
            }, {
                path: 'notice',
                component: () =>
                    import ('../view/notice/index'),
                name: 'notice',
                meta: {
                    title: '通告'
                }
            }, {
                path: 'loading',
                component: () =>
                    import ('../view/loading/index'),
                name: 'loading',
                meta: {
                    title: '加载指示器'
                }
            }, {
                path: 'confirm',
                component: () =>
                    import ('../view/confirm/index'),
                name: 'confirm',
                meta: {
                    title: '确认框'
                }
            }, {
                path: 'dialog',
                component: () =>
                    import ('../view/dialog/index'),
                name: 'dialog',
                meta: {
                    title: '弹出框'
                }
            }, {
                path: 'avatar',
                component: () =>
                    import ('../view/avatar/index'),
                name: 'avatar',
                meta: {
                    title: '头像'
                }
            }, {
                path: 'countdown',
                component: () =>
                    import ('../view/countdown/index'),
                name: 'countdown',
                meta: {
                    title: '倒计时'
                }
            }, {
                path: 'badge',
                component: () =>
                    import ('../view/badge/index'),
                name: 'badge',
                meta: {
                    title: '徽章'
                }
            }, {
                path: 'rater',
                component: () =>
                    import ('../view/rater/index'),
                name: 'rater',
                meta: {
                    title: '评分'
                }
            }, {
                path: 'number',
                component: () =>
                    import ('../view/number/index'),
                name: 'number',
                meta: {
                    title: '计数器'
                }
            }, {
                path: 'input',
                component: () =>
                    import ('../view/input/index'),
                name: 'input',
                meta: {
                    title: '输入框'
                }
            }, {
                path: 'form',
                component: () =>
                    import ('../view/form/index'),
                name: 'form',
                meta: {
                    title: '输入框'
                }
            }, {
                path: 'range',
                component: () =>
                    import ('../view/range/index'),
                name: 'range',
                meta: {
                    title: '区域选择'
                }
            }, {
                path: 'swiperOut',
                component: () =>
                    import ('../view/swiperOut/index'),
                name: 'swiperOut',
                meta: {
                    title: '侧滑菜单'
                }
            }, {
                path: 'addrPicker',
                component: () =>
                    import ('../view/addrPicker/index'),
                name: 'addrPicker',
                meta: {
                    title: '侧滑菜单'
                }
            }
            

        ],
    },

    {
        path: '*',
        redirect: '/404',
        hidden: true,
    },
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: constantRouterMap,
});