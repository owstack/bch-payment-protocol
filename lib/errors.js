'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on btccore-payment-protocol Module: {0}'
};

module.exports = require('btccore-lib').errors.extend(spec);
