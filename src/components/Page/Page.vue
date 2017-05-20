<template>
  <main class="ui main container">
    <h1 class="ui header">{{content.title}}</h1>
    <div class="page-content" v-html="content.content"></div>
    <div class="ui inverted dimmer" :class="{active:loader}">
      <div class="ui loader"></div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'page',
    data() {
      return {
        content: [],
        loader: true,
        sourceDev: "http://localhost:3000",
        route: ""
      }
    },
    methods: {
      queryPage(route) {
        this.$http.get(this.sourceDev+'/page/'+route).then((response) => {
          this.content = response.data
        }).catch((error) => {
          console.log("Error", error)
        })
        this.loader = false
      },
      loadRoute() {
        this.loader = true
        if(this.$route.params.uid) {
          this.route = this.$route.params.uid
          this.queryPage(this.route)
        }
      }
    },
    mounted() {
      this.loadRoute()
    },
    watch: { // TODO scroll top
      $route: function() {
        this.loadRoute()
      }
    },
  }
</script>