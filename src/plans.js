'use strict';

const BaseAPI = require('./base');

class Plans extends BaseAPI {
  constructor(barte) {
    super(barte, 'plans');
  }
}

module.exports = Plans;