import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'platinumfinancev2'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import BG from '../BG'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
    <Page>
      <Hero>
        <img src= "/images/TitleBar.png" alt="cake logo" width={570} height={135} />
        <Heading as="h1" scale="lg" mt="40px" mb="24px" color="secondary">          
          {TranslateString(578, "A DeFi protocol focused on achieving sustainability and adapting to investors' needs.")}
        </Heading>
        <Heading as="h1" scale="md" mt="10px" mb="24px" color="secondary">
          {TranslateString(545, 'Farming has already begun (at ')}<a href="https://polygonscan.com/block/countdown/16805200" rel="noreferrer" target="_blank">block #16805200)</a>
        </Heading>  
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
    <BG/>
    </>
  )
}

export default Home
