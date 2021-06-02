<template>
  <div id="app">
    <o-form :model="model" label-width="60px">
      <o-form-item label="用户名">
        <o-input placeholder="请输入用户名" v-model="model.username"></o-input>
      </o-form-item>
      <o-form-item label="选择">
        <o-switch v-model="model.active"></o-switch>
      </o-form-item>
    </o-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: 'phoebe',
        active: true
      }
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
