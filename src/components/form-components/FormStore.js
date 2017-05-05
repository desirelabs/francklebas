class FormStore {
  constructor() {
    this.state = {
      fields: [],
      currentField: false
    }
  }

  addField(field) {
    this.state.currentField = field
    return this.state.fields.push(field)
  }

  getFields() {
    return this.state.fields
  }

  getField(field) {
    return this.state.currentField
  }
}

export default new FormStore()