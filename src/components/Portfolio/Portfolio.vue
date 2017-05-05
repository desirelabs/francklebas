<template>
  <main class="ui main container portfolio">
    <h1 class="ui header">Portfolio</h1>
    <div class="ui four stackable cards">
      <project v-for="project in projects" :project="project"></project>
    </div>
  </main>
</template>

<script>
  import Project from './Project'
  export default {
    components: { Project },
    data() {
      return {
        projects: [
          {
            title: "Banque de Luxembourg",
            subtitle: "Refonte",
            images: [
              {
                image: "banque-de-luxembourg.png",
                title: "Page d'accueil du site Banque de Luxembourg"
              }
            ]
          },
          {
            title: "Compass Group France",
            subtitle: "Espace privé clients",
            images: [
              {
                image: "compass-group.png",
                title: "Page d'accueil de l'espace privé client"
              }
            ]
          }
        ]
      }
    },
    mounted() {
      if(this.$route.params) {
        // TODO filter portfolios
      }
    }
  }
</script>