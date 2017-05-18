<template>
  <main class="ui main container">
    <h1 class="ui header">Blog</h1>
    <transition-group name="slide-fade" tag="div" appear @enter="enter" mode="out-in">
      <div v-for="post in posts" :key="post" class="posts" :class="{'list': posts.length > 1}">
        <post :post="post"></post>
        <a :href="'/'+post.slug" class="read-more fluid ui button" v-if="posts.length > 1">Lire la suite</a>
      </div>
    </transition-group>
    <transition name="slide-fade" v-if="posts.length == 0" mode="out-in">
      <h3>Mince, aucun résultat, retentez votre chance !</h3>
    </transition>
    <div class="ui pagination menu" v-if="posts.length >= 10">
      <a class="item" :class="{'active': n == route}" v-for="n in totalPages" :href="'/articles/'+n">
        {{n}}
      </a>
    </div>
    <div class="ui inverted dimmer" :class="{active:loader}">
      <div class="ui loader"></div>
    </div>
  </main>
</template>

<script>
  import Post from './Post.vue'
  export default {
    name: "Articles",
    components: { Post },
    data() {
      return {
        posts: [],
        totalPages: 0,
        source: "http://desirelabs.fr",
        loader: true,
      }
    },
    methods: {
      enter(el) {

      },
      SetPostsAuthorName() {
        this.posts.forEach((post)=>{
          this.$http.get(this.source+'/wp-json/wp/v2/users/'+post.author).then((user)=>{
            post.author_name = user.data.name
          })
        })
      },
      queryPosts(request) {
        this.$http.get(request).then((response)=>{
          let datas = response.data
          this.totalPages = parseInt(response.headers.map['X-WP-TotalPages'][0])
          this.post = datas.length // TODO cleanup
          this.posts = []
          datas.forEach((post)=>{
            this.posts.push({
              id: post.id,
              title: post.title.rendered,
              slug: post.slug,
              content: post.content.rendered,
              date: post.date,
              status: post.status,
              author: post.author,
              author_name: "",
              featured: post.better_featured_image ? post.better_featured_image['media_details'].file : "",
              fullArticle: false
            })
          })
          this.SetPostsAuthorName()
          this.loader = false
        }, (response) => {
          console.log('Error', response)
          this.loader = false
        })
      },
      setParams() {
        let params = this.$route.params
        let query = this.$route.query
        if( query.search !== "" ) {
          this.query = query
        }
        if (params.page || query.search == ""){
          this.route = params.page
        }
        else {
          this.route = params.article
        }
      },
      loadRoute() {
        this.loader = true
        if( this.query.search ) {
          console.log(this.query.search)
          this.queryPosts(this.source + '/wp-json/wp/v2/posts?search=' + this.query.search)
        }
        if( this.route.page ) {
          this.queryPosts(this.source + '/wp-json/wp/v2/posts?&_embed=true&page=' + this.route.page)
        }
        if ( this.route.article ) {
          this.queryPosts(this.source+'/wp-json/wp/v2/posts?slug='+this.route.article+'&_embed=true&orderby=date&order=desc')
        }
      }
    },
    computed: {
      route() {
        return this.$route.params
      },
      query() {
        return this.$route.query
      }
    },
    watch: { // TODO scroll top
      route: function() {
        this.loadRoute()
      }
    },
    mounted() {
      this.setParams(this.loadRoute())
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>