# JavaScript Essentials: ES Module

## Overview

This project demonstrates the importance of using `type="module"` when working with `import` and `export` statements in JavaScript.

Without specifying `type="module"`, attempting to use `import` will result in the error:

```
Cannot use import statement outside a module
```

By using `type="module"`, ES modules are enabled, allowing for modular code organization and proper usage of `import` and `export`.

## Learning Objectives

- Understand the role of `type="module"` in JavaScript.
- Learn how to use `import` and `export` in ES modules.
- Explore modular coding practices for better maintainability.
- Identify common errors and debugging techniques related to ES modules.

## Running the Application
1. Install http-server globally:
   ```sh
   npm install -g http-server
   ```

2. Start the server:
   ```sh
   http-server .
   ```

3. Visit:
   ```
   http://localhost:8080
   ```

## Additional Resources

- [MDN Web Docs: ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Import and Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)