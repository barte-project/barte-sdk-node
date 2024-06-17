'use strict';

const BaseAPI = require('./base');

class Orders extends BaseAPI {
  constructor(barte) {
    super(barte, 'orders');
  }
}

module.exports = Orders;
