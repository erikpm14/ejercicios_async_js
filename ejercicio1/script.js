const apiUrl = "https://thronesapi.com/api/v2/Characters";
const select = document.getElementById("character-select");
const img = document.getElementById("character-img");


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    populateSelect(data);
  });


function populateSelect(characters) {
  characters.forEach(character => {
    const option = document.createElement("option");
    option.value = character.imageUrl;
    option.textContent = character.fullName || character.firstName;
    select.appendChild(option);
  });
}

select.addEventListener("change", event => {
  const selectedImage = event.target.value;
  if (selectedImage) {
    img.src = selectedImage;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});
