// click to open login 
const loginBtn = document.querySelector('.header__navbar-btn')
const modal=document.querySelector('.modal')
const modalclose = document.querySelector('.js-modal-close')
const modalContainer=document.querySelector('.js-modal-container')
const headerScroll = document.querySelector('.header__navbar')
function showLogin() {
    modal.classList.add('open')
}
function hideLogin() {
    modal.classList.remove('open')   
}
// loginBtn.addEventListener('click',showLogin)
modalclose.addEventListener('click',hideLogin)
modal.addEventListener('click',hideLogin)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})


// scroll button on mobile app
var myBtn = document.querySelector('.button-scroll-icon')

function scrollbtn(){
    var widthScreen =window.screen.width
    if  (widthScreen < 720 ){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display ="block"
        }else{
            myBtn.style.display = "none"
        }
    }else{}
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// scroll behavior
const intro = document.querySelector('.content-section');
const halving = document.querySelector('.content-section-2');
const market =document.querySelector('.content-section-3');
const btnScrollOne = document.querySelector('.js-btn-1');
const btnScrollTwo = document.querySelector('.js-btn-2');
const btnScrollThree = document.querySelector('.js-btn-3');
const investor = document.querySelector('.investor-list')
const technology = document.querySelector('.technology-footer')

function scrollLeft(){
    intro.classList.add('goleft')
    setTimeout(function(){
        intro.classList.remove('goleft')
    },1500)
  

}
function scrollRight(){
    halving.classList.add('goright')
    setTimeout(function(){
        halving.classList.remove('goright')
    },1000)
}
function scrollLeft2(){
    market.classList.add('goleft')
    setTimeout(function(){
        market.classList.remove('goleft')
    },1500)

}
btnScrollOne.addEventListener('click',scrollLeft)
btnScrollTwo.addEventListener('click',scrollRight)
btnScrollThree.addEventListener('click',scrollLeft2)

var animationEle = document.querySelectorAll('.show-on-scroll')

function toggleAnimationEleInWindow(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight
    
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }else{
        // element.classList.remove('start')

    }
}

function checkAnimation(){
    animationEle.forEach(el=>{
        toggleAnimationEleInWindow(el)
    })

}
window.onscroll =function(){
    checkAnimation()
    scrollbtn()

}  

const logOut = document.querySelector('.js-log-out')
const userInfo= document.querySelector('.js-user-logout')
logOut.onclick=function AddRemoveClass(){
    loginBtn.classList.add('non-login')
    userInfo.classList.add('log-out')
}

const signinBtn = document.querySelector('.js-login-btn')
const AniBtt = document.querySelector('.top-to-bottom')
signinBtn.onclick = function(){
    modal.classList.remove('open') 
    loginBtn.classList.remove('non-login')
    userInfo.classList.remove('log-out') 
}

