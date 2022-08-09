<<<<<<< HEAD
let searchString;
const img = document.querySelector('img');

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

=======
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let searchString = '';
const img = document.querySelector('img');
function fetchImage(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!query) {
                searchString = 'dog';
            }
            else {
                searchString = query.toLowerCase();
            }
            const response = yield fetch(`https://api.giphy.com/v1/gifs/translate?api_key=hbjUgiRex7neX4tpv0Tf5xFT4HzBCmpm&s=${searchString}`, { mode: 'cors' });
            const fetchData = yield response.json();
            img ? (img.src = fetchData.data.images.original.url) : null;
            if (query) {
                const refreshBtn = document.getElementById('refresh');
                refreshBtn ? (refreshBtn.innerText = `new ${query.toLowerCase()}`) : null;
                const heading = document.querySelector('h1');
                heading
                    ? (heading.innerText = `Math.random('${query.toLowerCase()}')`)
                    : null;
            }
        }
        catch (error) {
            img
                ? (img.alt = `There has been a problem with your fetch operation:${error}`)
                : null;
        }
    });
}
>>>>>>> testing
const refreshbutton = (() => {
    const button = document.getElementById('refresh');
    button
        ? button.addEventListener('click', () => {
            fetchImage(searchString);
        })
        : null;
})();
const search = (() => {
<<<<<<< HEAD
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
=======
    const searchbar = document.querySelector('input');
    const searchButton = document.getElementById('searchBtn');
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
>>>>>>> testing
})();
fetchImage('dog');
