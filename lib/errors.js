'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bcccore-payment-protocol Module: {0}'
};

module.exports = require('bcccore-lib').errors.extend(spec);
