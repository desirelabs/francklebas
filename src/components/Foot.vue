<template>
  <div id="footer">
    <section class="contact-section">
      <div class="ui vertical center aligned container">
        <header class="header">
          <h2>Et si vous me parliez de vous ?</h2>
          <blockquote>
            <p>Vous avez un projet ? Vous souhaitez externaliser une partie de votre production frontend ?</p>
          </blockquote>
        </header>
        <a class="ui huge primary button" @click.prevent="displayModal">Contactez-moi !</a>
      </div>
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
              <input type="email" name="email" placeholder="Email" v-model="form.email">
            </div>
            <div class="field">
              <label>Votre message</label>
              <textarea name="message" cols="30" rows="10" placeholder="Votre message" v-model="form.message"></textarea>
            </div>
            <div class="field">
              <!--<div class="g-recaptcha" @verify="iamNotABot" data-sitekey="6Ld3CSMUAAAAANACpzW7Eef98DqcasUKWmMDrRjk"></div>-->
              <vue-recaptcha sitekey="6Ld3CSMUAAAAANACpzW7Eef98DqcasUKWmMDrRjk"></vue-recaptcha>
              <!--<vue-recaptcha
                                  type="V2"
                                  sitekey="6Ld3CSMUAAAAANACpzW7Eef98DqcasUKWmMDrRjk"
                                  @verify="iamNotABot"
                                  @expired="resetCaptcha"></vue-recaptcha>-->
            </div>
            <button class="ui button" type="submit">Envoyer !</button>
          </form>
        </div>
      </div>
    </section>
    <footer class="ui inverted vertical footer segment form-page">
      <div class="ui container center aligned">
        Franck LEBAS &copy {{annee}} /
        <a href="" class="item" @click.prevent="displayModal">Contact</a> /
        <router-link :to="{name:'Page', params: {uid: 'mentions-legales'}}" exact class="item">
          <span>Mentions légales</span>
        </router-link> /
        <router-link :to="{name:'Page', params: {uid: 'a-propos'}}" exact class="item">
          <span>À propos</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'foot',
  components: { VueRecaptcha },
  data() {
    return {
      annee: '',
      captcha: false,
      responseDesc: false,
      source: '',
      form: {
        nom: '',
        prenom: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    displayModal() {
      $('.ui.modal').modal('show')
    },
    sendMail(form) {
      this.captcha = grecaptcha.getResponse()
      if (this.captcha && this.captcha !== undefined && this.captcha != '') {
        this.$http.post(this.source + '/mail', {
          'origin': window.location.hostname,
          'captcha': this.captcha,
          'data': form
        }).then((response) => { // TODO captach traiter côte serveur
          $('.ui.modal').modal('hide')
        })
      }
    },
    iamNotABot() {
      if (grecaptcha.getResponse())
        this.captcha = grecaptcha.getResponse()
    },
    resetCaptcha() {
      this.captcha = false
      grecaptcha.reset()
    }
  },
  mounted() {
    this.source = process.env.MAIL_URL
    this.annee = new Date().getFullYear()
  }
}
</script>

<style lang="scss"></style>
