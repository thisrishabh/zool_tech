'use strict';

/**
 * recent-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-blog.recent-blog');
