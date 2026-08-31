document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-modo-oscuro');
    
    if (boton) {
        boton.addEventListener('click', () => {
            const html = document.documentElement;
            
            // Si está claro lo vuelve oscuro, si está oscuro lo vuelve claro
            if (html.getAttribute('data-bs-theme') === 'dark') {
                html.setAttribute('data-bs-theme', 'light');
                boton.textContent = '🌙 Modo Oscuro';
            } else {
                html.setAttribute('data-bs-theme', 'dark');
                boton.textContent = '☀️ Modo Claro';
            }
        });
    }
});
 
// ==========================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// Usa el sistema de validación nativo del navegador
// junto con las clases de Bootstrap (was-validated)
// ==========================================
(function () {
    const form = document.getElementById('contactForm');
    if (!form) return;
 
    const successMsg = document.getElementById('formSuccessMsg');
 
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
 
        if (form.checkValidity()) {
            form.classList.remove('was-validated');
            form.reset();
            if (successMsg) {
                successMsg.classList.remove('d-none');
            }
        } else {
            form.classList.add('was-validated');
            if (successMsg) {
                successMsg.classList.add('d-none');
            }
        }
    });
 
    // Oculta el mensaje de éxito si el usuario vuelve a tocar el formulario
    form.addEventListener('input', function () {
        if (successMsg && !successMsg.classList.contains('d-none')) {
            successMsg.classList.add('d-none');
        }
    });
})();