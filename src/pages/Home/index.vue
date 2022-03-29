<template>
  <div>
    <type-nav/>
    <list-container />
    <recommand />
    <rank />
    <like />
    <floor />
    <floor />
    <brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommand from './Recommand'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang = 'scss' scoped>

</style>
