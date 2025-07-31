# 💒 Invitación de Boda Elegante

Una invitación de boda moderna y elegante creada con HTML, CSS y JavaScript. Diseño responsivo con animaciones suaves y funcionalidades interactivas.

## ✨ Características

- 🎨 **Diseño elegante y moderno** con gradientes y efectos visuales
- 📱 **Completamente responsivo** para todos los dispositivos
- ⏰ **Contador regresivo** en tiempo real hasta la fecha de la boda
- 📝 **Formulario RSVP** funcional con validación
- 💫 **Animaciones suaves** y efectos hover
- 🎵 **Efectos visuales** como corazones flotantes y parallax
- 🔔 **Sistema de notificaciones** para feedback del usuario
- 📸 **Galería de fotos** (placeholders listos para tus imágenes)
- 🗺️ **Mapa interactivo** de Google Maps integrado

## 🚀 Cómo usar

1. **Descarga los archivos** en tu computadora
2. **Personaliza la información** en `index.html`:
   - Nombres de los novios
   - Fecha y hora de la boda
   - Lugar y dirección
   - Enlaces de redes sociales
3. **Actualiza la fecha** en `script.js` (línea 2)
4. **Abre `index.html`** en tu navegador

## 🎨 Personalización

### Cambiar la fecha de la boda
En `script.js`, línea 2:
```javascript
const weddingDate = new Date('August 29, 2025 14:00:00').getTime();
```

### Cambiar los nombres
En `index.html`, línea 25:
```html
<h2 class="name">Sindi & Wilmer</h2>
```

### Cambiar el lugar
En `index.html`, líneas 42-43:
```html
<p class="venue">MCI Cali</p>
<p class="address">Calle 60 #1N-50, Cali - Valle del Cauca</p>
```

### Cambiar el mapa
Para actualizar el mapa de Google Maps, reemplaza la URL del iframe en `index.html`:
```html
<iframe 
    src="TU_URL_DE_GOOGLE_MAPS_EMBED"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### Agregar tus fotos
Reemplaza los placeholders en la sección de galería con tus propias imágenes:
```html
<div class="gallery-item">
    <img src="tu-foto.jpg" alt="Descripción de la foto">
</div>
```

### Cambiar colores
Los colores principales están definidos en `styles.css`:
- **Morado principal**: `#667eea` y `#764ba2`
- **Rosa**: `#f093fb` y `#f5576c`
- **Azul**: `#4facfe` y `#00f2fe`

## 📱 Funcionalidades

### Contador Regresivo
- Muestra días, horas, minutos y segundos hasta la boda
- Animaciones cuando los números cambian
- Se detiene automáticamente cuando llega la fecha

### Formulario RSVP
- Validación en tiempo real
- Almacenamiento local de respuestas
- Modal de confirmación elegante
- Notificaciones de éxito/error

### Efectos Visuales
- Corazones flotantes animados
- Efectos hover en todos los elementos
- Animaciones de entrada al hacer scroll
- Efectos de ripple en botones

## 🌐 Despliegue

Para publicar tu invitación online:

1. **Sube los archivos** a tu servidor web
2. **O usa servicios gratuitos** como:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting

## 📧 Configuración del formulario

El formulario RSVP actualmente guarda los datos en el navegador local. Para recibir las respuestas por email, necesitarás:

1. **Un servicio de backend** (PHP, Node.js, etc.)
2. **O usar servicios como**:
   - Formspree
   - Netlify Forms
   - Google Forms

## 🎯 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles (iOS/Android)

## 📝 Licencia

Este proyecto es de código abierto y puedes usarlo libremente para tu boda.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el diseño o funcionalidad, no dudes en compartirlas.

---

**¡Que tengas una boda maravillosa! 💕** 