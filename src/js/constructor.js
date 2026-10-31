export function constructProjects(data, tec, dom){
    data.forEach(element => {
        const li = create('li')
        const img = create('img')
        const divTags = create('div')
        const h3 = create('h3')
        const p = create('p')
        const buttonVisit = create('button')
        const aVisit = create('a')
        const buttonCode = create('button')
        const aCode = create('a')

        li.id = 'card'
        img.src = element.images
        divTags.id = 'tags'

        element.tags.forEach(e =>{
            const img = create('img')
            img.src = `${tec[e].ico}`
            img.alt = `${e}`
            divTags.appendChild(img)
        })

        h3.innerHTML = element.name
        p.innerHTML  = element.info
        aVisit.href = element.url_visit
        aCode.href = element.url_code
        aVisit.innerHTML = 'Visitar'
        aVisit.target = '_blank'
        aCode.innerHTML = 'Ver Código'
        aCode.target = '_blank'
        
        buttonVisit.appendChild(aVisit)
        buttonVisit.id = 'btnVisit'
        buttonCode.appendChild(aCode)
        buttonCode.id = 'btnCode'
        
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(divTags)
        li.appendChild(buttonVisit)
        li.appendChild(buttonCode)

        dom.appendChild(li)
    });
}

function create(dom){
    return document.createElement(dom)
}