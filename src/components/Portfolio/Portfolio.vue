<template>
  <main class="ui main container-large portfolio">
    <h1 class="ui header" v-if="!project">Portfolio</h1>
    <transition name="fade">
      <div class="ui projects-list" v-if="!project">
        <div  class="project" v-for="project in projects">
          <router-link :to="{name:'Project', params: {slug: project.slug}}" exact class="item">
            <div class="image">
              <img :src="project.vignette.url" width="100%">
            </div>
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
  export default {
    components: { Project },
    data() {
      return {
        state: store.state,
        project: false,
        projects: [],
        source: "http://91.121.158.160:3000",
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
      if( this.$route.params.slug ) {
        this.$http.get(this.source+'/projects/'+this.$route.params.slug).then((response)=>{
          this.project = response.body
        })
      } else {
        this.$http.get(this.source+'/projects').then((response)=>{
          console.log(response.data)
          store.setProjects(response.data)
          this.projects = this.state.projects
          this.project = false
        })
      }
    },
    watch: { // TODO scroll top
      route: function() {
        this.loadRoute()
      }
    },
  }
</script>