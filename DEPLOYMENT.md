# NetOrbit Landing Page - Guía de Deployment para Hostinger

## 📋 Resumen

Esta guía te ayudará a subir tu landing page de NetOrbit a Hostinger paso a paso.

---

## 📦 Archivos a Subir

Necesitas subir estos 3 archivos a tu hosting:

```
/
├── index.html
├── styles.css
└── script.js
```

**Ubicación actual:** `/home/taiel/Escritorio/netorbit desarrollos/`

---

## 🚀 Pasos para Deployment en Hostinger

### 1. Acceder a Hostinger

1. Ingresa a [hostinger.com](https://www.hostinger.com)
2. Inicia sesión con tu cuenta
3. Ve al panel de control (hPanel)

### 2. Acceder al File Manager

**Opción A: File Manager Web**
1. En hPanel, busca "File Manager" o "Administrador de Archivos"
2. Click en "File Manager"
3. Se abrirá el explorador de archivos web

**Opción B: FTP (Recomendado para múltiples actualizaciones)**
1. En hPanel, busca "FTP Accounts" o "Cuentas FTP"
2. Crea una cuenta FTP si no tienes una
3. Descarga un cliente FTP como FileZilla
4. Conecta usando las credenciales FTP

### 3. Ubicar la Carpeta Correcta

Dependiendo de tu configuración:

- **Dominio principal:** `public_html/`
- **Subdominio:** `public_html/subdominio/`
- **Carpeta específica:** `public_html/nombre-carpeta/`

> [!IMPORTANT]
> Asegúrate de estar en la carpeta correcta donde quieres que se muestre tu sitio.

### 4. Subir los Archivos

**Via File Manager:**
1. Navega a la carpeta correcta (ej: `public_html/`)
2. Click en "Upload" o "Subir archivos"
3. Selecciona los 3 archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Espera a que se complete la carga
5. Verifica que los archivos estén en la carpeta

**Via FTP (FileZilla):**
1. Conecta a tu servidor FTP
2. En el panel derecho, navega a `public_html/`
3. En el panel izquierdo, navega a `/home/taiel/Escritorio/netorbit desarrollos/`
4. Arrastra los 3 archivos del panel izquierdo al derecho
5. Espera a que se complete la transferencia

### 5. Verificar Permisos

Los archivos deben tener estos permisos:
- `index.html`: **644** (rw-r--r--)
- `styles.css`: **644** (rw-r--r--)
- `script.js`: **644** (rw-r--r--)

Para cambiar permisos en File Manager:
1. Click derecho en el archivo
2. Selecciona "Permissions" o "Permisos"
3. Establece en **644**

### 6. Configurar Dominio (si es necesario)

Si quieres usar un dominio específico:

1. En hPanel, ve a "Domains" o "Dominios"
2. Agrega tu dominio o configura un subdominio
3. Apunta el dominio a la carpeta donde subiste los archivos

### 7. Verificar SSL/HTTPS

> [!IMPORTANT]
> Es crucial tener HTTPS para seguridad y SEO.

1. En hPanel, busca "SSL" o "Certificados SSL"
2. Si no tienes SSL, activa "Let's Encrypt SSL" (gratis)
3. Espera unos minutos a que se active
4. Verifica que tu sitio cargue con `https://`

### 8. Probar el Sitio

1. Abre tu navegador
2. Visita tu dominio: `https://tudominio.com`
3. Verifica que todo funcione:
   - ✅ Diseño se ve correctamente
   - ✅ Colores y fuentes cargan bien
   - ✅ Navegación funciona
   - ✅ Botones WhatsApp funcionan
   - ✅ Responsive en móvil

---

## 🔧 Troubleshooting

### Problema: "404 Not Found"

**Solución:**
- Verifica que `index.html` esté en la carpeta correcta
- Asegúrate de que el archivo se llame exactamente `index.html` (minúsculas)

### Problema: Estilos no se aplican

**Solución:**
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica permisos del archivo (debe ser 644)

### Problema: JavaScript no funciona

**Solución:**
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola del navegador (F12) y busca errores
- Verifica permisos del archivo (debe ser 644)

### Problema: Fuentes no cargan

**Solución:**
- Las fuentes se cargan desde Google Fonts, verifica tu conexión
- Espera unos segundos, pueden tardar en cargar la primera vez
- Verifica que no haya bloqueadores de contenido

---

## 📱 Verificación Post-Deployment

### Checklist de Verificación

- [ ] Sitio carga correctamente en desktop
- [ ] Sitio carga correctamente en móvil
- [ ] HTTPS está activo (candado verde)
- [ ] Todos los links WhatsApp funcionan
- [ ] Navegación funciona correctamente
- [ ] Menu móvil funciona
- [ ] Animaciones se ven bien
- [ ] Colores matching netorbit.es
- [ ] Fuentes cargan correctamente

### Probar en Múltiples Dispositivos

**Desktop:**
- Chrome
- Firefox
- Safari (si tienes Mac)

**Móvil:**
- Chrome móvil
- Safari móvil (iPhone)
- Diferentes tamaños de pantalla

---

## 🎯 Optimizaciones Post-Deployment

### 1. Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu sitio
3. Verifica la propiedad
4. Envía el sitemap (puedes crear uno simple)

### 2. Google Analytics (Opcional)

Si quieres trackear visitas:

1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu código de tracking
3. Agrégalo en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

### 3. Favicon Personalizado (Opcional)

Actualmente usa un emoji. Para un favicon profesional:

1. Crea un logo de 512x512px
2. Usa [favicon.io](https://favicon.io) para generar todos los tamaños
3. Sube los archivos a tu hosting
4. Actualiza el `<link rel="icon">` en `index.html`

---

## 🔄 Actualizaciones Futuras

### Cómo Actualizar el Contenido

1. Edita los archivos localmente en `/home/taiel/Escritorio/netorbit desarrollos/`
2. Prueba localmente con: `python3 -m http.server 8080`
3. Cuando esté listo, sube los archivos actualizados a Hostinger
4. Limpia caché del navegador para ver cambios

### Backup

> [!TIP]
> Siempre haz backup antes de actualizar

**Antes de cada actualización:**
1. Descarga los archivos actuales desde Hostinger
2. Guárdalos en una carpeta con fecha: `backup-2025-12-23/`
3. Así puedes restaurar si algo sale mal

---

## 📞 Soporte

### Hostinger Support

Si tienes problemas con el hosting:
- Chat en vivo 24/7 en el panel de Hostinger
- Base de conocimientos: [support.hostinger.com](https://support.hostinger.com)

### Problemas con el Código

Si necesitas modificar algo del diseño o funcionalidad, los archivos están bien documentados con comentarios.

---

## ✅ Checklist Final

Antes de considerar el deployment completo:

- [ ] Archivos subidos correctamente
- [ ] Sitio accesible vía HTTPS
- [ ] Probado en desktop y móvil
- [ ] Links WhatsApp funcionan
- [ ] SSL activo
- [ ] Dominio configurado correctamente
- [ ] Backup creado
- [ ] Google Search Console configurado (opcional)
- [ ] Analytics configurado (opcional)

---

**¡Tu sitio está listo para recibir clientes!** 🚀

Recuerda que este es tu "vendedor silencioso" - asegúrate de que el número de WhatsApp esté siempre disponible para responder consultas.
