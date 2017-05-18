<template>
  <div id="wrapper" class="pusher">
    <div class="ui menu">
      <div class="menu-links">
        <router-link :to="{name:'Acceuil'}" exact class="item"><span>Accueil</span><i class="home icon"></i></router-link>
        <router-link :to="{name:'Portfolio'}" class="item"><span>Portfolio</span><i class="image icon"></i></router-link>
        <router-link :to="{name:'Articles', params: { page: 1 }}" exact class="item"><span>Le blog</span><i class="feed icon"></i></router-link>
        <router-link :to="{name:'Contact'}" exact class="item"><span>Contact</span><i class="mail icon"></i></router-link>
      </div>
      <!--<div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Recherche" v-model="search" @keypress.enter="queryPost">
            <button class="ui button" @click.prevent="queryPost">
              <i class="search icon"></i>
            </button>
          </div>
        </div>
      </div>-->
    </div>
    <transition name="fade">
      <router-view name="hello"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="blog"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="portfolio"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="contact"></router-view>
    </transition>
    <footer class="ui inverted vertical footer segment form-page">
      <div class="ui container center aligned">
        &copy; Picolabs / Link / Contact / Mentions légales
      </div>
    </footer>
    <div class="totop">
      <i class="angle up icon"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        annee: "",
        search: ""
      }
    },
    computed: {
      search() {
        return this.search
      }
    },
    methods: {
      queryPost() { // TODO empty search
        if ( this.search !== "" )
          this.$router.push({path: '/articles/all', query: { search: this.search}})
      }
    },
    mounted() {
      this.annee = new Date().getFullYear()


      $(document).ready(function () {
        // Trigger scrolling event
        $(window).scroll(function () {
          console.log($(this).scrollTop())
          if ($(this).scrollTop() > 100) {
            $('.totop').fadeIn();
          } else {
            $('.totop').fadeOut();
          }
        });

        // Trigger click on the button
        $('body').on('click', '.totop', function () {
          $("html, body").animate({
            scrollTop: 0
          }, 600);
          return false;
        });

      });


    }
  }
</script>

<style src="./main.scss" lang="scss">
</style>
