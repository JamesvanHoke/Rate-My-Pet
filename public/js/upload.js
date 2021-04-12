// const clientId = '011443cc50c82b0';
// Client Secret: 67e783ea1c8a78f7192417b88ec587a1f17bc3bc

// const upload = document.querySelector('#image');

// upload.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // console.log('check 1');

//   const fileInput = document.querySelector('#input');
//   const imageFile = fileInput.files[0];
//   console.log(fileInput);
//   console.log(imageFile);
//   // console.log('check 2');

//   const formData = new FormData();
//   formData.append('image', imageFile);

//   // console.log(formData);
//   // console.log('check 3');
//   fetch('https://api.imgur.com/3/image/', {
//     method: 'POST',
//     headers: {
//       Authorization: `Client-ID ${clientId}`,
//     },
//     body: formData,
//   })
//     .then((data) => data.json())
//     .then((data) => console.log(data));

//   // .then((response) => {
//   //   if (response.ok) {
//   //     // console.log('check 4');
//   //     alert('Image uploaded to album');
//   //   }
//   // })
//   // .catch((error) => {
//   //   // console.log('check 5');
//   //   console.error(JSON.stringify(error));
//   //   alert('Upload failed: ' + error);
//   // });
// });

const file = document.querySelector('#file');

file.addEventListener('change', async (e) => {
  try {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    console.log(e.target.files[0]);
    await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 62cc0bc341a2930',
      },
      body: formData,
    })
      .then((data) => data.json())
      .then((data) => {
        file.setAttribute(dataImage, data.data.link);
      });
  } catch (err) {
    console.log(err);
  }
});
