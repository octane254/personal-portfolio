# 🚀 Personal Portfolio

A modern, fully responsive portfolio website built with React, Vite, and TailwindCSS. Features stunning animations, dark mode, and a beautiful glassmorphic design.

![Portfolio Preview](https://img.shields.io/badge/status-live-success)
![React](https://img.shields.io/badge/React-18+-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4)


## ✨ Features

- 🌑 **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- 💫 **Animated Backgrounds** - Dynamic stars, meteors, and scroll effects
- 📱 **Fully Responsive** - Optimized for all devices with mobile-first design
- 🎨 **Glassmorphism UI** - Modern frosted glass aesthetics
- 📊 **Filterable Skills** - Interactive skill categories with animated progress bars
- 🖼️ **Project Showcase** - Display your work with screenshots and live demos
- 📩 **Contact Form** - Functional form with toast notifications
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- ♿ **Accessible** - Built with Radix UI primitives for better accessibility

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **Type Safety:** TypeScript (optional)
- **Deployment:** Vercel/GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/octane254/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Update Personal Information

Edit the content in `src/data/portfolio.js` or respective component files:

- **Hero Section:** Update name, title, and description
- **About Section:** Modify your bio and profile image
- **Skills:** Add/remove skills and categories
- **Projects:** Showcase your work with images and links
- **Contact:** Update social links and contact information

### Modify Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      }
    }
  }
}
```

## 📂 Project Structure

```
personal-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── data/           # Portfolio data
│   ├── styles/         # Global styles
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/octane254/personal-portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is Moringa School FOr Educational Purposes

## 👤 Author

**Eric Mbithi**

- GitHub: [@octane254](https://github.com/octane254)
- Portfolio: [Your Live Portfolio URL]

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

</details>

---

<p align="center">Made with ❤️ by Eric Mbithi</p>
