<template>
  <div>
    <section class="ui vertical masterhead center aligned content-section" v-for="section in masterhead">
      <div class="ui main container-large">
        <div class="ui two column grid">
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
            <transition name="fadein-left" mode="out-in" tag="div">
              <img class="" :src="section.vignette.url" alt="section.vignette.alt" style="max-width: 150%;margin-top: -30px;">
            </transition>
          </div>
        </div>
      </div>
    </section>
    <transition-group name="fadein" tag="div">
      <section class="content-section" :key="section" v-for="(section, index) in sections">
        <div class="ui container" v-if="index % 2 == 0">
          <div class="ui two column grid">
            <div class="column">
              <img :src="section.vignette.url" :alt="section.vignette.alt" width="100%">
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
          <div class="ui two column grid">
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
              <img :src="section.vignette.url" :alt="section.vignette.alt" width="100%">
            </div>
          </div>
        </div>
      </section>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modal: false,
        sourceDev: "http://localhost:3000",
        masterhead: [],
        sections: [],
        contents: []
      }
    },
    methods: {
      displayModal() {
        $('.ui.modal').modal('show');
      },
      queryContents() {
        this.$http.get(this.sourceDev + '/contents/homepage').then((response) => {
          this.contents = response.data
          this.sections = this.contents.filter((content) => content.group.indexOf("masterhead") === -1)
          this.masterhead = this.contents.filter((content) => content.group.indexOf("masterhead") !== -1)
          console.log("Success", response)
        }).catch((error) => {
          console.log("Error", error)
        })
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