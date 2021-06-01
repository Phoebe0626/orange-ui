<template>
  <label class="o-switch" :class="{'is-checked': value}" @click="handleSwitch">
    <span class="o-switch__core" ref="core">
      <div class="o-switch__button"></div>
    </span>
  </label>
</template>

<script>
export default {
  name: 'OSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
  },
  methods: {
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    handleSwitch () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.o-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  // vertical-align: middle;
  .o-switch__core {
    margin: 0;
    // display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    // outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    // vertical-align: middle;
    .o-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.o-switch.is-checked {
  .o-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .o-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
