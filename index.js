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

/*

//const form = document.querySelector('form')
const submit = document.querySelector('submit')



function formHeading(){
    const heading2 = document.querySelector('h2')
    alert(form.textContent)
    heading2.textContent = form.textContent
}

submit.onclick = formHeading

button.addEventListener('click', changeHeading)
*/

  //alert(heading) - not defined
  
  //sayContents()
//------------------------------------------------------------------
// IN CLASS NOTES - DAY 2 (NOT MY CODE)
const button = document.querySelector('button')

function changeHeadingClass(ev){
// add 'debugger' which will help with troubleshooting, stops it when it gets the error
    ev.preventDefault()
    document.querySelector('h1#theSeondOne').textContent = 'Ye Olde Spellbook'
      
}
  
button.addEventListener('click', changeHeading)

const form = document.querySelector('form')

form.addEventListener('submit', changeHeadingClass)






