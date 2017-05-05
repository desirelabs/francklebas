<template>
  <div class="post">
    <header class="post-header">
      <img :src="source+'/wp-content/uploads/'+post.featured" v-if="post.featured" alt="">
      <h2><a :href="'/'+post.slug" v-html="post.title"></a></h2>
      <div class="post-metadatas">
        <span class="author">Publié par {{post.author_name}}</span>
        <br>
        <span class="date">Le {{post.date | moment}}</span>
        <div class="spacer"></div>
      </div>
    </header>
    <div class="post-content" v-html="post.content" :class="{'full': post.fullArticle == true}"></div>
  </div>
</template>

<script>
  let moment = require('moment')
  moment.locale('fr')
  export default {
    props: {
      post: Object
    },
    data(){
      return {
        source: "http://desirelabs-2017.dev",
      }
    },
    filters: {
      moment: function (date) {
        return moment(date).format('D MMMM YYYY')
      }
    },
  }
</script>