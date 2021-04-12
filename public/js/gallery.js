const randomize = () => {
  // Gets up a number we can use for our randomizer
  const length = document.querySelector('#randomBtn').getAttribute('data-id');

  //Todo:create variable with math.random math.floor with a maximum = length var.
  //   document.location.replace(`/gallery/${random}`);
  const random = Math.floor(Math.random() * array.length);
  document.location.replace = `/gallery/${random}`;

  console.log("I'm here so James knows this is loading properly");
};

document.querySelector('#randomBtn').addEventListener('click', randomize);
