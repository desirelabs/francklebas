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
        route: false,
        scrolled: false
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
                subtitle: project.data.project.subtitle.value[0].text,
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
            this.masonryInit(2, 80)
            this.handleScroll()
          }).catch((err) => {
            console.log("Something went wrong: ", err);
          })
        })
      },
      masonryInit(columns, gutter) {
        var container = $('.projects-list');
        container.imagesLoaded(function(){
          container.masonry({
            itemSelector: '.project',
            gutter: gutter,
            columnWidth: function( containerWidth ) {
              return containerWidth /columns;// depends how many boxes per row
            }(), // () to execute the anonymous function right away and use its result
            isAnimated: true
          });
        });
      },
      handleScroll() {
        let items = document.querySelectorAll('.project')
        let scroll = window.scrollY
        items.forEach((item) => {
          if(!item.classList.contains('animate') && item.offsetTop < scroll ) {
            item.classList.add('animate')
          }
        })
      },
      resizeActions() {
        if(window.width < 480) {
          this.masonryInit(1, 0)
        }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.resizeActions)
      this.queryProjects()
      window.scrollTo(0, 0);
    },
    watch: { // TODO scroll top
      route: function() {
        this.loadRoute()
      }
    },
  }
</script>