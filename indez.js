function handleSubmit(ev){
    ev.preventDefault()
    const f =ev.target
    
    const name = f.personName.value
    const home = f.HomeTown.value
    const age = f.age.value
    const color = f.color.value

    const list= document.createElement('ul')

    const nameItem= document.createElement('li')
    nameItem.textContent =`Name: ${name}`
    list.appendChild(nameItem)

    const ageItem=document.createElement('li')
    ageItem.textContent=`Age: ${age}`
    list.appendChild(ageItem)

    const colorItem=document.createElement('li')
    colorItem.textContent=`Color:`

    const colorDiv=document.createElement('li')
    colorDiv.style.backgroundColor= color
    colorDiv.style.width='6rem'
    colorDiv.style.widht='3rem'
    colorItem.appendChild(colorDiv)

    const stats=document.querySelector('#stats')
    stats.appendChild(list)
   //const div= document.querySelector('#stats')
/*   div.innerHTML= "My Name is "+ name+ " and I live in " + home +
  ". I am"+age+ " years old and my favorite color is "+ color
  div.innerHTML= `
  <p style="color:${color}">
  My Name is ${name} and I live in ${home}.
  I am ${age} years old and my favorite color is${color}</p>
 `
  //screen interpulation
const p= document.createElement('p')
p.textContent =`${name}, age${age}` 
//doesnt exist on page yet until append
stats.appendChild(p)*/

}
 const personForm = document.querySelector('#person-form')
 personForm.addEventListener('submit', handleSubmit)