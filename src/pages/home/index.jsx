import React from 'react'
import FeaturedCharts from '../../component/Charts/Featured'
import RegularCharts from '../../component/Charts/Regular'
import NavBar from '../../component/NavBar'
import SideBar from '../../component/SideBar'
import Table from '../../component/Table'
import Widgets from '../../component/Widgets'
import './Home.scss'

const HomePage = () => {
  return (
    <div className = 'home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
        <div className='widgetContainer'>
          <Widgets type='user' />
          <Widgets type='order' />
          <Widgets type='earning' />
          <Widgets type='balance' />
        </div>
        <div className='charts'>
          <FeaturedCharts />
          <RegularCharts />
        </div>
        <div className='list-container'>
          <div className='list-title'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default HomePage