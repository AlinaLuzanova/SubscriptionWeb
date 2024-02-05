const editPageForm = document.forms['editPageForm']

editPageForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  try {
    const formData = Object.entries(new FormData(editPageForm))
    const response = await fetch(event.targer.datset.url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = response.json()
    if (data.text === 'OK') {
      alert('Succesfully edited')
      window.location.href = '/profile'
    }
  } catch (e) {
    console.log(e.message)
  }
})
