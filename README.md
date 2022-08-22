# Installation

```
npm i randarray
```

# Usage

```javascript
const randarray = require("randarray");
const arr = randarray(10, "int"); // Generate an array of 10 random integers
```

# Options for datatype

```javascript
randarray(10, "int"); // Generate an array of 10 random integers
randarray(10, "float"); // Generate an array of 10 random floats
randarray(10, "string"); // Generate an array of 10 random strings
randarray(10, "bool"); // Generate an array of 10 random booleans
randarray(10, "null"); // Generate an array of 10 null values
randarray(10, "undefined"); // Generate an array of 10 undefined values
randarray(10, "nan"); // Generate an array of 10 NaN values
```

# Options for length

```javascript
//Anything greater than 0 is valid
```

## License

### MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
