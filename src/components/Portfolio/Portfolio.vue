<template>
  <main class="ui main container-large portfolio">
    <h1 class="ui header" v-if="!project">Portfolio</h1>
    <transition name="fade">
      <div class="ui projects-list" v-if="!project">
        <a :href="'/portfolio/'+project.slug" class="project" v-for="project in projects">
          <div class="image">
            <img :src="'/static/images/projects/'+project.group+'/'+project.images[0].image" width="100%">
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
        </a>
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
  export default {
    components: { Project },
    data() {
      return {
        state: store.state,
        project: false,
        projects: [],
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
      }
    },
    mounted() {
      console.log("mounted")
      if( this.$route.params.slug ) {
        this.project = store.getProjectBySlug(this.$route.params.slug)
      } else {
        this.project = false
        this.projects = this.state.projects
      }
    },
    watch: { // TODO scroll top
      route: function() {
        this.loadRoute()
      }
    },
  }
</script>