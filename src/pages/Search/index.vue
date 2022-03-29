<template>
  <div>{{keyword}}</div>
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
