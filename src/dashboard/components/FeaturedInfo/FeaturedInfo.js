import React from 'react'
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';
import './featuredinfo.css'
function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featureTitle'>Revenue</span>
                <div className='featuremoneyContainer'>
                    <span className='featureMoney'>$2223 </span>
                    <span className='featureMoneyRate'>-11.4
                    <ArrowDownward className="featureIcon"/>
                    </span>
                </div>
                <span className='featureSub'>Compare to the last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featureTitle'>Sales</span>
                <div className='featuremoneyContainer'>
                    <span className='featureMoney'>$2223 </span>
                    <span className='featureMoneyRate'>-11.4
                    <ArrowDownward className="featureIcon"/>
                    </span>
                </div>
                <span className='featureSub'>Compare to the last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featureTitle'>Cost</span>
                <div className='featuremoneyContainer'>
                    <span className='featureMoney'>$2223 </span>
                    <span className='featureMoneyRate'>-11.4
                    <ArrowUpward className="featureIcon upward"/>
                    </span>
                </div>
                <span className='featureSub'>Compare to the last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
