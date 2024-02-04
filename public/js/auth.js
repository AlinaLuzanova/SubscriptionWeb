const loginForm = document.forms['login-form']
const registerForm = document.forms['register-form']

loginForm?.addEventListener('submit', async (event) => {
  try {
    event.preventDefault()
    const body = Object.fromEntries(new FormData(loginForm))
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response
    if (data.status === 200) {
      window.location.href = '/profile'
      alert('Succesful!')
    } else {
      alert('Unseccesful!')
    }
  } catch (err) {
    console.log(err.message)
  }
})
registerForm?.addEventListener('submit', async (event) => {
  try {
    event.preventDefault()
    const body = Object.fromEntries(new FormData(loginForm))
    console.log(body)
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response
    if (data.status === 200) {
      alert('Succesful!')
      window.location.href = '/profile'
    } else {
      alert('Unseccesful!')
    }
  } catch (err) {
    console.log(err.message)
  }
})
