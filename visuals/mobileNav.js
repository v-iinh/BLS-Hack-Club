let toggleDisplay = 0;
const menu = document.getElementsByClassName('mobile_expand')[0];
const bars = document.getElementsByClassName('nav_mobile')[0];

bars.addEventListener('click', function(){
    if(toggleDisplay % 2 === 0){
        menu.style.maxHeight = "100vh";
        document.body.style.overflow = 'hidden'; // Disable scroll
        bars.style.color = "#ec3750";
        bars.firstElementChild.classList.add("fa-x");
        bars.firstElementChild.classList.remove("fa-bars");
    } else {
        menu.style.maxHeight = "0px";
        document.body.style.overflow = ''; // Re-enable scroll 
        bars.style.color = "#FFF";
        bars.firstElementChild.classList.add("fa-bars");
        bars.firstElementChild.classList.remove("fa-x");
    }
    toggleDisplay++;
});



let wasAbove1350 = window.innerWidth > 1350;

function checkWidthAndRefresh() {
    const isAbove1350 = window.innerWidth > 1350;

    if (isAbove1350 !== wasAbove1350) {
        menu.style.maxHeight = "0px";
        document.body.style.overflow = ''; // Re-enable scroll 
        toggleDisplay = 0;
    }

    wasAbove1350 = isAbove1350;
}

// Check when the window resizes
window.addEventListener('resize', checkWidthAndRefresh);