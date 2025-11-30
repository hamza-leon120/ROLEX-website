let change = document.querySelector('.fa-regular.fa-moon')
if(window.localStorage.getItem("class")){
    document.documentElement.classList.toggle(window.localStorage.getItem("class"))
    change.setAttribute('class','fa-regular fa-sun')
}
change.addEventListener('click',function(){
    document.documentElement.classList.toggle('dark')
    if(this.className === "fa-regular fa-moon"){
        this.setAttribute('class','fa-regular fa-sun')
        window.localStorage.setItem("class","dark")
    }else {
        this.setAttribute('class','fa-regular fa-moon') 
        window.localStorage.removeItem("class")
    }
})

let sideBar = document.querySelector(".side-bar")
let icon = document.querySelectorAll('header i') 
let bar = document.querySelector('.fa-bars')
bar.addEventListener('click',function(){
    if(window.getComputedStyle(sideBar).height === '0px') {
        sideBar.style.cssText = "height: 360px; border-bottom: 1px solid var(--color-one)"
        icon.forEach(function(ele){
            ele.style.cssText = "color: var(--color-two)"
        })
        this.className = "fa-solid fa-xmark"
    }else {
        sideBar.style.cssText = "height: 0px"
        icon.forEach(function(ele){
            ele.style.cssText = "color: var(--color-six)"
        })
        this.className = "fa-solid fa-bars"
    }
})

let up = document.querySelector(".up-button")
window.addEventListener('scroll',function(){
    sideBar.style.cssText = "height: 0px"
    icon.forEach(function(ele){
            ele.style.cssText = "color: var(--color-six)"
    })
    bar.className = "fa-solid fa-bars"
    if(this.scrollY >= 500) {
        up.style.cssText = "position: fixed ;"
    }else {
        up.style.cssText = "display: none ;"
    }
})
up.addEventListener('click',function(){
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
})

let allCard = document.querySelectorAll(".card")
allCard.forEach(function(i){
    i.addEventListener("mousemove" , function(){
        allCard.forEach(function(it){
            it.className = "card"
        })
        this.className = "card active"
    })
})

let allAtime = document.querySelectorAll(".item")
allAtime.forEach(function(i){
    i.addEventListener("mousemove" , function(){
        allAtime.forEach(function(it){
            it.className = "item"
        })
        this.className = "item active"
    })
})

let allItem = document.querySelectorAll(".testimonial .first")
let right = document.querySelector(".right")
let left = document.querySelector(".left")
let num = 0
right.addEventListener('click',function(){
    num++
    if(num < 3) {
        allItem.forEach(element => {
            element.style.cssText = `transform: translateX(${-378 * num}px)`
        });
    }else if (num === 3) {
        num = 0
        allItem.forEach(element => {
            element.style.cssText = `transform: translateX(0px)`
        });
    }
})
left.addEventListener('click',function(){
    num--
    if(num < 0){
        num = 2
        allItem.forEach(element => {
            element.style.cssText = `transform: translateX(${-378 * num}px)`
        });
    }else {
        allItem.forEach(element => {
            element.style.cssText = `transform: translateX(${-378 * num}px)`
        });
    }
})

