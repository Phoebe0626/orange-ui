<template>
  <div class="o-tabs">
    <div class="o-tabs__nav">
      <div class="o-tabs__active-bar"></div>
      <div
        class="o-tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'is-active': tab.name === value}"
        @click="handleClick(tab.name)"
      >
        <span>{{ tab.label }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OTabs',
  provide () {
    return {
      Tabs: this
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tabs: []
    }
  },
  mounted () {
    this.tabs = this.getTabs()
  },
  methods: {
    handleClick (name) {
      this.$emit('tab-click', name)
    },
    getTabs () {
      const AllPanes = this.$children.filter(item => item.$options.name === 'OTabPane')
      const TabPanes = []
      AllPanes.forEach(item => {
        TabPanes.push({
          label: item.label,
          name: item.name
        })
      })
      return TabPanes
    }
  }
}
</script>

<style lang="scss">
.o-tabs {
  box-sizing: border-box;
  position: relative;
  color: #515a6e;
  .o-tabs__nav {
    margin-bottom: 15px;
    .o-tabs__item {
      padding: 0 20px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      list-style: none;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      cursor: pointer;
    }
    .o-tabs__item.is-active {
      color: #2d8cf0;
    }
  }
}
</style>
