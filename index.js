const spellArray = []
const app = {
    init: function() {
      const form = document.querySelector('form')
      form.addEventListener('submit', ev => {
        this.handleSubmit(ev)
      })
    },
  
    renderProperty: function(name, value) {
      const el = document.createElement('span')
      el.textContent = value
      el.classList.add(name)
      return el
    },
  
    renderItem: function(spell) {
      // ['name', 'level']
      properties = Object.keys(spell)
  
      // collect an array of renderProperty's return values
      // (an array of <span> elements)
      const fullArray = []
      const childElements = properties.map(property => {
        return this.renderProperty(property, spell[property])
      fullArray.push(childElements)
      })
  
      const item = document.createElement('li')
      item.classList.add('spell')
      const array = []
      array.push('spell')

      // append each <span> to the <li>
      childElements.forEach(el => {
        item.appendChild(el)
        //array.push(el)
      })
  
      return item
    },
  
    handleSubmit: function(ev) {
      ev.preventDefault()
  
      const f = ev.target
  
      const spell = {
        name: f.spellName.value,
        level: f.level.value,
      }
  
      const item = this.renderItem(spell)
      const list = document.querySelector('#spells')
      list.appendChild(item)
      spellArray.push(f.spellName.value)
      debugger
  
      f.reset()
    },
  }
  
  app.init()