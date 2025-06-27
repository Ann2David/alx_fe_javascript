
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Motivation" },
    { text: "Stay hungry, stay foolish.", category: "Inspiration" },
    { text: "Simplicity is the ultimate sophistication.", category: "Design" }
  ];
  
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteBtn = document.getElementById("newQuote");
  
  const categorySelect = document.createElement("select");
  categorySelect.id = "categorySelect";
  document.body.insertBefore(categorySelect, quoteDisplay);
  
  function updateCategoryOptions() {
    const categories = [...new Set(quotes.map(q => q.category))];
    categorySelect.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }
  
  function showRandomQuote() {
    const selectedCategory = categorySelect.value;
    const filteredQuotes = selectedCategory === "all"
      ? quotes
      : quotes.filter(q => q.category.toLowerCase() === selectedCategory.toLowerCase());
  
    if (filteredQuotes.length === 0) {
      quoteDisplay.textContent = "No quotes available for this category.";
      return;
    }
  
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    quoteDisplay.textContent = `"${randomQuote.text}" — ${randomQuote.category}`;
  }
  
  function createAddQuoteForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "quoteForm";
  
    const formTitle = document.createElement("h3");
    formTitle.textContent = "Add a New Quote";
  
    const inputQuote = document.createElement("input");
    inputQuote.type = "text";
    inputQuote.id = "newQuoteText";
    inputQuote.placeholder = "Enter a new quote";
  
    const inputCategory = document.createElement("input");
    inputCategory.type = "text";
    inputCategory.id = "newQuoteCategory";
    inputCategory.placeholder = "Enter quote category";
  
    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";
    addButton.addEventListener("click", addQuote);
  
    formContainer.appendChild(formTitle);
    formContainer.appendChild(inputQuote);
    formContainer.appendChild(inputCategory);
    formContainer.appendChild(addButton);
  
    document.body.appendChild(formContainer);
  }
  
  function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();
  
    if (!text || !category) {
      alert("Please enter both a quote and a category.");
      return;
    }
  
    quotes.push({ text, category });
  
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  
    updateCategoryOptions();
    showRandomQuote();
  }

  newQuoteBtn.addEventListener("click", showRandomQuote);
  
  updateCategoryOptions();
  createAddQuoteForm();
  