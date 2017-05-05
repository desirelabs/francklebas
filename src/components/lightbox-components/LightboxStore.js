class LightboxStore {
  constructor(){
    this.state = {
      images: [],
      index: false
    }
  }

  addImage(url) {
    return this.state.images.push(url)
  }

  open(index) {
    this.state.index = index
  }

  close() {
    this.state.index = false
  }

  prev() {
    if(this.state.index <= 1) {
      this.state.index = this.state.images.length
    }
    else {
      this.state.index--
    }
  }

  next() {
    if(this.state.index >= this.state.images.length){
      this.state.index = 1
    }
    else {
      this.state.index++
    }
  }
}

export default new LightboxStore()