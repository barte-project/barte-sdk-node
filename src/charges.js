'use strict';

const BaseAPI = require('./base');

class Charges extends BaseAPI {
  constructor(barte) {
    super(barte, 'charges');
  }
}

module.exports = Charges;
