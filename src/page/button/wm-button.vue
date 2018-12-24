<template>
  <button :disabled="disabled" :class="buttonClass" :style="buttonStyle">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import {oneOf} from './../../utils'
  import index from './style/index.css'

  const prefixCls = 'wm-button'
  // 按钮组件
  export default {
    name: "wm-button",
    data() {
      return {
      }
    },
    props: {
      // 颜色传入，默认字体颜色白色，背景色 跟border 都是传入的颜色
      backGroundColor: String,
      disabled: Boolean,
      type: {
        /*验证器，如果返回true 那么外面传进的值 就是可用的，反之使用的是默认值*/
        /*belle 是公司测试姐姐*/
        validator(value) {
          return oneOf(value, ["default", "belle", "primary", "warning", "danger"])
        },
        default: 'default'
      }
    },
    computed: {
      buttonClass() {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-normal`]: true
          }
        ]
      },
      buttonStyle() {
        let styleObj = {};
        if(this.backGroundColor && this.backGroundColor){
          styleObj={
            'background-color': `${this.backGroundColor}`,
            'color':`#ffffff`,
            'border': `1px solid ${this.backGroundColor}`
          }
        }
        return styleObj;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
