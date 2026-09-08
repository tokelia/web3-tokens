/*#if _EVM

import { request } from '@tokelia/web3-client'

/*#elif _SVM

import { request } from '@tokelia/web3-client'

//#else */

import { request } from '@tokelia/web3-client'

//#endif

import Blockchains from '@tokelia/web3-blockchains'

export default async ({ blockchain, address, account, api, id })=>{
  if (address == Blockchains[blockchain].currency.address) {
    return await request(
      {
        blockchain: blockchain,
        address: account,
        method: 'balance',
      },
    )
  } else {
    return await request(
      {
        blockchain: blockchain,
        address: address,
        method: 'balanceOf',
        api,
        params: id ? [account, id] : [account],
      },
    )
  }
}
