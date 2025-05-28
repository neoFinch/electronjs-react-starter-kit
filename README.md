# Electron + React + Tailwind CSS Starter Kit

A modern starter template for building cross-platform desktop applications using Electron, React, and Tailwind CSS.

## Features

- ⚡ **Electron** for cross-platform desktop apps
- ⚛️ **React 19** with modern React Hooks
- 🎨 **Tailwind CSS** for rapid UI development
- 🛠️ **Webpack** for module bundling and build optimization
- 🔥 Hot Module Replacement (HMR)
- 📦 Single command build for all platforms
- 🖥️ Native desktop application packaging

## Prerequisites

- Node.js 16.0.0 or higher
- npm 7.0.0 or higher (or yarn)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/electron-react-tailwind-starter.git
   cd electron-react-tailwind-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   This will start the Webpack dev server and Electron in development mode.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production app
- `npm run start` - Start the production app
- `npm run package` - Package the app for the current platform
- `npm run package:all` - Package the app for all platforms (Windows, macOS, Linux)

## Project Structure

```
├── public/              # Static files
├── src/
│   ├── backend/   # Electron main process code
│   |   └── something.ts     # Electron main process realted code
│   ├── components/      # React application code
│   │   └── something.tsx      # Root React component
|   | index.ts     # main electron code
|   | preload.ts     # preload code
|   | app.tsx     # Root render component
|   | rendered.ts     # Root render component
├── .gitignore
├── webpack.config.js   # Webpack configuration
├── index.html          # Main HTML file
├── package.json
└── README.md
```

## Building for Production

To create a production build:

```bash
# Build the app
npm run build

# Package the app for the current platform
npm run package

# Package for all platforms (Windows, macOS, Linux)
npm run package:all
```

## Customizing

### Adding Dependencies

- For main process dependencies:
  ```bash
  npm install --save-dev package-name
  ```

- For renderer process dependencies:
  ```bash
  npm install package-name
  ```

### Configuring Electron

Edit `src/main/index.js` to customize the Electron main process.

### Styling with Tailwind

Edit `src/renderer/styles/index.css` to add custom Tailwind directives or global styles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues, please [open an issue](https://github.com/yourusername/electron-react-tailwind-starter/issues).

---

Happy coding! 🚀
