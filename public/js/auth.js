const loginForm = document.forms['login-form']
const registerForm = document.forms['register-form']
console.log(loginForm)
console.log(registerForm)
loginForm.addEventListener('submit', async (event) => {
  try {
    event.preventDefault()
    const body = new FormData(loginForm)
    console.log(body)
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(body)),
    })
    const data = await response.json()
    if (data.message === 'OK') {
      window.location.href = '/profile'
      alert('Successful!')
    } else {
      alert('Unsuccessful!')
    }
  } catch (err) {
    console.log(err.message)
  }
})
registerForm.addEventListener('submit', async (event) => {
  try {
    console.log('register')
    event.preventDefault()
    const body = Object.fromEntries(new FormData(loginForm))
    console.log(body)
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    if (data.message === 'OK') {
      window.location.href = '/profile'
      alert('Successful!')
    } else {
      alert('Unsuccessful!')
    }
  } catch (err) {
    console.log(err.message)
  }
})
