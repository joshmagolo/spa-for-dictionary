# 📚 Wordly Dictionary SPA

A simple and interactive **Single Page Application (SPA)** that allows users to search for word definitions, view pronunciation, examples, synonyms, and save favorite words for quick access.

---

## 🚀 Features

* 🔍 **Search Words**
  Enter any English word and fetch its meaning using a dictionary API.

* 📖 **Detailed Results**
  Displays:

  * Word
  * Pronunciation
  * Part of speech
  * Definition
  * Example usage
  * Synonyms

* ⭐ **Favorites System**
  Save words to a favorites list and click them to search again instantly.

* 🌙 **Dark Mode Toggle**
  Switch between light and dark themes for better user experience.

* ⚡ **Dynamic UI (SPA)**
  No page reloads — everything updates in real-time using JavaScript.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* [Dictionary API](https://dictionaryapi.dev/)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html     # Main HTML structure
├── style.css      # Styling and dark mode
├── index.js       # Application logic
└── README.md      # Project documentation
```

---

## ⚙️ How It Works

1. User enters a word in the input field.
2. Form submission is captured using JavaScript (`event.preventDefault()`).
3. A request is sent to the Dictionary API:

   ```
   https://api.dictionaryapi.dev/api/v2/entries/en/{word}
   ```
4. The response is processed and displayed dynamically.
5. Users can save words to favorites and re-search them with a click.

---

## 🧠 Key JavaScript Concepts Used

* DOM Manipulation (`getElementById`, `innerHTML`)
* Event Listeners (`submit`, `click`)
* Async/Await for API calls
* Error Handling with `try...catch`
* Dynamic content rendering
* Class toggling for dark mode

---

## 🎮 Usage

1. Open the app in your browser (or use Live Server in VS Code).
2. Type a word into the search bar.
3. Click **Search**.
4. View results instantly.
5. Click ⭐ **Save** to add to favorites.
6. Click any favorite word to search it again.
7. Toggle 🌙 Dark Mode anytime.

---

## ⚠️ Known Limitations

* Duplicate favorites are currently allowed.
* Some words may not have examples or synonyms.
* Relies on external API availability.

---

## 💡 Future Improvements

* Prevent duplicate favorites
* Add remove button for favorites
* Store favorites using `localStorage`
* Add audio pronunciation
* Improve UI/UX with animations

---

## 📸 Preview

> A clean interface with search, results display, and favorites list.

---

## 🧑‍💻 Author

**Joshua Magolo**

---

## 📜 License

This project is open-source and free to use.
