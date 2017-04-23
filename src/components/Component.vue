<template>
  <div class="container">
    <header class="header">
      <h1>Components list</h1>
    </header>
    <div class="main">
      <ul class="component-list">
        <li v-for="component in components">{{component.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [],
      componentName: ""
    }
  },
  methods: {
    getComponents() {
      return this.components
    },
    addComponent() {
      this.components.push({name:this.componentName})
    }
  },
  computed: {
  }
}
</script>