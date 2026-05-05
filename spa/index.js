const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const result = document.getElementById("result");
const errorDiv = document.getElementById("error");
const toggleBtn = document.getElementById("toggleTheme");
const favoritesList = document.getElementById("favoritesList");

// 🌙 Theme toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");g
});

// 📚 Fetch dictionary data
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const word = input.value.trim();

  result.innerHTML = "";
  errorDiv.textContent = "";

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!res.ok) throw new Error("Word not found!");

    const data = await res.json();
    displayWord(data[0]);

  } catch (err) {
    errorDiv.textContent = err.message;
  }
});

// 🧠 Display word details
function displayWord(data) {
  const word = data.word;
  const phonetic = data.phonetic || "N/A";

  const meanings = data.meanings.map(m => {
    const definition = m.definitions[0]?.definition || "No definition";
    const example = m.definitions[0]?.example || "No example";
    const synonyms = m.definitions[0]?.synonyms?.join(", ") || "None";

    return `
      <p><strong>${m.partOfSpeech}</strong></p>
      <p>Definition: ${definition}</p>
      <p>Example: ${example}</p>
      <p>Synonyms: ${synonyms}</p>
      <hr>
    `;
  }).join("");

  result.innerHTML = `
    <div class="word-card">
      <h2>${word}</h2>
      <p>Pronunciation: ${phonetic}</p>
      ${meanings}
      <button onclick="addToFavorites('${word}')">⭐ Save</button>
    </div>
  `;
}

// ⭐ Add to favorites + highlight with JS styling
function addToFavorites(word) {
  const li = document.createElement("li");
  li.textContent = word;

  // highlight using JS (dynamic CSS)
  li.classList.add("highlight");

  li.addEventListener("click", () => {
    input.value = word;
    form.dispatchEvent(new Event("submit"));
  });

  favoritesList.appendChild(li);
}
