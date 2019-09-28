# briefcase 💼 [![Build Status](https://travis-ci.org/rubixibuc/briefcase.svg?branch=master)](https://travis-ci.org/rubixibuc/briefcase) [![Coverage Status](https://coveralls.io/repos/github/rubixibuc/briefcase/badge.svg?branch=master)](https://coveralls.io/github/rubixibuc/briefcase?branch=master)

_Visually hidden case formatting_

### Getting started

#### Installation

```shell script
npm i @rubixibuc/briefcase
```

#### Example

```ecmascript 6
import { encode, decode } from "@rubixibuc/briefcase"

// passing anything other than a non-empty string
// to either encode() or decode() will return the same value back

// string encoded to non-printable characters while remaining parsable
const encoded = encode("abc")
const decoded = decode(encoded)

// decoded === "abc"
```
