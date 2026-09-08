/*#if _EVM

import { request } from '@tokelia/web3-client'

/*#elif _SVM

import { request } from '@tokelia/web3-client'

//#else */

import { request } from '@tokelia/web3-client'

//#endif

export default ({ blockchain, address, api, owner, spender })=>{
  return request(
    {
      blockchain,
      address,
      api,
      method: 'allowance',
      params: [owner, spender],
      // no cache for allowance!
    },
  )
}
