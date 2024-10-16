"use strict";

const clientID = "qgNpKz3dSBFHb0nR_HTppguEwmDFs1AwL1CIVdUquj4";
const endpoint = `https://api.unsplash.com/photos/?client_id=${clientID}`;

const imgElement = document.querySelector('#unsplashImage');
const imgLink = document.querySelector('#imageLink');
const imgCreator = document.querySelector('#creator');

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        imgElement.src = jsonData[4].urls.regular;
        imgCreator.innerText = jsonData[4].user.name;
        imgElement.setAttribute('title', jsonData[4].description);
    });


