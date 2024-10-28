let toggleDisplay = 0;
const menu = document.getElementsByClassName('mobile_expand')[0];
const bars = document.getElementsByClassName('nav_mobile')[0];

bars.addEventListener('click', function(){
    console.log(toggleDisplay);
    if(toggleDisplay % 2 === 0){
        menu.style.maxHeight = "100vh";
        document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
        menu.style.maxHeight = "0px";
        document.body.style.overflow = ''; // Re-enable scroll 
    }
    toggleDisplay++;
});
