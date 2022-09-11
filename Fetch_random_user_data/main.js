let main = document.querySelector('main')
let input = document.querySelector('input')
let url = 'https://randomuser.me/api/?results=90'
let arr = []
input.addEventListener('keypress', search)
getdata()
async function getdata() {
  const response = await fetch(url)
  const data = await response.json()
  arr = data.results


  arr.forEach(element => {
    let div = document.createElement("div")
    div.classList.add("data_div")
    let img = document.createElement("img")
    img.src = element.picture.thumbnail
    let rightdiv = document.createElement('div')
    rightdiv.classList.add("right_div")
    let name = document.createElement("p")
    name.innerText = element.name.title + ' ' + element.name.first + ' ' + element.name.last
    name.classList.add("name_text")
    let city = document.createElement("p")
    city.innerHTML = element.location.city
    rightdiv.append(name, city)
    div.appendChild(img)
    div.appendChild(rightdiv)
    main.appendChild(div)
  })
}

function search() {
  let value = input.value.toLowerCase()
  arr.forEach(element => {
    console.log(element)
    if (element.name.first.toLowerCase().includes(value) || element.name.last.toLowerCase().includes(value) || element.location.city.toLowerCase().includes(value)) {
      console.log(element)
      main.innerHTML = ''
      let div = document.createElement("div")
      div.classList.add("data_div")
      let img = document.createElement("img")
      img.src = element.picture.thumbnail
      let rightdiv = document.createElement('div')
      rightdiv.classList.add("right_div")
      let name = document.createElement("p")
      name.innerText = element.name.title + ' ' + element.name.first + ' ' + element.name.last
      name.classList.add("name_text")
      let city = document.createElement("p")
      city.innerHTML = element.location.city
      rightdiv.append(name, city)
      div.appendChild(img)
      div.appendChild(rightdiv)
      main.appendChild(div)
    }
  })
}
