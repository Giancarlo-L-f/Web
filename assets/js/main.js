
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".main-navbar");
  const navbarCollapse = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive:true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  // CAMBIA SOLO ESTE NÚMERO POR EL WHATSAPP REAL
  // Colombia: 57 + número de 10 dígitos, sin +, espacios ni guiones.
  const numeroWhatsApp = "573000000000";

  const whatsappFloat = document.getElementById("whatsappFloat");
  if(whatsappFloat){
    const mensajeRapido = encodeURIComponent("Hola, quiero información sobre sus muebles y servicios.");
    whatsappFloat.href = `https://wa.me/${numeroWhatsApp}?text=${mensajeRapido}`;
  }

  const quoteForm = document.getElementById("quoteForm");
  if(quoteForm){
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const tipo = document.getElementById("tipoCliente").value;
      const ciudad = document.getElementById("ciudad").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      const texto = encodeURIComponent(
        `Hola, soy ${nombre}.\n` +
        `Teléfono: ${telefono}\n` +
        `Tipo de cliente: ${tipo}\n` +
        `Ciudad: ${ciudad}\n\n` +
        `Necesito cotizar:\n${mensaje}`
      );

      window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank", "noopener");
    });
  }

  // Cierra el menú hamburguesa al navegar en móvil/tablet.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(link => {
    link.addEventListener("click", () => {
      if(window.innerWidth < 992 && navbarCollapse.classList.contains("show")){
        const instance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        instance.hide();
      }
    });
  });
});
