const books = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges",
    "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles",
    "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs",
    "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah",
    "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
    "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
    "1 John", "2 John", "3 John", "Jude", "Revelation"
  ];
  
  const booksMenu = document.getElementById("books-menu");
  const booksBtn = document.getElementById("books-btn");
  const closeBooksMenuBtn = document.getElementById("close-books-menu");
  const booksList = document.querySelector(".books-list");
  const verseContainer = document.getElementById("verse-container");
  
  const verses = [
    '"The Lord is my shepherd; I shall not want." - Psalm 23:1',
    '"I can do all things through Christ who strengthens me." - Philippians 4:13',
    '"For God so loved the world, that he gave his only Son." - John 3:16'
  ];
  
  let verseIndex = 0;
  
  // Function to update the verse
  function updateVerse() {
    verseContainer.textContent = verses[verseIndex];
    verseIndex = (verseIndex + 1) % verses.length;
  }
  
  // Initialize the verses animation
  setInterval(updateVerse, 8000);
  updateVerse();
  
  // Ensure the books menu is hidden on page load
  window.onload = () => {
    booksMenu.style.opacity = "0";
    booksMenu.style.pointerEvents = "none";
    booksMenu.style.transform = "translate(-50%, -60%)";
  };
  
  // Populate the books list and add click events to each book
  books.forEach(book => {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    listItem.className = "book-item"; // Add a class for consistent styling
    listItem.addEventListener("click", () => {
      const formattedBookName = book.replace(/ /g, "_"); // Replace spaces with underscores
      const folderName = formattedBookName; // Use the formatted book name as the folder name
      window.location.href = `books/${folderName}/${folderName}.html`; // Open the corresponding book file in its folder
    });
    booksList.appendChild(listItem);
  });
  
  // Open Books Menu
  booksBtn.addEventListener("click", () => {
    booksMenu.style.opacity = "1";
    booksMenu.style.pointerEvents = "auto";
    booksMenu.style.transform = "translate(-50%, -50%)";
  });
  
  // Close Books Menu
  closeBooksMenuBtn.addEventListener("click", () => {
    booksMenu.style.opacity = "0";
    booksMenu.style.transform = "translate(-50%, -60%)";
    booksMenu.style.pointerEvents = "none";
  });