// Array of fruits
const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍊 Orange", "🍇 Grapes", "🍉 Watermelon"];

// Function to generate the list dynamically
function generateList() {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = ""; // Clear previous list

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }
}

// Generate list once when page loads
generateList();
