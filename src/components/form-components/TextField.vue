<template>
  <fieldset>
    <label :for="field.slug">
      {{field.label}}<span v-if="field.mandatory">*</span><br>
      <input type="text" v-model="field.label">
      <input type="checkbox" :checked="{checked: field.mandatory}" :value="field.mandatory" v-model="field.mandatory">
    </label>
  </fieldset>
</template>

<script>
  import store from './FormStore'
  export default {
    name: "textField",
    data() {
      return {
        currentField: false,
        state: store.state,
        field: {
          type: 'text-field',
          name: "du text",
          label: "Label du champ",
          slug: "",
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
    },
    mounted() {
      this.currentField = store.getField()
    }
  }
</script>