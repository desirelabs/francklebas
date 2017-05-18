<template>
  <div id="wrapper" class="pusher">
    <div class="container site-title">
      <h1 class=""><a href="/">FranckLebas</a></h1>
      <h2>Web artisan</h2>
      <div class="spacer spacer-mini"></div>
    </div>
    <div class="ui menu">
      <div class="menu-links">
        <router-link :to="{name:'Acceuil'}" exact class="item"><span>Accueil</span><i class="home icon"></i></router-link>
        <router-link :to="{name:'Portfolio'}" class="item"><span>Portfolio</span><i class="image icon"></i></router-link>
        <a href="http://desirelabs.fr" rel="nofollow" target="_blank" class="item"><span>Le blog</span><i class="feed icon"></i></a>
        <a href="" class="item" @click.prevent="displayModal"><span>Contact</span><i class="mail icon"></i></a>
      </div>
    </div>
    <transition name="fade">
      <router-view name="hello"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="portfolio"></router-view>
    </transition>
    <footer class="ui inverted vertical footer segment form-page">
      <div class="ui container center aligned">
        // &copy; Picolabs / <a href="" class="item" @click.prevent="displayModal">Contact</a> / Mentions légales //
      </div>
      <div class="ui one column grid">
        <div class="column" style="text-align: center;">
          <div class="ui modal">
            <div class="header">Formulaire de contact</div>
            <div class="content">
              <form class="ui form" id="contactForm" method="post" action="http://localhost:3000/mail">
                <div class="field">
                  <label>Nom</label>
                  <input type="text" name="nom" placeholder="Nom" v-model="form.nom">
                </div>
                <div class="field">
                  <label>Prénom</label>
                  <input type="text" name="prenom" placeholder="Prénom" v-model="form.prenom">
                </div>
                <div class="field">
                  <label>Email</label>
                  <input type="text" name="email" placeholder="Email" v-model="form.email">
                </div>
                <div class="field">
                  <label>Votre message</label>
                  <textarea name="message" cols="30" rows="10" placeholder="Votre message" v-model="form.message"></textarea>
                </div>
                <button class="ui button" type="submit">Envoyer !</button>
              </form>
            </div>
          </div>
        </div>
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
        search: "",
        source: "http://78679f1be5.testurl.ws",
        form: {
          nom: "",
          prenom: "",
          email: "",
          message: ""
        }
      }
    },
    computed: {
      search() {
        return this.search
      }
    },
    methods: {
      displayModal() {
        $('.ui.modal').modal('show');
      },
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
