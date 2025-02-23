# Hello Dev Server

This project is a simple setup for a development server using vite

## Steps to Bundle JavaScript Files

1. **Webpack Configuration**

The webpack.config.js file is configured to use html-webpack-plugin to generate an index.html file in the dist directory. It also specifies the entry point and output configuration for Webpack.

    ```js
    {
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
    }
    ```

2. **Start the Dev Server**

    - Add a start script to the scripts section of your package.json

    ```json
      "scripts": {
            "start": "webpack serve --open"
        },
    ```


    - Start the Server

    ```sh
    npm start
    ```
