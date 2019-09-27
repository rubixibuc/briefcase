# brief-case

_Visually hidden case formatting_

### Getting started

#### Installation

```shell script
npm i brief-case
```

#### Example

```ecmascript 6
import { encode, decode } from 'brief-case'

// string encoded to non-printable characters while remaining parsable
const encoded = encode('abc')
const decoded = decode(encoded)

// decoded === 'abc'
```

