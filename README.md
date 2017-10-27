Btc Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/btc-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/btc-payment-protocol)
[![Build Status](https://img.shields.io/travis/owstack/btc-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/btc-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/owstack/btc-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/owstack/btc-payment-protocol)

A module for [btc](https://github.com/owstack/btc) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Attribution

This repository was created by copy forking [bitcore-payment-protocol commit b086fc6](https://github.com/bitpay/bitcore-payment-protocol/commit/b086fc64ff8e19230ff4352ef0af9af2837bcc46).

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install btc-lib
npm install btc-payment-protocol
```

```sh
bower install btc-lib
bower install btc-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://btc.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('btc-payment-protocol');

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

See [CONTRIBUTING.md](https://github.com/owstack/btc-lib/blob/master/CONTRIBUTING.md) on the main btc-lib repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/btc-lib/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
