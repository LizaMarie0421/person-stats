function updateHeading(ev){
    ev.preventDefault()
    const f =ev.target
    const name = f.personName.value
    const home = f.HomeTown.value
    const age = f.age.value
    const color = f.color.value
   const div= document.querySelector('#stats p')
//   div.innerHTML= "My Name is "+ name+ " and I live in " + home +
//  ". I am"+age+ " years old and my favorite color is "+ color
  div.innerHTML= `
  <p>My Name is ${name} and I live in ${home}. I am ${age} years old and my favorite color is${color}</p>
  `
  //screen interpulation
if (home|| name === "blue"){
    document.querySelector('#stats').style.color="blue"
}
else if (home|| name === "red"){
    document.querySelector('#stats').style.color="red"
}
else if (home|| name === "green"){
    document.querySelector('#stats').style.color="green"
}
else if (home|| name === "yellow"){
    document.querySelector('#stats').style.color="yellow"
}
else if (home|| name === "orange"){
    document.querySelector('#stats').style.color="orange"
}
else if (home|| name === "pink"){
    document.querySelector('#stats').style.color="pink"
}
else{
    document.querySelector('#stats').style.color="black"
}
}
 const personForm = document.querySelector('#person-form')
 personForm.addEventListener('submit', updateHeading)