import * as WebSocket from 'isomorphic-ws'
import { yfinancedata } from './yfinancedata'

class YFinanceLive {
  private ws: WebSocket
  private tickers: string[]
  private ondata: (data: yfinancedata) => any

  constructor(
    tickers: string[],
    ondata: (data: yfinancedata) => any,
    onclose?: (e: WebSocket.CloseEvent) => any,
    onerror?: (e: WebSocket.ErrorEvent) => any
  ) {
    if (
      !Array.isArray(tickers) ||
      !tickers.every((ticker) => typeof ticker === 'string')
    ) {
      throw new Error('Please provide an array of strings')
    }

    this.tickers = tickers
    this.ws = new WebSocket('wss://streamer.finance.yahoo.com')
    this.ondata = ondata
    this.ws.onopen = this._onopen.bind(this)
    this.ws.onmessage = this._onmessage.bind(this)
    this.ws.onclose = onclose!
    this.ws.onerror = onerror!
  }

  private _onopen(_e: WebSocket.OpenEvent) {
    this.ws.send(JSON.stringify({ subscribe: this.tickers }))
  }

  private _onmessage(e: WebSocket.MessageEvent) {
    let data = yfinancedata.decode(Buffer.from(e.data as string, 'base64'))
    this.ondata(data)
  }

  stop() {
    this.ws.close()
  }
}

export default (
  tickers: string[],
  ondata: (data: yfinancedata) => any,
  onclose?: (e: WebSocket.CloseEvent) => any,
  onerror?: (e: WebSocket.ErrorEvent) => any
) => new YFinanceLive(tickers, ondata, onclose, onerror)

export { YFinanceLive, yfinancedata }
