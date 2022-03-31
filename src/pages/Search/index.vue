<template>
  <div>
      <!-- search模块 -->
      <type-nav />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    keyword: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang = 'scss' scoped>

</style>
