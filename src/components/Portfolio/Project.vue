<template>
  <section class="content-section project">
    <header class="header">
      <div class="header-inner">
        <h2>{{project.title}}</h2>
        <h3>{{project.description}}</h3>
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
        <div class="column" v-for="image in project.images" v-if="!image.vignette">
          <a data-fancybox="gallery" :href="'/static/images/projects/'+project.group+'/'+image.image" class="fancybox">
            <img :src="'/static/images/projects/'+project.group+'/'+image.image" :alt="image.title" width="100%">
          </a>
          <h4>{{image.title}}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import store from './PortfolioStore'
  export default {
    name: "project",
    data() {
      return {
        state: store.state,
        project: false
      }
    },
    methods: {
      getProject(slug) {
        return store.getProjectBySlug(slug)
      }
    },
    mounted() {
      if( this.$route.params.slug ) {
        this.project = store.getProjectBySlug(this.$route.params.slug)[0]
        console.log(this.project)
      } else {
        this.$parent.route = false
      }
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>