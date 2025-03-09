# JavaScript Module Systems and Bundlers Explained

Modern JavaScript development relies heavily on modular code and efficient bundling. This project explores the core concepts of:

* **CommonJS (Node.js)**
* **Global JavaScript (Browser)**
* **ES Modules (Browser and Node.js)**
* **Module Loaders and Bundlers (Webpack, Vite)**

## 1. CommonJS (Node.js)

**What it is:** CommonJS is a module system designed primarily for Node.js. It allows developers to organize code into reusable modules.

**How it works:**

* Modules are loaded using the `require()` function.
* Modules expose their functionalities using the `module.exports` object.
* It's synchronous, meaning modules are loaded in the order they're required.

**Why it's important:** CommonJS is foundational to Node.js development and is still prevalent in many existing Node.js projects.

## 2. Global JavaScript (Browser)

**What it is:** The original way to include JavaScript in browsers, where all variables and functions are placed in the global scope.

**How it works:**

* `<script>` tags include JavaScript files in HTML.
* Variables and functions declared in these files become accessible to all other scripts on the page.

**Why it's important:** Understanding global JavaScript helps appreciate the need for module systems and the problems they solve (e.g., namespace collisions, code organization).

## 3. ES Modules (Browser and Node.js)

**What it is:** ES modules are the standardized module system for JavaScript, supported by both browsers and Node.js.

**How it works:**

* Modules are imported using the `import` keyword.
* Modules expose their functionalities using the `export` keyword.
* It supports asynchronous loading, improving performance.

**Why it's important:** ES modules are the future of JavaScript modularity, offering better code organization, maintainability, and performance.

## 4. Module Loaders and Bundlers (Webpack, Vite)

**What they are:** Tools that help manage dependencies and optimize code for production.

**How they work:**

* **Module Loaders:** Resolve module dependencies at runtime (historically important, less so now with native ES module support).
* **Bundlers:** Combine multiple JavaScript files and other assets into optimized bundles for deployment.
* They perform tasks like tree shaking (removing unused code), minification (reducing file size), and transpilation (converting modern JavaScript to older browser compatible code).

**Why they're important:** Bundlers are essential for modern web development, enabling efficient code delivery and improved performance. They are still very important even with native ES modules.