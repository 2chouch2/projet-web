const form = document.getElementById('planetForm');
const input = document.getElementById('planetInput');


const pages = {
  "Mercure": "mercure.html",
  "Vénus": "venus.html",
  "Terre": "terre.html",
  "Mars": "mars.html",
  "Jupiter": "jupiter.html",
  "Saturne": "saturne.html",
  "Uranus": "uranus.html",
  "Neptune": "neptune.html"
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const planet = input.value.trim();

  if (pages[planet]) {
 
    window.location.href = pages[planet];
  } else {
    alert("Choisissez une planète valide dans la liste.");
  }
});
