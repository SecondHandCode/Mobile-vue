<template>
  <div :class="vmSwitchCss" :style="vmSwitchStyle" @click.stop="checked">
    <div class="wm-switch-node"></div>
  </div>
</template>

<script>
  /**
   * 按钮大小根据font-size
   * 宽：2em
   * 高：1em
   * 移动：1em
   * 用到了一个 input 函数绑定  针对于 异步查询的
   */
  export default {
    name: "wmSwitch",
    data() {
      return {
        active: this.value
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      fontSize: {
        type: String, Number,
        default: '30'
      },
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      vmSwitchCss() {
        return [
          'wm-switch',
          {
            'wm-switch-on': this.active,
            'wm-switch-disabled': this.disabled
          }
        ]
      },
      vmSwitchStyle() {
        return {
          'font-size': `${this.fontSize}px`,
          'background-color': this.active ? this.activeColor : this.inactiveColor
        }

      }
    },
    watch: {
      value(v) {
        this.active = v
      }
    },
    methods: {
      checked() {
        // 禁用
        if (this.disabled) {
          return;
        }
        // 判断 input 事件 是否被函数实现
        // 大于1 就是说明 外部有使用 @input 事件
        if (this._events.input[0]['fns'].length) {
          // 用户异步调用
          this.$emit('input', !this.active)
        } else {
          this.active = !this.active
        }

      }
    }
  }
</script>

<style scoped>
  .wm-switch {
    display: inline-block;
    position: relative;
    width: 2em;
    height: 1em;
    border-radius: 1em;
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: background-color .3s;
  }

  .wm-switch-on {
    background-color: #FFFFFF;
  }

  .wm-switch-disabled {
    opacity: 0.4;
  }

  .wm-switch-on .wm-switch-node {
    transform: translateX(1em);
  }

  .wm-switch-node {
    left: 0;
    top: 0;
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    transition: 0.3s;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
  }
</style>
