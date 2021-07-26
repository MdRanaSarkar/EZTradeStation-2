import React from 'react'
import './home.css'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {data} from '../../../data/dummydata'
import Widgetsm from '../../components/widgetsm/Widgetsm'
import Widgetlg from '../../components/widgetlg/Widgetlg'
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={data} title="Sales Analytics" dataKey="Active User" grid/>
            <div className="homewidget">
            <Widgetsm/>
            <Widgetlg/>
            </div>
        </div>
    )
}

export default Home
