<template>
  <div class="projet card">
    <div class="image" :style="'background-image: url(/static/images/projects/'+project.images[0].image+')'" style="background: no-repeat; background-position: 50% 50%; background-size: cover;">
      <h3 class="portfolio-title">{{ project.title }}</h3>
    </div>
  </div>

</template>

<script>
  export default {
    name: "project",
    props: {
      project: Object
    },
    mounted() {
      //this.project = project
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>