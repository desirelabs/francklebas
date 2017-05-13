<template>
  <div>
    <div class="ui vertical masthead center aligned">
      <div class="ui container">
        <h1 class="ui inverted header">
          {{masterhead.title}}
        </h1>
        <h2>{{masterhead.subtitle}}</h2>
        <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
      </div>
    </div>
    <section class="content-section" v-for="section in sections">
      <header class="header">
        <div class="header-inner">
          <h2>{{ section.title }}</h2>
          <h3>{{ section.subtitle }}</h3>
        </div>
      </header>
      <div class="ui container">
        <div :class="'ui '+section.colSize+' column grid'">
          <div class="column" v-for="content in section.contents" :style="'text-align:'+content.textAlign">
            <img v-if="content.image != ''" :src="'/static/images/'+content.image" :alt="content.imageAlt" width="100%">
            <h3 v-if="content.title != ''">{{content.title}}</h3>
            <div v-if="content.text != ''" v-html="content.text"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-section">
      <div class="ui container">
        <header class="header">
          <h2>Et si vous me parliez de votre projet</h2>
          <blockquote>
            <p>Du texte</p>
          </blockquote>
        </header>
        <div class="ui one column grid">
          <div class="column" style="text-align: center;">
            <div class="ui modal">
              <div class="header">Formulaire de contact</div>
              <div class="content">
                <form class="ui form">
                  <div class="field">
                    <label>Nom</label>
                    <input type="text" name="nom" placeholder="Nom">
                  </div>
                  <div class="field">
                    <label>Prénom</label>
                    <input type="text" name="prenom" placeholder="Prénom">
                  </div>
                  <div class="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email">
                  </div>
                  <div class="field">
                    <label>Votre message</label>
                    <textarea name="message" cols="30" rows="10" placeholder="Votre message"></textarea>
                  </div>
                  <button class="ui button" type="submit" @click.prevent="">Envoyer !</button>
                </form>
              </div>
            </div>
            <button class="ui huge primary button" @click="displayModal">
              Contactez-moi !
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modal: false,
        masterhead: {
          title: "Un titre accrocheur",
          subtitle: "Une accroche qui le sublime"
        },
        sections: [
          {
            title: "Webdesign",
            subtitle: "Je conçois des interfaces pour les êtres humains.",
            colSize: "two",
            contents: [
              {
                image: "apple-devices.png",
                imageAlt: "Appareils Apple&copy;",
                textAlign: "",
                title: "",
                text: ''
              },
              {
                image: "",
                imageAlt: "",
                textAlign: "",
                title: "",
                text: `<p>L'enjeu du design est de répondre aux besoins&nbsp;des utilisateurs de la manière la plus simple et ergonomique
          possible. C'est pourquoi&nbsp;<mark>je place le visiteur au centre de mes préoccupations</mark>
          lorsque je travaille. A cet effet, je créés des interfaces&nbsp;:
        </p>
        <ul>
          <li>
            <i class="checkmark icon"></i>
            Adaptées aux appareils mobiles
          </li>
          <li>
            <i class="checkmark icon"></i>
            Respectueuses des règles d'accessibilité
          </li>
          <li>
            <i class="checkmark icon"></i>
            Faciles à utiliser
          </li>
        </ul>
        ... pour rendre l'expérience de navigation la plus agréable possible.`
              }
            ]
          },
          {
            title: "Conseil et accompagnement",
            subtitle: "Je conseille les marques et les accompagne dans l'utilisation des outils de communication digitale.",
            colSize: "three",
            contents: [
              {
                image: "social-figure.png",
                imageAlt: "Réseaux sociaux",
                textAlign: "center",
                title: "Réseaux sociaux",
                text: "Améliorer sa visibilité sur les réseaux sociaux est un enjeu majeur de croissance économique. J'accompagne les marques dans cette démarche en dispensant des formations aux outils offerts par et pour les réseaux sociaux."
              },
              {
                image: "analytics.png",
                imageAlt: "Analyse des données",
                textAlign: "center",
                title: "Analyse des données",
                text: "Les données sont au cœur de chaque démarche de création et d'amélioration. Vous aider à accéder et à comprendre les données de votre métier, c'est offrir des perspective de croissance en comprenant leurs enjeux."
              },
              {
                image: "infinite.png",
                imageAlt: "Organisation du travail",
                textAlign: "center",
                title: "Organisation du travail",
                text: "J'aide les intervenants à améliorer leur productivité via l'utilisation d'outils d'organisation en vue de les aider à gagner en efficacité."
              },
            ]
          },
          {
            title: "A qui s'adressent mes prestations",
            subtitle: "Je travaille pour les agences qui souhaitent externaliser une partie de leur production frontend, mais aussi pour les PME soucieuses de trouver un interlocuteur unique et à l'écoute.",
            colSize: "four",
            contents: [
              {
                image: "tpfi.png",
                imageAlt: "TPFI",
                textAlign: "",
                title: "",
                text: ""
              },
              {
                image: "conseil-superieur-du-notariat.png",
                imageAlt: "Conseil supérieur du Notariat",
                textAlign: "",
                title: "",
                text: ""
              },
              {
                image: "sud-de-france.png",
                imageAlt: "Sud de France",
                textAlign: "",
                title: "",
                text: ""
              },
              {
                image: "banque-de-luxembourg.png",
                imageAlt: "Banque de Luxembourg",
                textAlign: "",
                title: "",
                text: ""
              }
            ]
          }
        ]
      }
    },
    methods: {
      displayModal() {
        $('.ui.modal').modal('show');
      }
    },
    mounted() {
      let menuHeight = document.querySelector('.menu').offsetHeight
      document.querySelector('.masthead').style.height = (window.innerHeight - menuHeight) + "px"
    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>