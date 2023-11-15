"use strict";

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const BASE_URL = "http://api.giphy.com/v1";
const $gifContainer = $(".gif-container");
const $formInput = $("#form-input");

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function addImage(imageUrls) {
  if (imageUrls.length > 0) {
    const randIdx = generateRandomIndex(imageUrls);
    const $newGifCard = $("<div>", { class: "gif" });
    const $newGifImg = $("<img>", { src: imageUrls[randIdx] });

    $newGifCard.append($newGifImg);
    $gifContainer.append($newGifCard);
  }
}

async function getImagesFromGiphy(evt) {
  const searchTerm = $formInput.val();
  $formInput.val("");

  const giphySearchParams = new URLSearchParams(
    {
      q: searchTerm,
      api_key: API_KEY
    }
  );

  const response = await fetch(
    `${BASE_URL}/gifs/search?${giphySearchParams}`
  );

  console.log("getImagesFromGiphy response=", response);
  const gifData = await response.json();

  return gifData.data.map(image => image.images.fixed_height.url);
}

function removeGifs() {
  $gifContainer.empty();
}

$("#remove-btn").on("click", removeGifs);

async function handleSubmit(evt) {
  evt.preventDefault();
  console.log("handleSubmit");

  const imageUrls = await getImagesFromGiphy();
  addImage(imageUrls);
}

$("form").on("submit", handleSubmit);