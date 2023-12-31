"use strict";
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
  $(evt.target).preventDefault();
  const $formVal = $formInput.val();
  console.log("Loggin form input val", $formVal);
  searchGiphy($formVal);
}

// TODO: Search GIPHY for the GIF

async function searchGiphy(searchTerm) {
  const searchParam = searchTerm;
  console.log("logging searchParam", searchParam);
  console.log(`http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${apiKey}`);
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${apiKey}`);
  const gifs = await response.json();
  const gif = gifs.data[0];
  addGifImg(gif);
  return gif;
}

// TODO: Append the GIF to the DOM
function addGifImg(gif) {
  const imgSrc = gif.images.fixed_height.url;
  console.log("What is imgSrc", imgSrc);
  const gifImg = $("<img>").attr('src', imgSrc);
  $gifContainer.append(gifImg);
}


// TODO: Remove all GIFs from the DOM

function removeGifs() {
  $gifContainer.empty();
}

$removeButton.on("click", removeGifs);