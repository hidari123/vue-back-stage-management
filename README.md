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

## 业务逻辑：
1. route 动态引入：
    - `require.context()`：webpack的api,通过执行`require.context`函数获取一个**特定的上下文**,主要用来实现**自动化导入模块**,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块
        - `require.context`函数接受三个参数
            - `directory {String}` - 读取文件的路径
            - `useSubdirectories {Boolean}` - 是否遍历文件的子目录
            - `regExp {RegExp}` - 匹配文件的正则
            - 语法：`require.context('./test', false, /.test.js$/)` => 遍历当前目录下的test文件夹的所有`.test.js`结尾的文件,不遍历子目录
            - `require.context函数`执行后返回的是一个函数，并且这个函数有3个属性
                - `resolve {Function} `- 接受一个参数`request`,`request`为`test`文件夹下面匹配文件的相对路径,返回这个**匹配文件相对于整个工程的相对路径**
                - `keys {Function}` - 返回**匹配成功模块的名字组成的数组**
                - `id {String}` - 执行环境的`id`,返回的是一个字符串,主要用在`module.hot.accept`，热加载
                - 这三个都是作为函数的`属性`（注意是作为函数的属性,函数也是对象,有对应的属性）
        ```js
        // *.route.js
        export default{}
        ```
        ```js
        // index.js
        const routeList = []
        function importAll(r) {
            r.keys().forEach(
                (key) => routeList.push(r(key).default)
            )
        }
        importAll(require.context('./', false, /\.router\.js/))
        const route = [
            ...routerList
        ]
        ```
2. `Footer`显示和隐藏：Footer在home / Search 显示 => v-show
```html
<!-- 路由元信息 -->
<Footer v-show="$route.meta.show"/>
```
3. 路由传参：
    1. 页面刷新数据不会丢失 => 调用`$router.push` 实现携带参数的跳转
      ```js
      methods：{
        insurance(id) {
            //直接调用$router.push 实现携带参数的跳转
            this.$router.push({
            path: `/particulars/${id}`,
            })
        }
      ```
      ```js
        // 路由配置
        // 在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值
        {
            path: '/particulars/:id',
            name: 'particulars',
            component: particulars
        }
      ```
      ```js
        // 页面获取参数
        this.$route.params.id
      ```
    2. 页面刷新数据会丢失 => 通过路由属性中的name来确定匹配的路由，通过params来传递参数。
    ```js
    methods：{
        insurance(id) {
            this.$router.push({
                name: 'particulars',
                params: {
                    id: id
                }
            })
        }
    ```
    3. query传递的参数会显示在url后面?id=  => 使用path来匹配路由，然后通过query来传递参数
    ```js
    methods：{
        insurance(id) {
            this.$router.push({
                path: '/particulars',
                query: {
                    id: id
                }
            })
        }
    }
    ```