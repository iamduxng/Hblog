'use strict';

const pluginPkg = require('../package.json');

const name = pluginPkg.strapi.name;

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'map-field',
    plugin: name,
    type: 'string',
  });
};
