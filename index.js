console.log('testing')

const button = document.querySelector('button')
function changeHeading() {
    const heading = document.querySelector('h1')
    heading.textContent = 'I <3 JavaScript'
  }
  
  button.onclick = changeHeading
  
function secondHeading(){
    const heading2 = document.querySelector('h2')
    heading2.textContent = 'New Heading 2'
}

button.onclick = secondHeading


const form = document.querySelector('form')
//form.header.focus() (hard way to focus it when page is first loaded)

function submitForm(ev){
    // add 'debugger' which will help with troubleshooting,
    //stops it when it gets the error
    ev.preventDefault()
    const f = ev.target
    const spellName = f.spellName.value
    document.querySelector('#spells').innerHTML += `<li>${spellName}</li>`

    f.spellName.value = ' ' //erases the text in the form each time it is submitted
    
}

form.addEventListener('submit', submitForm)






