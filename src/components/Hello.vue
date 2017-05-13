<template>
  <div>
    <div class="ui vertical">
      <skill></skill>
    </div>
  </div>
</template>

<script>
  import Slider from '@/components/slider-components/Slider'
  import Slide from '@/components/slider-components/Slide'
  import Skill from '@/components/Skill/Skill'
  export default {
    name: 'hello',
    components: {
      Skill
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
