function showLogin() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('login-popup').classList.remove('hidden');
}

function register() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !password) {
        alert('Por favor, completa todos los campos para registrarte.');
        return;
    }
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('login-popup').classList.remove('hidden');
}

function login() {
    const username = document.getElementById('username').value.trim();
    const userPassword = document.getElementById('userPassword').value.trim();

    if (!username || !userPassword) {
        alert('Por favor, ingresa tu usuario y contraseña.');
        return;
    }

    alert('Inicio de sesión exitoso');
    document.getElementById('login-popup').classList.add('hidden');
    document.getElementById('products-container').classList.remove('hidden');
}

let cart = [];
function addToCart(product) {
    cart.push(product);
    alert(`${product} agregado al carrito`);
}

function addCustomProduct() {
    const color = document.getElementById('customOption').value;
    cart.push(`Producto Personalizado (${color})`);
    alert(`Producto Personalizado (${color}) agregado al carrito`);
}

function showPayment() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de comprar.');
        return;
    }
    document.getElementById('cart-details').innerHTML = `<p>Productos: ${cart.join(', ')}</p>`;
    document.getElementById('payment-popup').classList.remove('hidden');
}

function finalizePurchase() {
    const address = document.getElementById('address').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!address || !cardNumber || !expiry || !cvv) {
        alert('Por favor, completa los datos de pago y dirección.');
        return;
    }

    alert('Pago procesado');
    document.getElementById('payment-popup').classList.add('hidden');
    document.getElementById('confirmation-popup').classList.remove('hidden');
}

function resetApp() {
    location.reload();
}