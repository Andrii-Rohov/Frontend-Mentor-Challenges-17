let menu = document.querySelector("#navbar-wrapper");
let button = document.querySelector("#menu-button");
let closed = document.querySelector("#menu-closed");
let body = document.querySelector("#body");

button.addEventListener('click', function() {
    menu.classList.toggle('hide');
    menu.classList.toggle('show');
    closed.classList.toggle("closed");
    button.classList.toggle("opened");

});
closed.addEventListener('click', function() {
    menu.classList.toggle('hide');
    menu.classList.toggle('show');
    closed.classList.toggle("closed");
    button.classList.toggle("opened");

});

body.addEventListener("click", function(){
    if(event.target != menu && event.target != button) {
        menu.classList.add('hide');
        menu.classList.remove('show');
        closed.classList.remove("closed");
        button.classList.remove("opened");
    }
})