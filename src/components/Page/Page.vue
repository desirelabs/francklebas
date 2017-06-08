<template>
  <main class="ui main container">
    <h1 class="ui header">{{content.title}}</h1>
    <div class="page-content" v-html="content.content"></div>
    <loader :active="loader"></loader>
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import Loader from '../Loader'
export default {
  name: 'page',
  components: { Loader },
  data() {
    return {
      content: {},
      loader: true,
      source: '',
      route: ''
    }
  },
  methods: {
    queryPage(route) {
      Prismic.api(this.source).then(api => {
        return api.query([
          Prismic.Predicates.at('document.type', 'page'),
          Prismic.Predicates.at('my.page.uid', route)
        ]
        ).then((response) => {
          response.results.forEach((p) => {
            let content = ""
            p.data.page.content.value.forEach((slice) => {
              switch (slice.type) {
                case 'paragraph':
                  content += "<p>" + slice.text + "</p>"
                  break
                case 'heading2':
                  content += "<h2>" + slice.text + "</h2>"
                  break
                case 'heading3':
                  content += "<h3>" + slice.text + "</h3>"
                  break
                default:
                case 'paragraph':
                  content += "<p>" + slice.text + "</p>"
                  break
              }
            })
            this.content = {
              id: p.id,
              uid: p.uid,
              type: p.type,
              tags: p.tags,
              title: p.data.page.title.value[0].text,
              content: content
            }
            this.loader = false
          })
        }).catch((error) => {
          console.log(error)
          this.loader = false
        })
      })
    },
    loadRoute() {
      this.loader = true
      if (this.$route.params.uid) {
        this.queryPage(this.$route.params.uid)
      }
    }
  },
  mounted() {
    this.source = process.env.API_URL
    this.loadRoute()
    window.scrollTo(0, 0)
  },
  watch: { // TODO scroll top
    $route: function () {
      this.loadRoute()
    }
  },
}
</script>

<style lang="scss"></style>