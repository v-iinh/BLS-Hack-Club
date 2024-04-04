var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
            for (let j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            if(j!=i){
                acc[j].nextElementSibling.style.maxHeight = null;
            }
        }

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            this.classList.toggle("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//code for revealing 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -5;  //change how close it takes for uh the elements to be shown
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("on");
        } else {
            reveals[i].classList.remove("on");
        }
    }
}
  
window.addEventListener("scroll", reveal);