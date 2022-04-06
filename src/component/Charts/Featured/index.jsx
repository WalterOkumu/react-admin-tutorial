import { KeyboardArrowDown, KeyboardArrowUp, MoreVertTwoTone } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import './FeaturedCharts.scss'
import 'react-circular-progressbar/dist/styles.css'

const FeaturedCharts = () => {
  return (
    <div className='featured-charts'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertTwoTone fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featured-chart-bottom'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className='title'>Total Sales Today</p>
        <p className='amount'>KES 420</p>
        <p className='description'>Previous transactions processing. Last payments may not be included.</p>

        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
              <KeyboardArrowUp fontSize='small' />
            </div>
            <div className='resultAmount'>KES 12,400</div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
              <KeyboardArrowDown fontSize='small' />
            </div>
            <div className='resultAmount'>KES 12,400</div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUp fontSize='small' />
            </div>
            <div className='resultAmount'>KES 12,400</div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default FeaturedCharts