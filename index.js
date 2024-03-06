'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (type) {
    switch (type) {
      case 'head':
      case 'test-head':
      case 'head-footer':
      case 'test-head-footer':
        return `<script>console.log('The content-for "${type}" has been replaced by this console.log')</script>`;
      case 'body':
        return '<p>Have a look at the debugger console 👀</p>';
      case 'body-footer':
        return '<p>Type "view-source:" before the current URL to see how the HTML looks like</p>';
      case 'test-body':
      case 'test-body-footer':
        return `<p>This snippet replaces content-for "${type}" in the app index.html</p>`;
      case 'fox':
        return `
          <script>console.log(\`
This is a multiline log.
The string is built using back quotes.
\`);
          </script>`;
      default:
        return '';
    }
  },
};
