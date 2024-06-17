'use strict';

const axios = require('axios');
const pickBy = require('lodash.pickby');

const Charges = require('./charges');
const Orders = require('./orders');
const Subscriptions = require('./subscriptions');
const Buyers = require('./buyers');
const Subseller = require('./subseller');
const Plans = require('./plans');
const Paymentlinks = require('./paymentlinks');

class Barte {
  constructor(options = {}) {
    if (!options.apiKey) {
      throw new Error('Missing or invalid options');
    }

    const env = options.env || 'sandbox';
    const version = options.version || 'v1';

    let baseUrl;
    if (env === 'prd') {
      baseUrl = `https://api.barte.com/${version}`;
    } else if (env === 'sandbox') {
      baseUrl = `https://sandbox-api.barte.com/${version}`;
    } else {
      throw new Error('Invalid environment option. Use "prd" or "sandbox".');
    }

    this.options = {
      contentType: options.contentType || 'application/json',
      page: 0,
      size: options.size || 10,
      env,
      version,
      baseUrl,
      timeout: options.timeout || 5000,
      debug: options.debug || false,
      ...options
    };

    this.registerResources();
  }

  async request(uri, method, key, data, headers, returned_field = false, params = {}) {
    let response = { result: false };

    try {
      const config = {
        url: uri,
        method,
        baseURL: this.options.baseUrl,
        headers: {
          accept: this.options.contentType,
          "X-Token-Api": `${this.options.apiKey}`,
          ...headers
        },
        params,
        data,
        timeout: this.options.timeout
      };

      if (this.options.debug && this.options.env === 'sandbox') {
        console.log(JSON.stringify(config));
      }

      const requestResponse = await axios(config);
      response.result = true;

      if (returned_field && requestResponse.data.hasOwnProperty(returned_field)) {
        response[key] = requestResponse.data[returned_field];
        response = {
          ...response,
          ...pickBy(requestResponse.data, (val, k) => k !== returned_field)
        };
      } else {
        if (requestResponse.data) {
          response[key] = requestResponse.data;
        }
      }
    } catch (request_err) {
      response.errors = request_err?.response?.data?.errors || request_err.message;
    }

    return response;
  }

  registerResources() {
    this.charges = new Charges(this);
    this.orders = new Orders(this);
    this.subscriptions = new Subscriptions(this);
    this.buyers = new Buyers(this);
    this.paymentlinks = new Paymentlinks(this);
    this.plans = new Plans(this);
    this.subseller = new Subseller(this);

  }
}

module.exports = Barte;
