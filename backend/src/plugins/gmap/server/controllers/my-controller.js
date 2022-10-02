'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('gmap')
      .service('myService')
      .getWelcomeMessage();
  },
});
