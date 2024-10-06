//change navbar styles on scroll

window.addEventListener('scroll' ,() =>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0 )
})

//show/hide FAQ answers

const faqs=  document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon =faq.querySelector('.faq__icon i');
        if(icon.className === 'add'){
            icon.className ="remove";    
            
        }
        else{
            icon.className ="add" ;
        }
    })
})


//show nav menu
const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display ="none";
})

//hide nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}
closeBtn.addEventListener('click', closeNav)



function goToHomePage() {
    window.location.href = "index.html"; 
}


function goToHomePage() {
    window.location.href = "index.html";
}


