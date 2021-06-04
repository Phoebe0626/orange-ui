<template>
  <div class="o-select">
    <div class="o-input">
      <input readonly :name="name" type="text" :placeholder="placeholder" class="o-input__inner">
      <span class="o-input__suffix">
        <div class="o-input__suffix-inner">
          <i class="o-select__caret o-input__icon o-icon-up"></i>
        </div>
      </span>
    </div>
    <div class="o-select-dropdown__wrapper">
      <ul class="o-select-dropdown__list">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OSelect',
  props: {
    value: Boolean || String || Number,
    placeholder: {
      type: String,
      default: '请选择'
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.o-select {
  display: inline-block;
  position: relative;
  width: 240px;
  .o-input {
    display: block;
    position: relative;
    width: 100%;
    .o-input__inner {
      cursor: pointer;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
    .o-input__suffix {
      position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      pointer-events: none;
      o-input__suffix-inner {
        pointer-events: all;
      }
      .o-select__caret {
        color: #c0c4cc;
        font-size: 14px;
        transition: transform .3s;
        transform: rotate(180deg);
        cursor: pointer;
      }
      .o-input__icon {
        width: 25px;
        line-height: 40px;
        height: 100%;
        text-align: center;
        transition: all .3s;
      }
    }
  }
}
</style>
