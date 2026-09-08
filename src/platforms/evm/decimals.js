/*#if _EVM

import { request } from '@tokelia/web3-client'

/*#elif _SVM

import { request } from '@tokelia/web3-client'

//#else */

import { request } from '@tokelia/web3-client'

//#endif

export default ({ blockchain, address, api })=>{
  return request({
    blockchain,
    address,
    api,
    method: 'decimals',
    cache: 86400000, // 1 day
  })
}
