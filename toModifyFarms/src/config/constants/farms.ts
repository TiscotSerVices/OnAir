import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ONA',
    lpAddresses: {
      97: '',
      56: '0xa47f3D309E772583FE80f8BA6F123ED8b73E68a3',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xa47f3D309E772583FE80f8BA6F123ED8b73E68a3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'ONA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1386328858F391B08F97a4129657165A8990bc7C',   // lp address token-bnb
    },
    tokenSymbol: 'ONA',
    tokenAddresses: {
      97: '',
      56: '0xa47f3D309E772583FE80f8BA6F123ED8b73E68a3', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
