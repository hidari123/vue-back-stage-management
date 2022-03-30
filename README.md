<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [vue-back-stage-management](#vue-back-stage-management)
  - [项目配置](#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE)
  - [业务逻辑：](#%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
    - [route 动态引入：](#route-%E5%8A%A8%E6%80%81%E5%BC%95%E5%85%A5)
    - [`Footer`显示和隐藏：](#footer%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8F)
    - [路由传参：](#%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%8F%82)
    - [三级联动组件](#%E4%B8%89%E7%BA%A7%E8%81%94%E5%8A%A8%E7%BB%84%E4%BB%B6)
    - [axios 二次封装](#axios-%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85)
    - [vuex模块化](#vuex%E6%A8%A1%E5%9D%97%E5%8C%96)
    - [js => 一级分类动态添加背景色](#js--%E4%B8%80%E7%BA%A7%E5%88%86%E7%B1%BB%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E8%83%8C%E6%99%AF%E8%89%B2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

### axios 二次封装
1. 为什么要二次封装 axios？
    - 请求拦截器 / 相应拦截器
    - axios 请求放在 API 目录下
    - request.js
    ```js
    // 对 axios 二次封装
    import axios from 'axios'

    // 用 axios 对象的 create 创建一个 axios 实例
    const requests = axios.create({
    // 配置对象
    baseURL: '/api',
    timeout: 5000
    })

    // 请求拦截器
    requests.interceptors.request.use((config) => {
    // config 配置对象，里面有 headers 请求头属性
    return config
    })

    // 响应拦截器
    requests.interceptors.response.use((res) => {
    // 服务器成功的回调函数
    return res.data
    }, (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error(err))
    })

    export default requests
    ```
2. 接口统一管理
```js
// 三级联动接口
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get'
})
```
3. 跨域问题处理
    1. 协议 / 域名 / 端口号不同
    2. JSONP / CROS 代理
    ```js
    module.exports = {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://39.98.123.211'
                    // 接口中有 api 不需要重写
                    // pathRewrite: { '^/api': '' }
                }
            }
        }
    }
    ```
4. nprogress 进度条
```js
// 引入进度条
import nprogress from 'nprogress'
/* 引入进度条样式 */
// 无论是否在 css 中引入 request.js 都要引入
import 'nprogress/nprogress.css'

// 请求拦截器中配置: 
nprogress.start()

// 响应拦截器中配置:
nprogress.done()
```

### vuex模块化
- 官方提供的插件 => 状态管理库 集中式管理项目中组件共用的数据
![avator](https://segmentfault.com/img/bVEPR5?w=701&h=551)
```js
export default {
  namespaced: true, // namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  // 储存数据
  state: {
    count: 1
  },
  // 相当于计算属性, 用于简化仓库数据, 让组件获取仓库的数据更加方便
  getters: {},
  // 修改 state 的唯一手段
  mutations: {
    add (state) {
      state.count++
    }
  },
  // 可以书写业务逻辑, 但是不能修改 state
  actions: {
    // 提交 mutation
    add ({ commit }) {
      commit('add')
    }
  }
}
```
```vue
<template>
  <div>
    <button @click="add">点击+1</button>
    <span>仓库的数据{{ count }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  methods: {
    add () {
      // 派发 action
      this.$store.dispatch('Home/add')
    }
  },
  computed: {
    // 右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
    // 注入一个参数 state，其实即为大仓库中的数据
    ...mapState('Home', {
      count: state => state.count
    })
  }
}
</script>
```

### js => 一级分类动态添加背景色
1. 事件冒泡：子级元素的某个事件被触发，它的上级元素的该事件也被递归执行
2. 事件委托：将元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。
    - 假如现在有10个按钮，要为每个按钮绑定一个click事件，可能才十个按钮，你可以一个一个的绑定或用循环进行绑定，但是这样性能呢？
```html
<div class="button-group">
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
    <botton type="button" class="btn">提交</botton>
</div>
```
```js
$(".button-group").on('click','.btn',function(){
      alert($(this).html());
});
```
- 这里可以看出，我们只是为所有的button的一个父级绑定了click事件，而不是为所有的button绑定事件，极大的提高了性能，这样做的好处还有可以对动态加进来的元素进行处理

- 就是有一个按钮原本的dom里面是没有的，是你通过其他方式添加进来的，即未来元素，用直接绑定方法是不能成功的，只能用事件委托，委托给该元素的父级进行处理

- 由于事件委托是通过事件冒泡实现的，所以如果子级的元素阻止了事件冒泡，那么事件委托也将失效

3. 实现
```vue
<template>
    <div class="type-nav">
        <div class="container">
        <!-- 由于鼠标在 h2 时也需要显示背景色效果 所以把h2 和 h3 封装到一个 div 中，利用事件委托，在父div上写鼠标离开事件 -->
            <div @mouseleave="changeIndex(-1)">
                <h2 class="all">全部商品分类</h2>
                <div class="sort">
                    <div class="all-sort-list2">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                            <h3 @mouseenter="changeIndex(index)" :class="{cur: currentIndex === index}">
                                <a href="">{{c1.categoryName}}</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 存储用户鼠标移上哪一个一级分类
      currentIndex: -1
    }
  },
  methods: {
    // 鼠标进入修改响应式数据 currentIndex 属性
    changeIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>
```