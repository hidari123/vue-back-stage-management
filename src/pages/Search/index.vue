<template>
  <div>
    <type-nav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
              <!-- 分类的面包屑 -->
            <li class="with-x" v-if="searchParams.categoryName">{{searchParams.categoryName}}<i @click="removeCategoryName">×</i></li>
            <!-- 关键字的面包屑 -->
            <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}<i @click="removeKeyword">×</i></li>
            <!-- 品牌的面包屑 -->
            <li class="with-x" v-if="searchParams.trademark">{{searchParams.trademark.split(':')[1]}}<i @click="removeTrademark">×</i></li>
            <!-- 平台售卖属性值的展示 -->
            <li class="with-x" v-for="(attrValue, index) in searchParams.props" :key="index">{{attrValue.split(':')[1]}}<i @click="removeAttr(index)">×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @trademarkInfo="trademarkInfo" @attrInfo="attrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
                <!-- 价格结构 -->
              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 销售产品列表 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"><img :src="good.defaultImg" /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{good.price}}.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{good.title}}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页器 -->
          <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 把仓库中的数据映射成组件身上的数据
import { mapGetters } from 'vuex'
import SearchSelector from './SearchSelector/SearchSelector'
export default {
  name: 'Search',
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
  components: {
    SearchSelector
  },
  watch: {
    // 监听属性
    // $route 属于组件实例上的响应式数组，和 searchParams 平级
    // 此处不写 this
    $route () {
      // 每一次请求完毕，应该把相应的一二三级分类的 id 置空
      // 直接把对象改变指针，此处不需要深度监听
      // 监听路由信息是否发生变化，如果发生变化，再次发送请求
      // 再次发送请求前需要整理参数
      this.getParams()
      this.getData()
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
  computed: {
    // 开启命名空间 namespaced => getters也是划分模块的
    ...mapGetters({
      // 重命名需要使用对象
      goodsList: 'Search/goodsList'
    })
  },
  methods: {
    // 向服务器发请求，获取 search 模块数据 => 根据参数不同，返回不同数据
    getData () {
      // 组件挂载完毕 mounted 只执行一次，不能在里面发请求
      // 使用函数 => 声明一次，多次调用
      // 先测试再确定数据的格式
      this.$store.dispatch('Search/getSearchList', this.searchParams)
    },
    // 整理向服务器发请求的参数
    getParams () {
      // 清空前一次的参数
      Object.assign(this.searchParams, this.params)
      // 添加这一次的参数
      Object.assign(this.searchParams, this.$route.query, this.$route.params)
    },
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
    },
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
      // 清除兄弟组件 Header 中关键字
      this.$bus.$emit('clear')
    },
    // 自定义事件回调
    trademarkInfo (trademark) {
      // 整理品牌字段参数
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
      this.getData()
    },
    // 移除品牌面包屑
    removeTrademark () {
      this.searchParams.trademark = undefined
      this.getData()
    },
    // 收集平台属性的回调
    attrInfo (attr, attrValue) {
      // 整理参数格式
      const props = `${attr.attrId}:${attrValue}:${attr.attrName}`
      // 数组去重
      if (this.searchParams.props.indexOf(props) === -1) {
        this.searchParams.props.push(props)
      }
      // 再次发请求
      this.getData()
    },
    // 删除售卖属性
    removeAttr (index) {
      // 整理参数
      this.searchParams.props.splice(index, 1)
      // 发送请求
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 18px 0;

            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>
