// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        targets: {
          ie: 11,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: {
    ie: 11,
  },

  /**
   * 路由相关配置
   */
  routes: [
    {
      path: '/Login',
      component: '../layouts/UserLayout',
      routes: [{ path: '/Login', component: './Login' }],
    },
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [{ path: '/user', component: './Welcome' }],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', redirect: '/welcome' },
        // dashboard
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          path: '/DriverManage',
          name: 'DriverManage',
          icon: 'smile',
          component: './DriverManage',
        },
        {
          path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
          name: 'more-blocks',
          icon: 'block',
        },
        {
          path: '/demo',
          name: 'demo',
          icon: 'smile',
          routes: [
            {
              path: 'createContext',
              name: 'createContext',
              icon: 'smile',
              component: './Demo/createContext/index',
            },
            {
              path: 'useState/stateComponent',
              name: 'stateComponent',
              icon: 'smile',
              component: './Demo/reactHooks/useState/stateComponent',
            },
            {
              path: 'useState/hooksComponent',
              name: 'hooksComponent',
              icon: 'smile',
              component: './Demo/reactHooks/useState/hooksComponent',
            },
            {
              path: 'useEffect/normalComponent',
              name: 'normalComponent',
              icon: 'smile',
              component: './Demo/reactHooks/useEffect/normalComponent',
            },
            {
              path: 'useEffect/hooksComponent',
              name: 'hooksComponent',
              icon: 'smile',
              component: './Demo/reactHooks/useEffect/hooksComponent',
            },
            {
              path: 'renderPrps/MouseTracker',
              name: 'MouseTracker',
              icon: 'smile',
              component: './Demo/reactHooks/renderProps/MouseTracker',
            },
          ],
        },
      ],
    },
  ],
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  proxy: {
    '/admin': {
      target: 'http://console.cfec408136ed44964821146f5205a8216.cn-shenzhen.alicontainer.com',
      changeOrigin: true,
    },
  },
};
