//Burada navbar aşşağı kaydığında çalışan bir tane funciton yazdım
window.addEventListener("scroll",function () {
    let navbarDom = document.querySelector(".navbar");//ilk gelen navbar classını alır
    let logoDom = this.document.getElementById("logo");//burada logoyuda eklicez
    let includesDom = this.document.getElementById("includes");//ustten margin
    let titleDom = this.document.querySelectorAll("#carousel-text h1")
    if (window.innerWidth > 480) {
        if (this.window.scrollY > 100) {
            navbarDom.classList.add("scrolled");
            logoDom.style.display = "block";
            
        } else {
            navbarDom.classList.remove("scrolled");
            logoDom.style.display = "none";
        }
    }else{
        includesDom.style.marginTop="150px";
        logoDom.style.display = "block";
        titleDom.style.display="none";
    }
    

});

