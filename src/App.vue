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
    <o-radio label="1" v-model="gender">男</o-radio>
    <o-radio label="0" v-model="gender">女</o-radio>
    <!-- <o-radio label="1" v-model="gender"></o-radio>
    <o-radio label="0" v-model="gender"></o-radio> -->
    <o-radio-group v-model="gender">
      <o-radio label="1">男</o-radio>
      <o-radio label="0">女</o-radio>
    </o-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender: '1',
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
