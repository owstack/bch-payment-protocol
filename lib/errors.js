'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bch-payment-protocol Module: {0}'
};

module.exports = require('@owstack/bch-lib').errors.extend(spec);
