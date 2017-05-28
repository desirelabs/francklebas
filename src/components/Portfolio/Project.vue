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
    <div class="ui grid stackable">
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
    <div class="ui grid stackable">
      <div class="two column row">
        <div class="column" v-for="image in project.images">
          <a data-fancybox="gallery" :href="image.image.value.main.url" class="fancybox" :style="'background: url('+image.image.value.main.url+') no-repeat 0 0 / cover'"></a>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<script>
  var Prismic = require('prismic-javascript');
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
      queryProject(slug) {
        Prismic.api("https://picolab.prismic.io/api").then((api) => {
          return api.query([
              Prismic.Predicates.at('document.type', 'project'),
              Prismic.Predicates.at('my.project.uid', slug)
            ],
            {orderings: '[project.title desc]'}
          ).then((response) => {
            var values = []
            response.results.forEach((project) => {
              this.project = {
                id: project.id,
                uid: project.uid,
                type: project.type,
                tags: project.tags,
                slug: project.uid,
                title: project.data.project.title.value[0].text,
                subtitle: project.data.project.subtitle.value[0].text,
                description: project.data.project.description.value[0].text,
                group: project.data.project.group.value,
                role: project.data.project.role.value,
                client: project.data.project.client.value,
                agence: project.data.project.agence.value,
                vignette: project.data.project.vignette.value.main,
                images: project.data.project.images.value
              }
            })
          }).catch((err) => {
            console.log("Something went wrong: ", err);
          })
        })
      }
    },
    mounted() {
      if( this.$route.params.slug ) {
        this.queryProject(this.$route.params.slug)
      }
      window.scrollTo(0, 0);
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>