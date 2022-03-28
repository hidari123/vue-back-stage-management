<template>
  <div class="home">
    <Header />
    <!-- 路由入口 -->
    <router-view/>
    <Footer />
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
  }
}
</script>
