'use strict';

const BaseAPI = require('./base');

class Subseller extends BaseAPI {
  constructor(barte) {
    super(barte, 'seller/subseller');
  }
}

module.exports = Subseller;