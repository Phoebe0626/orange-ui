<template>
  <div id="app">
    <!-- <o-form :model="model" label-width="60px">
      <o-form-item label="用户名">
        <o-input placeholder="请输入用户名" v-model="model.username"></o-input>
      </o-form-item>
      <o-form-item label="选择">
        <o-switch v-model="model.active"></o-switch>
      </o-form-item>
    </o-form> -->
    <!-- <o-tabs v-model="activeName" @tab-click="handleClick">
      <o-tab-pane label="我是标签" name="first">标签一内容</o-tab-pane>
      <o-tab-pane label="标签二" name="second">标签二内容</o-tab-pane>
      <o-tab-pane label="标签三" name="third">标签三内容</o-tab-pane>
    </o-tabs> -->
    <!-- <o-link
      disabled
      href="https://www.baidu.com"
      target="_blank"
    >
      默认链接
    </o-link>
    <o-link disabled type="primary">主要链接</o-link>
    <o-link disabled type="success">成功链接</o-link>
    <o-link disabled type="warning">警告链接</o-link>
    <o-link disabled type="danger">危险链接</o-link>
    <o-link disabled type="info" :underline="false">信息链接</o-link> -->
    <o-select v-model="value" placeholder="请选择食物" name="food">
      <o-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></o-option>
    </o-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      activeName: 'second',
      model: {
        username: 'phoebe',
        active: true
      }
    }
  },
  methods: {
    handleClick (name) {
      this.activeName = name
    }
  }
}
</script>

<style lang="scss">
#app {
  .o-input {
    width: 180px;
  }
}
</style>
