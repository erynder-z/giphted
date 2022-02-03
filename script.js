const img = document.querySelector('img');

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=hbjUgiRex7neX4tpv0Tf5xFT4HzBCmpm&s=dogs',
  { mode: 'cors' }
)
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  });
