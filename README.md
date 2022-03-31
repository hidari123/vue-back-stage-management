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
    - [卡顿现象 => 节流和防抖](#%E5%8D%A1%E9%A1%BF%E7%8E%B0%E8%B1%A1--%E8%8A%82%E6%B5%81%E5%92%8C%E9%98%B2%E6%8A%96)
    - [三级联动传参](#%E4%B8%89%E7%BA%A7%E8%81%94%E5%8A%A8%E4%BC%A0%E5%8F%82)
    - [Search 模块中 TypeNav 商品分类菜单过渡动画](#search-%E6%A8%A1%E5%9D%97%E4%B8%AD-typenav-%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%E8%8F%9C%E5%8D%95%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB)

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
```js
// 动态控制显示和隐藏
:style="{display: currentIndex === index ? 'block' : 'none'}"
```

### 卡顿现象 => 节流和防抖
```js 
changeIndex (index) {
    this.currentIndex = index
    // 正常情况：用户慢慢操作 => 鼠标进入 => 每一个一级分类 h3 都会触发鼠标进入事件
    // 非正常情况：用户操作很快 => 本来全部的一级分类都应该触发鼠标进入事件 但是只有部分触发
    // 因为用户行为过快 导致浏览器反应不过来 => 如果当前回调函数中有一些大量业务 有可能出现卡顿现象
    console.log(index)
}
```
1. lodash 插件： 自带 封装函数的节流与防抖的业务（闭包 + 延时器）
2. 防抖就是监听事件触发后,N秒之后再执行要操作的事物，防止用户多次重复点击请求数据。
   在设定的时间周期内,如果再次被触发,则取消回调,重新开始计时
   - 实现方式：每次触发事件时设置一个延迟调用方法，并且取消之前的延时调用方法
   - 缺点：如果事件在规定的时间间隔内被不断的触发，则调用方法会被不断的延迟
   - ```js
        //防抖debounce代码：
        function debounce(fn) {
            let timeout = null; // 创建一个标记用来存放定时器的返回值
            return function () {
                // 每当用户输入的时候把前一个 setTimeout clear 掉
                clearTimeout(timeout); 
                // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
                timeout = setTimeout(() => {
                    fn.apply(this, arguments);
                }, 500);
            };
        }
        // 处理函数
        function handle() {
            console.log(Math.random());
        }
        // 滚动事件
        window.addEventListener('scroll', debounce(handle));
     ```
3. 节流：使得一定时间内只触发一次函数。原理是通过判断是否有延迟调用函数未执行。
   - 实现方式：每次触发事件时，如果当前有等待执行的延时函数，则直接return
   - ```js
        //节流throttle代码：
        function throttle(fn) {
            let canRun = true; // 通过闭包保存一个标记
            return function () {
                // 在函数开头判断标记是否为true，不为true则return
                if (!canRun) return;
                // 立即设置为false
                canRun = false;
                // 将外部传入的函数的执行放在setTimeout中
                setTimeout(() => { 
                // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
                // 当定时器没有执行的时候标记永远是false，在开头被return掉
                    fn.apply(this, arguments);
                    canRun = true;
                }, 500);
            };
        }

        function sayHi(e) {
            console.log(e.target.innerWidth, e.target.innerHeight);
        }
        window.addEventListener('resize', throttle(sayHi));
     ```
4. 区别： 
   1. 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数
   2. 函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
5. 本项目用节流实现频繁 hover 变成少量操作 防止卡顿
6. 路由跳转
    1. 三级联动：如果使用声明式导航 router-link 可以实现路由的跳转和传递参数
    2. 但是需要注意会出现卡顿现象
        1. router-link 是一个组件 当服务器数据返回后 创建出很多 router-link 组件 瞬间创建出很多组件实例
        2. 创建组件实例的时候 很耗内存 出现卡顿
### 三级联动传参
1. 需求：三级联动菜单需要点击跳转链接，如果每个都写声明式导航 router-link 组件消耗内存过大 网页卡顿，如果每个a标签上都写点击事件，需要写很多次，性能不是很好
2. 优化方案：事件委派，在父元素上写点击事件 写一次可以调用所有子元素
    1. 优化方案问题：
        1. 无法确定点击的是a标签
        2. 无法确定点击的是1、2、3级a标签
    2. 优化方案解决：
        1. 自定义事件`:data-categoryName`确定点击的是a标签 `<a :data-categoryName="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>`
        2. 自定义事件`data-categoryid`确定点击的是哪一级菜单 三级菜单的自定义事件不同
        3. event.target 获取是哪个节点触发了事件 节点的属性 => dataset 可以获取节点的自定义属性和属性
        4. 传参：定义对象，动态传入参数
    3. 代码实现：
    ```js
        goSearch (event) {
            // 跳转最佳解决方案：编程式导航 + 事件委派
            // 利用事件委派存在一些问题：
            // 事件委派是把所有的子节点的事件委派给父标签
            // 1. 怎么确定点击的是 a 标签？
            // 2. 如何获取参数？ => 1、2、3级分类的产品的名字、id
            // 点击的是 a 标签 => 自定义属性 :data-categoryName="c1.categoryName"
            // event.target 可以获取是哪个节点触发了事件 需要带到带有 data-categoryName 这样的节点 => a 标签
            // 节点有一个属性 => dataset 可以获取节点的自定义属性和属性
            const element = event.target
            const { categoryname } = element.dataset
            const { category1id, category2id, category3id } = element.dataset
            // 如果标签上有 categoryname 属性 一定是 a 标签
            if (categoryname) {
                // 整理路由跳转的参数
                const location = { name: 'Search' }
                const query = { categoryName: categoryname }
                // 一级二级三级分类
                if (category1id) {
                    query.category1id = category1id
                } else if (category2id) {
                    query.category2id = category2id
                } else if (category3id) {
                    query.category3id = category3id
                }
                // 整理完参数
                location.query = query
                console.log(location)
                // 路由跳转
                this.$router.push(location)
            }
        }
    ```
### Search 模块中 TypeNav 商品分类菜单过渡动画
1. 控制 search 模块 type-nav 显示和隐藏
解决方案：
1. type-nav 中添加鼠标移入和鼠标移出事件 ` @mouseleave="leaveShow" @mouseenter="enterShow"`
2. mounted 挂载时判断路径 如果不是 home 挂载时隐藏 type-nav
```js
    mounted () {
    // 通知 Vuex 发请求，获取数据，存储于仓库中
    this.$store.dispatch('Home/categoryList')
    // 当前组件挂载完毕 让 show 属性 变为 false
    // 如果不是 home 路由组件 将 type-nav 进行隐藏
    if (this.$route.path !== '/home') {
    this.show = false
    }
}

// methods
// 鼠标移入，展示商品分类列表
enterShow () {
    this.show = true
    },
    // 鼠标离开的时候，隐藏商品分类列表
    leaveShow () {
    this.currentIndex = -1
    // 判断如果是 search 组件 隐藏菜单
    if (this.$route.path !== '/home') {
        this.show = false
    }
}
```
3. 过渡动画效果
    1. 前提：组件 / 元素有 v-if / v-show 指令才可以进行过渡动画
    2. Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
        1. 条件渲染 (使用 v-if)
        2. 条件展示 (使用 v-show)
        3. 动态组件
        4. 组件根节点
        5. ```html
            <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
            </div>
            ```
            ```js
            new Vue({
                el: '#demo',
                data: {
                    show: true
                }
            })
            ```
            ```css
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }
            ```
        3. `transition`的钩子函数：
            1. `v-enter`：定义上半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
            2. `v-enter-to`：定义上半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
            3. `v-enter-active`：这里包含了上面的`v-enter`、`v-enter-to`两个时间段，在这里可以对上半场过渡定义过渡时间、曲线等
            4. `v-leave`：定义下半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
            5. `v-leave-to`：定义下半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
            6. `v-leave-active`：这里包含了上面的`v-leave`、`v-leave-to`两个时间段，在这里可以对下半场过渡定义过渡时间、曲线等
        4. 自定义过渡类名：
            1. 在页面中，我们可能有多个地方需要进行过渡效果，那么如果使用vue提供的默认那6个类，那么所有要过渡地方的过渡效果都是一样的了，这不是我们想要的。这个时候就需要我们自己定义专属于各个过渡效果的类名。
            2. 其实很简单，只要给`transition`标签添加`name`属性，在`name`属性中写入自己的**类名前缀**
            例如`<transition name="my"></transition>`，那么在使用类名的时候就是这样的：`.my-leave`、`.my-enter-to`等。
            注意只能更改前缀，后面的`enter`、`enter-to`、`leave`、`leave-to`、`enter-active`、`leave-active`**是不能变的**
        5. 过渡列表：
            1. 对列表进行过渡渲染不能再使用`transition`，必须使用`transition-group`元素包裹；
            2. 一般列表都是通过`v-for`来实现的，这个时候必须加上 `:key` 属性，这个是官方强制要求的。
            3. 若是要对列表进行数据删除，并且在被删除元素进行过渡移走时、下一个元素顶上来也必须实现动画，那么就要使用`.v-move`这个类（写`transition`）、在`.v-leave-active`中写`position:absolute`（这个时候要记得给被删除元素设置宽高）
            4. `transition-group`在DOM上不会像`transition`一样什么都不显示，而是会以一个真实的`span`标签进行显示；因为列表一般是包含在`ul`、`ol`、`dl`中，这些标签W3C规定只能添加 `li` 元素，那么这里的`span`包含在`ul`中就不合规范了，我们可以给`transi-group`设置属性`tag="ul"`，这个是指定`transition-group`元素被渲染成什么元素
            5. 如果要实现列表进入时的动画，可以给`transition-group`添加`appear`属性即可
        6. 总结：
            1. 给一个元素设置过渡效果有三种方式：
                1. 使用`v-enter`等类
                2. 使用`before-enter`等钩子函数
                3. 使用`enter-class`等过渡样式
            2. 给列表添加过渡要使用`transition-group`进行包裹
    3. CSS `transition` 属性
        1. `transition` 属性是一个简写属性，用于设置四个过渡属性：
            1. `transition-property`：规定设置过渡效果的 CSS 属性的名称（默认：`all`）
            2. `transition-duration`：规定完成过渡效果需要多少秒或毫秒。
            3. `transition-timing-function`：规定速度效果的速度曲线。
            4. `transition-delay`：定义过渡效果何时开始。
            - **注释：**请始终设置 `transition-duration` 属性，否则时长为 0，就不会产生过渡效果。
    4. 实现：
    ```css
    // 过渡动画样式
    // 过渡动画开始状态（进入）
    .sort-enter {
        height: 0px;
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
        height: 461px;
    }
    // 定义动画时间，速率
    .sort-enter-active {
        transition: all .5s linear;
    }
    ```
 ### 多个页面请求只发一次
 1. 需求：多个页面切换，之发送一次请求
 2. 实现：App.vue 根组件程序运行时`mounted`只会加载一次
    - main.js 虽然也只加载一次 但是不能在这里使用
    - 原因：`this` => 实例对象
 3. 代码 => App.vue
 ```js
mounted () {
    // 派发一个 action 获取商品分类的三级列表数据 程序运行时只加载一次
    // 通知 Vuex 发请求，获取数据，存储于仓库中
    this.$store.dispatch('Home/categoryList')
}
 ```
