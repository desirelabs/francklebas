<template>
  <div class="homepage">
    <section class="ui vertical masterhead center aligned content-section" v-for="(section, index) in masterhead">
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
            <transition name="fadeleft" appear>
              <img class="" :src="section.vignette.url" alt="section.vignette.alt">
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="content-section" :key="section" v-for="(section, index) in sections">
      <div class="ui container" v-if="index % 2 == 0">
        <div class="ui two column grid stackable">
          <div class="column">
            <transition name="faderight" appear>
              <img class="" :src="section.vignette.url" :alt="section.vignette.alt" width="100%">
            </transition>
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
            <transition name="fadeleft" appear>
              <img class="" :src="section.vignette.url" :alt="section.vignette.alt" width="100%">
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
export default {
  data() {
    return {
      source: '',
      masterhead: [],
      sections: []
    }
  },
  methods: {
    loadImage(section) {
      console.log(section)
    },
    queryContents() {
      Prismic.api(this.source).then((api) => {
        return api.query([
          Prismic.Predicates.at('document.type', 'content'),
          Prismic.Predicates.fulltext('my.content.group', "homepage")
        ],
          { orderings: '[document.first_publication_date]' }
        )
      }).then((response) => {
        let values = []
        response.results.forEach((content) => {
          values.push({
            id: content.id,
            uid: content.uid,
            tags: content.tags,
            slug: content.slug,
            title: content.data.content.title.value[0].text,
            subtitle: content.data.content.subtitle.value[0].text,
            content: content.data.content.content.value[0].text,
            group: content.data.content.group.value,
            vignette: content.data.content.vignette.value.main,
          })
        })
        this.sections = values.filter((content) => content.group.indexOf("masterhead") === -1)
        this.masterhead = values.filter((content) => content.group.indexOf("masterhead") !== -1)
      }, function (err) {
        console.log("Something went wrong: ", err)
      })
    },
    direction(key) {
      if (key % 2 === 0) {
        return "right"
      } else {
        return "left"
      }
    }
  },
  computed: {
  },
  mounted() {
    this.source = process.env.API_URL
    this.queryContents()
  }
}
</script>

<style src="./styles.scss" lang="scss"></style>