// Two buttons, one with id of increment, other with decrement. both buttons will have a data-id equal to the pet ID, need to send a put request to the API endpoint with the score increment, the pet_id = to the data-id and the req.session.user_id in request

const updateFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#updateBtn').getAttribute('data-id');
  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_body = document.querySelector('#blog-body').value.trim();

  if (blog_name && blog_body) {
    const response = await fetch(`/api/score/`, {
      method: 'put',
      body: JSON.stringify({ blog_name, blog_body, id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to up vote');
    }
  }
};

if (blog_name && blog_body) {
    const response = await fetch(`/api/score/`, {
      method: 'put',
      body: JSON.stringify({ blog_name, blog_body, id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to down vote');
    }
  }
};

document.querySelector('.pet_score').addEventListener('button', Pet);

document.querySelector('.pet_score').addEventListener('button', Pet);
