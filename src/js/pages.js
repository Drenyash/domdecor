const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Includes
const head = fs.readFileSync('src/includes/head.html');
const sectionHeader = fs.readFileSync('src/includes/section-header.html');
const sectionFooter = fs.readFileSync('src/includes/section-footer.html');

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Dranik",
        head,
        sectionHeader,
        sectionFooter
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/page.html",
        filename: "page.html",
        inject: "body",
        title: "Title child page | Dranik",
        head,
        sectionHeader,
        sectionFooter
    })
];