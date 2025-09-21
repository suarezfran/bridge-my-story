# Bridge My Story 🌉

A modern, responsive portfolio website showcasing Francisco Suarez's journey from Montevideo to San Francisco. Built with React, TypeScript, and modern web technologies.

## ✨ Features

- **Modern Portfolio Design**: Clean, professional layout with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Interactive Sections**: Hero, About, Experience, Projects, Education, and Contact
- **Smooth Scrolling**: Desktop scroll snapping with natural mobile scrolling
- **Image Carousel**: Interactive photo gallery in the About section
- **Typewriter Effect**: Dynamic title animation with "Francisco Suarez" / "San Francisco"
- **Particle Effects**: Subtle background animations for visual appeal
- **Dark Theme**: Modern dark design with red/orange accent colors

## 🚀 Technologies

- **React 19** + **TypeScript** + **Vite**
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Typewriter Effect** for dynamic text
- **Modern CSS** with custom properties and animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎮 Usage

1. **Navigation**: Use the section dots on the right to jump between sections
2. **Scrolling**: 
   - **Desktop**: Smooth scroll snapping between sections
   - **Mobile**: Natural scrolling with momentum
3. **Interactive Elements**: Hover effects and smooth transitions throughout

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add script to package.json
"homepage": "https://your-username.github.io/bridge-my-story",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🎨 Customization

### Modify Portfolio Data
Edit the data in `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/your-username/project",
    liveUrl: "https://your-project.com",
    status: "completed"
  }
  // ... more projects
]
```

### Update Personal Information
Modify the content in the respective section components:
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ExperienceSection.tsx`
- `src/components/sections/ContactSection.tsx`

### Change Colors and Styling
Update CSS custom properties in `src/index.css`:
- `--primary-red`: Main red color
- `--secondary-red`: Secondary red color
- `--accent-orange`: Orange accent color

## 📱 Responsive Design

The application is optimized for:
- 📱 **Mobile** (320px+): Natural scrolling, touch-friendly interface
- 📱 **Tablet** (768px+): Balanced layout with improved spacing
- 💻 **Desktop** (1024px+): Full scroll snapping and hover effects

## 🎬 Key Features

### Scroll Behavior
- **Desktop**: Smooth scroll snapping between sections
- **Mobile**: Natural scrolling with momentum and touch support
- **Direction Changes**: Smooth transitions without getting stuck

### Animations
- **Typewriter Effect**: Dynamic title animation
- **Framer Motion**: Smooth section transitions
- **Particle Effects**: Subtle background animations
- **Hover Effects**: Interactive elements throughout

### Performance
- **Optimized Images**: Properly sized and compressed
- **Lazy Loading**: Efficient resource loading
- **Modern CSS**: Hardware-accelerated animations

## 🛠️ Development

### Project Structure
```
src/
├── components/
│   ├── sections/          # Main page sections
│   ├── navigation/        # Navigation components
│   └── CardCarousel.tsx   # Image carousel
├── data/
│   └── portfolio.ts       # Portfolio data
├── hooks/
│   ├── useScroll.ts       # Scroll detection
│   ├── useScrollSnap.ts   # Scroll snapping logic
│   └── useSectionNavigation.ts
├── types/
│   └── index.ts           # TypeScript definitions
└── utils/
    └── animations.ts      # Animation utilities
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

MIT License - Free for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

---

**Built with ❤️ by Francisco Suarez**