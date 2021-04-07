const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#pet-name').value.trim();
  const description = document.querySelector('#pet-desc').value.trim();
  const owner = document.querySelector('#pet-owner').value.trim();

  if (name && description) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ name, description, owner }),
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
  .querySelector('.new-pet')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list');
