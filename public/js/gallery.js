
const randomize = () => {
  console.log('I work');
  const len = document.querySelector('#randomBtn').getAttribute('data-id');

  const random = Math.floor(Math.random() * parseInt(len));
=======
let randomizegallery = (event) => {
  const len = event.target.getAttribute('data-id');

  const random = Math.floor(Math.random() * parseInt(len) +1);


  document.location.replace(`/gallery/${random}`);
};

document.querySelectorAll('.randomBtn').forEach((item) => {
  item.addEventListener('click', randomizegallery);
});
