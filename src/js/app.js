/*menu burger*/
const btnMobile = document.querySelector('.hamburger');
const showMenuMobile = document.querySelector('.nav-mobile')

btnMobile.addEventListener('click', (e)=>{
    e.preventDefault();
    showMenuMobile.classList.toggle('active')
    if(showMenuMobile.classList.contains('active')){
        document.querySelector('.hamburger img').src = './src/images/close-white.png'
    } else {
        document.querySelector('.hamburger img').src = './src/images/menu-white.png'
    }
    
})
/*accordion*/
let accBox = document.querySelectorAll('.acc-box');
let symbol = document.querySelector('.symbol');

accBox.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        accBox.forEach(eachItem =>{
            eachItem.classList.remove('active-acc')
        })
        item.classList.add('active-acc')
    })
    

})

/*contato*/
/*open*/
const btnCont = document.querySelectorAll('.btn-cont')
btnCont.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let asideCont = document.querySelector('aside')
        asideCont.style.display = 'flex'
    })
})
/*close*/
document.querySelector('.close-contact').addEventListener('click',()=>{
    let asideCont = document.querySelector('aside')
    asideCont.style.display = "none"
})

