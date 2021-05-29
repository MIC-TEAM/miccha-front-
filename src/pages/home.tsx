import React from 'react'
import MovieSlider from '../components/home/MovieSlider'
import Loading from '../components/common/Loading'
import styled from '@emotion/styled'

const HomeWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  height: 100%;
  width: 100%;
`

const Home = () => {
  return (
    <HomeWrap>
      <MovieSlider title="이어보기" movieTitle="라라랜드" />
      <Loading />
    </HomeWrap>
  )
}

export default Home
