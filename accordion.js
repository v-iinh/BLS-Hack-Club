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