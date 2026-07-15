# Paz y Flora — versión 1

Sitio web estático y responsive para Paz y Flora, centro de eventos y experiencias en Buena Esperanza, Vallenar.

## Cómo abrir

- Opción simple: abrir `index.html` en el navegador.
- Opción recomendada: levantar un servidor estático dentro de esta carpeta, por ejemplo `npx serve .` o `python -m http.server 4173`.

## Archivos principales

- `index.html`: estructura, contenidos y SEO básico.
- `styles.css`: identidad visual, responsive y animaciones.
- `script.js`: menú móvil, aparición al hacer scroll, selector día/noche y galería ampliable.
- `brief-marca.md`: investigación y decisiones de marca.
- `assets/`: todos los recursos visuales utilizados, sin subcarpetas.

## Assets

Se utilizaron fotografías reales entregadas por el cliente y el logo compartido en el chat. Dos fondos panorámicos de la sección día/noche fueron mejorados y ampliados con IA a partir de las fotos reales del recinto; conservan la identidad, distribución y elementos principales del lugar.

## Publicación

El proyecto no requiere compilación. Puede subirse directamente a GitHub y desplegarse en Vercel como sitio estático. En Vercel, el framework preset puede quedar en “Other” y no necesita comando de build.

## Notas

- La reserva deriva al Instagram oficial porque no se encontró un teléfono o correo público confirmado.
- Los valores y disponibilidad se consultan directamente con Paz y Flora; no se inventaron precios.
- El mapa usa las coordenadas publicadas en el enlace de la bio de Instagram.
- `espacio-dia-ai.png` y `espacio-noche-ai.png` son mejoras fotográficas con IA creadas desde imágenes reales para aumentar calidad, ampliar a formato horizontal y mostrar mejor el recinto.
