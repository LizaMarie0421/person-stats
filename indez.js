function handleSubmit(ev){
    ev.preventDefault()
    const f =ev.target
    
    const name = f.personName.value
    const age = f.age.value
    const color = f.color.value

    const list= document.createElement('ul')
    const stats=document.querySelector('#stats')
    
    stats.appendChild(list)
    stats.appendChild(renderListItem(name, age, color))
   stats.appendChild(renderColor(color))
}
function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor= color
    colorDiv.style.width='6rem'
    colorDiv.style.height='3rem'
   return colorDiv
}
function renderListItem(name, age, color){
    const list= document.createElement('ul')
    
    const nameItem= document.createElement('li')
    nameItem.textContent =`Name: ${name}`
    list.appendChild(nameItem)

    const ageItem=document.createElement('li')
    ageItem.textContent=`Age: ${age}`
    list.appendChild(ageItem)

   const colorItem=document.createElement('li')
   colorItem.textContent=`Color:`
   list.appendChild(colorItem)
   return list  
}
function renderList(name, age, color){
  renderListItem()

}
 const personForm = document.querySelector('#person-form')
 personForm.addEventListener('submit', handleSubmit)