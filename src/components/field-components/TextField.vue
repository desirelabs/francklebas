<template>
  <fieldset>
    <label :for="field.slug">
      {{field.name}}<span v-if="field.mandatory">*</span>
      <input :name="field.slug" :id="field.slug" v-if="field.type === 'text'" :type="field.type">
    </label>
  </fieldset>
</template>

<script>
  export default {
    name: "textField",
    data() {
      return {
        field: {
          name: "du text",
          slug: "",
          type: "text",
          mandatory: false
        }
      }
    },
    methods: {
      getData() {
        return this.field
      }
    },
    computed: {
      sluggify() {
        this.field.slug = this.field.name.trim().replace(' ','-')
      }
    }
  }
</script>