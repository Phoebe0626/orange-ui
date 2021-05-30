<template>
  <div id="app">
    <!-- <div class="row">
      <o-button type="primary">按钮</o-button>
      <o-button type="success">按钮</o-button>
      <o-button type="info">按钮</o-button>
      <o-button type="warning">按钮</o-button>
      <o-button type="error">按钮</o-button>
      <o-button>按钮</o-button>
    </div>
    <div class="row">
      <o-button ghost type="primary">按钮</o-button>
      <o-button ghost type="success">按钮</o-button>
      <o-button ghost type="info">按钮</o-button>
      <o-button ghost type="warning">按钮</o-button>
      <o-button ghost type="error">按钮</o-button>
      <o-button ghost>按钮</o-button>
    </div>
    <div class="row">
      <o-button round ghost type="primary">按钮</o-button>
      <o-button round ghost type="success">按钮</o-button>
      <o-button round ghost type="info">按钮</o-button>
      <o-button round ghost type="warning">按钮</o-button>
      <o-button round ghost type="error">按钮</o-button>
      <o-button round ghost>按钮</o-button>
    </div>
    <div class="row">
      <o-button circle ghost type="primary">拆</o-button>
      <o-button circle ghost type="success">拆</o-button>
      <o-button circle ghost type="info">拆</o-button>
      <o-button circle ghost type="warning">拆</o-button>
      <o-button circle ghost type="error">拆</o-button>
      <o-button circle ghost>拆</o-button>
    </div>
    <div class="row">
      <o-button type="success" icon="o-icon-home">home</o-button>
      <o-button icon="o-icon-delete" circle @click="fn"></o-button>
    </div>
    <div class="row">
      <o-button disabled type="primary">按钮</o-button>
      <o-button disabled type="success">按钮</o-button>
      <o-button disabled type="info">按钮</o-button>
      <o-button disabled type="warning">按钮</o-button>
      <o-button disabled type="error">按钮</o-button>
      <o-button disabled>按钮</o-button>
    </div>
    <div class="row">
      <o-button ghost disabled type="primary">按钮</o-button>
      <o-button ghost disabled type="success">按钮</o-button>
      <o-button ghost disabled type="info">按钮</o-button>
      <o-button ghost disabled type="warning">按钮</o-button>
      <o-button ghost disabled type="error">按钮</o-button>
      <o-button ghost disabled>按钮</o-button>
    </div> -->

    <!-- <o-dialog title="温馨提示" width="60%" top="200px"></o-dialog> -->
    <o-dialog>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template #footer>
        <o-button type="primary">确定</o-button>
        <o-button>取消</o-button>
      </template>
    </o-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn (e) {
      console.log(e, '触发点击事件')
    }
  }
}
</script>

<style lang="scss">
.row {
  padding: 10px;
  background-color: #bec8c8;
  margin-bottom: 20px;
  .o-button {
    margin-right: 20px;
  }
}
</style>
