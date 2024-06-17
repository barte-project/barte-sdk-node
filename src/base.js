'use strict';

class BaseAPI {
  constructor(barte, resourceName) {
    this.barte = barte;
    this.name = resourceName;
    this.key = resourceName.slice(0, -1); // Assuming the resource name is plural
  }

  async getByUuid(uuid) {
    const url = `/${this.name}/${uuid}`;
    const response = await this.barte.request(url, 'GET', this.key, undefined);
    return response;
  }

  async get(params = {}) {
    const url = `/${this.name}`;
    const response = await this.barte.request(url, 'GET', this.key, undefined, {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }, false, params);
    return response;
  }

  async create(params) {
    const url = `/${this.name}`;
    const response = await this.barte.request(url, 'POST', this.key, params, {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    return response;
  }

  async cancel(uuid) {
    const url = `/${this.name}/${uuid}`;
    const response = await this.barte.request(url, 'DELETE', this.key, undefined, {
      'accept': '*/*'
    });
    return response;
  }

  async refund(uuid, asFraud = true) {
    const url = `/${this.name}/${uuid}/refund`;
    const payload = {
      asFraud
    };
    const response = await this.barte.request(url, 'PATCH', this.key, payload, {
      'Content-Type': 'application/json',
      'accept': '*/*'
    });
    return response;
  }

  async calculateInstallments(params = {}) {
    const url = `/${this.name}`;
    const response = await this.barte.request(url, 'GET', this.key, undefined, {
      'accept': '*/*'
    }, false, params);
    return response;
  }

  async maxInstallments() {
    const url = `/${this.name}/max-installments`;
    const response = await this.barte.request(url, 'GET', this.key, undefined, {
      'accept': '*/*',
      'Content-Type': 'application/json'
    });
    return response;
  }

  async installmentsPayment(params = {}) {
    const url = `/${this.name}/installments-payment`;
    const response = await this.barte.request(url, 'GET', this.key, undefined, {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }, false, params);
    return response;
  }

  async updateBasicValue(subscriptionId, params = {}) {
    const url = `/${this.name}/${subscriptionId}/basic-value`;
    const response = await this.barte.request(url, 'PATCH', this.key, params, {
      'Content-Type': 'application/json',
      'accept': '*/*'
    });
    return response;
  }

  async update(uuid, params = {}) {
    const url = `/${this.name}/${uuid}`;
    const response = await this.barte.request(url, 'PUT', this.key, params, {
      'Content-Type': 'application/json',
      'accept': '*/*'
    });
    return { status: response.status };
  }

}

module.exports = BaseAPI;
