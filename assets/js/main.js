/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav_menu'),
navtoggle =document.getElementById('nav_toggle'),
navclose =document.getElementById('nav_close')

if(navtoggle){
    navtoggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu')
    })
}
if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav_link')

const linkaction = ()=>{
    const navmenu = document.getElementById('nav_menu')

    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader =()=>{
    const header = document.getElementById('heder')

    this.scrollY >=50 ? header.classList.add('scroll-header')
    :header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home_shadow', 1.5 , {opacity : 0 , y:-300 , delay:.2})
gsap.from('.home_points', 1.5 , {opacity : 0 , y:-300 , delay:.4})
gsap.from('.home_grass', 1.5 , {opacity : 0 , y: 300 , delay:.2, ease : 'elastic.out(1 .5)'})
gsap.from('.home_pumpkin', 1.5 , {opacity : 0 , y: -300 , delay:.6, ease : 'bounce.out'})
gsap.from('.home_stone', 1.5 , {opacity : 0 , y: 300 , delay:.8, ease : 'elastic.out(1 .5)'})
gsap.from('.home_moon', 1.5 , {opacity : 0 , y: 300 , delay:1.5, ease : 'elastic.out(1 .5)'})
gsap.from('.home_titles', 1.5 , {opacity : 0 , y: -300 , delay:1.5, ease : 'elastic.out(1 .5)'})
gsap.from('.home_tree', 1.5 , {opacity : 0 , y: 300 , delay:2, ease : 'elastic.out(1 .5)'})
gsap.from('.home_data', 1.5 , {opacity : 0 , y: 200 , delay:2, ease : 'elastic.out(1 .5)'})
