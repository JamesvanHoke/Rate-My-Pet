const randomize = () => {
  console.log("I work")
  const len = document.querySelector('#randomBtn').getAttribute('data-id');
  
  const random = Math.floor(Math.random() * parseInt(len));

  document.location.replace(`/gallery/${random}`);
};

document.querySelector('#randomBtn').addEventListener('click', randomize);
