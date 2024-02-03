const loginForm = document.forms['login-form'];
const registerForm = document.forms['register-form'];

loginForm?.addEventListener('submit',async(event)=>{
    try{
        event.preventDefault()
        const body = Object.entries(new FormData(loginForm))
        const response = fetch('/api/login',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const data = await response;
        if(data.ok){
            alert('Succesful!')
            window.location.href= '/'
        } else{
            alert('Unseccesful!')
        }
    } catch(err){
        console.log(err.message)
    }
})
registerForm?.addEventListener('submit', async(event)=>{
    try{
        event.preventDefault()
        const body = Object.entries(new FormData(loginForm))
        const response = fetch('/api/register',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const data = await response;
        if(data.ok){
            alert('Succesful!')
            window.location.href= '/'
        } else{
            alert('Unseccesful!')
        }
    } catch(err){
        console.log(err.message)
    }
})


