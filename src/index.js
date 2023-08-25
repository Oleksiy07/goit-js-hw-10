import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    breedSelect.innerHTML = markup;
  })
  .catch(err => console.error(err));

breedSelect.addEventListener('change', setOutput);

function setOutput(evt) {
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      console.log(data);
      const markup = data
        .map(
          ({
            url,
            breeds: [{ name, description, temperament }],
          }) => `<img src="${url}" alt="${name}" width='300px'>
          <h2>${name}</h2>
          <p>${description}</p>
          <p><b>Temperament:</b> ${temperament}</p>`
        )
        .join('');
      catInfo.innerHTML = markup;
    })
    .catch(err => console.error(err));
}
