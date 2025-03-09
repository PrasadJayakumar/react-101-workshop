# JavaScript Essentials: Import Maps

## Overview

This project explores import maps, a modern JavaScript feature that simplifies module resolution in the browser. Import maps allow developers to define custom module specifiers instead of using relative or absolute URLs.

In this example, we have a library file, `timeUtils.js`, inside the `/lib` directory. This file contains a function, `getTimeBasedGreeting`, which we want to import into our main application code using a clean and readable module specifier.

### The Problem

By default, browsers require explicit relative (./, ../) or absolute (/) URLs for module imports. Without an import map, attempting to import TimeUtils with a simple module specifier results in an error:

```js
Uncaught TypeError: Failed to resolve module specifier "TimeUtils". Relative module specifiers must start with "./", "../", or "/".
```

### The Solution

Import maps solve this issue by allowing us to define a mapping between module specifiers and their actual file paths. This is done using the `<script type="importmap">` tag:

```json
{
  "imports": {
    "TimeUtils": "/lib/timeUtils.js"
  }
}
```

With this mapping in place, when the browser encounters an import statement like this:

```js
import { getTimeBasedGreeting } from "TimeUtils";
```

It knows to resolve TimeUtils to /lib/timeUtils.js.

## Learning Objectives

- **Understand Module Resolution Errors**
Learn why browsers require explicit paths for module imports and how import maps resolve these issues.

- **Use Import Maps Effectively**
Implement import maps to simplify module management in browser-based JavaScript projects.

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

- [Importing modules using import maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)