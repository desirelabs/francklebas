<template>
  <fieldset>
    <label :for="field.name">
      {{field.name}}<span v-if="field.mandatory">*</span>
      <div  v-if="field.type === 'radio'" class="checkboxes">
        <div v-for="option in field.options">
          <label :for="option.name">
            {{option.name}}
            <input :type="field.type" :name="option.name" :value="option.value">
          </label>
        </div>
      </div>
    </label>
  </fieldset>
</template>

<script>
  export default {
    name: "radioField",
    data() {
      return {
        field: {
          name: "Choix",
          slug: "",
          type: "radio",
          mandatory: false,
          options: [{
            name: "nom 1",
            value: "value 1"
          },{
            name: "nom 1",
            value: "value 1"
          }]
        }
      }
    }
  }
</script>