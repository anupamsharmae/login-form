const username = document.getElementById('username')
const user_label = document.getElementById('user')
const user_caption = document.getElementById('user_caption')
const password = document.getElementById('password')
const password_label= document.getElementById('password_label')
const password_caption = document.getElementById('password_caption')


const login_link = document.getElementById('login_link')
const login_container = document.getElementById('login_container')
const signup_link = document.getElementById('signup_link')
const signup_container = document.getElementById('signup_container')

const loader1 = document.getElementById('loader1')
const loader2 = document.getElementById('loader2')

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/



/*---------------login--------------------------------------------------*/

username.addEventListener("keypress", (e) =>{
   
   if(!username.value.match(emailPattern))
   {
        username.addEventListener("focusout",()=>{
            if(username.value!="")
            {
                if(username.value.match(emailPattern))
                {
                    username.classList.remove('invalid')
                    user_label.classList.remove('invalid_text')
                    user_caption.textContent = ""
                }
                else{
                    user_label.classList.add('hastext','invalid_text')
                    user_caption.textContent = "Enter a valid email!"
                }  
            }
            else{
                user_label.classList.remove('hastext','invalid_text')
                username.classList.remove('invalid')
                user_caption.textContent = ""
            }
        })

        username.classList.add('invalid')
        user_label.classList.add('hastext','invalid_text')
    } 
   else{
        username.classList.remove('invalid')
        user_label.classList.remove('invalid_text')
        user_caption.textContent = ""
    }
})


password.addEventListener("keypress", (e) =>{
   
    if(!password.value.match(passwordPattern))
    {
        password.addEventListener("focusout",()=>{
             if(password.value!="")
             {
                if(password.value.match(passwordPattern))
                {
                    password.classList.remove('invalid')
                    password_label.classList.remove('invalid_text')
                    password_caption.textContent = ""
                }
                else{
                    password_label.classList.add('hastext','invalid_text')
                    password_caption.textContent = "Invalid Format!"
                }  
             }
             else{
                password_label.classList.remove('hastext','invalid_text')
                password.classList.remove('invalid')
                password_caption.textContent = ""
             }
         })
 
        password.classList.add('invalid')
        password_label.classList.add('hastext','invalid_text')
     } 
    else{
        password.classList.remove('invalid')
        password_label.classList.remove('invalid_text')
        password_caption.textContent = ""
     }
 })
 
 

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

/*-----------------------------------------------------------------------*/
/*---------------Signup--------------------------------------------------*/

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

fname.addEventListener("keypress",()=>{
    if(fname.value!=""){
        fname_label.classList.add('hastext')
    }
    else{
        fname_label.classList.remove('hastext')
    }
})

c_password.addEventListener("focusout", ()=>{
   if(c_password.value!=""){
        
        if(c_password.value != r_password.value){
            c_password.classList.add('invalid')
            c_password_label.classList.add('hastext','invalid_text')
            confirm_caption.textContent = "Does not match!"
        
        }
        else{
            c_password_label.classList.remove('invalid_text')
            c_password.classList.remove('invalid')
            confirm_caption.textContent = ""
        }
   }
   else{
        c_password_label.classList.remove('hastext')
   }
    
   
   
})


r_password.addEventListener("keypress", (e) =>{
   
    if(!r_password.value.match(passwordPattern))
    {
        r_password.addEventListener("focusout",()=>{
             if(r_password.value!="")
             {
                if(r_password.value.match(passwordPattern))
                {
                    r_password.classList.remove('invalid')
                    r_password_label.classList.remove('invalid_text')
                    r_password_caption.textContent = ""
                }
                else{
                    r_password_label.classList.add('hastext','invalid_text')
                    r_password_caption.textContent = "Invalid Format!"
                }  
             }
             else{
                r_password_label.classList.remove('hastext','invalid_text')
                r_password.classList.remove('invalid')
                r_password_caption.textContent = ""
             }
         })
 
         r_password.classList.add('invalid')
         r_password_label.classList.add('hastext','invalid_text')
     } 
    else{
        r_password.classList.remove('invalid')
        r_password_label.classList.remove('invalid_text')
        r_password_caption.textContent = ""
     }
 })
 



r_username.addEventListener("keypress", (e) =>{
   
    if(!r_username.value.match(emailPattern))
    {
        r_username.addEventListener("focusout",()=>{
             if(r_username.value!="")
             {
                 if(r_username.value.match(emailPattern))
                 {
                    r_username.classList.remove('invalid')
                    r_username_label.classList.remove('invalid_text')
                    r_user_caption.textContent = ""
                 }
                 else{
                    r_username_label.classList.add('hastext','invalid_text')
                    r_user_caption.textContent = "Enter a valid email!"
                 }  
             }
             else{
                r_username_label.classList.remove('hastext','invalid_text')
                 r_username.classList.remove('invalid')
                 r_user_caption.textContent = ""
             }
         })
 
         r_username.classList.add('invalid')
         r_username_label.classList.add('hastext','invalid_text')
     } 
    else{
        r_username.classList.remove('invalid')
        r_username_label.classList.remove('invalid_text')
        r_user_caption.textContent = ""
     }
 })
/*-----------------------------------------------------------------------*/


window.onload = setTimeout(()=>{
    login_container.classList.remove('active')
    signup_container.classList.add('active')
},1800)
