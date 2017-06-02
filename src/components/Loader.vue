<template>
  <div class="ui inverted dimmer" :class="{active:active}">
    <div class="ui loader"></div>
  </div>
</template>

<script>
  export default {
    name: 'loader',
    props: {
      active: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss">
.ui.inverted.dimmer {
  position: fixed;
  z-index: 1001;
}
</style>
