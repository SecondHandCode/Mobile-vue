<template>
  <button :disabled="disabled" :class="buttonClass" :style="buttonStyle" @click.stop="btnClick">
    <span class="wm-button-text" v-if="!loading">
      <slot></slot>
    </span>
    <div v-if="loading">
      <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
    </div>
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
      return {}
    },
    props: {
      // 颜色传入，默认字体颜色白色，背景色 跟border 都是传入的颜色
      backGroundColor: String,
      disabled: Boolean,
      loading: Boolean,
      type: {
        /*验证器，如果返回true 那么外面传进的值 就是可用的，反之使用的是默认值*/
        /*belle 是公司测试姐姐*/
        validator(value) {
          return oneOf(value, ["default", "belle", "primary", "warning", "danger"])
        },
        default: 'default'
      },
      plain: Boolean
    },
    computed: {
      buttonClass() {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-normal`]: true,
            [`${prefixCls}-plain`]: this.plain,
            [`${prefixCls}-unclickable`]: this.loading
          }
        ]
      },
      buttonStyle() {
        let styleObj = {};
        if (this.backGroundColor && this.backGroundColor) {
          styleObj = {
            'background-color': `${this.backGroundColor}`,
            'color': `#ffffff`,
            'border': `1px solid ${this.backGroundColor}`
          }
        }
        return styleObj;
      }
    },
    methods: {
      btnClick() {
        this.$emit("on-click", this)
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
