function updateHeading(ev){
    ev.preventDefault()
    const f =ev.target
    const name = f.personName.value
    const home = f.HomeTown.value
    const age = f.age.value
    const color = f.color.value

   const div= document.querySelector('#stats')
/*   div.innerHTML= "My Name is "+ name+ " and I live in " + home +
  ". I am"+age+ " years old and my favorite color is "+ color*/
  div.innerHTML= `
  <p style="color:${color}">
  My Name is ${name} and I live in ${home}.
  I am ${age} years old and my favorite color is${color}</p>
 `
  //screen interpulation
/*const p= document.createElement('p')
p.textContent =`${name}, age${age}` 
//doesnt exist on page yet until append
stats.appendChild(p)*/

}
 const personForm = document.querySelector('#person-form')
 personForm.addEventListener('submit', updateHeading)