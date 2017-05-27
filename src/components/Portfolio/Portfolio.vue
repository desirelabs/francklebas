<template>
  <main class="ui main container-large portfolio">
    <h1 class="ui header" v-if="!project">Portfolio</h1>
    <transition name="fade">
      <div class="ui projects-list" v-if="!project">
        <div  class="project" v-for="project in projects">
          <router-link :to="{name:'Project', params: {slug: project.slug}}" exact class="item">
            <div class="image" :style="'background: url('+project.vignette.url+') no-repeat 0 0 / cover;'"></div>
            <h3 class="project-title">{{ project.title }}</h3>
          </router-link>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="project" v-if="project">
          <project :project="project"></project>
      </div>
    </transition>
  </main>
</template>

<script>
  import Project from './Project'
  import store from './PortfolioStore'
  var Prismic = require('prismic-javascript');
  export default {
    components: { Project },
    data() {
      return {
        state: store.state,
        project: false,
        projects: [],
        source: "http://78679f1be5.testurl.ws",
        route: false
      }
    },
    methods: {
      showProject(project) {
        this.project = project
      },
      getProjects() {
        return this.projects
      },
      loadRoute() {
        //this.loader = true
        if( this.$route.params.slug ) {
          console.log(this.$route.params.slug)
        }
        else {
          console.log("pas de route")
        }
      },
      queryProjects() {
        Prismic.api("https://picolab.prismic.io/api").then((api) => {
          return api.query([
              Prismic.Predicates.at('document.type', 'project')
            ],
            {orderings: '[project.title desc]'}
          ).then((response) => {
            var values = []
            response.results.forEach((project) => {
              values.push({
                id: project.id,
                uid: project.uid,
                type: project.type,
                tags: project.tags,
                slug: project.uid,
                title: project.data.project.title.value[0].text,
                subtitle: project.data.project.subtitle.value.text,
                description: project.data.project.description.value.text,
                group: project.data.project.group.value,
                role: project.data.project.role.value,
                client: project.data.project.client.value,
                agence: project.data.project.agence.value,
                vignette: project.data.project.vignette.value.main,
                images: project.data.project.images.value
              })
            })
            this.projects = values
          }).catch((err) => {
            console.log("Something went wrong: ", err);
          })
        })
      }
    },
    mounted() {
      this.queryProjects()
    },
    watch: { // TODO scroll top
      route: function() {
        this.loadRoute()
      }
    },
  }
</script>