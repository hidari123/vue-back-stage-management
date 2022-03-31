<template>
    <div class="type-nav">
        <div class="container">
            <!-- 事件委托 / 事件代理 -->
            <div @mouseleave="changeIndex(-1)">
                <h2 class="all">全部商品分类</h2>
                <!-- 三级联动 -->
                <div class="sort">
                    <!-- 事件委派 + 编程式导航 实现路由跳转和传参 -->
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                            <h3 @mouseenter="changeIndex(index)" :class="{cur: currentIndex === index}">
                                <a :data-categoryName="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <!-- 二级、三级分类 -->
                            <div class="item-list clearfix" :style="{display: currentIndex === index ? 'block' : 'none'}">
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c2.categoryName" :data-category2id="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryName="c3.categoryName" :data-category3id="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// 这种引入方式是把 lodash 全部功能函数引入
// import _ from 'lodash'
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data () {
    return {
      // 存储用户鼠标移上哪一个一级分类
      currentIndex: -1
    }
  },
  // 组件挂载完毕，开始发送请求
  computed: {
    // 右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
    // 注入一个参数 state，其实即为大仓库中的数据
    ...mapState('Home', {
      categoryList: state => state.categoryList
    })
  },
  mounted () {
    // 通知 Vuex 发请求，获取数据，存储于仓库中
    this.$store.dispatch('Home/categoryList')
  },
  methods: {
    // 鼠标进入修改响应式数据 currentIndex 属性
    // throttle 回调函数别用箭头函数 可能出现上下文 this 问题
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
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
        // 路由跳转
        this.$router.push(location)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        .cur {
                            background: skyblue;
                        }
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }
</style>
