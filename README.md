<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [vue-back-stage-management](#vue-back-stage-management)
  - [项目描述](#%E9%A1%B9%E7%9B%AE%E6%8F%8F%E8%BF%B0)
  - [项目配置](#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE)
  - [业务逻辑：](#%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
    - [route 动态引入：](#route-%E5%8A%A8%E6%80%81%E5%BC%95%E5%85%A5)
    - [`Footer`显示和隐藏：](#footer%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8F)
    - [路由传参：](#%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%8F%82)
    - [注册组件](#%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6)
    - [axios 二次封装](#axios-%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85)
    - [vuex模块化](#vuex%E6%A8%A1%E5%9D%97%E5%8C%96)
    - [js => 一级分类动态添加背景色](#js--%E4%B8%80%E7%BA%A7%E5%88%86%E7%B1%BB%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E8%83%8C%E6%99%AF%E8%89%B2)
    - [卡顿现象 => 节流和防抖](#%E5%8D%A1%E9%A1%BF%E7%8E%B0%E8%B1%A1--%E8%8A%82%E6%B5%81%E5%92%8C%E9%98%B2%E6%8A%96)
    - [三级联动传参](#%E4%B8%89%E7%BA%A7%E8%81%94%E5%8A%A8%E4%BC%A0%E5%8F%82)
    - [Search 模块中 TypeNav 商品分类菜单过渡动画](#search-%E6%A8%A1%E5%9D%97%E4%B8%AD-typenav-%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%E8%8F%9C%E5%8D%95%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB)
    - [多个页面请求只发一次](#%E5%A4%9A%E4%B8%AA%E9%A1%B5%E9%9D%A2%E8%AF%B7%E6%B1%82%E5%8F%AA%E5%8F%91%E4%B8%80%E6%AC%A1)
    - [mock.js 模拟数据](#mockjs-%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE)
    - [swiper 轮播图](#swiper-%E8%BD%AE%E6%92%AD%E5%9B%BE)
    - [v-for 在自定义标签中使用](#v-for-%E5%9C%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE%E4%B8%AD%E4%BD%BF%E7%94%A8)
    - [组件通信的方式](#%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E7%9A%84%E6%96%B9%E5%BC%8F)
    - [封装共用组件 Carousel](#%E5%B0%81%E8%A3%85%E5%85%B1%E7%94%A8%E7%BB%84%E4%BB%B6-carousel)
    - [axios 参数](#axios-%E5%8F%82%E6%95%B0)
    - [模块化仓库 getters 整理传递过来的数据](#%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BB%93%E5%BA%93-getters-%E6%95%B4%E7%90%86%E4%BC%A0%E9%80%92%E8%BF%87%E6%9D%A5%E7%9A%84%E6%95%B0%E6%8D%AE)
    - [页面中多次请求数据](#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E5%A4%9A%E6%AC%A1%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE)
    - [Object.assign()](#objectassign)
    - [面包屑](#%E9%9D%A2%E5%8C%85%E5%B1%91)
    - [分页器](#%E5%88%86%E9%A1%B5%E5%99%A8)
    - [放大镜](#%E6%94%BE%E5%A4%A7%E9%95%9C)
    - [正则](#%E6%AD%A3%E5%88%99)
    - [购物车](#%E8%B4%AD%E7%89%A9%E8%BD%A6)
      - [设定购物车的数量加减](#%E8%AE%BE%E5%AE%9A%E8%B4%AD%E7%89%A9%E8%BD%A6%E7%9A%84%E6%95%B0%E9%87%8F%E5%8A%A0%E5%87%8F)
      - [加入购物车vuex返回数据](#%E5%8A%A0%E5%85%A5%E8%B4%AD%E7%89%A9%E8%BD%A6vuex%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE)
      - [购物车路由跳转携带多数据 => 会话存储](#%E8%B4%AD%E7%89%A9%E8%BD%A6%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC%E6%90%BA%E5%B8%A6%E5%A4%9A%E6%95%B0%E6%8D%AE--%E4%BC%9A%E8%AF%9D%E5%AD%98%E5%82%A8)
      - [uuid游客身份获取购物车数据](#uuid%E6%B8%B8%E5%AE%A2%E8%BA%AB%E4%BB%BD%E8%8E%B7%E5%8F%96%E8%B4%AD%E7%89%A9%E8%BD%A6%E6%95%B0%E6%8D%AE)
      - [js 数组遍历some,foreach,map,filter,every对比](#js-%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86someforeachmapfilterevery%E5%AF%B9%E6%AF%94)
      - [修改购物车产品数量](#%E4%BF%AE%E6%94%B9%E8%B4%AD%E7%89%A9%E8%BD%A6%E4%BA%A7%E5%93%81%E6%95%B0%E9%87%8F)
      - [删除所有选中商品](#%E5%88%A0%E9%99%A4%E6%89%80%E6%9C%89%E9%80%89%E4%B8%AD%E5%95%86%E5%93%81)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# vue-back-stage-management

## 项目描述
1. 此项目为在线电商Web App (SPA)
2. 包括首页, 搜索列表, 商品详情, 购物车, 订单, 支付, 用户登陆/注册等多个子模块
3. 使用Vue全家桶+ES6++Webpack+Axios等前端最新最热的技术
4. 采用模块化、组件化、工程化的模式开发


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
    - 在样式中也可以使用@符号，切记前面加上~
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

### 注册组件
- 注册为全局组件
- 好处：注册一次，可以在项目中任意地方使用
- 实现：
```js
// main.js
// 注册三级联动组件 --- 全局组件
import TypeNav from '@/components/TypeNav'
// 注册组件
Vue.component(TypeNav.name, TypeNav)
```

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
	// {commit} 解构赋值，相当于 => 
	/* 
	add(context) {
		context.commit('add')
	}
	*/
	/*
	 context: {
        state,   等同于store.$state，若在模块中则为局部状态
        rootState,   等同于store.$rootState,只存在模块中
        commit,   等同于store.$commit
        dispatch,   等同于store.$dispatch
        getters   等同于store.$getters
	}
	*/
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
        1. 自定义事件`:data-categoryName`确定点击的是a标签 `<a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>`
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
                    query.category1Id = category1id
                } else if (category2id) {
                    query.category2Id = category2id
                } else if (category3id) {
                    query.category3Id = category3id
                }
                // 整理完参数
                location.query = query
                console.log(location)
                // 路由跳转
                this.$router.push(location)
            }
        }
    ```
3. 合并参数
    1. 在用动态传参时，如果只传params参数，会覆盖之前携带的query参数；如果只传query参数，会覆盖之前携带的params参数
    2. 解决方案：如果有query参数，传递params参数的时候携带
    3. 代码实现：
    ```js
    // 路由传参
    const location = {
        name: 'Search',
        params: { keyword: this.keyword || undefined }
    }
	// 如果路由跳转的时候，带有 query 参数，需要一起传递过去，判断永远为真（empty），所以去掉 if 
    location.query = this.$route.query
    this.$router.push(location)
    ```
4. input按下回车事件
```js
@keyup.enter="goSearch"
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

### mock.js 模拟数据
https://github.com/nuysoft/Mock/wiki
1. 前端 mock 的数据不会对服务器进行通信，拦截 ajax 请求
2. 准备 JSON 数据 => mock 文件夹下创建相应的 JSON 文件
3. 把 mock 数据需要的图片放置在 public 文件夹下 => public 文件夹在打包时，会把相应的资源原封不动的打包到 dist 文件夹中
4. 创建 mockServe.js => 开始 mock，通过 mockjs 模块实现
5. mockServe.js 文件在入口文件中引入（至少需要执行一次，才能模拟数据）
6. 代码实现：
```js
// 模拟数据
// 引入 mockjs 模块
import Mock from 'mockjs'
// 引入 JSON 格式数据(JSON 数据没有对外暴露，但是可以引入)
// webpack 默认对外暴露 image JSON css
import banner from './banner.json'
import floor from './floor.json'

// mock 数据：第一个参数请求地址，第二个参数请求数据
Mock.mock('/mock/banner', { code: 200, data: banner }) // 模拟首页轮播图数据
Mock.mock('/mock/floor', { code: 200, data: floor })
```
7. request请求封装
    1. create 新的 axios实例，设置baseURL与mockServe.js的baseURL相同
    ```js
    const morkRequests = axios.create({
    // 配置对象
    baseURL: '/mock',
    timeout: 5000
    })
    ```
    2. 封装axios请求

### swiper 轮播图
1. 安装 swiper 插件（vue2中最好用 swiper@5.4.5
2. 引包
```js
import Swiper from 'swiper'
import 'swiper/css'
```
3. 页面中结构
4. 在页面中有结构后 new Swiper 实例
```js
// new Swiper 实例
const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 前进 / 后退 按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
	// 显示几个图片
	slidesPerView: 3,
	// 每次切换图片的个数
	slidesPerGroup: 3
})
```
5. mounted 中放置 swiper 失效
    1. new Swiper 实例前，页面中结构必须要有，但是放在 mounted（挂载完毕） 中不行 页面结构还不完整
        - 因为有些数据是动态的（v-for遍历的是服务器的数据，这个时候还没有添加到 stage中），仓库中的数据还不完整
        - dispatch 中涉及到异步语句 => v-for 便利的时候结构还不完整
        - 可以用定时器 setTimeout，只能完成功能，不能确定什么什么时候异步语句执行完成
    2. 解决方案：watch 数据监听 => 已有数据变化
        1. 仓库中 bannerList 数据从 [] => 有数据，可以监听组件的 bannerList
        2. 在 watch 中直接执行时只能保证数据有了 不能保证 v-for 执行完成，v-for执行完成才有页面
        3. nextTick
            1. 放在`Vue.nextTick()` 回调函数中的执行的应该是会**对DOM进行操作的js代码**
            2. 理解：`nextTick()` 是将回调函数延迟在下一次dom更新数据后调用 => 当数据更新了，在dom中渲染后，自动执行该函数
            3. Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。`$nextTick` 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 `$nextTick`，则可以在回调中获取更新后的 DOM
            4. `$nextTick`可以保证页面中结构一定是有的，经常和很多插件一起使用（都需要DOM存在了）
    3. 代码实现
    ```js
      watch: {
        // 监听 bannerList 数据的变化
        // 因为这条数据发生过变化：[] => 有数据
        bannerList: {
            handler (newValue, oldValue) {
                // 通过 watch 监听 bannerList 数据的变化
                // nextTick() 在 下次DOM更新 循环结束之后 执行延迟回调 在修改数据之后 立即使用这个方法 获取更新后的DOM
                this.$nextTick(() => {
                    // 当执行这个回调的时候 保证服务器数据回来了 v-for执行完毕了（轮播图的结构一定有了）
                    // eslint-disable-next-line no-unused-vars
                    const mySwiper = new Swiper('.swiper-container', {
                        loop: true,
                        // 分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        // 前进 / 后退 按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    })
                })
            }
        }
    }
    ```

### v-for 在自定义标签中使用
1. 切记：仓库中 state 数据格式，取决于服务器返回的数据
2. getFloorList 这个 action 在哪里触发 => 需要遍历循环出两个 floor 所以在父组件 home 中触发
3. v-for 也可以在自定义标签中使用
```html
<floor v-for="floor in floorList" :key="floor.id"/>
```
4. floor组件中 swiper 轮播图放在 `mounted` 中
    1. 在组件内部发请求并且动态渲染结构（服务器数据需要请求完毕）因此不能写在 `mounted` 中
    2. 这次请求的数据在父组件home组件中 `mounted` 中，父组件先执行 `mounted` 挂载完毕后再执行子组件的 `beforeCreate`，经验证，在 `beforeCreate` 中 `new Swiper` 也可以成功，说明子组件在`create`前就已经渲染出页面加载好数据了
    3. 先有数据，数据到了之后`v-for`已经执行完了，结构已经完成了，再实现轮播图
    4. ```js
      // 在 beforeCreate 里也成功了
      beforeCreate () {
        // eslint-disable-next-line no-unused-vars
        const mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // 前进 / 后退 按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
            })
        }
        ```

### 组件通信的方式
1. props => 父 => 子
```js
:list="floor"
```
```js
props: [
    'list'
]
```
2. 自定义事件：@on @emit 子 => 父
3. 全局事件总线 $bus => 全能
4. pubsub-js vue中不用 全能（react）
5. 插槽 具名插槽 作用域插槽 默认插槽

### 封装共用组件 Carousel
1. 需求：拆分 Carousel
2. 问题：两个页面中 Carousel 组件 `new Swiper` 时间节点不同
3. 解决方案：全部变成 `watch`
    1. 问题：floor 页面中数据和页面渲染已经在父组件中完成，无法监听到数据变化
    2. 解决方案：`immediate:true` => 立即执行一次
4. 代码实现：（共用组件放在 componments 文件夹下）
```vue
<template>
    <div class="swiper-container" id="floor2Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    list: {
      // immediate 立即监听数据有没有变化，立即执行一次
      // 父组件给的数据 在子组件中未发生变化
      immediate: true,
      handler () {
        // 保证组件结构相同，都加上 $nextTick()
        this.$nextTick(() => {
        // eslint-disable-next-line no-unused-vars
          const mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            // 前进 / 后退 按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      }
    }
  }
}
</script>
```
```html
<!-- floor 组件传值 -->
<carousel :list="list.carouselList"/>
```
```html
<!-- listContainer 组件传值 -->
<carousel :list="bannerList"/>
```

### axios 参数
```js
axios({
  method: 'get', // post、get、put....
  baseURL: '', // 请求的域名，基本地址，公共的路径
  url: '', // 请求的路径
  params: {}, // get参数会将请求参数拼接在url上
  data: {}, // post会将请求参数放在请求体中
  headers: {}, // 设置请求头，例如设置token等
  timeout: 1000, // 设置请求超时时长，单位：ms
})
```
1. data和params：
    1. data => post 请求
    2. params => get 请求
2. vuex 中 action 传参
```js
async getSearchList ({ commit }, params = {}) {
    // 当前 reqGetSearchInfo 这个函数在调用服务器数据的时候，至少传递一个参数（空对象）
    // params形参：当用户派发 action 时，第二个参数传递过来的，至少是一个空对象
    const res = await reqGetSearchInfo(params)
    if (res.code === 200) {
    commit('SEARCHLIST', res.data)
    }
}
```

### 模块化仓库 getters 整理传递过来的数据
1. getters 中的形参，在模块化后指的是本模块中的 state
2. 如果服务器数据请求到了，getters 中数据返回的是一个数组，如果网络不好 | 没有网 返回的是 undefined 不能遍历，至少写一个空数组
3. 在使用时，打开命名空间的模块前面也需要加模块名
4. 使用时如果需要对 getters 属性重命名需要使用对象
5. 代码实现：
```js
// Search模块
getters: {
    // 当前形参 state => search 仓库中的 state
    // 如果服务器数据请求到了，返回的是一个数组
    // 如果网络不好 | 没有网 返回的是 undefined 不能遍历
    // 至少写一个空数组
    goodsList (state) {
    return state.searchList.goodsList || []
    },
    trademarkList (state) {
    return state.searchList.trademarkList || []
    },
    attrsList (state) {
    return state.searchList.attrsList || []
    }
}
```
```js
// 使用
// 把仓库中的数据映射成组件身上的数据
import { mapGetters } from 'vuex'
export default {
    computed: {
        // 开启命名空间 namespaced => getters也是划分模块的
        ...mapGetters({
        // 重命名需要使用对象
        goodsList: 'Search/goodsList'
        })
    }
}
```

### 页面中多次请求数据
1. 问题：在 `mounted` 中请求的数据值会在页面挂载完毕后请求一次
2. 需求：在 `search` 查找时需要多次请求数据（传递不同参数）
3. 解决方案：封装成函数，一次封装多次调用，`mounted` 和 `watch` 中调用
4. 代码实现：
	1. `watch` 监听路由信息是否发生变化
	2. `$route` 属于组件实例上的响应式数组，`watch` 监听时不用写 `this`
```js
export default {
	  data () {
    return {
      searchParams:
        // 带给服务器的参数
        {
          category1Id: '', // 一级分类 id
          category2Id: '', // 二级分类 id
          category3Id: '', // 三级分类 id
          categoryName: '', // 分类名称
          keyword: '', // 关键字
          order: '', // 排序
          pageNo: 1, // 分页器参数：当前是第几页
          pageSize: 10, // 每一页展示数据个数
          props: [''], // 平台售卖属性的参数
          trademark: '' // 品牌
        },
      params: {
        // 带给服务器的数据是可有可无的，如果属性值为空字符串还是把相应字段带给服务器
        // 此时赋值为 undefined
        category1Id: undefined, // 一级分类 id
        category2Id: undefined, // 二级分类 id
        category3Id: undefined, // 三级分类 id
        keyword: undefined, // 关键字
        categoryName: undefined // 分类名称
      }
    }
  },
	watch: {
		// 监听属性
		// $route 属于组件实例上的响应式数组，和 searchParams 平级
		// 此处不写 this
		$route () {
			// 直接把对象改变指针，此处不需要深度监听
			// 监听路由信息是否发生变化，如果发生变化，再次发送请求
			// 再次发送请求前需要整理参数
			this.getParams()
			this.getData()
			// 每一次请求完毕，应该把相应的一二三级分类的 id 置空
		}
	},
    beforeMount () {
        // 发请求之前要给服务器参数 searchParams
        // Object.assign 合并对象
        this.getParams()
    },
    // 组件挂载完毕 mounted 只执行一次，不能在里面发请求
    // 使用函数 => 声明一次，多次调用
    mounted () {
        this.getData()
    },
  methods: {
		// 向服务器发请求，获取 search 模块数据 => 根据参数不同，返回不同数据
		getData () {
			// 组件挂载完毕 mounted 只执行一次，不能在里面发请求
			// 使用函数 => 声明一次，多次调用
			// 先测试再确定数据的格式
			this.$store.dispatch('Search/getSearchList', this.searchParams)
		},
		getParams () {
			// 下一次传递参数前需要把上一次的清空
			Object.assign(this.searchParams, this.params)
			Object.assign(this.searchParams, this.$route.query, this.$route.params)
		}
	}
}
```

### Object.assign()
1. ` Object.assign()`方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
    1. `Object.assign()`接口可以接收多个参数，第一个参数是目标对象，后面的都是源对象，`assign`方法将多个原对象的属性和方法都合并到了目标对象上面，如果在这个过程中出现同名的属性（方法），后合并的属性（方法）会覆盖之前的同名属性（方法）。
    2. 基本用法
    ```js
    var target  = {a : 1}; //目标对象
    var source1 = {b : 2}; //源对象1
    var source2 = {c : 3}; //源对象2
    var source3 = {c : 4}; //源对象3，和source2中的对象有同名属性c
    Object.assign(target,source1,source2,source3);
    //结果如下：
    //{a:1,b:2,c:4}
    ```
    3. assign的设计目的是用于合并接口的，所以它接收的第一个参数（目标）应该是对象，如果不是对象的话，它会在内部转换成对象，所以如果碰到了`null`或者`undefined`这种不能转换成对象的值的话，`assign`就会报错。但是如果源对象的参数位置，接收到了无法转换为对象的参数的话，会忽略这个源对象参数。
    ```js
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    
    const obj = Object.assign({}, v1, v2, v3);
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }
    ```
    为什么会出现这个结果呢？首先，第一个参数位置接收到的是对象，所以不会报错，其次，由于字符串转换成对象时，会将字符串中每个字符作为一个属性，所以，abc三个字符作为`“0”，“1”，“2”`三个属性被合并了进去，但是布尔值和数值在转换对象时虽然也成功了，但是属性都是不可枚举的，所以属性没有被成功合并进去。在这里需要记住 **“assign不会合并不可枚举的属性”**
    ```js
    Object(true) // {[[PrimitiveValue]]: true}
    Object(10)  //  {[[PrimitiveValue]]: 10}
    Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
    ```
    同样，`Object.assign`拷贝的属性是有限制的，只会拷贝对象本身的属性（不会拷贝继承属性），也不会拷贝不可枚举的属性。但是属性名为`Symbol`值的属性，是可以被`Object.assign`拷贝的。
    如果assign只接收到了一个对象作为参数的话，就是说没有源对象要合并到目标对象上，那会原样把目标对象返回。
    4. `Object.assign`进行的拷贝是浅拷贝。也就是说，如果拷贝过来的属性的值是对象等复合属性，那么只能拷贝过来一个引用。
    ```js
    const obj1 = {a: {b: 1}};
    const obj2 = Object.assign({}, obj1);
    
    obj1.a.b = 2;
    obj2.a.b // 2
    ```
    由于是浅拷贝，所以属性a的内部有任何变化，都会在目标对象上呈现出来。
    5. `Object.assign`进行合并的时候，一旦碰到同名属性，就会出现覆盖现象。所以使用时务必小心。
    6. `Object.assign`是针对`Object`开发的API，一旦在源对象的参数未知接收到了其他类型的参数，会尝试类型转换。如果是数组类型的话，类型转换的结果是将每个数组成员的值作为属性键值，将数组成员在数组中的位置作为属性键名。多个数组组成参数一同传入的话还会造成覆盖。具体例子如下：
    ```js
    Object.assign([1, 2, 3], [4, 5])
    // [4, 5, 3]
    ```
    上面代码中，`assign`把数组视为属性名为 `0、1、2` 的对象，因此源数组的 `0` 号属性`4`覆盖了目标数组的 `0` 号属性`1`。
    7. `Object.assign`只能将属性值进行复制，如果属性值是一个`get`（取值函数）的话，那么会先求值，然后再复制。
    ```js
    // 源对象
    const source = {
    //属性是取值函数
    get foo(){return 1}
    };
    //目标对象
    const target = {};
    Object.assign(target,source);
    //{foo ; 1}  此时foo的值是get函数的求值结果
    ```
2. `Object.assign`方法的常见用途
    1. 为对象添加属性
    ```js
    // 为对象Point类的实例对象添加属性x和属性y
    class Point{
        constructor(x,y){
            Object.assign(this,{x,y});
        }
    }
    ```
    2. 为对象添加方法
    ```js
    // 方法也是对象
    // 将两个方法添加到类的原型对象上
    // 类的实例会有这两个方法
    Object.assign(SomeClass.prototype,{
        someMethod(arg1,arg2){...},
        anotherMethod(){...}
    });
    ```
    3. 克隆对象
    ```js
    //克隆对象的方法
    function clone(origin){
        //获取origin的原型对象
        let originProto = Obejct.getPrototypeOf(origin);
        //根据原型对象，创建新的空对象，再assign
        return Object.assign(Object.create(originProto),origin);
    }
    ```
    4. 为属性指定默认值
    ```js
    // 默认值对象
    const DEFAULTS = {
    logLevel : 0,
    outputFormat : 'html'
    };
    
    // 利用assign同名属性会覆盖的特性，指定默认值，如果options里有新值的话，会覆盖掉默认值
    function processContent(options){
    options = Object.assign({},DEFAULTS,options);
    console.log(options);
    //...
    }
    ```
    处于`assign`浅拷贝的顾虑，`DEFAULTS`对象和`options`对象此时的值最好都是简单类型的值，否则函数会失效。
    ```js
    const DEFAULTS = {
    url: {
        host: 'example.com',
        port: 7070
    },
    };
    
    processContent({ url: {port: 8000} })
    // {
    //   url: {port: 8000}
    // }
    ```
    上面的代码，由于`url`是对象类型，所以默认值的`url`被覆盖掉了，但是内部缺少了`host`属性，形成了一个bug
3. 本项目中需求：动态给对象赋值，减少代码量，利于维护
4. 代码实现：
```js
export default {
      data () {
    return {
      searchParams:
        // 带给服务器的参数
        {
          category1Id: '', // 一级分类 id
          category2Id: '', // 二级分类 id
          category3Id: '', // 三级分类 id
          categoryName: '', // 分类名称
          keyword: '', // 关键字
          order: '', // 排序
          pageNo: 1, // 分页器参数：当前是第几页
          pageSize: 10, // 每一页展示数据个数
          props: [''], // 平台售卖属性的参数
          trademark: '' // 品牌
        }
    }
  },
    beforeMount () {
    // 发请求之前要给服务器参数 searchParams
    // Object.assign 合并对象
    Object.assign(this.searchParams, this.$route.query, this.$route.params)
  }
}
```

### 面包屑
1. 控制点击删除分类面包屑后，路由跳转和页面显示
	1. 路由跳转
		1. 在点击删除面包屑后，需要删除路由的 query 参数，保留 params 参数
		2. 实现：
		```js
		if (this.$route.params) {
			this.$router.push({
				name: 'Search',
				params: this.$route.params
			})
		}
		```
	2. 页面显示
		1. 在点击删除面包屑后，清除请求参数，因为请求参数是可选参数，所以把清除的参数都设为 undefined，减少服务器请求压力
		2. 实现：
		```js
		export default {
			data() {
				return {
					params: {
						// 带给服务器的数据是可有可无的，如果属性值为空字符串还是把相应字段带给服务器
						// 此时赋值为 undefined
						category1Id: undefined, // 一级分类 id
						category2Id: undefined, // 二级分类 id
						category3Id: undefined, // 三级分类 id
						keyword: undefined, // 关键字
						categoryName: undefined // 分类名称
					}
				}
			}
		}
		```
		```js
		// 清空前一次的参数
		Object.assign(this.searchParams, this.params)
        // 向服务器发请求，因为 watch 监听 route 变化，所以不需要再次发请求
		```
		3. 方法总代码：
		```js
		// 删除分类名
		removeCategoryName () {
			// 清空前一次的参数
			Object.assign(this.searchParams, this.params)
			// 向服务器发请求，因为 watch 监听 route 变化，所以不需要再次发请求
			// 地址栏也需要修改，进行路由跳转，跳转到自己这里
			// 严谨：本意是删除 query，不要顺带把 params 也删除
			if (this.$route.params) {
				this.$router.push({
				name: 'Search',
				params: this.$route.params
				})
			}
		}
		```
2. 面包屑处理关键字
	1. 路由跳转
		1. 在点击删除面包屑后，需要删除路由的 params 参数，保留 query 参数
		2. 实现：
		```js
		if (this.$route.query) {
			this.$router.push({
				name: 'Search',
				query: this.$route.query
			})
		}
		```
	2. 页面显示
		1. 在点击删除面包屑后，清除请求参数，因为请求参数是可选参数，所以把清除的参数都设为 undefined，减少服务器请求压力
		2. 实现：
		```js
		this.searchParams.keyword = undefined
		```
	3. 实现总代码：
	```js
	    // 删除关键字
    removeKeyword () {
      // 给服务器带的参数 searchParams 的 keyword 清空
      this.searchParams.keyword = undefined
      // 地址栏也需要修改，进行路由跳转，跳转到自己这里
      // 严谨：本意是删除 query，不要顺带把 params 也删除
      if (this.$route.query) {
        this.$router.push({
          name: 'Search',
          query: this.$route.query
        })
      }
    }
	```
	4. 清除文本框内容
		1. 当面包屑中的关键字清除后，需要让兄弟组件 `Header` 组件中的关键字清除 => 组件通信
		2. 全局事件总线 `eventBus`
		3. `$bus`使用
			1. main.js 挂载 `$bus`
			```js
			new Vue({
				beforeCreate () {
					// 配置全局事件总线 $bus
					Vue.prototype.$bus = this
				}
			}).$mount('#app')
			```
			2. `$emit`发请求
			```js
			// 清除兄弟组件 Header 中关键字
			this.$bus.$emit('clear')
			```
			3. `$on`接收
			```js
			  mounted () {
				// 通过全局事件总线清除关键字
				this.$bus.$on('clear', () => {
				this.keyword = ''
				})
			}
			```
3. 面包屑处理品牌信息
	1. 品牌信息在子组件中，发送请求在父组件中，需要子传父 => 自定义事件
		1. 子组件 `$emit`
		```js
		  methods: {
			// 品牌的事件处理函数
			trademarkHandler (trademark) {
			// 点击品牌，整理参数，向服务器发送请求获取响应数据
			// 父组件发请求，子组件传值
			// 自定义事件
			this.$emit('trademarkInfo', trademark)
			}
		}
		```
		2. 父组件 自定义事件
		```html
		<SearchSelector @trademarkInfo="trademarkInfo"/>
		```
		```js
		// 自定义事件回调
		trademarkInfo (trademark) {
			// 整理品牌字段参数
			// 服务器请求字段 trademark 需要字符串拼接
			this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
			// 整理参数后再次发送请求
			this.getData()
		}
		```
	2. 点击删除面包屑
	```html
	<!-- 品牌的面包屑 -->
	<!-- split(':')[1] => 用':'分割成两个字符串，取第二个 -->
	<li class="with-x" v-if="searchParams.trademark">{{searchParams.trademark.split(':')[1]}}<i @click="removeTrademark">×</i></li>
	```
	```js
	// 移除品牌面包屑
    removeTrademark () {
      this.searchParams.trademark = undefined
      this.getData()
    }
	```
4. 面包屑处理平台售卖属性
	1. 子 -> 父传值，需要传两个参数：1 => (属性 id，属性名)，2 => 点击的属性值
	2. 整理参数格式
	```js
	const props = `${attr.attrId}:${attrValue}:${attr.attrName}`
	```
	3. `props` 是一个数组，需要去重，防止添加多个标签
	```js
	// 数组去重
	if (this.searchParams.props.indexOf(props) === -1) {
		this.searchParams.props.push(props)
	}
	```
	4. 因为可能会点击多个属性值，所以面包屑的展示不能用 `v-if`，要用 `v-for`，使用`split`裁剪属性值
	```html
	<!-- 平台售卖属性值的展示 -->
	<li class="with-x" v-for="(attrValue, index) in searchParams.props" :key="index">{{attrValue.split(':')[1]}}<i @click="removeAttr(index)">×</i></li>
	```
	5. 删除面包屑时需要传递 `index` 参数，使用`splice`方法去除对应的数据
	```js
	// 整理参数
	this.searchParams.props.splice(index, 1)
	```

	### 排序
	1. 需求：点击“综合”排序，点击“价格”排序
	2. 分析：后台处理排序，传递参数，控制箭头的显示与隐藏
	3. 实现：
		1. 控制点击的是哪个按钮，添加 `class = 'active'` => `searchParams.order`传参为1 => 综合，为2 => 价格，计算属性
		```js
		isOne () {
			return this.searchParams.order.indexOf('1') !== -1
		},
			isTwo () {
			return this.searchParams.order.indexOf('2') !== -1
		}
		```
		2. 控制箭头的显示和隐藏 => `v-show`，`iconfont`，计算属性判断传参
		```js
		isAsc () {
			return this.searchParams.order.indexOf('asc') !== -1
		},
		isDesc () {
			return this.searchParams.order.indexOf('desc') !== -1
		}
		```
		3. 传递参数
			1. 判断传入的 flag 和 后台 order 中的 flag 是否一致 => 如果一致，是 desc 变为 asc；是 asc 变为 desc
			2. 不一致，默认传入 desc
	4. 代码：
	```html
	<!-- 排序结构 -->
	<ul class="sui-nav">
		<li :class="{active: isOne}" @click="changeOrder('1')">
			<a>综合<span
				v-show="isOne"
				class="iconfont"
				:class="{ 'icon-UP': isAsc, 'icon-DOWN': isDesc }"
			></span
			></a>
		</li>
		<li :class="{active: isTwo}" @click="changeOrder('2')">
			<a>价格<span
				v-show="isTwo"
				class="iconfont"
				:class="{ 'icon-UP': isAsc, 'icon-DOWN': isDesc }"
			></span
			></a>
		</li>
	</ul>
	```
	```js
	    // 排序
    changeOrder (flag) {
      // flag => 标记，代表用户电机的是综合还是价格
      // 起始状态
      const originFlag = this.searchParams.order.split(':')[0]
      // 起始排序顺序
      const originSort = this.searchParams.order.split(':')[1]
      // 准备一个新的 order 的属性值
      let newOrder = ''
      // 点击的是 '综合'
      if (flag === originFlag) {
        // flag === 1
        console.log(flag)
        newOrder = `${originFlag}:${originSort === 'desc' ? 'asc' : 'desc'}`
      } else {
        // 点击的是价格
        // flag === 2
        newOrder = `${flag}:${'desc'}`
      }
      console.log(newOrder)
      // 将新的 order 赋予 searchParams
      this.searchParams.order = newOrder
      this.getData()
    }
	```

### 分页器
1. 需求：展示每页数据条数，总数，当前页，当前页前后连续页码展示
2. 传参：`pageNo`, `pageSize`, `total`, `continues` => 连续页码数
3. 自定义分页器：在开发时先自定义数据，成功后再向服务器发送数据
4.  - Math.ceil() => 向上取整
	- Math.floor() => 向下取整
	 - Math.floor()容易出现精度问题，举个最简单例子:
        - 对小数 8.54 保留两位小数(虽然它已经保留了 2 位小数)
        - Math.floor(8.54*100)/100 // 输出结果为 8.53, 注意是 8.53 而不是 8.54
		- 所以这种函数慎用
	- Math.round() => 四舍五入
5. 重点：算出连续页码起始和结束
	1. 计算属性
	2. 逻辑：如果总页数小于 `continues`，显示全部页数；如果总页数大于`continues`，显示指定页数；如果起始页小于1 => 显示 1-5，如果结束页大于总页数，显示总页数
	3. 为了方便`v-for`显示页码，计算属性最后返回数组
		- `v-for`和`v-if`不能同时用，`v-for`优先级更高
	4. 因为用到的props数值较多，写this太麻烦，采用解构赋值
	```js
	const { continues, totalPage, pageNo } = this
	```
	5. 实现：
	```js
    // 计算连续页码的起始和结束
    startNumAndEndNum () {
      const { continues, totalPage, pageNo } = this
      // 定义两个变量存储起始和结束数字
      let start = 0
      let end = 0
      // 定义一个数组存储连续页码
      const continuesPage = []
      // 连续页码数为5 => 至少五页，不正常现象 => 总页数少于5
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        // 总页数大于5
        // 起始
        start = pageNo - parseInt(continues / 2)
        // 结束
        end = pageNo + parseInt(continues / 2)
        // 如果 start 为 0 或 负数
        if (start < 1) {
          start = 1
          end = continues
        }
        // 如果 end 比总页码大
        if (end > totalPage) {
          start = totalPage - continues + 1
          end = totalPage
        }
      }
      while (start <= end) {
        continuesPage.push(start++)
      }
      return continuesPage
    }
	```
6. 动态展示：
	1. 需求：起始页 > 1 && 结束页 < 总页数时展示首页和尾页
	2. 实现：`v-if`
	3. 代码：
	```html
	<template v-if="startNumAndEndNum[0] > 1">
		<button>1</button>
		<button>···</button>
	</template>
	<template v-if="startNumAndEndNum[startNumAndEndNum.length - 1] < this.totalPage">
		<button>···</button>
		<button>{{totalPage}}</button>
	</template>
	```
7. 请求接口，传递参数 => 子传父
	1. 自定义事件：
	```js
	@getPageNo='getPageNo'

	// 自定义事件的回调函数 => 获取当前页码
    getPageNo (pageNo) {
      this.searchParams.pageNo = pageNo
      this.getData()
    }
	```
	2. `$emit`传参
	```html
	<button @click="$emit('getPageNo', totalPage)" :class="{active: pageNo === totalPage}">{{totalPage}}</button>
	```

### 放大镜
1. 需求：鼠标移动，显示对应的放大效果
2. 分析：鼠标移动时，遮罩层移动，放大镜移动与遮罩层移动一致
3. 原理：
	1. 鼠标移动传递默认事件 `event` 包含移动距离 `offsetX`, `offsetY`
	2. `mask` DOM元素有`offsetWidth`和`offsetHeight`属性，为DOM元素的长和宽
	3. 遮罩层偏移量为 `offsetX - mask.offsetWidth`, `offsetY - mask.offsetHeight`
	4. 如果遮罩层偏移量小于`0`或者大于`mask`DOM元素`宽度（长度）`，则设为`0`或`mask`DOM元素`宽度（长度）`
	5. `big` 大小设置为 `200%`
	6. `big` 设置`left`和`width`为`-2`倍（反向移动，`left`和`width`为距离DOM元素的偏移量，鼠标下移需要`big`上移才能显示相同位置，如果鼠标下移，`big`也下移，显示的还是同一位置）
4. 代码：
```html
<div class="spec-preview">
	<img :src="imgObj.imgUrl" />
	<div class="event" @mousemove="handler"></div>
	<div class="big" ref="big">
		<img :src="imgObj.imgUrl" />
	</div>
	<!-- 遮罩层 -->
	<div class="mask" ref="mask"></div>
</div>
```
```js
handler (event) {
	const mask = this.$refs.mask
	const big = this.$refs.big
	let left = event.offsetX - mask.offsetWidth / 2
	let top = event.offsetY - mask.offsetHeight / 2
	// 约束范围
	if (left <= 0) left = 0
	if (left >= mask.offsetWidth) left = mask.offsetWidth
	if (top <= 0) top = 0
	if (top >= mask.offsetHeight) top = mask.offsetHeight
	// 修改元素的 left | top 属性值
	mask.style.left = left + 'px'
	mask.style.top = top + 'px'
	// 方向相反 => 设置为负
	big.style.left = -2 * left + 'px'
	big.style.top = -2 * top + 'px'
}
```

### 正则
1. 正则表达式元字符的讲解：
    - `.`   匹配除换行符以外的任意字符
    - `\w`  匹配数字或字母或下划线或汉字
    - `\s`  匹配任意的空白符
    - `\d`  匹配数字
    - `\b`  匹配单词的开始或结束
    - `^`   匹配字符串的开始
	- `$`   匹配字符串的结束
2. 常用的限定符：
    - `*`   重复零次或更多次
    - `+`   重复一次或更多次
    - `?`   重复零次或一次
   - `{n}`  重复n次
   - `{n,}` 重复n次或更多次
   - `{n,m}`   重复n次到m次
3. 正则的反义
    - `\W`  匹配任意不是字母，数字，下划线，汉字的字符
    - `\S`  匹配任意不是空白符的字符
    - `\D`  匹配任意非数字的字符
    - `\B`  匹配不是单词开头或结束的位置
    - `[^x]`    匹配除了`x`以外的任意字符
    - `[^aeiou]`   匹配除了`aeiou`这几个字母以外的任意字符（中括号的话就代表指定一个范围， 除了范围以外的任何字符都可以进行匹配）
4. 解释：`<a [^>]+>`    匹配用尖括号括起来的以`a`开头的字符串

### 购物车
#### 设定购物车的数量加减
1. 需求：点击输入框输入想要购买的数量，排除错误输入
2. 原理：string字符串 * 1 得到的是 NaN，输入小数需要变为整数
3. 实现：
```js
// 表单元素修改产品个数
changeSkuNum (event) {
	// 用户输入的文本 * 1，如果不是数字 会变成 NaN
	// 文本框 type = number 可以被绕过进行输入提交，也可以输入小鼠，所以不可以
	const value = event.target.value * 1
	// 如果输入的是字符串或者小于 1 的数
	if (isNaN(value) || value < 1) {
	this.skuNum = 1
	} else {
	// 输入小数需要变为整数
	this.skuNum = parseInt(this.skuNum)
	}
}
```
#### 加入购物车vuex返回数据
1. 需求：加入购物车成功 => 跳转路由，加入购物车失败 => 提示`error`
2. 原理：
	1. vuex中`action`是异步函数，返回`promise`
	2. 使用`try-catch`接收返回的成功 / 失败回调函数
3. 实现：
```js
// 将产品添加到购物车中
// 因为只接受一个参数，解构赋值
// { commit } 不用也要写上，否则会报错，传参是第二个参数
async addOrUpdateShopCart ({ commit }, { skuId, skuNum }) {
	// 服务器写入数据成功，并没有返回其他数据，只是返回 code === 200，表示成功
	// 服务器没有返回其余数据，不需要三连环存储数据
	const res = await reqAddOrUpdateShopCart(skuId, skuNum)
	if (res.code === 200) {
	// 服务器加入购物车成功
	return res
	} else {
	// 加入购物车失败
	return Promise.reject(new Error('failed'))
	}
}
```
```js
// 将商品添加到购物车中的回调函数
async addShopCart () {
	// 发请求：将产品添加到数据库（通知服务器）
	// 当前派发了一个 action 也向服务器发请求 判断加入购物车是成功还是失败 但是这个步骤是在vuex中进行的
	// 调用仓库中的函数，函数有返回值
	try {
	// 服务器存储成功：路由跳转
	await this.$store.dispatch('Detail/addOrUpdateShopCart', { skuId: this.$route.params.skuid, skuNum: this.skuNum })
	// 路由跳转
	this.$router.push({
		name: 'AddCartSuccess'
	})
	} catch (error) {
	// 服务器存储失败：给用户提示
	console.log(error.message)
	}
}
```

#### 购物车路由跳转携带多数据 => 会话存储
1. 需求：路由跳转携带多个数据，在浏览器地址中显示不方便
2. 原理：
    1. HTML5 新增 => 本地存储`localStorage`，会话存储`sessionStorage`
    2. 本地存储：持久化的 => 5M
    3. 会话存储： 非持久 => 会话结束就消失
    4. 无论是本地存储还是会话存储 => 一般存储字符串
3. 实现：
    1. 一些简单的数据 => 通知 query 形式传递给路由组件
    2. 产品信息的数据，比较复杂的对象形式的 => 会话存储，不持久化，会话结束数据再消失
    3. 存储的是字符串，需要把对象变成字符串再变回去
4. 代码：
```js
// 会话存储
sessionStorage.setItem('SKUINFO', JSON.stringify(this.skuInfo))
// 路由跳转
this.$router.push({
    name: 'AddCartSuccess',
    query: {
    skuNum: this.skuNum
    }
})
```
```js
export default {
    computed: {
        skuInfo () {
        return JSON.parse(sessionStorage.getItem('SKUINFO'))
        }
    }
}
```

#### uuid游客身份获取购物车数据
1. uuid 临时游客身份（uuid内置）
2. 需求：游客访问购物车需要临时身份token，关闭页面后再次打开也能查看上次访问时的购物车
3. 分析：
    1. 页面关闭后再次打开可以看到上次访问时的购物车 => 本地存储 localStorage
    2. 需要临时身份 => uuid生成随机数
    3. 只请求一次，每次访问时是同一个id => 单例模式
        1. 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
        2. 核心思想：是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象
        3. JavaScript实现代码：
        - ```js
            //单例模式抽象，分离创建对象的函数和判断对象是否已经创建
            var getSingle = function (fn) {
                var result;
                return function () {
                    return result || ( result = fn.apply(this, arguments) );
                }
            };
          ```
          - 形参fn是我们的构造函数，我们只要传入任何自己需要的构造函数，就能生成一个新的惰性单例。比如说传入创建一个女朋友的构造函数，并且调用getSingle(),就能生成一个新的女朋友。如果以后再调getSingle(),也只会返回刚才创建的那个女朋友。至于新女朋友——不存在的。
        4. 单例常用场景：只需要生成一个唯一对象的时候，比如说页面登录框，只可能有一个登录框，那么你就可以用单例的思想去实现他，当然你不用单例的思想实现也行，那带来的结果可能就是你每次要显示登陆框的时候都要重新生成一个登陆框并显示（耗费性能），或者是不小心显示出了两个登录框。
        5. 用例：https://blog.csdn.net/a715167986/article/details/115759643
4. 实现
```js
// detail.store.js
import { getUUID } from '@/utils/uuidToken'
export default {
  state: {
    // 游客临时身份
    uuid_token: getUUID()
  }
}
```
```js
// util/uuidToken.js
import { v4 as uuidv4 } from 'uuid'
// 生成一个随机字符串，每次执行不能再发生变化，游客身份持久存储
export const getUUID = () => {
  // 先从本地存储获取uuid（看一下里面是否有）
  let uuidToken = localStorage.getItem('UUIDTOKEN')
  if (!uuidToken) {
    // 生成游客临时身份
    uuidToken = uuidv4()
    // 本地存储一次
    localStorage.setItem('UUIDTOKEN', uuidToken)
  }
  // 一定要有返回值，不然是 undefined
  return uuidToken
}
```

#### js 数组遍历some,foreach,map,filter,every对比
1. [...].some(ck)函数 => 某个一个为true，则为true
    - 对数组中每个元素执行一次ck函数，知道某个元素返回true，则直接返回true。如果都返回false,则返回false
    - 检查整个数组中是否有满足ck函数的元素。
```js
var result = [1,5,3,6].some(  (v,i)  =>  (v>10) )      //所有元素都不满足，返回result = false
var result = [10,5,30,60].some(  (v,i)  =>  (v<10) )      //有一个(多个)满足，返回result  = true
```
2. [...].foreach(ck)函数 => 循环而已
    - 每个数组元素都执行一次ck函数，foreach函数无法用break跳出
```js
[50, 25, 49].forEach( (v,i) => console.log(v) );
//50     25      49
```
3. [...].map(ck)函数 => 返回每个元素返回值的集合
    - 每个数组元素都执行一次ck函数，最后返回每次元素执行ck函数后返回值的集合(数组)
```js
var newArray = [50,30,40].map( (v,i) => v/10 )       //每个元素除以10，最后返回一个新数组 newArray = [5,3,4]
```
4. [...].filter(ck)函数 => 得到返回值为true的元素的集合
    - 每个数组元素都执行一次ck函数，最后返回每次元素执行ck函数后返回值的为true的元素集合(数组)
```js
var newArray = [50,2,60,4,53,15].filter( (v,i) => (v>10) )   //返回数组中大于10的元素新数组  newArray = [50,60,53,15]
```
5. [...].every(ck)函数 => 某一个为false，则返回false
    - 每个数组元素都执行一次ck函数，直到某个元素执行函数ck返回false,则直接返回false,如果全部返回true，则返回true
```js
var result = [5,50,35,12,85].every( (v,i) => v<51 )  //返回有一个(多个)大于等于51,则返回 result = false
var result = [5,50,35,12,85].every( (v,i) => v<100 )  //全部大于51,则返回 result = true
```
6. [...].reduce(ck,init) => 依次执行ck(prv.next)
    - 数组依次执行ck函数。
```js
var result = [0,1,2,3]
restult.reduce((a,b)=> a+b,0)  // 返回 6
```
7. 本项目中应用：全选
```js
// 判断底部复选框是否勾选，全部产品都选中才勾选
isAllCheck () {
    // 遍历数组原理：只要全部元素 isChecked === 1，返回 true，否则返回 false
    return this.cartList.every(item => item.isChecked === 1)
}
```

#### 修改购物车产品数量
1. 需求：每次修改购物车数量时，重新发送请求，请求修改后的数量（+，-，input）
2. 原理：
    1. 传三个参数，第一个是触发方法的类型（+，-，input），第二个+，- => 占位，input把当前文本框中的值（event.target.value）传过去，第三个参数是产品（用来获取id和之前的商品数量）
    2. 后台数据如果传参正数表示+，负数表示-
3. 问题：请求回来的数据不准确，虽然也是this.getData()刷新页面，但是由于js单线程，此时异步请求还未发完
4. 解决：异步请求返回promise对象，刷新页面写在.then()中
5. 实现：
```html
<input autocomplete="off" type="text" minnum="1" class="itxt" :value="cart.skuNum" @change="handler('change', $event.target.value * 1, cart)">
```
```js
// 修改某个产品的个数
handler (type, disNum, cart) {
    // type => 区分三个元素
    // 目前 disNum 形参： + => +1，- => -1，input => 最终值
    // id => 传递参数
    // 向服务器发请求修改数量
    switch (type) {
    // add
    case 'add':
        // 带给服务器变化的数据
        disNum = 1
        break
    case 'minus':
        // 带给服务器变化的数据
        // 如果产品个数 <= 1，原封不动给服务器
        disNum = cart.skuNum > 1 ? -1 : 0
        break
    case 'change':
        if (isNaN(disNum) || disNum < 1) {
        disNum = 0
        } else {
        disNum = parseInt(disNum) - cart.skuNum
        }
        break
    }
    try {
    // 派发 action
    this.$store.dispatch('Detail/addOrUpdateShopCart', { skuId: cart.skuId, skuNum: disNum }).then(() => { this.getData() })
    } catch (error) {
    console.log(error)
    }
}
```

#### 删除所有选中商品
1. `Promise.all(p1, p2, p3,...)`：p1，p2，p3，... => Promise 函数，`Promise.all()`接收一个promise的`iterable`类型（注：Array，Map，Set都属于ES6的iterable类型），并且只返回一个Promise实例，如果全部都成功，`resolve`回调的结果是包含所有成功的promise数组；如果有一个失败，返回失败。这个Promise的`resolve`回调执行是在所有输入的promise的`resolve`回调都结束，或者输入的`iterable`里没有promise了的时候。它的`reject`回调执行是，只要任何一个输入的promise的`reject`回调执行或者输入不合法的promise就会立即抛出错误，并且`reject`的是第一个抛出的错误信息。
2. promise相关网址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
3. 需求：删除所有选中的商品，但是后台给的接口只有删除单个商品，需要遍历删除，发送请求
4. 思路：在仓库中发送请求，`forEach`循环遍历，如果`isChecked === 1`就删除，把函数返回的promise对象`push`进数组，传入`Promise.all()`
5. 实现：
```js
// 删除所有选中的商品
deleteAllCheckedCart ({ dispatch, getters }) {
    // context: 小仓库
    // 获取购物车中全部产品
    const promiseAll = []
    getters.cartList.forEach(item => {
    const promise = item.isChecked === 1 && dispatch('deleteCartListById', item.skuId)
    promiseAll.push(promise)
    })
    // 只要全部 promise 成功返回的是成功的promise数组
    // 有一个失败返回失败false
    //   Promise.all(promiseAll).then((values) => {
    //     console.log(values) // 数组
    //   })
    return Promise.all(promiseAll)
}
```
```js
// 删除所有选中的商品
// 这个回调函数无法收集到有用数据，后台无接口
async deleteAllCheckedCart () {
    try {
    // 派发一个action
    await this.$store.dispatch('ShopCart/deleteAllCheckedCart')
    this.getData()
    } catch (error) {
    console.log(error.message)
    }
}
```

### vue 中事件修饰符
1. lazy
 - lazy修饰符作用是，改变输入框的值时value不会改变，当光标离开输入框时，v-model绑定的值value才会改变

2. trim
 - trim修饰符的作用类似于JavaScript中的trim()方法，作用是把v-model绑定的值的首尾空格给过滤掉。

3. number
 - number修饰符的作用是将值转成数字，但是先输入字符串和先输入数字，是两种情况
    - 先输入数字的话，只取前面数字部分
    - 先输入字母的话，number修饰符无效

4. stop
 - stop修饰符的作用是阻止冒泡
 - ```js
    <div @click="clickEvent(2)" style="width:300px;height:100px;background:red">
        <button @click.stop="clickEvent(1)">点击</button>
    </div>
    
    methods: {
            clickEvent(num) {
                不加 stop 点击按钮输出 1 2
                加了 stop 点击按钮输出 1
                console.log(num)
            }
        }
  ```

5. capture
 - 事件默认是由里往外冒泡，capture修饰符的作用是反过来，由外网内捕获
 - ```js
    <div @click.capture="clickEvent(2)" style="width:300px;height:100px;background:red">
        <button @click="clickEvent(1)">点击</button>
    </div>
    
    methods: {
            clickEvent(num) {
                不加 capture 点击按钮输出 1 2
                加了 capture 点击按钮输出 2 1
                console.log(num)
            }
        }
    ```

6. self
 - self修饰符作用是，只有点击事件绑定的本身才会触发事件
 - ```js
    <div @click.self="clickEvent(2)" style="width:300px;height:100px;background:red">
        <button @click="clickEvent(1)">点击</button>
    </div>
 
    methods: {
        clickEvent(num) {
            不加 self 点击按钮输出 1 2
            加了 self 点击按钮输出 1 点击div才会输出 2
            console.log(num)
        }
    }
   ```

7. once
 - once修饰符的作用是，事件只执行一次
 - ```js
    <div @click.once="clickEvent(2)" style="width:300px;height:100px;background:red">
        <button @click="clickEvent(1)">点击</button>
    </div>
    
    methods: {
        clickEvent(num) {
            不加 once 多次点击按钮输出 1
            加了 once 多次点击按钮只会输出一次 1 
            console.log(num)
        }
    }
   ```

8. prevent
 - prevent修饰符的作用是阻止默认事件（例如a标签的跳转）
 - ```js
    <a href="#" @click.prevent="clickEvent(1)">点我</a>
    
    methods: {
        clickEvent(num) {
            不加 prevent 点击a标签 先跳转然后输出 1
            加了 prevent 点击a标签 不会跳转只会输出 1
            console.log(num)
        }
    }
  ```

9. native
 - native修饰符是加在自定义组件的事件上，保证事件能执行
 - ```html
    <!-- 执行不了 -->
    <My-component @click="shout(3)"></My-component>
    
    <!-- 可以执行 -->
    <My-component @click.native="shout(3)"></My-component>
    ```

10. left，right，middle
 - 这三个修饰符是鼠标的左中右按键触发的事件
 - ```js
    <button @click.middle="clickEvent(1)"  @click.left="clickEvent(2)"  @click.right="clickEvent(3)">点我</button>
    
    methods: {
        // 点击中键输出1
        // 点击左键输出2
        // 点击右键输出3
        clickEvent(num) {
            console.log(num)
        }
    }
  ```

11. passive
 - 当我们在监听元素滚动事件的时候，会一直触发onscroll事件，在pc端是没问题的，但是在移动端，会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给onscroll事件整了一个.lazy修饰符
 -  ```html
    <div @scroll.passive="onScroll">...</div>
    ```

12. camel
- ```html
    <!-- 不加camel viewBox会被识别成viewbox -->
    <svg :viewBox="viewBox"></svg>
    
    <!-- 加了canmel viewBox才会被识别成viewBox -->
    <svg :viewBox.camel="viewBox"></svg>
    ```

13. sync
 - 当父组件传值进子组件，子组件想要改变这个值时，可以这么做
 - ```js
    // 父组件里
    <children :foo="bar" @update:foo="val => bar = val"></children>
    
    // 子组件里
    this.$emit('update:foo', newValue)
    ```
 - sync修饰符的作用就是，可以简写：
    ```js
    // 父组件里
    <children :foo.sync="bar"></children>
    
    // 子组件里
    this.$emit('update:foo', newValue)
    ```

14. keyCode
 - 当我们这么写事件的时候，无论按什么按钮都会触发事件
    ```html
    <input type="text" @keyup="shout(4)">
    ```
 - 想要限制成某个按键触发 => keyCode修饰符
     ```html
    <input type="text" @keyup.keyCode="shout(4)">
    ```
 - Vue提供的keyCode：
    ```js
    //普通键
    .enter 
    .tab
    .delete //(捕获“删除”和“退格”键)
    .space
    .esc
    .up
    .down
    .left
    .right
    //系统修饰键
    .ctrl
    .alt
    .meta
    .shift
    ```

### 用户注册
1. 阻止form默认提交事件 => `click.prevent`
```html
<button class="btn" @click.prevent="userLogin">登&nbsp;&nbsp;录</button>
```
2. vuex仓库存储数据 => 不是持久化，token需要持久化存储，存储到本地
3. 导航守卫
    1. 全局守卫
    2. 路由独享守卫
    3. 组件内守卫