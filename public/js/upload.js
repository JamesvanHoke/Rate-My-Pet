const file = document.querySelector('#file');
const img = document.querySelector('#img');

file.addEventListener('change', async (e) => {
  try {
    img.src = 'https://i.imgur.com/3b2F3Ad.jpg';

    // const formData = new FormData();
    // formData.append('image', e.target.files[0]);
    // await fetch('https://api.imgur.com/3/image', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'Client-ID 62cc0bc341a2930',
    //   },
    //   body: formData,
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     img.src = data.data.link;
    //   });
  } catch (err) {
    img.src = 'https://i.imgur.com/3b2F3Ad.jpg';
  }
});
