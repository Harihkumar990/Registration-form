$(document).ready(function(){
    $('input:checkbox').click(function() {
        $('input:checkbox').not(this).prop('checked', false);
    });
});
let score =0;
let str1;

let data = document.querySelector(".option")
 data.addEventListener("click" ,(e)=>{
    str1 = e.target.dataset.key;
    
 })
 let submitcontainer = document.querySelector("submit-btn");
 let button = document.querySelectorAll(".submit-btn");
 button[0].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Angela White"){
        score++
    }

    localStorage.setItem("score",score)
})
button[1].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Ava Addams"){
        score++
    }

    localStorage.setItem("score",score)
})
button[2].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Dani Daneal"){
        score++
    }

    localStorage.setItem("score",score)
})
button[3].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Julia Ann"){
        score++
    }
    localStorage.setItem("score",score)
})
button[4].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Lena Paul"){
        score++
    }
    localStorage.setItem("score",score)
})
button[5].addEventListener("click",(e)=>{
    e.preventDefault()
    if(str1==="Mia Malkova"){
        score++
    }
    localStorage.setItem("score",score)
})

let CheckScore = document.querySelector(".successful-btn")

CheckScore.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href="./succesful.html"
})