<template>
  <main class="ui main container portfolio">
    <h1 class="ui header" v-if="!project">Portfolio</h1>
    <div class="ui projects-list" v-if="!project">
      <div class="project" v-for="project in projects" @click.prevent="showProject(project)">

          <div class="image">
            <img :src="'/static/images/projects/'+project.group+'/'+project.images[0].image" width="100%">
          </div>
          <h3 class="project-title">{{ project.title }}</h3>

      </div>
    </div>
    <div class="project" v-if="project">
      <project :project="project"></project>
    </div>
  </main>
</template>

<script>
  import Project from './Project'
  export default {
    components: { Project },
    data() {
      return {
        project: false,
        projects: []
      }
    },
    methods: {
      showProject(project) {
        this.project = project
      }
    },
    mounted() {
      if( this.$route.params.slug ) {
        this.project = this.projects.filter((project) => project.slug == this.$route.params.slug)
      } else {
        this.projects = [
          {
            "title": "Banque de Luxembourg",
            "slug": "banque-de-luxembourg",
            "subtitle": "Refonte",
            "description": "Pour satisfaire aux usages mobiles futurs, le site de la Banque de Luxembourg a évolué vers un site totalement responsive, et surtout une version compatible smartphone.",
            "group": "bdl",
            "role": "Développeur Frontend",
            "client": "Banque de Luxembourg",
            "agence": "Nouvelle MARQUE",
            "technologies": [
              "html5",
              "css3",
              "javascript"
            ],
            "images": [
              {
                "vignette": true,
                "image": "bdl-vignette.png",
                "title": "Page d'accueil du site Banque de Luxembourg"
              },
              {
                "image": "bdl-homepage.png",
                "title": "Page d'accueil du site de la Banque de Luxembourg"
              },
              {
                "image": "bdl-news.png",
                "title": "Page des actualités du site de la Banque de Luxembourg"
              },
              {
                "image": "bdl-news-seule.png",
                "title": "Actualité complète du site de la Banque de Luxembourg"
              },
              {
                "image": "bdl-investissement.png",
                "title": "Une page du site de la Banque de Luxembourg"
              }
            ]
          },
          {
            "title": "Banque de Luxembourg",
            "slug": "banque-de-luxembourg-2",
            "subtitle": "Refonte",
            "group": "bdl",
            "images": [
              {
                "vignette": true,
                "image": "bdl-vignette.png",
                "title": "Page d'accueil du site Banque de Luxembourg"
              }
            ]
          },
          {
            "title": "Banque de Luxembourg",
            "slug": "banque-de-luxembourg-3",
            "subtitle": "Refonte",
            "group": "bdl",
            "images": [
              {
                "vignette": true,
                "image": "bdl-vignette.png",
                "title": "Page d'accueil du site Banque de Luxembourg"
              }
            ]
          },
          {
            "title": "Banque de Luxembourg",
            "slug": "banque-de-luxembourg-4",
            "subtitle": "Refonte",
            "group": "bdl",
            "images": [
              {
                "vignette": true,
                "image": "bdl-vignette.png",
                "title": "Page d'accueil du site Banque de Luxembourg"
              }
            ]
          }
        ]
      }
    }
  }
</script>