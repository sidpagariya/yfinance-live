import * as WebSocket from 'ws'
import YFinance from './index'
jest.mock('ws')

describe('YFinance', () => {
  it('should throw an error if specified tickers are not an array', () => {
    expect(() => {
      YFinance('any' as any, () => {})
    }).toThrow(new Error('Please provide an array of strings'))
  })

  it('should throw an error if incorrect an incorrect ticker component type is specified', () => {
    expect(() => {
      YFinance(['ticker', 8] as any, () => {})
    }).toThrow(new Error('Please provide an array of strings'))
  })

  it('should close websocket when close is called', () => {
    let yf = YFinance(['ticker'], () => {})
    yf.stop()
    expect(WebSocket.prototype.close).toBeCalled()
  })
})
