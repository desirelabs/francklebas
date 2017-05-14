class PortfolioStore {
  constructor(){
    this.state = {
      projects: [
        {
          "title": "Banque de Luxembourg",
          "slug": "banque-de-luxembourg",
          "subtitle": "Refonte",
          "description": "Pour satisfaire aux usages mobiles futurs, le site de la Banque de Luxembourg a évolué vers un site totalement responsive, et surtout une version compatible smartphone.",
          "group": "bdl",
          "role": "Développeur Frontend",
          "client": "Banque de Luxembourg",
          "agence": "Nouvelle MARQUE",
          "technologies": [
            "html5",
            "css3",
            "javascript"
          ],
          "images": [
            {
              "vignette": true,
              "image": "bdl-vignette.png",
              "title": "Page d'accueil du site Banque de Luxembourg"
            },
            {
              "image": "bdl-homepage.png",
              "title": "Page d'accueil du site de la Banque de Luxembourg"
            },
            {
              "image": "bdl-news.png",
              "title": "Page des actualités du site de la Banque de Luxembourg"
            },
            {
              "image": "bdl-news-seule.png",
              "title": "Actualité complète du site de la Banque de Luxembourg"
            },
            {
              "image": "bdl-investissement.png",
              "title": "Une page du site de la Banque de Luxembourg"
            }
          ]
        },
        {
          "title": "Banque de Luxembourg",
          "slug": "banque-de-luxembourg-2",
          "subtitle": "Refonte",
          "group": "bdl",
          "images": [
            {
              "vignette": true,
              "image": "bdl-vignette.png",
              "title": "Page d'accueil du site Banque de Luxembourg"
            }
          ]
        },
        {
          "title": "Banque de Luxembourg",
          "slug": "banque-de-luxembourg-3",
          "subtitle": "Refonte",
          "group": "bdl",
          "images": [
            {
              "vignette": true,
              "image": "bdl-vignette.png",
              "title": "Page d'accueil du site Banque de Luxembourg"
            }
          ]
        },
        {
          "title": "Banque de Luxembourg",
          "slug": "banque-de-luxembourg-4",
          "subtitle": "Refonte",
          "group": "bdl",
          "images": [
            {
              "vignette": true,
              "image": "bdl-vignette.png",
              "title": "Page d'accueil du site Banque de Luxembourg"
            }
          ]
        }
      ],
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
    return this.state.projects.filter((p)=> p.slug == slug)
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