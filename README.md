# Bridge My Story 🌉

Una micro-web de una sola página que muestra un puente animado entre Montevideo y San Francisco. Cada hito de tu historia agrega un tablón al puente y el progreso avanza hasta llegar a San Francisco.

## ✨ Características

- **Puente animado**: SVG con curva del deck, cables y torres
- **Siluetas de ciudades**: Montevideo y San Francisco
- **Sistema de hitos**: Cada hito agrega tablones al puente
- **Animaciones fluidas**: Framer Motion para transiciones suaves
- **Autoplay**: Modo demo para grabar videos
- **Diseño responsive**: Optimizado para móviles y desktop
- **Tema dark**: Colores verdes sobre fondo oscuro

## 🚀 Tecnologías

- **React 19** + **Vite**
- **TailwindCSS** para estilos
- **Framer Motion** para animaciones
- **SVG** para gráficos vectoriales

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 🎮 Uso

1. **Siguiente Hito**: Avanza manualmente al siguiente hito
2. **Autoplay**: Reproduce automáticamente todos los hitos (ideal para grabar videos)
3. **Progreso**: Barra de progreso en la parte inferior

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script al package.json
"homepage": "https://tu-usuario.github.io/bridge-my-story",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Desplegar
npm run deploy
```

## 🎨 Personalización

### Modificar hitos
Edita el array `milestones` en `src/App.jsx`:

```javascript
const milestones = [
  { id: 1, title: "Tu hito", description: "Descripción", progress: 0.25 },
  // ... más hitos
]
```

### Cambiar colores
Modifica las clases CSS en `src/index.css`:
- `.bridge-green`: Color principal del puente
- `.bridge-green-bg`: Fondo verde
- `.bridge-green-border`: Bordes verdes

## 📱 Responsive

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎬 Para grabar videos

1. Activa el modo **Autoplay**
2. La aplicación avanzará automáticamente cada 3 segundos
3. Perfecto para crear demos o presentaciones

## 📄 Licencia

MIT License - Libre para uso personal y comercial.