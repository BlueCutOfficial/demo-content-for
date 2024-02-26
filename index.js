'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function(type) {
    if (![
      'head',
      'test-head',
      'head-footer',
      'test-head-footer',
      'body',
      'test-body',
      'body-footer',
      'test-body-footer'
    ].includes(type)) {
      return '';
    }
    return `<p>This snippet replaces content-for "${type}" in the app index.html</p>`;
  },
};
