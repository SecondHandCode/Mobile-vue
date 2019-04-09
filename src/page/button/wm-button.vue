<template>
  <button :disabled="disabled" :class="buttonClass" :style="buttonStyle" @click.stop="btnClick">
    <span class="wm-button-text" v-if="!loading">
      <slot></slot>
    </span>
    <div v-if="loading">
        <svg class="lds-spinner" width="40"  height="40"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;">
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"class="loading-svg-color">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(30 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(60 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(90 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(120 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(150 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(180 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(210 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(240 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(270 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(300 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"  class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(330 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" class="loading-svg-color">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s"  begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g></svg>
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
