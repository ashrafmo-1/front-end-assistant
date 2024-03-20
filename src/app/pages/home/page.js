import Banner from '@/app/layout/banars/Banners';
import NavgationBar from '@/app/layout/navbar/nav';
import React from 'react'

const HomePage = () => {
  return (
    <div className='home'>
      <Banner />
      <NavgationBar />
    </div>
  )
}

export default HomePage;