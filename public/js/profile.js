const newFormHandler = async (event) => {
  event.preventDefault();

  const pet = document.querySelector('#pet_name').value.trim();
  const description = document.querySelector('#pet_description').value.trim();
  const owner = document.querySelector('#owner_name').value.trim();
  const user = document.querySelector('#user').value.trim();

  if (pet && description) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ pet, description, owner }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload pet');
    }
  }
};

document
  .querySelector('.new_pet')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pet_name');
