<template>
  <main class="ui main container-large portfolio">
    <h1 class="ui header" v-if="!project">Portfolio</h1>
    <transition name="fade">
      <div class="ui projects-list" v-if="!project">
        <div class="project" v-for="(project, key) in projects">
          <router-link :key="key" :to="{name:'Project', params: {slug: project.slug}}" exact class="item">
              <div class="image" :style="'background: url('+project.vignette.url+') no-repeat 0 0 / cover'"></div>
            <h3 class="project-title">{{ project.title }}</h3>
          </router-link>
        </div>
      </div>
    </transition>
    <loader :active="loader"></loader>
  </main>
</template>

<script>
import Project from './Project'
import Loader from '../Loader'
import Prismic from 'prismic-javascript'
export default {
  components: { Project, Loader },
  data() {
    return {
      project: false,
      projects: [],
      source: false,
      route: false,
      scrolled: false,
      loader: true
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
      if (this.$route.params.slug) {
        console.log(this.$route.params.slug)
      }
      else {
        console.log("pas de route")
      }
    },
    queryProjects() {
      Prismic.api(this.source).then((api) => {
        return api.query([
          Prismic.Predicates.at('document.type', 'project')
        ],
          { orderings: '[project.title desc]' }
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
          this.masonryInit(2, 32)
          this.handleScroll()
        }).catch((err) => {
          console.log("Something went wrong: ", err)
        })
      })
    },
    masonryInit(columns, gutter) {
      let container = document.querySelector('.projects-list')
      if(container) {
        this.$imagesloaded(container, { background: '.project' }, _ => {
          let msnry = new this.$masonry(container, {
            itemSelector: '.project',
            gutter: gutter,
            columnWidth: function (containerWidth) {
              return containerWidth / columns// depends how many boxes per row
            }(), // () to execute the anonymous function right away and use its result
            isAnimated: true,
            transitionDuration: 0,
            initLayout: false
          })
          msnry.once( 'layoutComplete',
            ( event, laidOutItems ) => {
              this.loader = false
            }
          )
          msnry.layout()
        })
      }      
    },
    handleScroll() {
      let items = document.querySelectorAll('.project')
      let scroll = window.scrollY
      items.forEach((item) => {
        if (!item.classList.contains('animate') && item.offsetTop < scroll) {
          item.classList.add('animate')
        }
      })
    },
    resizeActions() {
      if (window.width < 480) {
        this.masonryInit(1, 1)
      } else {
        this.masonryInit(2, 32)
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.resizeActions)
    this.source = process.env.API_URL
    this.queryProjects()
    window.scrollTo(0, 0)
  },
  watch: { // TODO scroll top
    route: function () {
      this.loadRoute()
    }
  },
}
</script>

<style src="./styles.scss" lang="scss"></style>
