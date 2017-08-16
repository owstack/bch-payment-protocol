Btccore Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/btccore-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/btccore-payment-protocol)
[![Build Status](https://img.shields.io/travis/owstack/btccore-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/btccore-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/owstack/btccore-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/owstack/btccore-payment-protocol)

A module for [btccore](https://github.com/owstack/btccore) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install btccore-lib
npm install btccore-payment-protocol
```

```sh
bower install btccore-lib
bower install btccore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://btccore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('btccore-payment-protocol');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/btccore/blob/master/CONTRIBUTING.md) on the main btccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/btccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Btccore is a trademark maintained by Open Wallet Stack.
