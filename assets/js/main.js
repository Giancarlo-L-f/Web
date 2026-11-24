
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".main-navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();

  // REEMPLAZA ESTE NÚMERO POR EL WHATSAPP REAL DE LA EMPRESA
  // Formato Colombia: 57 + número de 10 dígitos
  const numeroWhatsApp = "573000000000";

  document.getElementById("quoteForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const tipo = document.getElementById("tipoCliente").value;
    const ciudad = document.getElementById("ciudad").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = encodeURIComponent(
      `Hola, soy ${nombre}.\n` +
      `Teléfono: ${telefono}\n` +
      `Tipo de cliente: ${tipo}\n` +
      `Ciudad: ${ciudad}\n\n` +
      `Necesito cotizar:\n${mensaje}`
    );

    window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank");
  });
});
