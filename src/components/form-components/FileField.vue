<template>
  <fieldset>
    <label :for="field.slug">
      {{field.name}}<span v-if="field.mandatory">*</span>
      <input :name="field.slug" :id="field.slug" v-if="field.type === 'file'" :type="field.type">
    </label>
  </fieldset>
</template>

<script>
  export default {
    name: "fileField",
    data() {
      return {
        field: {
          name: "Fichier",
          sulg: "",
          type: "file",
          mandatory: false
        }
      }
    }
  }
</script>