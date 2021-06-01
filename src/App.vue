<template>
  <div id="app">
    <o-input
      placeholder="请输入用户名"
      v-model="username"
    ></o-input>
    <o-input placeholder="请输入密码" type="password"></o-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
