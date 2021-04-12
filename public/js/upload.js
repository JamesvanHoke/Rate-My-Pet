const clientId = '62cc0bc341a2930';
// Client Secret: f29f9ffe8139ee7a1f05d91b1542d2f9af25f4e0

const imageUpload = () => {
  var image = document.querySelector('#Image');
  var apiUrl = 'https://api.imgur.com/3/image';
  var apiKey = clientId;

  var settings = {
    async: false,
    crossDomain: true,
    processData: false,
    contentType: false,
    type: 'POST',
    url: apiUrl,
    headers: {
      Authorization: 'Client-ID ' + apiKey,
      Accept: 'application/json',
    },
    mimeType: 'multipart/form-data',
  };

  var formData = new FormData();
  formData.append('image', image);
  settings.data = formData;

  // Response contains stringified JSON
  // Image URL available at response.data.link
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};

document.querySelector('#uploadButton').addEventListener('submit', imageUpload);
