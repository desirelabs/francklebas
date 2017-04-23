<template>
  <fieldset>
    <label :for="field.slug">
      {{field.name}}<span v-if="field.mandatory">*</span>
      <textarea v-if="field.type === 'textarea'" name="" id="" cols="30" rows="10"></textarea>
    </label>
  </fieldset>
</template>

<script>
  export default {
    name: "longTextField",
    data() {
      return {
        field: {
          name: "du text long",
          slug: "",
          type: "textarea",
          mandatory: false
        }
      }
    }
  }
</script>