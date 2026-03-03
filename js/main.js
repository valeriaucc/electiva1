// ===== MENÚ RESPONSIVE =====
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// ===== VALIDACIÓN DE FORMULARIO =====
const form = document.querySelector("#contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const feedback = document.querySelector("#feedback");

        if (email === "" || message === "") {
            feedback.textContent = "Todos los campos son obligatorios.";
            feedback.style.color = "red";
        } else if (!email.includes("@")) {
            feedback.textContent = "Ingrese un email válido.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Formulario enviado correctamente.";
            feedback.style.color = "green";
            form.reset();
        }
    });
}