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
      <router-view name="page"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="portfolio"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="project"></router-view>
    </transition>
    <section class="contact-section">
      <div class="ui vertical center aligned container">
        <header class="header">
          <h2>Et si vous me parliez de vous ?</h2>
          <blockquote>
            <p>Vous avez un projet ? Vous souhaitez externaliser une partie de votre production frontend ?</p>
          </blockquote>
        </header>
        <button class="ui huge primary button" @click="displayModal">
          Contactez-moi !
        </button>
      </div>
    </section>
    <footer class="ui inverted vertical footer segment form-page">
      <div class="ui container center aligned">
        Franck LEBAS &copy; {{annee}} /
        <a href="" class="item" @click.prevent="displayModal">Contact</a> /
        <router-link :to="{name:'Page', params: {uid: 'mentions-legales'}}" exact class="item"><span>Mentions légales</span></router-link> /
        <router-link :to="{name:'Page', params: {uid: 'a-propos'}}" exact class="item"><span>À propos</span></router-link> /
        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="nofollow">Code source sous licence MIT</a>
      </div>
      <div class="ui container center aligned">
        Fièrement propulsé par <a href="https://netlify.com" target="_blank" rel="nofollow">Netlify</a> et hébergé par
        <a href="https://www.gandi.net" target="_blank" rel="nofollow">Gandi</a>
      </div>
      <div class="ui one column grid">
        <div class="column" style="text-align: center;">
          <div class="ui modal">
            <div class="header">Formulaire de contact</div>
            <div class="content">
              <form class="ui form" id="contactForm" @submit.prevent="sendMail(form)">
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
                <div class="field">
                  <!--<div class="g-recaptcha" :data-callback="notBot" data-sitekey="6Ld3CSMUAAAAANACpzW7Eef98DqcasUKWmMDrRjk"></div>-->
                  <vue-recaptcha
                    type="V2"
                    sitekey="6Ld3CSMUAAAAANACpzW7Eef98DqcasUKWmMDrRjk"
                    @verify="notBot"
                    @expired="resetCaptcha"></vue-recaptcha>
                </div>
                <button class="ui button" :disabled="captcha === false" type="submit">Envoyer !</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="totop">
      <i class="angle up icon"></i>
    </div>
    <div class="ui inverted dimmer" :class="{active:loader}">
      <div class="ui loader"></div>
    </div>
  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  export default {
    name: 'app',
    components: { VueRecaptcha },
    data() {
      return {
        loader: true,
        scrolled: false,
        captcha: false,
        annee: "",
        search: "",
        source: "http://78679f1be5.testurl.ws",
        sourceDev: "http://localhost:3000",
        form: {
          nom: "",
          prenom: "",
          email: "",
          message: ""
        }
      }
    },
    computed: {
    },
    methods: {
      displayModal() {
        $('.ui.modal').modal('show');
      },
      queryPost() { // TODO empty search
        if ( this.search !== "" )
          this.$router.push({path: '/articles/all', query: { search: this.search}})
      },
      sendMail(form) {
        console.log(this.captcha)
        if( this.captcha ) {
          this.$http.post(this.source+'/mail', {
              'origin': window.location.hostname,
              'captcha': this.captcha,
              'data': form
            }).then((response) => { // TODO captach traiter côte serveur
            $('.ui.modal').modal('hide')
          })
        }
      },
      notBot() {
        if(grecaptcha.getResponse())
          this.captcha = grecaptcha.getResponse()
      },
      resetCaptcha(){
        this.captcha = false
        grecaptcha.reset()
      }
    },
    mounted() {
      this.annee = new Date().getFullYear()
      this.loader = false
    }
  }
</script>
<style src="./main.scss" lang="scss">
</style>
