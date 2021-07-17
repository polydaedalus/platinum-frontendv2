import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'DAI',
    stakingTokenName: QuoteToken.PLATIN,
    stakingTokenAddress: '0x782eb3304F8b9adD877F13a5cA321f72c4AA9804',
    contractAddress: {
     137: '0x462C91e1E5a596Ef74bABF46F68061A1836f020d'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0092',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
