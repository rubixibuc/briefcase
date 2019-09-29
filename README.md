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

// string encoded to zero width non-printable characters
const encoded = encode("abc")
const decoded = decode(encoded)

// decoded === "abc"
```

- `encode()` and `decode()` both return the passed value unchanged when given anything but non-empty string
- `decode()` only accepts output from `encode()` and will throw `new Error("encountered invalid character")` otherwise
