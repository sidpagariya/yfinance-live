import * as $protobuf from 'protobufjs'
/** Properties of a yfinancedata. */
export interface Iyfinancedata {
  /** yfinancedata id */
  id?: string | null

  /** yfinancedata price */
  price?: number | null

  /** yfinancedata time */
  time?: number | Long | null

  /** yfinancedata currency */
  currency?: string | null

  /** yfinancedata exchange */
  exchange?: string | null

  /** yfinancedata quoteType */
  quoteType?: yfinancedata.QuoteType | null

  /** yfinancedata marketHours */
  marketHours?: yfinancedata.MarketHoursType | null

  /** yfinancedata changePercent */
  changePercent?: number | null

  /** yfinancedata dayVolume */
  dayVolume?: number | Long | null

  /** yfinancedata dayHigh */
  dayHigh?: number | null

  /** yfinancedata dayLow */
  dayLow?: number | null

  /** yfinancedata change */
  change?: number | null

  /** yfinancedata shortName */
  shortName?: string | null

  /** yfinancedata expireDate */
  expireDate?: number | Long | null

  /** yfinancedata openPrice */
  openPrice?: number | null

  /** yfinancedata previousClose */
  previousClose?: number | null

  /** yfinancedata strikePrice */
  strikePrice?: number | null

  /** yfinancedata underlyingSymbol */
  underlyingSymbol?: string | null

  /** yfinancedata openInterest */
  openInterest?: number | Long | null

  /** yfinancedata optionsType */
  optionsType?: yfinancedata.OptionType | null

  /** yfinancedata miniOption */
  miniOption?: number | Long | null

  /** yfinancedata lastSize */
  lastSize?: number | Long | null

  /** yfinancedata bid */
  bid?: number | null

  /** yfinancedata bidSize */
  bidSize?: number | Long | null

  /** yfinancedata ask */
  ask?: number | null

  /** yfinancedata askSize */
  askSize?: number | Long | null

  /** yfinancedata priceHint */
  priceHint?: number | Long | null

  /** yfinancedata vol_24hr */
  vol_24hr?: number | Long | null

  /** yfinancedata volAllCurrencies */
  volAllCurrencies?: number | Long | null

  /** yfinancedata fromcurrency */
  fromcurrency?: string | null

  /** yfinancedata lastMarket */
  lastMarket?: string | null

  /** yfinancedata circulatingSupply */
  circulatingSupply?: number | null

  /** yfinancedata marketcap */
  marketcap?: number | null
}

/** Represents a yfinancedata. */
export class yfinancedata implements Iyfinancedata {
  /**
   * Constructs a new yfinancedata.
   * @param [properties] Properties to set
   */
  constructor(properties?: Iyfinancedata)

  /** yfinancedata id. */
  public id: string

  /** yfinancedata price. */
  public price: number

  /** yfinancedata time. */
  public time: number | Long

  /** yfinancedata currency. */
  public currency: string

  /** yfinancedata exchange. */
  public exchange: string

  /** yfinancedata quoteType. */
  public quoteType: yfinancedata.QuoteType

  /** yfinancedata marketHours. */
  public marketHours: yfinancedata.MarketHoursType

  /** yfinancedata changePercent. */
  public changePercent: number

  /** yfinancedata dayVolume. */
  public dayVolume: number | Long

  /** yfinancedata dayHigh. */
  public dayHigh: number

  /** yfinancedata dayLow. */
  public dayLow: number

  /** yfinancedata change. */
  public change: number

  /** yfinancedata shortName. */
  public shortName: string

  /** yfinancedata expireDate. */
  public expireDate: number | Long

  /** yfinancedata openPrice. */
  public openPrice: number

  /** yfinancedata previousClose. */
  public previousClose: number

  /** yfinancedata strikePrice. */
  public strikePrice: number

  /** yfinancedata underlyingSymbol. */
  public underlyingSymbol: string

  /** yfinancedata openInterest. */
  public openInterest: number | Long

  /** yfinancedata optionsType. */
  public optionsType: yfinancedata.OptionType

  /** yfinancedata miniOption. */
  public miniOption: number | Long

  /** yfinancedata lastSize. */
  public lastSize: number | Long

  /** yfinancedata bid. */
  public bid: number

  /** yfinancedata bidSize. */
  public bidSize: number | Long

  /** yfinancedata ask. */
  public ask: number

  /** yfinancedata askSize. */
  public askSize: number | Long

  /** yfinancedata priceHint. */
  public priceHint: number | Long

  /** yfinancedata vol_24hr. */
  public vol_24hr: number | Long

  /** yfinancedata volAllCurrencies. */
  public volAllCurrencies: number | Long

  /** yfinancedata fromcurrency. */
  public fromcurrency: string

  /** yfinancedata lastMarket. */
  public lastMarket: string

  /** yfinancedata circulatingSupply. */
  public circulatingSupply: number

  /** yfinancedata marketcap. */
  public marketcap: number

  /**
   * Creates a new yfinancedata instance using the specified properties.
   * @param [properties] Properties to set
   * @returns yfinancedata instance
   */
  public static create(properties?: Iyfinancedata): yfinancedata

  /**
   * Encodes the specified yfinancedata message. Does not implicitly {@link yfinancedata.verify|verify} messages.
   * @param message yfinancedata message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: Iyfinancedata,
    writer?: $protobuf.Writer
  ): $protobuf.Writer

  /**
   * Encodes the specified yfinancedata message, length delimited. Does not implicitly {@link yfinancedata.verify|verify} messages.
   * @param message yfinancedata message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: Iyfinancedata,
    writer?: $protobuf.Writer
  ): $protobuf.Writer

  /**
   * Decodes a yfinancedata message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns yfinancedata
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): yfinancedata

  /**
   * Decodes a yfinancedata message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns yfinancedata
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): yfinancedata

  /**
   * Verifies a yfinancedata message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null

  /**
   * Creates a yfinancedata message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns yfinancedata
   */
  public static fromObject(object: { [k: string]: any }): yfinancedata

  /**
   * Creates a plain object from a yfinancedata message. Also converts values to other types if specified.
   * @param message yfinancedata
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: yfinancedata,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any }

  /**
   * Converts this yfinancedata to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any }
}

export namespace yfinancedata {
  /** QuoteType enum. */
  enum QuoteType {
    NONE = 0,
    ALTSYMBOL = 5,
    HEARTBEAT = 7,
    EQUITY = 8,
    INDEX = 9,
    MUTUALFUND = 11,
    MONEYMARKET = 12,
    OPTION = 13,
    CURRENCY = 14,
    WARRANT = 15,
    BOND = 17,
    FUTURE = 18,
    ETF = 20,
    COMMODITY = 23,
    ECNQUOTE = 28,
    CRYPTOCURRENCY = 41,
    INDICATOR = 42,
    INDUSTRY = 1000,
  }

  /** OptionType enum. */
  enum OptionType {
    CALL = 0,
    PUT = 1,
  }

  /** MarketHoursType enum. */
  enum MarketHoursType {
    PRE_MARKET = 0,
    REGULAR_MARKET = 1,
    POST_MARKET = 2,
    EXTENDED_HOURS_MARKET = 3,
  }
}
