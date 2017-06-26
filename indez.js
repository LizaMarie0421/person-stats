function updateHeading(ev){
     ev.preventDefault()
     const f =ev.target
     const name = f.personName.value
   const heading= document.querySelector('h1')
   heading.innerHTML= "Person Stats"

   const home = f.HomeTown.value
   const div= document.querySelector('#div')
   div.innerHTML= "My Name is "+ name+ " and I live in " + home
 
if (home|| name === "blue"){
    document.querySelector('#div').style.color="blue"
}
else if (home|| name === "red"){
    document.querySelector('#div').style.color="red"
}
else if (home|| name === "green"){
    document.querySelector('#div').style.color="green"
}
else if (home|| name === "yellow"){
    document.querySelector('#div').style.color="yellow"
}
else if (home|| name === "orange"){
    document.querySelector('#div').style.color="orange"
}
else if (home|| name === "pink"){
    document.querySelector('#div').style.color="pink"
}
else{
    document.querySelector('#div').style.color="black"
}
}
 const personForm = document.querySelector('#person-form')
 personForm.addEventListener('submit', updateHeading)