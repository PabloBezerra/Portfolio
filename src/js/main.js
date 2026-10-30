import data from "../data.json"

import { constructProjects } from "./constructor.js" 
import '../sass/main.scss'

const nav = document.querySelector('nav')
const card = document.querySelector('.card')

const projects = data.projects
const technologies = data.technologies
const contacts = data.contacts

constructProjects(projects, technologies, card)

nav.addEventListener('click', (e) =>{
    if(e.target.tagName === "SPAN"){
        nav.classList == 'active'? nav.classList.remove('active'):nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})




// async function getData() {
//     try{ 
//         const resp = await fetch('/data')
//         if(!resp.ok){
//             throw new Error('Data loading error')
//         }
//         return await resp.json()

//     }catch (error){
//         throw new Error('someting went wrong', {cause: error})
//     }   
// }

// const data = await getData()
