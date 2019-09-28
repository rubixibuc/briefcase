# briefcase

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

