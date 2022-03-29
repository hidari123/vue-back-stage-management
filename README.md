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
### route 动态引入：
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
### `Footer`显示和隐藏：
- Footer在home / Search 显示 => v-show
```html
<!-- 路由元信息 -->
<Footer v-show="$route.meta.show"/>
```
### 路由传参：
1. 页面刷新数据不会丢失 => 调用`$router.push` 实现携带参数的跳转 => parmas参数
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
```js
// 页面获取参数
this.$route.params.id
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
```js
// 页面获取参数
this.$route.query.id
```
4. 编程式导航由路由跳转到当前路由（参数不变），多次执行会抛出 `NavigationDuplicated` 警告
    - `this`: 当前组件实例（search）
    - `this.$router`：当前的这个属性，属性值 `vueRouter` 类的一个实例，当在入口文件注册路由的时候，给组件实例添加 `$router` | `$route` 属性，`push`=>`vueRouter`类的一个实例
    - ```js
        function VueRouter() {}
        // 原型对象的方法
        VueRouter.prototype.push = function() {
            // 函数的山下文为 VueRouter 类的一个实例
            // 要重写 VueRouter 原型对象的 push 方法
        }
        let $router = new VueRouter()
        this.$router.push() // this 是实例，$router 是属性 可以使用原型对象的方法
        ```
        ```js
        // index.js
        // 先把 VueRouter 原型对象的 push 保存一份
        const originPush = VueRouter.prototype.push

        // 重写 push 和 replace 方法
        // 第一个参数： 告诉原来的 push 方法 => 往哪里跳转（传递哪些参数）
        VueRouter.prototype.push = function (location, resolve, reject) {
            if (resolve && reject) {
                // call 传递参数 用逗号隔开
                originPush.call(this, location, resolve, reject)
            } else {
                originPush.call(this, location, () => {}, () => {})
            }
        }
        ```

### 三级联动组件
- 由于三级联动，在 Home, Search, Detail, 把三级联动注册为全局组件
- 好处：注册一次，可以在项目中任意地方使用