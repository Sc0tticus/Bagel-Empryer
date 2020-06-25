fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(result => handleBagels(result))

  function handleBagels(bagels){
    return bagels.forEach(bagel => renderBagels(bagel.type))
  }

  const bagelsList = document.getElementById('bagel-ul')

  function renderBagels(bagel){
    const li = document.createElement('li')
    li.innerText = bagel
    bagelsList.append(li)
  }

  function createUpdateButton(li){
    const updateButton = document.createElement('button')
    updateButton.innerText = 'update'
    updateButton.addEventListener('click', (event)=> bagelUpdate(event))
    li.append(updateButton)
  }

  function bagelUpdate(event){
    event.target.parentNode.innerHTML = `
      <form id = 'update-form'>
        <input type='text' value=`${event.target.parentNode.innerText.slice(0, -6)}`/>
      </form>
    `
    const updateForm = document.getElementById('update-form')
      updateForm.addEventListener('submit', (event)=> handleUpdateForm(event))
  }

  function handleUpdateForm

  const bagelForm = document.getElementById('bagel-form') 

  bagelForm.addEventListener('submit', (event) => captureFormInput(event))

  function captureFormInput(event){
    event.preventDefault() //prevent default behavior of submit 
    const formData = new FormData(bagelForm)
    const newBagel = formData.get('bagel')
    renderBagels(newBagel)
    persistBagel(newBagel)
  }

  function persistBagel(bagel){
    fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({type:bagel,rating:2})
    })

  }