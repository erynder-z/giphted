let searchString;
const img = document.querySelector('img');

const somethingstupid = (() => {
  body.innerHTML = '';
})();

async function fetchImage(query) {
  try {
    if (!query) {
      searchString = 'dog';
    } else {
      searchString = query.toLowerCase();
    }
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=hbjUgiRex7neX4tpv0Tf5xFT4HzBCmpm&s=${searchString}`,
      { mode: 'cors' }
    );
    const fetchData = await response.json();
    img.src = fetchData.data.images.original.url;
    if (query) {
      document.getElementById(
        'refresh'
      ).innerText = `new ${query.toLowerCase()}`;
      document.querySelector(
        'h1'
      ).innerText = `Math.random('${query.toLowerCase()}')`;
    }
  } catch (error) {
    img.alt = `There has been a problem with your fetch operation:${error}`;
  }
}

/* const fetchImage = (query) => {
  const img = document.querySelector('img');

  if (!query) {
    searchString = 'dog';
  } else {
    searchString = query.toLowerCase();
  }

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=hbjUgiRex7neX4tpv0Tf5xFT4HzBCmpm&s=${searchString}`,
    { mode: 'cors' }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
      if (query) {
        document.getElementById(
          'refresh'
        ).innerText = `new ${query.toLowerCase()}`;
        document.querySelector(
          'h1'
        ).innerText = `Math.random('${query.toLowerCase()}')`;
      }
    })
    .catch((error) => {
      alert('There has been a problem with your fetch operation:', error);
    });
}; */

const refreshbutton = (() => {
  const button = document.getElementById('refresh');

  button.addEventListener('click', () => {
    fetchImage(searchString);
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

  searchbar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchButton.click();
    }
  });
})();

fetchImage();
