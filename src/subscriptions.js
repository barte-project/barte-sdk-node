'use strict';

const BaseAPI = require('./base');

class Subscriptions extends BaseAPI {
  constructor(barte) {
    super(barte, 'subscriptions');
  }
}

module.exports = Subscriptions;
