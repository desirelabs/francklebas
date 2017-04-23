<template>
  <div class="container">
    <div class="form-builder">
      <header>
        <h1>Form Builder</h1>
      </header>
      <div class="row">
        <div class="col-md-6">
          <h3>Selected</h3>
          <draggable class="drag-zone" :list="selectedFields">
            <component v-for="field in selectedFields" :is="field.type"></component>
          </draggable>
        </div>
        <div class="col-md-6">
          <h3>Available</h3>
          <draggable class="drag-zone" :list="available">
            <button @click="ajouterText">Ajouter un champs de texte</button>
            <br>
            <button @click="ajouterLongText">Ajouter un champs de texte long</button>
            <br>
            <button @click="ajouterFile">Ajouter un champs d'upload</button>
            <br>
            <button @click="ajouterRadio">Ajouter un groupe radio</button>
            <br>
            <button @click="ajouterCheckbox">Ajouter un groupe checkbox</button>
            <br>
          </draggable>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <pre>{{selectedFields}}</pre>
        </div>
        <div class="col-md-6">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TextField from './field-components/TextField.vue'
  import FileField from './field-components/FileField.vue'
  import RadioField from './field-components/RadioField.vue'
  import CheckboxField from './field-components/CheckboxField.vue'
  import LongTextField from './field-components/LongTextField.vue'
  import draggable from 'vuedraggable'

  export default {
    components: { TextField, LongTextField, FileField, RadioField, CheckboxField, draggable },
    data() {
      return {
        fieldName: "",
        available: [],
        selectedFields: []
      }
    },
    methods: {
      ajouterText() {
        this.selectedFields.push({
          type: 'text-field',
          field: {
            name: "du text",
              slug: "",
            type: "text",
            mandatory: false
          }
        })
      },
      ajouterLongText() {
        this.selectedFields.push({
          type: 'long-text-field',
          field: {
            name: "du text long",
            slug: "",
            type: "textarea",
            mandatory: false
          }
        })
      },
      ajouterFile() {
        this.selectedFields.push({
          type: 'file-field',
          field: {
            name: "Fichier",
            sulg: "",
            type: "file",
            mandatory: false
          }
        })
      },
      ajouterRadio() {
        this.selectedFields.push({
          type: 'radio-field',
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
        })
      },
      ajouterCheckbox() {
        this.selectedFields.push({
          type: 'checkbox-field',
          field: {
            name: "Choix",
            slug: "",
            type: "checkbox",
            mandatory: false,
            options: [{
              name: "nom 1",
              value: "value 1"
            },{
              name: "nom 1",
              value: "value 1"
            }]
          }
        })
      }
    }
  }
</script>

<style>
  .drag-zone {
    border: 3px dashed #aaa;
    min-height: 100px;
  }
</style>