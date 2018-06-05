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
//__________________________________
/* MY ATTEMPT AT MAKING THE FORM THING WORK

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

const form = document.querySelector('form')
//form.header.focus() (hard way to focus it when page is first loaded)

function submitForm(ev){
    // add 'debugger' which will help with troubleshooting,
    //stops it when it gets the error
    ev.preventDefault()
    const f = ev.target
    const header = f.header.value
    document.querySelector('#spells').textContent += ' ' + header

    f.header.value = ' ' //erases the text in the form each time it is submitted
    
}
  
//button.addEventListener('click', changeHeading)



form.addEventListener('submit', submitForm)






