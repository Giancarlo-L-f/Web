LA 6 - SITIO WEB
================

ESTRUCTURA
----------
index.html
assets/
  css/style.css
  js/main.js
  images/
  logos/

QUÉ CAMBIAR PRIMERO
-------------------
1. Logo principal:
   assets/logos/logo-la6.png

2. Imágenes:
   Reemplaza cada archivo dentro de assets/images/ conservando el mismo nombre.

3. WhatsApp:
   Abre assets/js/main.js
   Busca:
   const numeroWhatsApp = "573000000000";
   Reemplázalo por el número real con código 57 y sin espacios.

4. Correos y redes:
   Edita los enlaces del footer y de la sección Contacto en index.html.

5. Puntos de venta:
   Busca en index.html:
   "NUESTRA RED"
   Duplica o edita las tarjetas de tienda con nombre, logo, dirección y enlaces reales.

6. Catálogo:
   Puedes reemplazar las categorías o agregar nuevas tarjetas dentro de la sección "QUÉ FABRICAMOS".

7. Datos empresariales:
   Los textos actuales están redactados como propuesta.
   Reemplaza datos concretos (años, capacidad, garantías, cobertura, etc.) solo con información real.

PUBLICACIÓN
-----------
Puedes subir toda la carpeta a:
- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- cPanel / hosting tradicional


RESPONSIVE PREMIUM
------------------
Esta versión está optimizada para:
- PC / pantallas grandes
- Laptop
- Tablet horizontal y vertical
- Celulares grandes y pequeños

Puntos clave:
- Menú hamburguesa en tablet/celular.
- Hero adaptable sin desbordes.
- Tarjetas y galerías reorganizadas según ancho.
- Botones de tienda a ancho completo en móvil.
- Formulario adaptado a una columna.
- Botón flotante de WhatsApp adaptado a móvil.
- Imágenes con alturas específicas por breakpoint.


NUEVAS IMÁGENES DEL HERO
------------------------
El hero ahora rota automáticamente entre 3 imágenes cada 15 segundos:
- assets/images/hero-fabrica.jpg
- assets/images/hero-fabrica-2.jpg
- assets/images/hero-fabrica-3.jpg

Solo reemplaza los archivos manteniendo exactamente esos nombres.

IMÁGENES DEL PROCESO
--------------------
Cada tarjeta usa una imagen de fondo:
- proceso-idea.jpg
- proceso-diseno.jpg
- proceso-materiales.jpg
- proceso-fabricacion.jpg
- proceso-acabados.jpg
- proceso-entrega.jpg

Reemplaza esas imágenes por fotos reales del proceso de fabricación.
