<template>
  <div class="home">
      <h1 v-upper='msg'></h1>
    <Header />
    <!-- 路由入口 -->
    <router-view/>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: 'abc'
    }
  },
  mounted () {
    // 派发一个 action 获取商品分类的三级列表数据 程序运行时只加载一次
    // 通知 Vuex 发请求，获取数据，存储于仓库中
    // 三级联动菜单数据
    this.$store.dispatch('Home/categoryList')
    // banner 轮播图数据
    this.$store.dispatch('Home/getBannerList')
  }
}
</script>
