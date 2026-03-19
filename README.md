# Parcial – Procesos Industriales 1
**UNIPAZ | Ingeniería de Petróleo | Semestre 2025-2**

Examen web con sistema antifraude, 22 preguntas tipo Saber Pro y envío automático de notas a Google Sheets.

---

## Estructura del proyecto

```
parcial-procesos-industriales/
├── index.html                    ← Examen completo
├── css/styles.css                ← Estilos + protección visual
├── js/
│   ├── preguntas.js              ← Banco de 22 preguntas
│   ├── antifraude.js             ← Sistema de protección
│   ├── examen.js                 ← Lógica del examen
│   └── googleSheets.js           ← Integración con Google Sheets
└── google-apps-script/
    └── Code.gs                   ← Script para instalar en Google Sheets
```

---

## Contenido del examen

| Fase | Tema | Preguntas | Puntos |
|------|------|-----------|--------|
| 1 | Cadena de valor del Gas Natural | 5 | 1.25 |
| 2 | Cadena de valor del Petróleo | 5 | 1.25 |
| 3 | Procesos técnicos (con diagramas) | 5 | 1.25 |
| 4 | Toma de decisiones – Energías Renovables | 3 | 0.75 |
| 5 | Toma de decisiones – Explotación Petrolera | 4 | 0.75 |
| **Total** | | **22** | **5.0** |

**Nota de aprobación:** 3.0 / 5.0

---

## Sistema Antifraude

| Acción del estudiante | Consecuencia |
|----------------------|--------------|
| Recargar la página | Anulación inmediata |
| Cambiar pestaña (1ª vez) | Advertencia visible |
| Cambiar pestaña (2ª vez) | Anulación automática |
| Dividir pantalla / reducir ventana | Advertencia, luego anulación |
| Abrir DevTools | Anulación automática |
| PrintScreen / Ctrl+P / Ctrl+S | Bloqueado por teclado |
| Clic derecho | Bloqueado |
| Código ya presentado | Bloqueo permanente (localStorage) |
| Reitento después de finalizar | Bloqueado (localStorage) |

---

## Configuración – Google Sheets (Notas en tiempo real)

### Paso 1 – Crear el Google Sheet

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una nueva hoja.
2. Nómbrala "Parcial Procesos Industriales 1".

### Paso 2 – Instalar el Apps Script

1. En el Sheet, ve a **Extensiones → Apps Script**.
2. Borra el código que aparece por defecto.
3. Copia todo el contenido del archivo `google-apps-script/Code.gs`.
4. Pégalo en el editor de Apps Script.
5. Guarda con **Ctrl+S** y ponle el nombre "Parcial PI1".

### Paso 3 – Desplegar como Web App

1. Clic en **Implementar → Nueva implementación**.
2. En "Tipo de implementación" selecciona **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta de Gmail)
   - **Quién tiene acceso:** Cualquier usuario
4. Clic en **Implementar**.
5. Autoriza los permisos cuando te lo solicite.
6. Copia la **URL de la aplicación web** que aparece.

> La URL tendrá este formato:
> `https://script.google.com/macros/s/AKfycby.../exec`

### Paso 4 – Configurar el examen

1. Abre el archivo `js/googleSheets.js`.
2. Busca la línea:
   ```javascript
   const WEBAPP_URL = 'https://script.google.com/macros/s/TU_DEPLOYMENT_ID_AQUI/exec';
   ```
3. Reemplaza la URL completa con la que copiaste en el paso anterior.
4. Guarda el archivo.

### Paso 5 – Verificar

1. Abre el examen en el navegador.
2. Completa y envía el examen de prueba.
3. Revisa el Google Sheet – debe aparecer una nueva fila con los datos.

---

## Publicar en GitHub Pages

### Paso 1 – Subir el proyecto a GitHub

```bash
cd parcial-procesos-industriales
git init
git add .
git commit -m "Parcial Procesos Industriales 1 - UNIPAZ"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/parcial-pi1.git
git push -u origin main
```

### Paso 2 – Activar GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Clic en **Settings** (Configuración).
3. En el menú izquierdo, clic en **Pages**.
4. En "Branch" selecciona `main` y carpeta `/root`.
5. Clic en **Save**.
6. Espera 2-3 minutos. La URL del examen será:
   ```
   https://TU_USUARIO.github.io/parcial-pi1/
   ```

### Paso 3 – Compartir con los estudiantes

Comparte el enlace de GitHub Pages con los estudiantes.

> **Recomendación:** Comparte el enlace solo al iniciar la sesión del examen para evitar acceso anticipado.

---

## Personalización

### Agregar/modificar grupos

En `index.html`, busca el `<select id="grupo">` y agrega opciones:
```html
<option value="D">Grupo D</option>
```

### Cambiar tiempos por fase

En `js/examen.js`, modifica el array `tiemposPorFase` (en segundos):
```javascript
tiemposPorFase: [25*60, 20*60, 25*60, 15*60, 20*60]
// Fase:            1      2      3      4      5
```

### Cambiar nota de aprobación

En `js/examen.js`, busca `nota >= 3.0` y cambia el valor.

---

## Notas técnicas

- El examen funciona completamente sin backend (100% estático).
- La única conexión externa es el envío de notas al Google Apps Script.
- Si el envío falla, los datos se guardan en `localStorage` como respaldo.
- Los diagramas SVG están embebidos en el HTML (no son imágenes externas).
- Compatible con Chrome, Firefox, Edge y Safari modernos.

---

*Desarrollado para UNIPAZ – Programa de Ingeniería de Petróleo*
