// Two buttons, one with id of increment, other with decrement. both buttons will have a data-id equal to the pet ID, need to send a put request to the API endpoint with the score increment, the pet_id = to the data-id and the req.session.user_id in request

const incrementHandler = async (event) => {
  event.preventDefault();

  let id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/scores/inc/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to up vote');
  }
};

const decrementHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/scores/dec/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to down vote');
  }
};

document
  .querySelector('.increment')
  .addEventListener('click', incrementHandler);

document
  .querySelector('.decrement')
  .addEventListener('click', decrementHandler);
