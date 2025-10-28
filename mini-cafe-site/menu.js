// Activity 7: Dynamic Menu Section

// Sample menu data (can be updated anytime)
const dynamicMenu = [
  {
    name: "Red Velvet Cupcake",
    desc: "Soft red velvet base topped with cream cheese frosting.",
    price: 95
  },
  {
    name: "Caramel Macchiato",
    desc: "Espresso layered with vanilla milk and caramel drizzle.",
    price: 170
  },
  {
    name: "Blueberry Muffin",
    desc: "Moist muffin filled with juicy blueberries.",
    price: 85
  },
  {
    name: "Tiramisu Slice",
    desc: "Italian coffee-flavored dessert with cocoa dusting.",
    price: 120
  },
  {
    name: "Strawberry Frappe",
    desc: "Sweet strawberry blended drink topped with cream.",
    price: 160
  }
];

// Select the container
const menuList = document.getElementById("menu-list");

// Loop through each item and create a card
dynamicMenu.forEach((item, index) => {
  // Create container div
  const card = document.createElement("div");
  card.classList.add("menu-item");

  // Inner HTML for the card
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p class="desc">${item.desc}</p>
    <p class="price">₱${item.price}</p>
    <input type="number" id="dynQty${index}" placeholder="Qty" min="1">
    <button onclick="addToCart('${item.name}', ${item.price}, 'dynQty${index}')">Add to Cart</button>
  `;

  // Append card to the container
  menuList.appendChild(card);
});
