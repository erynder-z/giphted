const fetchImage = (query) => {
  const img = document.querySelector('img');
  let searchString;

  if (!query) {
    searchString = 'dog';
  } else {
    searchString = query.toLowerCase();
  }

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=hbjUgiRex7neX4tpv0Tf5xFT4HzBCmpm&s=${searchString}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
};

const refreshbutton = (() => {
  const button = document.getElementById('refresh');

  button.addEventListener('click', () => {
    fetchImage();
  });
})();

const search = (() => {
  const searchbar = document.querySelector('input');
  const searchButton = document.getElementById('searchBtn');

  searchButton.addEventListener('click', () => {
    const query = searchbar.value;
    searchbar.value = '';
    fetchImage(query);
  });
})();

fetchImage();
