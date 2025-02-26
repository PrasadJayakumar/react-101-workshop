# React 101 Workshop - Hello Tailwind CSS

This project is a simple example of using Tailwind CSS with a Vite-powered Web application.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Install Tailwind CSS and its peer dependencies:

[Using Vite](https://tailwindcss.com/docs/installation/using-vite)

```sh
# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite    
```

2. Initialize Tailwind CSS with a configuration file

```sh
npx tailwindcss init
```

3. Configure the Vite plugin

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

4. Create a CSS file and import Tailwind CSS:

Add an @import to your CSS file that imports Tailwind CSS.

```css
/* filepath: src/styles.css */
@import "tailwindcss";
```

4. Start using Tailwind in your HTML

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```