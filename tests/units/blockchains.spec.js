import Blockchains from '@tokelia/web3-blockchains'
import Token from 'src'
import { supported } from 'src/blockchains'

describe('supported blockchains', () => {

  it('includes basesepolia as an EVM chain', () => {
    expect(supported).toContain('basesepolia')
    expect(supported.evm).toContain('basesepolia')
  })

  it('builds a native token for basesepolia', () => {
    const token = new Token({ blockchain: 'basesepolia', address: Blockchains.basesepolia.currency.address })
    expect(token.blockchain).toEqual('basesepolia')
    expect(token.address).toEqual(Blockchains.basesepolia.currency.address)
  })
})
