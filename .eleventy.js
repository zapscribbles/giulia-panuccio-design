const htmlmin = require('html-minifier');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const now = String(Date.now());

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add custom filters
    eleventyConfig.addNunjucksFilter('arrayElemsAsVars', function (array) {
        var output = '';
        array.forEach((element, i, arr) => {
            output += element;
            if (i + 1 < arr.length) {
                output += ', ';
            }
        });
        return output;
    });
    eleventyConfig.addNunjucksFilter('arrayElemsAsStrs', function (array) {
        var output = '';
        array.forEach((element, i, arr) => {
            output += "'" + element + "'";
            if (i + 1 < arr.length) {
                output += ', ';
            }
        });
        return output;
    });

    // Setup files
    eleventyConfig.addWatchTarget('./_tmp/style.css');
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './css/style.css' });
    eleventyConfig.addPassthroughCopy('src/common-js/*.js');
    eleventyConfig.addPassthroughCopy('src/**/*.js');
    eleventyConfig.addPassthroughCopy({ 'src/_data/*.json': 'data' });
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy('projects');

    // This adds a variable that can be used in the template. In this case, we use build time to identify the current version of the site
    eleventyConfig.addShortcode('version', function () {
        return now;
    });

    eleventyConfig.addFilter('log', value => {
        console.log(value);
    });

    // If being deployed (build rather than start), minify everything
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }
        return content;
    });

    return {
        dir: {
            input: 'src',
            layouts: '_includes/layouts',
            output: '_site',
        },
    };
};
