const newSubForm = document.forms['newSubForm']

newSubForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  try {
    const formData = Object.fromEntries(new FormData(newSubForm))
    const response = await fetch('/api/subscriptions/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    if (data.text === 'OK') {
      alert('Subscription created!')
      window.location.href = '/profile'
    }
    if (data.text === 'Channel already exist') {
      alert('Channel already exist')
    }
  } catch (err) {
    console.log(err.message)
  }
})
