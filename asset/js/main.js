document.querySelector("#header-menu").addEventListener("click" , ()=>{
   let mobileMenu= document.querySelector(".deactive");
   mobileMenu.classList.remove("deactive");
   mobileMenu.classList.add("active");
});
document.querySelector(".backbtn").addEventListener("click" , ()=>{
    let mobileMenu=document.querySelector(".header-menu");
    mobileMenu.classList.remove("active");
    mobileMenu.classList.add("deactive")
});



// let ul = document.getElementByID('menu-ul');
// let li = ul.getElementsByClassName('menu-li');
// li.addEventListener("click",()=>{
//    let mobile=document.querySelector(".active");
//    mobile.classList.add("deactive"); 
// })

function menu (){
   let mobile=document.querySelector(".active");
   mobile.classList.add("deactive"); 
}
