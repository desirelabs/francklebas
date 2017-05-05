<template>
  <div id="wrapper" class="pusher">
    <div class="ui menu fixed">
      <div class="header item">Brand</div>
      <router-link :to="{name:'Acceuil'}" class="item">Accueil</router-link>
      <router-link :to="{name:'Portfolio'}" class="item">Portfolio</router-link>
      <router-link :to="{name:'Articles', params: { page: 1 }}" class="item">Le blog</router-link>
      <router-link :to="{name:'Contact'}" class="item">Contact</router-link>
      <div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
            <button class="ui button">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <router-view name="hello"></router-view>
    <router-view name="blog"></router-view>
    <router-view name="portfolio"></router-view>
    <router-view name="contact"></router-view>
    <footer class="ui inverted vertical footer segment form-page">
      <div class="ui container center aligned">
        &copy; Picolabs - {{annee}}
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        annee: ""
      }
    },
    mounted() {
      this.annee = new Date().getFullYear()
    }
  }
</script>

<style src="./main.scss" lang="scss"></style>
