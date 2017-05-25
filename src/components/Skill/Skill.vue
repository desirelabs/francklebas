<template>
  <div class="homepage">
    <section class="ui vertical masterhead center aligned content-section" v-for="section in masterhead">
      <div class="ui main container-large">
        <div class="ui two column grid stackable">
          <div class="column header-column">
              <header class="header left">
                <div class="header-inner">
                  <h2>{{section.title}}</h2>
                  <h3>{{section.subtitle}}</h3>
                </div>
              </header>
              <div class="section-content" v-html="section.content"></div>
          </div>
          <div class="column">
            <img class="fade-out-left" @load="transition('.fade-out-left')" :src="section.vignette.url" alt="section.vignette.alt">
          </div>
        </div>
      </div>
    </section>
    <transition-group name="fadein" tag="div">
      <section class="content-section" :key="section" v-for="(section, index) in sections">
        <div class="ui container" v-if="index % 2 == 0">
          <div class="ui two column grid stackable">
            <div class="column">
              <img v-lazy="section.vignette.url" :alt="section.vignette.alt" width="100%">
            </div>
            <div class="column header-column">
              <header class="header">
                <div class="header-inner">
                  <h2>{{ section.title }}</h2>
                  <h3>{{ section.subtitle }}</h3>
                </div>
              </header>
              <div class="section-content" v-html="section.content"></div>
            </div>
          </div>
        </div>
        <div class="ui container" v-if="index % 2 != 0">
          <div class="ui two column grid stackable">
            <div class="column header-column">
              <header class="header">
                <div class="header-inner">
                  <h2>{{ section.title }}</h2>
                  <h3>{{ section.subtitle }}</h3>
                </div>
              </header>
              <div class="section-content" v-html="section.content"></div>
            </div>
            <div class="column">
              <img v-lazy="section.vignette.url" :alt="section.vignette.alt" width="100%">
            </div>
          </div>
        </div>
      </section>
    </transition-group>
  </div>
</template>

<script>
  var Prismic = require('prismic-javascript');
  export default {
    data() {
      return {
        modal: false,
        sourceDev: "http://localhost:3000",
        source: "http://78679f1be5.testurl.ws",
        masterhead: [],
        sections: [],
        contents: []
      }
    },
    methods: {
      displayModal() {
        $('.ui.modal').modal('show');
      },
      setContent(values) {
        console.log(values)
      },
      queryContents() {
        Prismic.api("https://picolab.prismic.io/api").then((api) => {
          return api.query([
              Prismic.Predicates.at('document.type', 'content'),
              Prismic.Predicates.fulltext('my.content.group', "homepage")
            ],
            {orderings: '[document.first_publication_date]'}
          )
        }).then((response) => {
          let values = []
          response.results.forEach((content)=>{
            values.push({
              id: content.id,
              uid: content.uid,
              tags: content.tags,
              slug: content.slug,
              title: content.data.content.title.value[0].text,
              subtitle: content.data.content.subtitle.value[0].text,
              content: content.data.content.content.value[0].text,
              group: content.data.content.group.value,
              vignette: content.data.content.vignette.value['main'],
            })
          })
          this.contents = values
          this.sections = this.contents.filter((content) => content.group.indexOf("masterhead") === -1)
          this.masterhead = this.contents.filter((content) => content.group.indexOf("masterhead") !== -1)
        }, function(err) {
          console.log("Something went wrong: ", err);
        });
      },
      transition(image) {
        document.querySelector(image).classList.add('fade-in-left')
      }
    },
    computed: {
      direction(index) {
        return index % 2 == 0 ? "left" : "right"
      }
    },
    mounted() {
      this.queryContents()

    }
  }
</script>

<style src="./styles.scss" lang="scss"></style>