window.onload = function(){
    let ele =document.getElementById("burger-container");
    ele.addEventListener("click", function(){
        ele.classList.toggle("open");
    });
}