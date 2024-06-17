'use strict';

const BaseAPI = require('./base');

class Buyers extends BaseAPI {
  constructor(barte) {
    super(barte, 'buyers');
  }
}

module.exports = Buyers;