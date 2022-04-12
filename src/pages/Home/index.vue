<template>
  <div>
    <type-nav/>
    <list-container />
    <recommend />
    <rank />
    <like />
    <floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted () {
    // floor 数据
    this.$store.dispatch('Home/getFloorList')
    // 获取用户信息，在首页展示
    this.$store.dispatch('User/getUserInfo')
  },
  methods: {
  },
  computed: {
    ...mapState('Home', {
      floorList: state => state.floorList
    })
  }
}
</script>

<style lang = 'scss' scoped>

</style>
