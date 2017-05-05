<template>
  <div class="container">
    <div class="form-builder">
      <header class="ui two column stackable grid container">
        <h1>Form Builder</h1>
      </header>
      <div class="ui two column stackable grid container">
        <div class="column">
          <h3>Selected</h3>
          <draggable class="drag-zone" :list="selectedFields">
            <component v-for="field in selectedFields" :is="field.type"></component>
          </draggable>
        </div>
        <div class="column">
          <h3>Available</h3>
          <draggable class="drag-zone" :list="available">
            <button @click="ajouterText">Ajouter un champs de texte</button>
            <br>
            <!--<button @click="ajouterLongText">Ajouter un champs de texte long</button>
            <br>
            <button @click="ajouterFile">Ajouter un champs d'upload</button>
            <br>
            <button @click="ajouterRadio">Ajouter un groupe radio</button>
            <br>
            <button @click="ajouterCheckbox">Ajouter un groupe checkbox</button>
            <br>-->
          </draggable>
        </div>
      </div>
      <div class="ui two column stackable grid container">
        <div class="column">
          <pre>{{selectedFields}}</pre>
        </div>
        <div class="column">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TextField from './TextField.vue'
  import FileField from './FileField.vue'
  import RadioField from './RadioField.vue'
  import CheckboxField from './CheckboxField.vue'
  import LongTextField from './LongTextField.vue'
  import store from './FormStore'
  import draggable from 'vuedraggable'

  export default {
    components: { TextField, LongTextField, FileField, RadioField, CheckboxField, draggable },
    data() {
      return {
        fieldName: "",
        available: [],
        selectedFields: [],
        textField: {},
        state: store.state,
      }
    },
    methods: {
      ajouterText() {
        store.addField(TextField.data().field)
        this.selectedFields = store.getFields()
      }
    },
    mounted() {
      this.textField = TextField.data().field
    }
  }
</script>

<style>
  .drag-zone {
    border: 3px dashed #aaa;
    min-height: 100px;
  }
</style>