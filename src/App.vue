<template>
  <div id="app">
    <o-input
      placeholder="请输入用户名"
      v-model="username"
      clearable
    ></o-input>
    <o-input
      v-model="password"
      placeholder="请输入密码"
      type="password"
      show-password
    ></o-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
