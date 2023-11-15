// TODO: Create variables
// apiKey
// URL?
// $formInput
// $gifContainer
// $removeButton

const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $formInput = $("#form-input");
const $gifContainer = $(".gif-container");
const $removeButton = $("#remove-btn");

// TODO: Create a form submission listener to Grab the search term from the DOM
// On submission get the val from the field
$formInput.on("submit", getFormInput);

function getFormInput(evt) {
  evt.preventDefault();
  const $formVal = $formInput.val();
  searchGiphy($formVal);
}

// TODO: Search GIPHY for the GIF

async function searchGiphy(searchTerm) {
  const searchParam = new URLSearchParams({searchTerm});
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${apiKey}`);
  const gif = await response.text();

}


// TODO: Append the GIF to the DOM

// TODO: Remove all GIFs from the DOM

