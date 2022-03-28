# vue-back-stage-management

## 项目配置
1. public: 静态资源（图片） => webpack 打包时原封不动打包到 dist 文件夹中
2. src:
    1. assets：静态资源（多个组件共用） => webpack 打包时当作一个模块打包在 JS 文件里面
    2. components：非路由组件（全局组件）
    3. App.vue：项目根组件
    4. main.js：程序入口文件，整个程序中最先执行的文件
3. 项目运行的时候，浏览器自动打开
    - package.json  --open
    ```json
      "scripts": {
        "serve": "vue-cli-service serve --open",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint"
    }
    ```
4. src文件夹简写：@
    - jsconfig.json
    ```json
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                "@/*": ["src/*"]
            }
        },
        "exclude": ["node_modules", "dist"]
    }
    ```
5. pages / views：路由组件
    - route：获取路由信息 => 路径 / query / params
    - router：编程式导航进行路由跳转 push / replace
    - 注册完路由，不管是路由还是非路由组件 => 身上都有 $route / $router 属性
    - 路由跳转：
        - 声明式导航：router-link
        - 编程式导航：push / replace 除了路由跳转，还能做其他业务