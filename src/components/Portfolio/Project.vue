<template>
  <section class="content-section project">
    <header class="header">
      <div class="header-inner">
        <h2>{{project.title}}</h2>
        <h3>{{project.description}}</h3>
      </div>
    </header>
    <div class="spacer spacer-right"></div>
    <div class="ui grid">
      <div class="one column row">
        <div class="column">
          <ul style="text-align: right;">
            <li><strong>Client : </strong>{{project.client}}</li>
            <li><strong>Agence : </strong>{{project.agence}}</li>
            <li><strong>Rôle : </strong>{{project.role}}</li>
            <li>
              <ul class="tech-list">
                <li v-for="techno in project.technologies">
                  <img :src="'/static/images/'+techno+'.png'" :alt="techno" height="50">
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ui grid">
      <div class="four column row">
        <div class="column" v-for="image in project.images" v-if="!image.vignette">
          <h4>{{image.title}}</h4>
          <a data-fancybox="gallery" :href="'/static/images/projects/'+project.group+'/'+image.image" class="fancybox">
            <img :src="'/static/images/projects/'+project.group+'/'+image.image" :alt="image.title" width="100%">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "project",
    props: {
      project: Object
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>