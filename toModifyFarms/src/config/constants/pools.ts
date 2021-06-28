import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'ONA',
    tokenAddress: '0xa47f3D309E772583FE80f8BA6F123ED8b73E68a3',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xa47f3D309E772583FE80f8BA6F123ED8b73E68a3',  // token address
    contractAddress: {
      97: '',
      56: '0x3C093842491eF931796A809263139c15E25Dc809',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
