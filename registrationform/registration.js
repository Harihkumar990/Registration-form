let parent = document.querySelector(".form-container");
let button = document.querySelector(".submit-btn");
let errors = document.querySelectorAll(".error");
let firstname,lastname,email,password =false;
let empty = document.querySelectorAll(".empty")
let showbutton = document.querySelectorAll(".material-symbols-outlined");
let ptarget,fntarget,lntarget,entarget;
for(var error of errors){
    error.classList.add("display-error")
}
for(let emptys of empty){
    emptys.classList.add("display-error")
}
let fname,lname,ename,pname;
parent.addEventListener("keyup",(e)=>{
    let str= e.target.dataset.key;
    switch (str){
        case "firstname":
            firstname=e.target.value;
            fntarget=e.target
            break;
        case "lastname":
            lastname=e.target.value;
            lntarget=e.target
            break;
        case "email":
            email=e.target.value;
            entarget=e.target
            break;
        case "password":
            password=e.target.value
            ptarget = e.target
            break;
    }
    
})
let checkalphabet =  /^[a-z]+$/i;
let checkemail = "@gmail.com";
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(firstname){
        empty[0].classList.add("display-error")
        if(checkalphabet.test(firstname)){
            errors[0].classList.add("display-error");
            localStorage.setItem("firstname",firstname);
            fname=true;
        }
        else{
            errors[0].classList.remove("display-error")
        }
    }
    else{
        empty[0].classList.remove("display-error");
    }
    if(lastname){
        empty[1].classList.add("display-error")
        if(checkalphabet.test(lastname)){
            errors[1].classList.add("display-error");
            localStorage.setItem("lastname",lastname);
            lname=true;
        }
        else{
            errors[1].classList.remove("display-error")
        }
    }
    else{
        empty[1].classList.remove("display-error")
    }
    if(email){
        empty[2].classList.add("display-error")
        if(email.includes(checkemail)){
            errors[2].classList.add("display-error")
            localStorage.setItem("email",email)
            ename=true;
        }
        else{
            errors[2].classList.remove("display-error");
        }
    }
    else{
        empty[2].classList.remove("display-error")
    }
    if(password){
        errors[3].classList.add("display-error")
        if(pwdRegex.test(password)){
            errors[3].classList.add("display-error");
            localStorage.setItem("password",password);
            pname=true;
        }
        else{
            errors[3].classList.remove("display-error");
        }
        
    }
    else{
        errors[3].classList.remove("display-error");
    }
    if(fname && lname && pname && ename === true){
        window.location.href="./submit.html";
        entarget.value=fntarget.value=lntarget.value=ptarget.value=""
    }
})
showbutton[0].addEventListener("click",(e)=>{
    e.preventDefault()
    ptarget.setAttribute("type","text")
})
showbutton[1].addEventListener("click",(e)=>{
    e.preventDefault()
    ptarget.setAttribute("type","password")
})