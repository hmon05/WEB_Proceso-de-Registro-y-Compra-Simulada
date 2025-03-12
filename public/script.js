document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!name || !email || !password) {
        message.textContent = "Todos los campos son obligatorios.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registro exitoso. ¡Bienvenido!";
});

const cart = [];
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const product = e.target.getAttribute("data-product");
        const select = e.target.previousElementSibling;

        if (select && select.value) {
            cart.push(`${product} (${select.value})`);
        } else {
            cart.push(product);
        }

        alert(`${product} agregado al carrito.`);
    });
});

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert(`Compra finalizada con los productos: ${cart.join(", ")}`);
    }
});
