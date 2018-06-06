console.log('testing')



const form = document.querySelector('form')
//form.header.focus() (hard way to focus it when page is first loaded)

function submitSpell(ev){
    // add 'debugger' which will help with troubleshooting,
    //stops it when it gets the error
    ev.preventDefault()
    const f = ev.target
    const spellName = f.spellName.value
    const sp = document.createElement("LI");
    const text = document.createTextNode(spellName);
    sp.appendChild(text);                            
    document.getElementById("spells").appendChild(sp);  
    //document.querySelector('#spells').innerHTML += `<li>${spellName}</li>`

    f.spellName.value = ' ' //erases the text in the form each time it is submitted
    
}

form.addEventListener('submit', submitSpell)


function submitIngredient(event){
    event.preventDefault()
    const g = event.target
    const ingredient = g.ingredients.value
    const node = document.createElement("UL");
    const textnode = document.createTextNode(ingredient);
    node.appendChild(textnode);                             
    document.getElementById("spells").appendChild(node);     
    //document.querySelector('#spells').innerHTML += `<ul>${ingredient}</ul>`

    g.ingredients.value = ' ' //erases the text in the form each time it is submitted
    
}

form.addEventListener('submit', submitIngredient)




