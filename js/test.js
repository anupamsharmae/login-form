// loaders
const loader1 = document.getElementById('loader1')
const loader2 = document.getElementById('loader2')

// login section
const username = document.getElementById('username')
const user_label = document.getElementById('user')
const user_caption = document.getElementById('user_caption')

const password = document.getElementById('password')
const password_label= document.getElementById('password_label')
const password_caption = document.getElementById('password_caption')

// login-SignUp links
const login_link = document.getElementById('login_link')
const login_container = document.getElementById('login_container')

const signup_link = document.getElementById('signup_link')
const signup_container = document.getElementById('signup_container')

// signUp section
const fname = document.getElementById('fname')
const fname_label = document.getElementById('fname_label')
const name_caption = document.getElementById('name_caption')

const r_username = document.getElementById('r_username')
const r_username_label = document.getElementById('r_username_label')
const r_user_caption = document.getElementById('r_user_caption')

const r_password = document.getElementById('r_password')
const r_password_label = document.getElementById('r_password_label')
const r_password_caption = document.getElementById('r_password_caption')

const c_password = document.getElementById('c_password')
const c_password_label = document.getElementById('c_password_label')
const confirm_caption = document.getElementById('confirm_caption')

// buttons
const ok = document.getElementById('ok')
const submit = document.getElementById('submit')
const register = document.getElementById('register')
const popup = document.getElementById('popup')
const popup_message = document.getElementById('popup_message')

// Regex for Email & Password
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/


// login email validator function
function emailValidate(e){
    if(username.value!=""){
        if(username.value.match(emailPattern)){
            username.classList.remove('invalid')
            user_label.classList.remove('invalid_text')
            user_caption.textContent = ""
        }
        else{
            username.classList.add('invalid')
            user_label.classList.add('hastext','invalid_text')
            user_caption.textContent = "Enter a valid email!"
        }

    }
    else{
        user_label.classList.remove('hastext','invalid_text')
        username.classList.remove('invalid')
        user_caption.textContent = ""
    }
}

//login password validator function
function passwordValidate(){
    if(password.value!=""){
        if(password.value.match(passwordPattern)){
            password.classList.remove('invalid')
            password_label.classList.remove('invalid_text')
            password_caption.textContent = ""
        }
        else{
            password.classList.add('invalid')
            password_label.classList.add('hastext','invalid_text')
            password_caption.textContent = "Enter a valid format!" 
        }
    
    }
    else{
        password_label.classList.remove('hastext','invalid_text')
        password.classList.remove('invalid')
        password_caption.textContent = ""
    }
}

//login container section
login_link.addEventListener('click',()=>{
    if(signup_container.classList.contains('active')){
        loader2.classList.add('bubble')
        loader1.classList.remove('bubble')
        
        setTimeout(()=>{
            signup_container.classList.remove('active')
            login_container.classList.add('active')
        },1500)
    }
})

//SignUp container section
signup_link.addEventListener('click', ()=>{
    if(login_container.classList.contains('active')){
        loader2.classList.remove('bubble')
        loader1.classList.add('bubble')

        setTimeout(()=>{
            login_container.classList.remove('active')
            signup_container.classList.add('active')
        },1500)

        
    }
})

// SignUp email validator
function emailValidate_Signup(){
    if(r_username.value!=""){
        if(r_username.value.match(emailPattern)){
            r_username.classList.remove('invalid')
            r_username_label.classList.remove('invalid_text')
            r_user_caption.textContent = ""
        }
        else{
            r_username.classList.add('invalid')
            r_username_label.classList.add('hastext','invalid_text')
            r_user_caption.textContent = "Enter a valid email!"
        }

    }
    else{
        r_username_label.classList.remove('hastext','invalid_text')
        r_username.classList.remove('invalid')
        r_user_caption.textContent = ""
    }
}

// SignUp password validator
function passwordValidate_Signup(){
    if(r_password.value!=""){
        if(r_password.value.match(passwordPattern)){
            r_password_label.classList.add('hastext')
            r_password.classList.remove('invalid')
            r_password_label.classList.remove('invalid_text')
            r_password_caption.textContent = ""
        }
        else{
            r_password.classList.add('invalid')
            r_password_label.classList.add('hastext','invalid_text')
            r_password_caption.textContent = "Enter a valid format!" 
        }
    
    }
    else{
        r_password_label.classList.remove('hastext','invalid_text')
        r_password.classList.remove('invalid')
        r_password_caption.textContent = ""
    }
}

// Fullname function
function fullname(){
    if(fname.value!=""){
        fname_label.classList.add('hastext')
    }
    else{
        fname_label.classList.remove('hastext')
    }
}

// confirm password function
function confirm_password(){
        if(c_password.value!=""){
            if(c_password.value != r_password.value){
                c_password.classList.add('invalid')
                c_password_label.classList.add('hastext','invalid_text')
                confirm_caption.textContent = "Does not match!"
            
            }
            else{
                c_password_label.classList.add('hastext')
                c_password_label.classList.remove('invalid_text')
                c_password.classList.remove('invalid')
                confirm_caption.textContent = ""
            }
            
       }
       else{
            c_password_label.classList.remove('hastext', 'invalid_text')
            c_password.classList.remove('invalid')
            confirm_caption.textContent = ""
       }
}

function popupMenu(){
    if(fname.value!="" && r_username.value!="" && r_password.value!="" &&  c_password.value!=""){
        popup_message.textContent = "SignUp Successful!"
        popup.classList.add('active')
    }
    else if(username.value!="" && password.value!=""){
        popup_message.textContent = "Login Successful!"
        popup.classList.add('active')
    }
    else{
        popup.classList.remove('active')
    }
}

function closePopup(){
    popup.classList.remove('active')
}

//signUp credentail events
fname.addEventListener("keypress",fullname)
fname.addEventListener("focusout",fullname)
fname.addEventListener("touchstart",fullname)

r_username.addEventListener("keypress",emailValidate_Signup)
r_username.addEventListener("focusout",emailValidate_Signup)
r_username.addEventListener("touchstart",emailValidate_Signup)

//r_password.addEventListener("keypress",passwordValidate_Signup)
r_password.addEventListener("focusout",passwordValidate_Signup)
r_password.addEventListener("touchstart",passwordValidate_Signup)

c_password.addEventListener("focusout",confirm_password)

register.addEventListener('click',popupMenu)
//register.addEventListener('touchstart',popup)

ok.addEventListener('click',closePopup)
ok.addEventListener('touchstart',closePopup)
// login credential events
username.addEventListener("keypress",emailValidate)
username.addEventListener("focusout",emailValidate)
username.addEventListener("touchstart",emailValidate)

password.addEventListener("keypress",passwordValidate)
password.addEventListener("focusout",passwordValidate)
password.addEventListener("touchstart",passwordValidate)

submit.addEventListener('click',popupMenu)

//submit.addEventListener('click',popup)

// window onload events
window.onload = setTimeout(()=>{
    login_container.classList.remove('active')
    signup_container.classList.add('active')
},1800)
