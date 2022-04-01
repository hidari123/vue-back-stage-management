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
