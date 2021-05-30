<template>
  <button class="o-button" :class="[`o-button--${type}`]">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'OButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.o-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  // margin: 0;
  transition: .1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
// primary
.o-button--primary {
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  &:hover,
  &:focus {
    background-color: #57a3f3;
    border-color: #57a3f3;
    color: #fff;
  }
}
// success
.o-button--success {
  color: #fff;
  background-color: #19be6b;
  border-color: #19be6b;
  &:hover,
  &:focus {
    background-color: #47cb89;
    border-color: #47cb89;
    color: #fff;
  }
}
// info
.o-button--info {
  color: #fff;
  background-color: #2db7f5;
  border-color: #2db7f5;
  &:hover,c
  &:focus {
    background-color: #57c5f7;
    border-color: #57c5f7;
    color: #fff;
  }
}
// warning
.o-button--warning {
  color: #fff;
  background-color: #ff9900;
  border-color: #ff9900;
  &:hover,
  &:focus {
    background-color: #ffad33;
    border-color: #ffad33;
    color: #fff;
  }
}
// error
.o-button--error {
  color: #fff;
  background-color: #ed4014;
  border-color: #ed4014;
  &:hover,
  &:focus {
    background-color: #f16643;
    border-color: #f16643;
    color: #fff;
  }
}
</style>
