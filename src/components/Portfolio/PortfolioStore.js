/*import Vuex from 'vuex'

const state = {
  projects: []
}

const mutations = {
  ADD_PROJECT: (state, project) => {
    state.projects.push(project)
  }
}

const actions = {
  addProject: project => {
    PortfolioStore.commit('ADD_PROJECT', project)
  },
  addProjects: projects => {
    projects.forEach((project) => {
      this.addProject(project)
    })
  }
}

const getters = {
  projects: state => state.projects,
  project: (state, slug) => state.projects.filter(project => project.slug = slug)
}

let store = new Vuex.Store({

  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true

})

global.PortfolioStore = store
export default PortfolioStore*/






class PortfolioStore {
  constructor(){
    this.state = {
      projects: [],
      index: false
    }
  }

  addProject(project) {
    return this.state.projects.push(project)
  }

  setProjects(projects) {
    return this.state.projects = projects
  }

  getProjects() {
    return this.state.projects
  }

  getProjectBySlug(slug) {
    return this.state.projects.filter((project)=> project.slug == slug)
  }

  open(index) {
    this.state.index = index
  }

  close() {
    this.state.index = false
  }

  prev() {
    if(this.state.index <= 1) {
      this.state.index = this.state.projects.length
    }
    else {
      this.state.index--
    }
  }

  next() {
    if(this.state.index >= this.state.projects.length){
      this.state.index = 1
    }
    else {
      this.state.index++
    }
  }
}

export default new PortfolioStore()