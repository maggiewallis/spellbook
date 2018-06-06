var spellArray = []
const list = document.querySelector('#spells')
var i =0

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
      const childElements = properties.map(property => {
        return this.renderProperty(property, spell[property])
      })
  
      const item = document.createElement('li')
      item.classList.add('spell')

      // append each <span> to the <li>
      childElements.forEach(el => {
      item.appendChild(el)
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
       
      list.appendChild(item)
      
      spellArray.push(f.spellName.value)




      item.setAttribute('id','item'+i)
      var removeButton = document.createElement('button')
      removeButton.setAttribute('id', 'delete')
      removeButton.appendChild(document.createTextNode("Remove"))
      removeButton.setAttribute('onClick','delete("'+'item'+i+'")')
      item.appendChild(removeButton)
      removeButton.addEventListener("click", function(){
        list.removeChild(item)
        spellArray.pop(f.spellName.value)
        })
       
      
      const remove = document.querySelector('button.restart')
      remove.addEventListener("click", function(){
      try{
        list.removeChild(item)
        spellArray.pop(f.spellName.value)
      } 
      finally{
          return list
      }
      })
      //debugger
  
      f.reset()
      i++
    },
  }

  
  app.init()

 