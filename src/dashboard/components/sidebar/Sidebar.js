import React from 'react'
import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  CreditCard,
  AttachMoney,
  Assessment,
  MailOutline,
  Feedback,
  Message,
  BusinessCenter,
  Report,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='SidebarMenu'>
          <h3 className='sidebarTitle'>MyDashboards</h3>
          <ul className='sidebarList'>
            <Link to='/'>
              <li className='sidebarListItem active'>
                <LineStyle />
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <Timeline />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className='SidebarMenu'>
          <h3 className='sidebarTitle'>QuickMenu</h3>
          <ul className='sidebarList'>
            <Link to='/protfolio'>
              <li className='sidebarListItem'>
                <PermIdentity />
                Protfolio
              </li>
            </Link>
            <li className='sidebarListItem'>
              <Link to='/watchlist'>
                <CreditCard />
                WatchList
              </Link>
            </li>
            <li className='sidebarListItem'>
              <AttachMoney />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <Assessment />
              Individual Stock
            </li>
          </ul>
        </div>
        <div className='SidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutline />
              Mail
            </li>
            <li className='sidebarListItem'>
              <Feedback />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <Message />
              Messages
            </li>
          </ul>
        </div>

        <div className='SidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <BusinessCenter />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
      sidebar
    </div>
  )
}

export default Sidebar
