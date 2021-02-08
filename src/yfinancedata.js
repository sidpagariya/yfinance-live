/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.yfinancedata = (function () {
  /**
   * Properties of a yfinancedata.
   * @exports Iyfinancedata
   * @interface Iyfinancedata
   * @property {string|null} [id] yfinancedata id
   * @property {number|null} [price] yfinancedata price
   * @property {number|Long|null} [time] yfinancedata time
   * @property {string|null} [currency] yfinancedata currency
   * @property {string|null} [exchange] yfinancedata exchange
   * @property {yfinancedata.QuoteType|null} [quoteType] yfinancedata quoteType
   * @property {yfinancedata.MarketHoursType|null} [marketHours] yfinancedata marketHours
   * @property {number|null} [changePercent] yfinancedata changePercent
   * @property {number|Long|null} [dayVolume] yfinancedata dayVolume
   * @property {number|null} [dayHigh] yfinancedata dayHigh
   * @property {number|null} [dayLow] yfinancedata dayLow
   * @property {number|null} [change] yfinancedata change
   * @property {string|null} [shortName] yfinancedata shortName
   * @property {number|Long|null} [expireDate] yfinancedata expireDate
   * @property {number|null} [openPrice] yfinancedata openPrice
   * @property {number|null} [previousClose] yfinancedata previousClose
   * @property {number|null} [strikePrice] yfinancedata strikePrice
   * @property {string|null} [underlyingSymbol] yfinancedata underlyingSymbol
   * @property {number|Long|null} [openInterest] yfinancedata openInterest
   * @property {yfinancedata.OptionType|null} [optionsType] yfinancedata optionsType
   * @property {number|Long|null} [miniOption] yfinancedata miniOption
   * @property {number|Long|null} [lastSize] yfinancedata lastSize
   * @property {number|null} [bid] yfinancedata bid
   * @property {number|Long|null} [bidSize] yfinancedata bidSize
   * @property {number|null} [ask] yfinancedata ask
   * @property {number|Long|null} [askSize] yfinancedata askSize
   * @property {number|Long|null} [priceHint] yfinancedata priceHint
   * @property {number|Long|null} [vol_24hr] yfinancedata vol_24hr
   * @property {number|Long|null} [volAllCurrencies] yfinancedata volAllCurrencies
   * @property {string|null} [fromcurrency] yfinancedata fromcurrency
   * @property {string|null} [lastMarket] yfinancedata lastMarket
   * @property {number|null} [circulatingSupply] yfinancedata circulatingSupply
   * @property {number|null} [marketcap] yfinancedata marketcap
   */

  /**
   * Constructs a new yfinancedata.
   * @exports yfinancedata
   * @classdesc Represents a yfinancedata.
   * @implements Iyfinancedata
   * @constructor
   * @param {Iyfinancedata=} [properties] Properties to set
   */
  function yfinancedata(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
  }

  /**
   * yfinancedata id.
   * @member {string} id
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.id = ''

  /**
   * yfinancedata price.
   * @member {number} price
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.price = 0

  /**
   * yfinancedata time.
   * @member {number|Long} time
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.time = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata currency.
   * @member {string} currency
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.currency = ''

  /**
   * yfinancedata exchange.
   * @member {string} exchange
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.exchange = ''

  /**
   * yfinancedata quoteType.
   * @member {yfinancedata.QuoteType} quoteType
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.quoteType = 0

  /**
   * yfinancedata marketHours.
   * @member {yfinancedata.MarketHoursType} marketHours
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.marketHours = 0

  /**
   * yfinancedata changePercent.
   * @member {number} changePercent
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.changePercent = 0

  /**
   * yfinancedata dayVolume.
   * @member {number|Long} dayVolume
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.dayVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata dayHigh.
   * @member {number} dayHigh
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.dayHigh = 0

  /**
   * yfinancedata dayLow.
   * @member {number} dayLow
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.dayLow = 0

  /**
   * yfinancedata change.
   * @member {number} change
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.change = 0

  /**
   * yfinancedata shortName.
   * @member {string} shortName
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.shortName = ''

  /**
   * yfinancedata expireDate.
   * @member {number|Long} expireDate
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.expireDate = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata openPrice.
   * @member {number} openPrice
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.openPrice = 0

  /**
   * yfinancedata previousClose.
   * @member {number} previousClose
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.previousClose = 0

  /**
   * yfinancedata strikePrice.
   * @member {number} strikePrice
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.strikePrice = 0

  /**
   * yfinancedata underlyingSymbol.
   * @member {string} underlyingSymbol
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.underlyingSymbol = ''

  /**
   * yfinancedata openInterest.
   * @member {number|Long} openInterest
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.openInterest = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata optionsType.
   * @member {yfinancedata.OptionType} optionsType
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.optionsType = 0

  /**
   * yfinancedata miniOption.
   * @member {number|Long} miniOption
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.miniOption = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata lastSize.
   * @member {number|Long} lastSize
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.lastSize = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata bid.
   * @member {number} bid
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.bid = 0

  /**
   * yfinancedata bidSize.
   * @member {number|Long} bidSize
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.bidSize = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata ask.
   * @member {number} ask
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.ask = 0

  /**
   * yfinancedata askSize.
   * @member {number|Long} askSize
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.askSize = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata priceHint.
   * @member {number|Long} priceHint
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.priceHint = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata vol_24hr.
   * @member {number|Long} vol_24hr
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.vol_24hr = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata volAllCurrencies.
   * @member {number|Long} volAllCurrencies
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.volAllCurrencies = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0

  /**
   * yfinancedata fromcurrency.
   * @member {string} fromcurrency
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.fromcurrency = ''

  /**
   * yfinancedata lastMarket.
   * @member {string} lastMarket
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.lastMarket = ''

  /**
   * yfinancedata circulatingSupply.
   * @member {number} circulatingSupply
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.circulatingSupply = 0

  /**
   * yfinancedata marketcap.
   * @member {number} marketcap
   * @memberof yfinancedata
   * @instance
   */
  yfinancedata.prototype.marketcap = 0

  /**
   * Creates a new yfinancedata instance using the specified properties.
   * @function create
   * @memberof yfinancedata
   * @static
   * @param {Iyfinancedata=} [properties] Properties to set
   * @returns {yfinancedata} yfinancedata instance
   */
  yfinancedata.create = function create(properties) {
    return new yfinancedata(properties)
  }

  /**
   * Encodes the specified yfinancedata message. Does not implicitly {@link yfinancedata.verify|verify} messages.
   * @function encode
   * @memberof yfinancedata
   * @static
   * @param {Iyfinancedata} message yfinancedata message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  yfinancedata.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create()
    if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id)
    if (message.price != null && Object.hasOwnProperty.call(message, 'price'))
      writer.uint32(/* id 2, wireType 5 =*/ 21).float(message.price)
    if (message.time != null && Object.hasOwnProperty.call(message, 'time'))
      writer.uint32(/* id 3, wireType 0 =*/ 24).sint64(message.time)
    if (
      message.currency != null &&
      Object.hasOwnProperty.call(message, 'currency')
    )
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.currency)
    if (
      message.exchange != null &&
      Object.hasOwnProperty.call(message, 'exchange')
    )
      writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.exchange)
    if (
      message.quoteType != null &&
      Object.hasOwnProperty.call(message, 'quoteType')
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.quoteType)
    if (
      message.marketHours != null &&
      Object.hasOwnProperty.call(message, 'marketHours')
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.marketHours)
    if (
      message.changePercent != null &&
      Object.hasOwnProperty.call(message, 'changePercent')
    )
      writer.uint32(/* id 8, wireType 5 =*/ 69).float(message.changePercent)
    if (
      message.dayVolume != null &&
      Object.hasOwnProperty.call(message, 'dayVolume')
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).sint64(message.dayVolume)
    if (
      message.dayHigh != null &&
      Object.hasOwnProperty.call(message, 'dayHigh')
    )
      writer.uint32(/* id 10, wireType 5 =*/ 85).float(message.dayHigh)
    if (message.dayLow != null && Object.hasOwnProperty.call(message, 'dayLow'))
      writer.uint32(/* id 11, wireType 5 =*/ 93).float(message.dayLow)
    if (message.change != null && Object.hasOwnProperty.call(message, 'change'))
      writer.uint32(/* id 12, wireType 5 =*/ 101).float(message.change)
    if (
      message.shortName != null &&
      Object.hasOwnProperty.call(message, 'shortName')
    )
      writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.shortName)
    if (
      message.expireDate != null &&
      Object.hasOwnProperty.call(message, 'expireDate')
    )
      writer.uint32(/* id 14, wireType 0 =*/ 112).sint64(message.expireDate)
    if (
      message.openPrice != null &&
      Object.hasOwnProperty.call(message, 'openPrice')
    )
      writer.uint32(/* id 15, wireType 5 =*/ 125).float(message.openPrice)
    if (
      message.previousClose != null &&
      Object.hasOwnProperty.call(message, 'previousClose')
    )
      writer.uint32(/* id 16, wireType 5 =*/ 133).float(message.previousClose)
    if (
      message.strikePrice != null &&
      Object.hasOwnProperty.call(message, 'strikePrice')
    )
      writer.uint32(/* id 17, wireType 5 =*/ 141).float(message.strikePrice)
    if (
      message.underlyingSymbol != null &&
      Object.hasOwnProperty.call(message, 'underlyingSymbol')
    )
      writer
        .uint32(/* id 18, wireType 2 =*/ 146)
        .string(message.underlyingSymbol)
    if (
      message.openInterest != null &&
      Object.hasOwnProperty.call(message, 'openInterest')
    )
      writer.uint32(/* id 19, wireType 0 =*/ 152).sint64(message.openInterest)
    if (
      message.optionsType != null &&
      Object.hasOwnProperty.call(message, 'optionsType')
    )
      writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.optionsType)
    if (
      message.miniOption != null &&
      Object.hasOwnProperty.call(message, 'miniOption')
    )
      writer.uint32(/* id 21, wireType 0 =*/ 168).sint64(message.miniOption)
    if (
      message.lastSize != null &&
      Object.hasOwnProperty.call(message, 'lastSize')
    )
      writer.uint32(/* id 22, wireType 0 =*/ 176).sint64(message.lastSize)
    if (message.bid != null && Object.hasOwnProperty.call(message, 'bid'))
      writer.uint32(/* id 23, wireType 5 =*/ 189).float(message.bid)
    if (
      message.bidSize != null &&
      Object.hasOwnProperty.call(message, 'bidSize')
    )
      writer.uint32(/* id 24, wireType 0 =*/ 192).sint64(message.bidSize)
    if (message.ask != null && Object.hasOwnProperty.call(message, 'ask'))
      writer.uint32(/* id 25, wireType 5 =*/ 205).float(message.ask)
    if (
      message.askSize != null &&
      Object.hasOwnProperty.call(message, 'askSize')
    )
      writer.uint32(/* id 26, wireType 0 =*/ 208).sint64(message.askSize)
    if (
      message.priceHint != null &&
      Object.hasOwnProperty.call(message, 'priceHint')
    )
      writer.uint32(/* id 27, wireType 0 =*/ 216).sint64(message.priceHint)
    if (
      message.vol_24hr != null &&
      Object.hasOwnProperty.call(message, 'vol_24hr')
    )
      writer.uint32(/* id 28, wireType 0 =*/ 224).sint64(message.vol_24hr)
    if (
      message.volAllCurrencies != null &&
      Object.hasOwnProperty.call(message, 'volAllCurrencies')
    )
      writer
        .uint32(/* id 29, wireType 0 =*/ 232)
        .sint64(message.volAllCurrencies)
    if (
      message.fromcurrency != null &&
      Object.hasOwnProperty.call(message, 'fromcurrency')
    )
      writer.uint32(/* id 30, wireType 2 =*/ 242).string(message.fromcurrency)
    if (
      message.lastMarket != null &&
      Object.hasOwnProperty.call(message, 'lastMarket')
    )
      writer.uint32(/* id 31, wireType 2 =*/ 250).string(message.lastMarket)
    if (
      message.circulatingSupply != null &&
      Object.hasOwnProperty.call(message, 'circulatingSupply')
    )
      writer
        .uint32(/* id 32, wireType 1 =*/ 257)
        .double(message.circulatingSupply)
    if (
      message.marketcap != null &&
      Object.hasOwnProperty.call(message, 'marketcap')
    )
      writer.uint32(/* id 33, wireType 1 =*/ 265).double(message.marketcap)
    return writer
  }

  /**
   * Encodes the specified yfinancedata message, length delimited. Does not implicitly {@link yfinancedata.verify|verify} messages.
   * @function encodeDelimited
   * @memberof yfinancedata
   * @static
   * @param {Iyfinancedata} message yfinancedata message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  yfinancedata.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
   * Decodes a yfinancedata message from the specified reader or buffer.
   * @function decode
   * @memberof yfinancedata
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {yfinancedata} yfinancedata
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  yfinancedata.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.yfinancedata()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.price = reader.float()
          break
        case 3:
          message.time = reader.sint64()
          break
        case 4:
          message.currency = reader.string()
          break
        case 5:
          message.exchange = reader.string()
          break
        case 6:
          message.quoteType = reader.int32()
          break
        case 7:
          message.marketHours = reader.int32()
          break
        case 8:
          message.changePercent = reader.float()
          break
        case 9:
          message.dayVolume = reader.sint64()
          break
        case 10:
          message.dayHigh = reader.float()
          break
        case 11:
          message.dayLow = reader.float()
          break
        case 12:
          message.change = reader.float()
          break
        case 13:
          message.shortName = reader.string()
          break
        case 14:
          message.expireDate = reader.sint64()
          break
        case 15:
          message.openPrice = reader.float()
          break
        case 16:
          message.previousClose = reader.float()
          break
        case 17:
          message.strikePrice = reader.float()
          break
        case 18:
          message.underlyingSymbol = reader.string()
          break
        case 19:
          message.openInterest = reader.sint64()
          break
        case 20:
          message.optionsType = reader.int32()
          break
        case 21:
          message.miniOption = reader.sint64()
          break
        case 22:
          message.lastSize = reader.sint64()
          break
        case 23:
          message.bid = reader.float()
          break
        case 24:
          message.bidSize = reader.sint64()
          break
        case 25:
          message.ask = reader.float()
          break
        case 26:
          message.askSize = reader.sint64()
          break
        case 27:
          message.priceHint = reader.sint64()
          break
        case 28:
          message.vol_24hr = reader.sint64()
          break
        case 29:
          message.volAllCurrencies = reader.sint64()
          break
        case 30:
          message.fromcurrency = reader.string()
          break
        case 31:
          message.lastMarket = reader.string()
          break
        case 32:
          message.circulatingSupply = reader.double()
          break
        case 33:
          message.marketcap = reader.double()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
   * Decodes a yfinancedata message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof yfinancedata
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {yfinancedata} yfinancedata
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  yfinancedata.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader)
    return this.decode(reader, reader.uint32())
  }

  /**
   * Verifies a yfinancedata message.
   * @function verify
   * @memberof yfinancedata
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  yfinancedata.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected'
    if (message.id != null && message.hasOwnProperty('id'))
      if (!$util.isString(message.id)) return 'id: string expected'
    if (message.price != null && message.hasOwnProperty('price'))
      if (typeof message.price !== 'number') return 'price: number expected'
    if (message.time != null && message.hasOwnProperty('time'))
      if (
        !$util.isInteger(message.time) &&
        !(
          message.time &&
          $util.isInteger(message.time.low) &&
          $util.isInteger(message.time.high)
        )
      )
        return 'time: integer|Long expected'
    if (message.currency != null && message.hasOwnProperty('currency'))
      if (!$util.isString(message.currency)) return 'currency: string expected'
    if (message.exchange != null && message.hasOwnProperty('exchange'))
      if (!$util.isString(message.exchange)) return 'exchange: string expected'
    if (message.quoteType != null && message.hasOwnProperty('quoteType'))
      switch (message.quoteType) {
        default:
          return 'quoteType: enum value expected'
        case 0:
        case 5:
        case 7:
        case 8:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 17:
        case 18:
        case 20:
        case 23:
        case 28:
        case 41:
        case 42:
        case 1000:
          break
      }
    if (message.marketHours != null && message.hasOwnProperty('marketHours'))
      switch (message.marketHours) {
        default:
          return 'marketHours: enum value expected'
        case 0:
        case 1:
        case 2:
        case 3:
          break
      }
    if (
      message.changePercent != null &&
      message.hasOwnProperty('changePercent')
    )
      if (typeof message.changePercent !== 'number')
        return 'changePercent: number expected'
    if (message.dayVolume != null && message.hasOwnProperty('dayVolume'))
      if (
        !$util.isInteger(message.dayVolume) &&
        !(
          message.dayVolume &&
          $util.isInteger(message.dayVolume.low) &&
          $util.isInteger(message.dayVolume.high)
        )
      )
        return 'dayVolume: integer|Long expected'
    if (message.dayHigh != null && message.hasOwnProperty('dayHigh'))
      if (typeof message.dayHigh !== 'number') return 'dayHigh: number expected'
    if (message.dayLow != null && message.hasOwnProperty('dayLow'))
      if (typeof message.dayLow !== 'number') return 'dayLow: number expected'
    if (message.change != null && message.hasOwnProperty('change'))
      if (typeof message.change !== 'number') return 'change: number expected'
    if (message.shortName != null && message.hasOwnProperty('shortName'))
      if (!$util.isString(message.shortName))
        return 'shortName: string expected'
    if (message.expireDate != null && message.hasOwnProperty('expireDate'))
      if (
        !$util.isInteger(message.expireDate) &&
        !(
          message.expireDate &&
          $util.isInteger(message.expireDate.low) &&
          $util.isInteger(message.expireDate.high)
        )
      )
        return 'expireDate: integer|Long expected'
    if (message.openPrice != null && message.hasOwnProperty('openPrice'))
      if (typeof message.openPrice !== 'number')
        return 'openPrice: number expected'
    if (
      message.previousClose != null &&
      message.hasOwnProperty('previousClose')
    )
      if (typeof message.previousClose !== 'number')
        return 'previousClose: number expected'
    if (message.strikePrice != null && message.hasOwnProperty('strikePrice'))
      if (typeof message.strikePrice !== 'number')
        return 'strikePrice: number expected'
    if (
      message.underlyingSymbol != null &&
      message.hasOwnProperty('underlyingSymbol')
    )
      if (!$util.isString(message.underlyingSymbol))
        return 'underlyingSymbol: string expected'
    if (message.openInterest != null && message.hasOwnProperty('openInterest'))
      if (
        !$util.isInteger(message.openInterest) &&
        !(
          message.openInterest &&
          $util.isInteger(message.openInterest.low) &&
          $util.isInteger(message.openInterest.high)
        )
      )
        return 'openInterest: integer|Long expected'
    if (message.optionsType != null && message.hasOwnProperty('optionsType'))
      switch (message.optionsType) {
        default:
          return 'optionsType: enum value expected'
        case 0:
        case 1:
          break
      }
    if (message.miniOption != null && message.hasOwnProperty('miniOption'))
      if (
        !$util.isInteger(message.miniOption) &&
        !(
          message.miniOption &&
          $util.isInteger(message.miniOption.low) &&
          $util.isInteger(message.miniOption.high)
        )
      )
        return 'miniOption: integer|Long expected'
    if (message.lastSize != null && message.hasOwnProperty('lastSize'))
      if (
        !$util.isInteger(message.lastSize) &&
        !(
          message.lastSize &&
          $util.isInteger(message.lastSize.low) &&
          $util.isInteger(message.lastSize.high)
        )
      )
        return 'lastSize: integer|Long expected'
    if (message.bid != null && message.hasOwnProperty('bid'))
      if (typeof message.bid !== 'number') return 'bid: number expected'
    if (message.bidSize != null && message.hasOwnProperty('bidSize'))
      if (
        !$util.isInteger(message.bidSize) &&
        !(
          message.bidSize &&
          $util.isInteger(message.bidSize.low) &&
          $util.isInteger(message.bidSize.high)
        )
      )
        return 'bidSize: integer|Long expected'
    if (message.ask != null && message.hasOwnProperty('ask'))
      if (typeof message.ask !== 'number') return 'ask: number expected'
    if (message.askSize != null && message.hasOwnProperty('askSize'))
      if (
        !$util.isInteger(message.askSize) &&
        !(
          message.askSize &&
          $util.isInteger(message.askSize.low) &&
          $util.isInteger(message.askSize.high)
        )
      )
        return 'askSize: integer|Long expected'
    if (message.priceHint != null && message.hasOwnProperty('priceHint'))
      if (
        !$util.isInteger(message.priceHint) &&
        !(
          message.priceHint &&
          $util.isInteger(message.priceHint.low) &&
          $util.isInteger(message.priceHint.high)
        )
      )
        return 'priceHint: integer|Long expected'
    if (message.vol_24hr != null && message.hasOwnProperty('vol_24hr'))
      if (
        !$util.isInteger(message.vol_24hr) &&
        !(
          message.vol_24hr &&
          $util.isInteger(message.vol_24hr.low) &&
          $util.isInteger(message.vol_24hr.high)
        )
      )
        return 'vol_24hr: integer|Long expected'
    if (
      message.volAllCurrencies != null &&
      message.hasOwnProperty('volAllCurrencies')
    )
      if (
        !$util.isInteger(message.volAllCurrencies) &&
        !(
          message.volAllCurrencies &&
          $util.isInteger(message.volAllCurrencies.low) &&
          $util.isInteger(message.volAllCurrencies.high)
        )
      )
        return 'volAllCurrencies: integer|Long expected'
    if (message.fromcurrency != null && message.hasOwnProperty('fromcurrency'))
      if (!$util.isString(message.fromcurrency))
        return 'fromcurrency: string expected'
    if (message.lastMarket != null && message.hasOwnProperty('lastMarket'))
      if (!$util.isString(message.lastMarket))
        return 'lastMarket: string expected'
    if (
      message.circulatingSupply != null &&
      message.hasOwnProperty('circulatingSupply')
    )
      if (typeof message.circulatingSupply !== 'number')
        return 'circulatingSupply: number expected'
    if (message.marketcap != null && message.hasOwnProperty('marketcap'))
      if (typeof message.marketcap !== 'number')
        return 'marketcap: number expected'
    return null
  }

  /**
   * Creates a yfinancedata message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof yfinancedata
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {yfinancedata} yfinancedata
   */
  yfinancedata.fromObject = function fromObject(object) {
    if (object instanceof $root.yfinancedata) return object
    var message = new $root.yfinancedata()
    if (object.id != null) message.id = String(object.id)
    if (object.price != null) message.price = Number(object.price)
    if (object.time != null)
      if ($util.Long)
        (message.time = $util.Long.fromValue(object.time)).unsigned = false
      else if (typeof object.time === 'string')
        message.time = parseInt(object.time, 10)
      else if (typeof object.time === 'number') message.time = object.time
      else if (typeof object.time === 'object')
        message.time = new $util.LongBits(
          object.time.low >>> 0,
          object.time.high >>> 0
        ).toNumber()
    if (object.currency != null) message.currency = String(object.currency)
    if (object.exchange != null) message.exchange = String(object.exchange)
    switch (object.quoteType) {
      case 'NONE':
      case 0:
        message.quoteType = 0
        break
      case 'ALTSYMBOL':
      case 5:
        message.quoteType = 5
        break
      case 'HEARTBEAT':
      case 7:
        message.quoteType = 7
        break
      case 'EQUITY':
      case 8:
        message.quoteType = 8
        break
      case 'INDEX':
      case 9:
        message.quoteType = 9
        break
      case 'MUTUALFUND':
      case 11:
        message.quoteType = 11
        break
      case 'MONEYMARKET':
      case 12:
        message.quoteType = 12
        break
      case 'OPTION':
      case 13:
        message.quoteType = 13
        break
      case 'CURRENCY':
      case 14:
        message.quoteType = 14
        break
      case 'WARRANT':
      case 15:
        message.quoteType = 15
        break
      case 'BOND':
      case 17:
        message.quoteType = 17
        break
      case 'FUTURE':
      case 18:
        message.quoteType = 18
        break
      case 'ETF':
      case 20:
        message.quoteType = 20
        break
      case 'COMMODITY':
      case 23:
        message.quoteType = 23
        break
      case 'ECNQUOTE':
      case 28:
        message.quoteType = 28
        break
      case 'CRYPTOCURRENCY':
      case 41:
        message.quoteType = 41
        break
      case 'INDICATOR':
      case 42:
        message.quoteType = 42
        break
      case 'INDUSTRY':
      case 1000:
        message.quoteType = 1000
        break
    }
    switch (object.marketHours) {
      case 'PRE_MARKET':
      case 0:
        message.marketHours = 0
        break
      case 'REGULAR_MARKET':
      case 1:
        message.marketHours = 1
        break
      case 'POST_MARKET':
      case 2:
        message.marketHours = 2
        break
      case 'EXTENDED_HOURS_MARKET':
      case 3:
        message.marketHours = 3
        break
    }
    if (object.changePercent != null)
      message.changePercent = Number(object.changePercent)
    if (object.dayVolume != null)
      if ($util.Long)
        (message.dayVolume = $util.Long.fromValue(
          object.dayVolume
        )).unsigned = false
      else if (typeof object.dayVolume === 'string')
        message.dayVolume = parseInt(object.dayVolume, 10)
      else if (typeof object.dayVolume === 'number')
        message.dayVolume = object.dayVolume
      else if (typeof object.dayVolume === 'object')
        message.dayVolume = new $util.LongBits(
          object.dayVolume.low >>> 0,
          object.dayVolume.high >>> 0
        ).toNumber()
    if (object.dayHigh != null) message.dayHigh = Number(object.dayHigh)
    if (object.dayLow != null) message.dayLow = Number(object.dayLow)
    if (object.change != null) message.change = Number(object.change)
    if (object.shortName != null) message.shortName = String(object.shortName)
    if (object.expireDate != null)
      if ($util.Long)
        (message.expireDate = $util.Long.fromValue(
          object.expireDate
        )).unsigned = false
      else if (typeof object.expireDate === 'string')
        message.expireDate = parseInt(object.expireDate, 10)
      else if (typeof object.expireDate === 'number')
        message.expireDate = object.expireDate
      else if (typeof object.expireDate === 'object')
        message.expireDate = new $util.LongBits(
          object.expireDate.low >>> 0,
          object.expireDate.high >>> 0
        ).toNumber()
    if (object.openPrice != null) message.openPrice = Number(object.openPrice)
    if (object.previousClose != null)
      message.previousClose = Number(object.previousClose)
    if (object.strikePrice != null)
      message.strikePrice = Number(object.strikePrice)
    if (object.underlyingSymbol != null)
      message.underlyingSymbol = String(object.underlyingSymbol)
    if (object.openInterest != null)
      if ($util.Long)
        (message.openInterest = $util.Long.fromValue(
          object.openInterest
        )).unsigned = false
      else if (typeof object.openInterest === 'string')
        message.openInterest = parseInt(object.openInterest, 10)
      else if (typeof object.openInterest === 'number')
        message.openInterest = object.openInterest
      else if (typeof object.openInterest === 'object')
        message.openInterest = new $util.LongBits(
          object.openInterest.low >>> 0,
          object.openInterest.high >>> 0
        ).toNumber()
    switch (object.optionsType) {
      case 'CALL':
      case 0:
        message.optionsType = 0
        break
      case 'PUT':
      case 1:
        message.optionsType = 1
        break
    }
    if (object.miniOption != null)
      if ($util.Long)
        (message.miniOption = $util.Long.fromValue(
          object.miniOption
        )).unsigned = false
      else if (typeof object.miniOption === 'string')
        message.miniOption = parseInt(object.miniOption, 10)
      else if (typeof object.miniOption === 'number')
        message.miniOption = object.miniOption
      else if (typeof object.miniOption === 'object')
        message.miniOption = new $util.LongBits(
          object.miniOption.low >>> 0,
          object.miniOption.high >>> 0
        ).toNumber()
    if (object.lastSize != null)
      if ($util.Long)
        (message.lastSize = $util.Long.fromValue(
          object.lastSize
        )).unsigned = false
      else if (typeof object.lastSize === 'string')
        message.lastSize = parseInt(object.lastSize, 10)
      else if (typeof object.lastSize === 'number')
        message.lastSize = object.lastSize
      else if (typeof object.lastSize === 'object')
        message.lastSize = new $util.LongBits(
          object.lastSize.low >>> 0,
          object.lastSize.high >>> 0
        ).toNumber()
    if (object.bid != null) message.bid = Number(object.bid)
    if (object.bidSize != null)
      if ($util.Long)
        (message.bidSize = $util.Long.fromValue(
          object.bidSize
        )).unsigned = false
      else if (typeof object.bidSize === 'string')
        message.bidSize = parseInt(object.bidSize, 10)
      else if (typeof object.bidSize === 'number')
        message.bidSize = object.bidSize
      else if (typeof object.bidSize === 'object')
        message.bidSize = new $util.LongBits(
          object.bidSize.low >>> 0,
          object.bidSize.high >>> 0
        ).toNumber()
    if (object.ask != null) message.ask = Number(object.ask)
    if (object.askSize != null)
      if ($util.Long)
        (message.askSize = $util.Long.fromValue(
          object.askSize
        )).unsigned = false
      else if (typeof object.askSize === 'string')
        message.askSize = parseInt(object.askSize, 10)
      else if (typeof object.askSize === 'number')
        message.askSize = object.askSize
      else if (typeof object.askSize === 'object')
        message.askSize = new $util.LongBits(
          object.askSize.low >>> 0,
          object.askSize.high >>> 0
        ).toNumber()
    if (object.priceHint != null)
      if ($util.Long)
        (message.priceHint = $util.Long.fromValue(
          object.priceHint
        )).unsigned = false
      else if (typeof object.priceHint === 'string')
        message.priceHint = parseInt(object.priceHint, 10)
      else if (typeof object.priceHint === 'number')
        message.priceHint = object.priceHint
      else if (typeof object.priceHint === 'object')
        message.priceHint = new $util.LongBits(
          object.priceHint.low >>> 0,
          object.priceHint.high >>> 0
        ).toNumber()
    if (object.vol_24hr != null)
      if ($util.Long)
        (message.vol_24hr = $util.Long.fromValue(
          object.vol_24hr
        )).unsigned = false
      else if (typeof object.vol_24hr === 'string')
        message.vol_24hr = parseInt(object.vol_24hr, 10)
      else if (typeof object.vol_24hr === 'number')
        message.vol_24hr = object.vol_24hr
      else if (typeof object.vol_24hr === 'object')
        message.vol_24hr = new $util.LongBits(
          object.vol_24hr.low >>> 0,
          object.vol_24hr.high >>> 0
        ).toNumber()
    if (object.volAllCurrencies != null)
      if ($util.Long)
        (message.volAllCurrencies = $util.Long.fromValue(
          object.volAllCurrencies
        )).unsigned = false
      else if (typeof object.volAllCurrencies === 'string')
        message.volAllCurrencies = parseInt(object.volAllCurrencies, 10)
      else if (typeof object.volAllCurrencies === 'number')
        message.volAllCurrencies = object.volAllCurrencies
      else if (typeof object.volAllCurrencies === 'object')
        message.volAllCurrencies = new $util.LongBits(
          object.volAllCurrencies.low >>> 0,
          object.volAllCurrencies.high >>> 0
        ).toNumber()
    if (object.fromcurrency != null)
      message.fromcurrency = String(object.fromcurrency)
    if (object.lastMarket != null)
      message.lastMarket = String(object.lastMarket)
    if (object.circulatingSupply != null)
      message.circulatingSupply = Number(object.circulatingSupply)
    if (object.marketcap != null) message.marketcap = Number(object.marketcap)
    return message
  }

  /**
   * Creates a plain object from a yfinancedata message. Also converts values to other types if specified.
   * @function toObject
   * @memberof yfinancedata
   * @static
   * @param {yfinancedata} message yfinancedata
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  yfinancedata.toObject = function toObject(message, options) {
    if (!options) options = {}
    var object = {}
    if (options.defaults) {
      object.id = ''
      object.price = 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.time =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.time = options.longs === String ? '0' : 0
      object.currency = ''
      object.exchange = ''
      object.quoteType = options.enums === String ? 'NONE' : 0
      object.marketHours = options.enums === String ? 'PRE_MARKET' : 0
      object.changePercent = 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.dayVolume =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.dayVolume = options.longs === String ? '0' : 0
      object.dayHigh = 0
      object.dayLow = 0
      object.change = 0
      object.shortName = ''
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.expireDate =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.expireDate = options.longs === String ? '0' : 0
      object.openPrice = 0
      object.previousClose = 0
      object.strikePrice = 0
      object.underlyingSymbol = ''
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.openInterest =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.openInterest = options.longs === String ? '0' : 0
      object.optionsType = options.enums === String ? 'CALL' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.miniOption =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.miniOption = options.longs === String ? '0' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.lastSize =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.lastSize = options.longs === String ? '0' : 0
      object.bid = 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.bidSize =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.bidSize = options.longs === String ? '0' : 0
      object.ask = 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.askSize =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.askSize = options.longs === String ? '0' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.priceHint =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.priceHint = options.longs === String ? '0' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.vol_24hr =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.vol_24hr = options.longs === String ? '0' : 0
      if ($util.Long) {
        var long = new $util.Long(0, 0, false)
        object.volAllCurrencies =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long
      } else object.volAllCurrencies = options.longs === String ? '0' : 0
      object.fromcurrency = ''
      object.lastMarket = ''
      object.circulatingSupply = 0
      object.marketcap = 0
    }
    if (message.id != null && message.hasOwnProperty('id'))
      object.id = message.id
    if (message.price != null && message.hasOwnProperty('price'))
      object.price =
        options.json && !isFinite(message.price)
          ? String(message.price)
          : message.price
    if (message.time != null && message.hasOwnProperty('time'))
      if (typeof message.time === 'number')
        object.time =
          options.longs === String ? String(message.time) : message.time
      else
        object.time =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.time)
            : options.longs === Number
            ? new $util.LongBits(
                message.time.low >>> 0,
                message.time.high >>> 0
              ).toNumber()
            : message.time
    if (message.currency != null && message.hasOwnProperty('currency'))
      object.currency = message.currency
    if (message.exchange != null && message.hasOwnProperty('exchange'))
      object.exchange = message.exchange
    if (message.quoteType != null && message.hasOwnProperty('quoteType'))
      object.quoteType =
        options.enums === String
          ? $root.yfinancedata.QuoteType[message.quoteType]
          : message.quoteType
    if (message.marketHours != null && message.hasOwnProperty('marketHours'))
      object.marketHours =
        options.enums === String
          ? $root.yfinancedata.MarketHoursType[message.marketHours]
          : message.marketHours
    if (
      message.changePercent != null &&
      message.hasOwnProperty('changePercent')
    )
      object.changePercent =
        options.json && !isFinite(message.changePercent)
          ? String(message.changePercent)
          : message.changePercent
    if (message.dayVolume != null && message.hasOwnProperty('dayVolume'))
      if (typeof message.dayVolume === 'number')
        object.dayVolume =
          options.longs === String
            ? String(message.dayVolume)
            : message.dayVolume
      else
        object.dayVolume =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.dayVolume)
            : options.longs === Number
            ? new $util.LongBits(
                message.dayVolume.low >>> 0,
                message.dayVolume.high >>> 0
              ).toNumber()
            : message.dayVolume
    if (message.dayHigh != null && message.hasOwnProperty('dayHigh'))
      object.dayHigh =
        options.json && !isFinite(message.dayHigh)
          ? String(message.dayHigh)
          : message.dayHigh
    if (message.dayLow != null && message.hasOwnProperty('dayLow'))
      object.dayLow =
        options.json && !isFinite(message.dayLow)
          ? String(message.dayLow)
          : message.dayLow
    if (message.change != null && message.hasOwnProperty('change'))
      object.change =
        options.json && !isFinite(message.change)
          ? String(message.change)
          : message.change
    if (message.shortName != null && message.hasOwnProperty('shortName'))
      object.shortName = message.shortName
    if (message.expireDate != null && message.hasOwnProperty('expireDate'))
      if (typeof message.expireDate === 'number')
        object.expireDate =
          options.longs === String
            ? String(message.expireDate)
            : message.expireDate
      else
        object.expireDate =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.expireDate)
            : options.longs === Number
            ? new $util.LongBits(
                message.expireDate.low >>> 0,
                message.expireDate.high >>> 0
              ).toNumber()
            : message.expireDate
    if (message.openPrice != null && message.hasOwnProperty('openPrice'))
      object.openPrice =
        options.json && !isFinite(message.openPrice)
          ? String(message.openPrice)
          : message.openPrice
    if (
      message.previousClose != null &&
      message.hasOwnProperty('previousClose')
    )
      object.previousClose =
        options.json && !isFinite(message.previousClose)
          ? String(message.previousClose)
          : message.previousClose
    if (message.strikePrice != null && message.hasOwnProperty('strikePrice'))
      object.strikePrice =
        options.json && !isFinite(message.strikePrice)
          ? String(message.strikePrice)
          : message.strikePrice
    if (
      message.underlyingSymbol != null &&
      message.hasOwnProperty('underlyingSymbol')
    )
      object.underlyingSymbol = message.underlyingSymbol
    if (message.openInterest != null && message.hasOwnProperty('openInterest'))
      if (typeof message.openInterest === 'number')
        object.openInterest =
          options.longs === String
            ? String(message.openInterest)
            : message.openInterest
      else
        object.openInterest =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.openInterest)
            : options.longs === Number
            ? new $util.LongBits(
                message.openInterest.low >>> 0,
                message.openInterest.high >>> 0
              ).toNumber()
            : message.openInterest
    if (message.optionsType != null && message.hasOwnProperty('optionsType'))
      object.optionsType =
        options.enums === String
          ? $root.yfinancedata.OptionType[message.optionsType]
          : message.optionsType
    if (message.miniOption != null && message.hasOwnProperty('miniOption'))
      if (typeof message.miniOption === 'number')
        object.miniOption =
          options.longs === String
            ? String(message.miniOption)
            : message.miniOption
      else
        object.miniOption =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.miniOption)
            : options.longs === Number
            ? new $util.LongBits(
                message.miniOption.low >>> 0,
                message.miniOption.high >>> 0
              ).toNumber()
            : message.miniOption
    if (message.lastSize != null && message.hasOwnProperty('lastSize'))
      if (typeof message.lastSize === 'number')
        object.lastSize =
          options.longs === String ? String(message.lastSize) : message.lastSize
      else
        object.lastSize =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.lastSize)
            : options.longs === Number
            ? new $util.LongBits(
                message.lastSize.low >>> 0,
                message.lastSize.high >>> 0
              ).toNumber()
            : message.lastSize
    if (message.bid != null && message.hasOwnProperty('bid'))
      object.bid =
        options.json && !isFinite(message.bid)
          ? String(message.bid)
          : message.bid
    if (message.bidSize != null && message.hasOwnProperty('bidSize'))
      if (typeof message.bidSize === 'number')
        object.bidSize =
          options.longs === String ? String(message.bidSize) : message.bidSize
      else
        object.bidSize =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.bidSize)
            : options.longs === Number
            ? new $util.LongBits(
                message.bidSize.low >>> 0,
                message.bidSize.high >>> 0
              ).toNumber()
            : message.bidSize
    if (message.ask != null && message.hasOwnProperty('ask'))
      object.ask =
        options.json && !isFinite(message.ask)
          ? String(message.ask)
          : message.ask
    if (message.askSize != null && message.hasOwnProperty('askSize'))
      if (typeof message.askSize === 'number')
        object.askSize =
          options.longs === String ? String(message.askSize) : message.askSize
      else
        object.askSize =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.askSize)
            : options.longs === Number
            ? new $util.LongBits(
                message.askSize.low >>> 0,
                message.askSize.high >>> 0
              ).toNumber()
            : message.askSize
    if (message.priceHint != null && message.hasOwnProperty('priceHint'))
      if (typeof message.priceHint === 'number')
        object.priceHint =
          options.longs === String
            ? String(message.priceHint)
            : message.priceHint
      else
        object.priceHint =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.priceHint)
            : options.longs === Number
            ? new $util.LongBits(
                message.priceHint.low >>> 0,
                message.priceHint.high >>> 0
              ).toNumber()
            : message.priceHint
    if (message.vol_24hr != null && message.hasOwnProperty('vol_24hr'))
      if (typeof message.vol_24hr === 'number')
        object.vol_24hr =
          options.longs === String ? String(message.vol_24hr) : message.vol_24hr
      else
        object.vol_24hr =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.vol_24hr)
            : options.longs === Number
            ? new $util.LongBits(
                message.vol_24hr.low >>> 0,
                message.vol_24hr.high >>> 0
              ).toNumber()
            : message.vol_24hr
    if (
      message.volAllCurrencies != null &&
      message.hasOwnProperty('volAllCurrencies')
    )
      if (typeof message.volAllCurrencies === 'number')
        object.volAllCurrencies =
          options.longs === String
            ? String(message.volAllCurrencies)
            : message.volAllCurrencies
      else
        object.volAllCurrencies =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.volAllCurrencies)
            : options.longs === Number
            ? new $util.LongBits(
                message.volAllCurrencies.low >>> 0,
                message.volAllCurrencies.high >>> 0
              ).toNumber()
            : message.volAllCurrencies
    if (message.fromcurrency != null && message.hasOwnProperty('fromcurrency'))
      object.fromcurrency = message.fromcurrency
    if (message.lastMarket != null && message.hasOwnProperty('lastMarket'))
      object.lastMarket = message.lastMarket
    if (
      message.circulatingSupply != null &&
      message.hasOwnProperty('circulatingSupply')
    )
      object.circulatingSupply =
        options.json && !isFinite(message.circulatingSupply)
          ? String(message.circulatingSupply)
          : message.circulatingSupply
    if (message.marketcap != null && message.hasOwnProperty('marketcap'))
      object.marketcap =
        options.json && !isFinite(message.marketcap)
          ? String(message.marketcap)
          : message.marketcap
    return object
  }

  /**
   * Converts this yfinancedata to JSON.
   * @function toJSON
   * @memberof yfinancedata
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  yfinancedata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  /**
   * QuoteType enum.
   * @name yfinancedata.QuoteType
   * @enum {number}
   * @property {number} NONE=0 NONE value
   * @property {number} ALTSYMBOL=5 ALTSYMBOL value
   * @property {number} HEARTBEAT=7 HEARTBEAT value
   * @property {number} EQUITY=8 EQUITY value
   * @property {number} INDEX=9 INDEX value
   * @property {number} MUTUALFUND=11 MUTUALFUND value
   * @property {number} MONEYMARKET=12 MONEYMARKET value
   * @property {number} OPTION=13 OPTION value
   * @property {number} CURRENCY=14 CURRENCY value
   * @property {number} WARRANT=15 WARRANT value
   * @property {number} BOND=17 BOND value
   * @property {number} FUTURE=18 FUTURE value
   * @property {number} ETF=20 ETF value
   * @property {number} COMMODITY=23 COMMODITY value
   * @property {number} ECNQUOTE=28 ECNQUOTE value
   * @property {number} CRYPTOCURRENCY=41 CRYPTOCURRENCY value
   * @property {number} INDICATOR=42 INDICATOR value
   * @property {number} INDUSTRY=1000 INDUSTRY value
   */
  yfinancedata.QuoteType = (function () {
    var valuesById = {},
      values = Object.create(valuesById)
    values[(valuesById[0] = 'NONE')] = 0
    values[(valuesById[5] = 'ALTSYMBOL')] = 5
    values[(valuesById[7] = 'HEARTBEAT')] = 7
    values[(valuesById[8] = 'EQUITY')] = 8
    values[(valuesById[9] = 'INDEX')] = 9
    values[(valuesById[11] = 'MUTUALFUND')] = 11
    values[(valuesById[12] = 'MONEYMARKET')] = 12
    values[(valuesById[13] = 'OPTION')] = 13
    values[(valuesById[14] = 'CURRENCY')] = 14
    values[(valuesById[15] = 'WARRANT')] = 15
    values[(valuesById[17] = 'BOND')] = 17
    values[(valuesById[18] = 'FUTURE')] = 18
    values[(valuesById[20] = 'ETF')] = 20
    values[(valuesById[23] = 'COMMODITY')] = 23
    values[(valuesById[28] = 'ECNQUOTE')] = 28
    values[(valuesById[41] = 'CRYPTOCURRENCY')] = 41
    values[(valuesById[42] = 'INDICATOR')] = 42
    values[(valuesById[1000] = 'INDUSTRY')] = 1000
    return values
  })()

  /**
   * OptionType enum.
   * @name yfinancedata.OptionType
   * @enum {number}
   * @property {number} CALL=0 CALL value
   * @property {number} PUT=1 PUT value
   */
  yfinancedata.OptionType = (function () {
    var valuesById = {},
      values = Object.create(valuesById)
    values[(valuesById[0] = 'CALL')] = 0
    values[(valuesById[1] = 'PUT')] = 1
    return values
  })()

  /**
   * MarketHoursType enum.
   * @name yfinancedata.MarketHoursType
   * @enum {number}
   * @property {number} PRE_MARKET=0 PRE_MARKET value
   * @property {number} REGULAR_MARKET=1 REGULAR_MARKET value
   * @property {number} POST_MARKET=2 POST_MARKET value
   * @property {number} EXTENDED_HOURS_MARKET=3 EXTENDED_HOURS_MARKET value
   */
  yfinancedata.MarketHoursType = (function () {
    var valuesById = {},
      values = Object.create(valuesById)
    values[(valuesById[0] = 'PRE_MARKET')] = 0
    values[(valuesById[1] = 'REGULAR_MARKET')] = 1
    values[(valuesById[2] = 'POST_MARKET')] = 2
    values[(valuesById[3] = 'EXTENDED_HOURS_MARKET')] = 3
    return values
  })()

  return yfinancedata
})()

module.exports = $root
