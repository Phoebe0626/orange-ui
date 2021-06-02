<template>
  <div id="app">
    <!-- <o-input
      placeholder="请输入用户名"
      v-model="username"
      clearable
    ></o-input>
    <o-input
      v-model="password"
      placeholder="请输入密码"
      type="password"
      show-password
    ></o-input> -->
    <!-- <o-switch v-model="active"></o-switch> -->
    <!-- <o-switch v-model="active" active-text="按年付费" inactive-text="按月付费"></o-switch> -->
    <!-- <o-switch name="username" v-model="active" active-color="red" inactive-color="green"></o-switch> -->
    <o-radio></o-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      password: '',
      username: 'phoebe'
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
