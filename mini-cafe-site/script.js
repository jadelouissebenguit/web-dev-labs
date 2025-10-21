// order summary and cart functionality
let cart = [];

function addToCart(item, price, qtyId) {
  const qty = parseInt(document.getElementById(qtyId).value);

  if (!qty || qty <= 0) {
    alert('Please enter a valid quantity.');
    return;
  }

  const existing = cart.find(i => i.name === item);
  if (existing) {
    existing.qty += qty;
    existing.total = existing.qty * existing.price;
  } else {
    cart.push({ name: item, price: price, qty: qty, total: price * qty });
  }

  updateCart();
}

function updateCart() {
  const orderList = document.getElementById('order-list');
  const totalDisplay = document.getElementById('total');

  orderList.innerHTML = '';
  let total = 0;

  cart.forEach(i => {
    const li = document.createElement('li');
    li.textContent = `${i.name} x${i.qty} = ₱${i.total}`;
    orderList.appendChild(li);
    total += i.total;
  });

  totalDisplay.textContent = `Total: ₱${total}`;
}

function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  let receipt = '🧾 Your Order:\n\n';
  cart.forEach(i => {
    receipt += `${i.name} x${i.qty} = ₱${i.total}\n`;
  });

  const total = cart.reduce((sum, i) => sum + i.total, 0);
receipt += `\nTotal: ₱${total}\n\nThank you for ordering at Dylan's Bakeshop! 🍰\n\n`;
receipt += `Kindly proceed to 'contact us' form for order confirmation. 📞`;


  alert(receipt);
  cart = [];
  updateCart();
}
