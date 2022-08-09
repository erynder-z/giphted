let searchString: string = '';
const img = document.querySelector('img') as HTMLImageElement | null;

async function fetchImage(query: string) {
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

    img ? (img.src = fetchData.data.images.original.url) : null;

    if (query) {
      const refreshBtn = document.getElementById(
        'refresh'
      ) as HTMLInputElement | null;

      refreshBtn ? (refreshBtn.innerText = `new ${query.toLowerCase()}`) : null;

      const heading = document.querySelector('h1') as HTMLImageElement | null;
      heading
        ? (heading.innerText = `Math.random('${query.toLowerCase()}')`)
        : null;
    }
  } catch (error) {
    img
      ? (img.alt = `There has been a problem with your fetch operation:${error}`)
      : null;
  }
}

const refreshbutton = (() => {
  const button = document.getElementById('refresh') as HTMLInputElement | null;

  button
    ? button.addEventListener('click', () => {
        fetchImage(searchString);
      })
    : null;
})();

const search = (() => {
  const searchbar = document.querySelector('input') as HTMLInputElement | null;
  const searchButton = document.getElementById(
    'searchBtn'
  ) as HTMLInputElement | null;

  searchButton
    ? searchButton.addEventListener('click', () => {
        const query = searchbar ? searchbar.value : null;
        searchbar ? (searchbar.value = '') : null;
        query ? fetchImage(query) : null;
      })
    : null;

  searchbar
    ? searchbar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          searchButton ? searchButton.click() : null;
        }
      })
    : null;
})();

fetchImage('dog');
