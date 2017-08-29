Bcccore Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/bcccore-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/bcccore-payment-protocol)
[![Build Status](https://img.shields.io/travis/owstack/bcccore-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bcccore-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bcccore-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/owstack/bcccore-payment-protocol)

A module for [bcccore](https://github.com/owstack/bcccore) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Attribution

This repository was created by copy forking [bitcore-payment-protocol commit b086fc6](https://github.com/bitpay/bitcore-payment-protocol/commit/b086fc64ff8e19230ff4352ef0af9af2837bcc46).

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install bcccore-lib
npm install bcccore-payment-protocol
```

```sh
bower install bcccore-lib
bower install bcccore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://bcccore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('bcccore-payment-protocol');

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

See [CONTRIBUTING.md](https://github.com/owstack/bcccore/blob/master/CONTRIBUTING.md) on the main bcccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bcccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.
