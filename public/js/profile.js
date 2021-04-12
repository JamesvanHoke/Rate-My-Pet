const newPetHandler = async (event) => {
  event.preventDefault();

  console.log("I'm working");
  const pet_name = document.querySelector('#petName').value.trim();
  const pet_description = document.querySelector('#petDesc').value.trim();
  const owner_name = document.querySelector('#ownerName').value.trim();
  const pet_image = document.querySelector('#img').getAttribute('src');

  if (pet_name && pet_description && owner_name && pet_image) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({
        pet_name,
        pet_description,
        owner_name,
        pet_image,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload pet');
    }
  } else {
    alert('Please make sure to fill all fields before submitting.');
  }
};

document.querySelector('#uploadBtn').addEventListener('click', newPetHandler);
