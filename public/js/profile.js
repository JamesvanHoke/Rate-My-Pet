const newPetHandler = async (event) => {
  event.preventDefault();

  const pet = document.querySelector('#pet_name').value.trim();
  const description = document.querySelector('#pet_description').value.trim();
  const owner = document.querySelector('#owner_name').value.trim();

  const data = { username: 'example' };

  fetch('/api/pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  if (pet && description && owner) {
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

document.querySelector('.new_pet').addEventListener('submit', newPetHandler);

document.querySelector('.pet_name');
