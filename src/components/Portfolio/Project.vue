<template>
  <main class="ui main container-large portfolio">
  <section class="content-section project">
    <header class="header">
      <div class="header-inner">
        <h2>{{project.title}}</h2>
        <h3>{{project.subtitle}}</h3>
        <div v-html="project.description"></div>
      </div>
    </header>
    <div class="spacer spacer-left"></div>
    <div class="ui grid">
      <div class="one column row">
        <div class="column">
          <div>
            <span><strong>Client : </strong>{{project.client}}</span> //
            <span><strong>Agence : </strong>{{project.agence}}</span> //
            <span><strong>Rôle : </strong>{{project.role}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer spacer-invisible"></div>
    <div class="ui grid">
      <div class="two column row">
        <div class="column" v-for="image in project.images">
          <a data-fancybox="gallery" :href="image.image.value.main.url" class="fancybox">
            <img :src="image.image.value.main.url" :alt="image.image.value.main.alt" width="100%">
          </a>
          <h4>{{image.title}}</h4>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<script>
  export default {
    name: "project",
    data() {
      return {
        project: {},
        source: "http://78679f1be5.testurl.ws",
        sourceDev: "http://localhost:3000"
      }
    },
    methods: {

    },
    mounted() {
      if( this.$route.params.slug ) {
        this.$http.get(this.sourceDev+'/projects/'+this.$route.params.slug).then((response)=>{
          this.project = response.data
        })
      }
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>