<template>
  <div id="app">
    <div class="row">
      <o-button type="primary">按钮</o-button>
      <o-button type="success">按钮</o-button>
      <o-button type="info">按钮</o-button>
      <o-button type="warning">按钮</o-button>
      <o-button type="error">取消</o-button>
      <o-button>取消</o-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .o-button {
    margin-right: 20px;
  }
}
</style>
