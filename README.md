Bch Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/bch-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/bch-payment-protocol)
[![Build Status](https://img.shields.io/travis/owstack/bch-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bch-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bch-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/owstack/bch-payment-protocol)

A module for [bch](https://github.com/owstack/bch) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install bch-lib
npm install bch-payment-protocol
```

```sh
bower install bch-lib
bower install bch-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://bch.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('@owstack/bch-payment-protocol');

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

See [CONTRIBUTING.md](https://github.com/owstack/bch-lib/blob/master/CONTRIBUTING.md) on the main bch-lib repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bch-lib/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
