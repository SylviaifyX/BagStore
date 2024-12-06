//nav on scroll section//
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navContent-main');
    if (window.scrollY > 50) {
        nav.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.9) 90%)';
    } else {
        nav.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 8%, rgba(0, 0, 0, 0.2) 80%)';
    }
});

// NavBar Section //
const hamburgerToggleIcon = document.querySelector(".hamburger");
const NavContent = document.querySelector(".nav-contents")
hamburgerToggleIcon.addEventListener("click", () =>{
    // alert("hello")
    // console.log(NavContent.classList)
    if(NavContent.classList.contains("active")){
        NavContent.classList.remove("active")
    }else{
        NavContent.classList.add("active")
    }
})