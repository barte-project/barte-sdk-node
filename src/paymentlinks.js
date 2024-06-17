'use strict';

const BaseAPI = require('./base');

class Paymentlinks extends BaseAPI {
  constructor(barte) {
    super(barte, 'payment-links');
  }
}

module.exports = Paymentlinks;