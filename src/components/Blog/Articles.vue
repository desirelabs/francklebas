<template>
  <div class="ui main text container">
    <h1 class="ui header">Blog</h1>
    <transition-group name="slide-fade" tag="div" appear @enter="enter">
      <div v-for="post in posts" :key="post" class="posts" :class="{'list': posts.length > 1}">
        <post :post="post"></post>
        <a :href="'/'+post.slug" class="read-more fluid ui button" v-if="!article">Lire la suite</a>
      </div>
    </transition-group>
    <!--TODO pagination-->
    <div class="ui pagination menu" v-if="posts.length > 1">
      <a class="item" :class="{'active': n == route}" v-for="n in totalPages" :href="'/articles/'+n">
        {{n}}
      </a>
    </div>
    <div class="ui inverted dimmer" :class="{active:loader}">
      <div class="ui loader"></div>
    </div>
  </div>
</template>

<script>
  import Post from './Post.vue'
  export default {
    name: "Articles",
    components: {Post},
    data() {
      return {
        posts: [],
        post: false,
        route: false,
        article: false,
        totalPages: 0,
        source: "http://desirelabs-2017.dev",
        loader: true,
      }
    },
    methods: {
      enter(el) {

      },
      getParams() {
        let params = this.$route.params
        if (params.page){
          this.route = params.page
        }
        else {
          this.article = params.article
        }
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
      }
    },
    computed: {

    },
    mounted() {
      this.getParams()
      if( this.route ) {
        this.queryPosts(this.source + '/wp-json/wp/v2/posts?&_embed=true&page=' + this.route)
      }
      if ( this.article ) {
        this.queryPosts(this.source+'/wp-json/wp/v2/posts?slug='+this.article+'&_embed=true&orderby=date&order=desc')
      }

    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>