let btn = document.querySelector("#menu-btn");
let head = document.querySelector(".header");

btn.onclick = ()=>{
    btn.classList.toggle('fa-times')
    head.classList.toggle('active')
}

let themetoggler = document.querySelector('#theme-toggler');
themetoggler.onclick = ()=>{
    themetoggler.classList.toggle('fa-sun-o')
    if(themetoggler.classList.contains('fa-sun-o')){
        document.body.classList.add('active')
    }
    else{
        document.body.classList.remove('active')
    }
}