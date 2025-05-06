function showWordCard(word) {
  const info = wordData[word.toLowerCase()];
  if (!info) return alert("Word card not found.");
  const card = document.getElementById("wordCard");
  card.innerHTML = `
    <h3>${word}</h3>
    <p><strong>Pronunciation:</strong> ${info.pron}</p>
    <p><strong>Part of speech:</strong> ${info.pos}</p>
    <p><strong>Definition:</strong> ${info.cn}</p>
    <p><strong>Example:</strong> ${info.example}</p>
    <button onclick="addToFavorites('${word}')">Add to favorites</button>
  `;
  card.classList.remove("hidden");
}

function addToFavorites(word) {
  let fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!fav.includes(word)) fav.push(word);
  localStorage.setItem("favorites", JSON.stringify(fav));
  alert("Added to favorites!");
}
