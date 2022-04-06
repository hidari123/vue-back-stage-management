<template>
    <div class="pagination">
        <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        <template v-if="startNumAndEndNum[0] > 1">
            <button  @click="$emit('getPageNo', 1)" :class="{active: pageNo === 1}">1</button>
            <button>···</button>
        </template>

        <!-- 动态生成中间连续页码部分 -->
        <button v-for="(page,index) in startNumAndEndNum" :key="index"  @click="$emit('getPageNo', page)" :class="{active: pageNo === page}">{{page}}</button>
        <template v-if="startNumAndEndNum[startNumAndEndNum.length - 1] < this.totalPage">
            <button>···</button>
            <button @click="$emit('getPageNo', totalPage)" :class="{active: pageNo === totalPage}">{{totalPage}}</button>
        </template>

        <button :disabled="pageNo===totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    // 总页数
    totalPage () {
      // 向上取整
      return Math.ceil(this.total / this.pageSize)
    },
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
  }
}
</script>

<style lang="scss" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>
