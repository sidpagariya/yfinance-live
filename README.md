[![NPM](https://img.shields.io/npm/v/yfinance-live.svg)](https://www.npmjs.com/package/yfinance-live)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# yfinance-live

> Yahoo Finance Live Data on Node.js with WebSocket

## Installation

### npm

```bash
npm install yfinance-live
```

### yarn

```bash
yarn add yfinance-live
```

## Usage

### JavaScript

Example using the default import:

```js
var YFinance = require('yfinance-live')

function onchange(data) {
  console.log(data)
}
let yfinanceObj = YFinance(['GOOGL', 'AAPL', 'TSLA'], onchange)
```

Example using the YFinanceLive class import:

```js
var { YFinanceLive } = require('yfinance-live')

function onchange(data) {
  console.log(data)
}
let yfinanceObj = new YFinanceLive(['GOOGL', 'AAPL', 'TSLA'], onchange)
```

### TypeScript

Example using the default import:

```ts
import YFinance, { yfinancedata } from 'yfinance-live'
function onchange(data: yfinancedata) {
  console.log(yfinancedata)
}
let yfinanceObj = YFinance(['GOOGL', 'AAPL', 'TSLA'], onchange)
```

Example using the YFinanceLive class import:

```ts
import { YFinanceLive, yfinancedata } from 'yfinance-live'
function onchange(data: yfinancedata) {
  console.log(yfinancedata)
}
let yfinanceObj = new YFinanceLive(['GOOGL', 'AAPL', 'TSLA'], onchange)
```
