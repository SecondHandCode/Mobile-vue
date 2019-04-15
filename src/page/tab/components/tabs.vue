<template>
  <div class="wm-tabs" ref="tabs" v-cloak>
    <div :class="tabClass" ref="navs">
      <div :class="navClass(item,index)" :style="{'color': index === activeKey ? activeTextColor: ''}"
           v-for="(item,index) in navList" :key="index" @click.stop="clickNav(index)">
        <span class="wm-ellipsis"> {{item.name}}</span>
      </div>
      <!--下划线-->
      <div :class="tabSolid" :style="tabSolidStyle"></div>
    </div>
    <!--内容区域-->
    <div ref="content" class="parent-tab" :class="tabContentScroll"
         @touchstart.stop.prevent="touchStart"
         @touchmove.stop.prevent="touchmove"
         @touchend.stop.prevent="touchend"
         :style="scrollStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /*
  * 模拟的滚动函数
  * */
  function animate(obj, target) {
    clearInterval(obj.timer);
    target = parseInt(target)
    obj.timer = setInterval(function () {
      let leader = obj.scrollLeft;
      let step = (target - leader) / 2;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      leader = leader + step;
      obj.scrollLeft = leader;
      if (leader === target) {
        clearInterval(obj.timer);
      }
    }, 15);
  }

  /*
  * 获取坐标
  * */
  function getTouchXY(e) {
    return e["changedTouches"][0];
  }

  /*
  *  1.获取子组件
  *  2.验证子组件
  *  3.新建数组 nav 栏
  *  4. 滚动线条的定义
  *           (1) 滚动条长度计算： 标签栏是否可滚动  可滚动 solidWidth = divWidth/4/2  不可滚动 solidWidth = divWidth/nav.length/2
  *           (2) 滚动条滚动距离： 滚动条当前的宽/2 + 当前选中的nav * navWidth
  *   5.navScroll 滚动距离计算方式：(标题栏宽度* (选中的index + 0.5)) (navWidth/2)
  * */
  const prefixCls = 'wm-tabs';
  // 滚动 需要最少 标题数量
  const MIN_NAVSLIST_LENGTH = 4;
  export default {
    name: "tabs",
    data() {
      return {
        navList: [],
        activeKey: this.value,
        navWidth: 0,
        tabsWidth: 375,// 给予默认值 兼容 闪烁
        translateX: 0,
        touchStartX: 0,// 第一个坐标点
        touchMoveStartX: 0, // 移动中 变动的坐标
        touchEndX: 0,// 离开时的坐标
      }
    },
    props: {
      scrollable: {
        type: Boolean,
        default: () => {
          return false;
        }
      },
      solidColor: {
        type: String,
        default: () => {
          return `#f44`
        }
      },
      activeTextColor: {
        type: String,
        default: () => {
          return `#999999`
        }
      }
    },
    methods: {
      getTabs() {
        // 1
        return this.$children.filter(item => item.$options.name === 'tab')
      },
      updateNav() {
        this.navList = []
        // 3.
        this.getTabs().forEach((v, index) => {
          this.navList.push({
            // 标题 唯一值
            name: v.title || index
          });
          if (index === 0) {
            if (!this.activeKey) {
              this.activeKey = index;
            }
          }
        })
        this.updateStatus();
      },
      updateStatus() {
        this.getTabs().forEach((v, i) => v.show = i === this.activeKey)
      },
      updateNavsScroll() {
        this.translateX = -(this.tabsWidth * this.activeKey)
        if (this.navList.length > MIN_NAVSLIST_LENGTH) {
          let scrollLeft = (((this.navWidth * (this.activeKey + 0.5))) - this.$refs.navs.clientWidth / 2);
          if (scrollLeft < 0) {
            scrollLeft = 0;
          } else if (scrollLeft > this.$refs.navs.scrollWidth - this.$refs.navs.clientWidth) {
            scrollLeft = this.$refs.navs.scrollWidth - this.$refs.navs.clientWidth
          }
          animate(this.$refs.navs, scrollLeft)
        }
      },
      clickNav(index) {
        this.activeKey = index;
        this.updateStatus();
        // 滚动的进来
        if (this.scrollable) {
          this.updateNavsScroll();
        }
      },
      navClass(item, index) {
        return [
          `${prefixCls}-nav`,
          {
            [`${prefixCls}-nav-scroll`]: this.scrollable
          }
        ]
      },
      touchStart(e) {
        let coordinate = getTouchXY(e)
        console.log(coordinate)
        this.touchStartX = coordinate.clientX;
        this.touchMoveStartX = coordinate.clientX;
      },
      touchmove(e) {
        let coordinate = getTouchXY(e)
        let moveValue = coordinate.clientX - this.touchMoveStartX;
        this.touchMoveStartX = coordinate.clientX
        this.translateX += moveValue
        //手指滑动的时候 去除过渡效果
        this.$refs.content.style.transitionDuration = '0ms'
        console.log(moveValue);
      },
      touchend(e) {
        let coordinate = getTouchXY(e);
        this.$refs.content.style.transitionDuration = '300ms';
        let endX = coordinate.clientX - this.touchStartX;
        if (Math.abs(endX) < this.tabsWidth / 4) {
          this.translateX = -(this.tabsWidth * (this.activeKey));
          return;
        }
        // 手指右滑动
        if (endX > 0) {
          this.activeKey -= 1;
          if (this.activeKey < 0) {
            this.activeKey = 0;
          }
          this.translateX = -(this.tabsWidth * (this.activeKey))
        } else {
          // 左滑动
          this.activeKey += 1;
          if (this.activeKey > (this.navList.length - 1)) {
            this.activeKey = this.navList.length - 1;
          }
          this.translateX = -(this.tabsWidth * (this.activeKey))
        }
      }
    },
    computed: {
      tabClass() {
        return [
          `${prefixCls}-tab`,
          {
            [`${prefixCls}-tab-scroll`]: this.scrollable
          }
        ]
      },
      tabSolid() {
        return [`${prefixCls}-solid`]
      },
      tabSolidStyle() {
        return {
          'background-color': `${this.solidColor}`,
          'width': `${this.navWidth / 2}px`,
          'transform': `translateX(${this.activeKey * this.navWidth + this.navWidth / 4}px)`,
          'transition-duration': '0.3s'
        }
      },
      tabContentScroll() {
        return [
          {
            ['parent-tab-scroll']: this.scrollable
          }
        ]
      },
      scrollStyle() {
        return {
          'width': `${this.tabsWidth * this.navList.length}px`,
          'transition-duration': '300ms',
          'transform': `translate(${this.translateX}px, 0px) translateZ(0px)`
        }
      }
    },
    mounted() {
      // 2.
      this.updateNav()
      this.$nextTick(() => {
        this.navWidth = this.scrollable ? this.$refs.navs.clientWidth / 4 : this.$refs.navs.clientWidth / this.navList.length;
        this.tabsWidth = this.$refs.tabs.clientWidth;
      })
    },
  }
</script>

<style scoped lang="less">

  [v-cloak] {
    display: none;
  }

  .wm-tabs {
    font-size: 14px;
    position: relative;
    overflow: hidden;

    &-tab {
      position: relative;
      display: flex;
      text-align: center;
      justify-content: flex-start;
    }

    &-tab-scroll {
      overflow-x: auto;
      -webkit-overflow-scrolling: auto;
    }

    &-nav {
      flex: 1;
      line-height: 46px;
      height: 46px;
      min-width: 0;
      box-sizing: border-box;

      &-scroll {
        flex: 0 0 25%;
      }
    }

    &-solid {
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 4px;
      height: 3px;
      border-radius: 3px;
      width: 10px;
    }

  }

  .wm {
    &-ellipsis {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  .parent-tab {
    display: block;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;

    &-scroll {
      position: relative;
    }
  }
</style>
