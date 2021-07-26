import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { getUserDetails, updateUserProfile } from '../../../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstants'
import './protfolio.css'
// import profile from '../imgs/easycselearn.png'
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
} from '@material-ui/icons'
function Protfolio({ location, history }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }
  return (
    <div className='Protfolio mt-5'>
      <div className='protfolioTitleContainer'>
        <h1 className='title'>Update Protfolio</h1>
      </div>
      <div className='protfolioContainer'>
        <div className='protfolioShow'>
          <div className='protfolioShowTop'>
            {/* <img
              src={profile}
              alt='profile'
              className='protfolioprofileImage'
            ></img> */}
            {/* <div className='protfolioTitle'>
                          <span className='protfolioname'>{name}</span>
              <span className='protfolJobTitle'></span>
              Software Engineer
            </div> */}
          </div>
          <div className='protfolioUserShowButton'>
            <span className='protTitleShow'>Account Details</span>
            <div className='ShowUserInfo'>
              <PermIdentity className='userShowicon' />
              <span className='userNameTitle'>{name} </span>
            </div>
            <div className='ShowUserInfo'>
              <MailOutline className='userShowicon' />
              <span className='userNameTitle'> {email} </span>
            </div>
           
          </div>
        </div>
        <div className='protfolioUpdate'>
          <span className='protUpdateTitle'>Edit You Information</span>
          <form className='userUpdateForm' onSubmit={submitHandler}>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='Username update'
                  className='userNameupInput'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Update Email'
                  className='userNameupInput'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Password</label>
                <input
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='userNameupInput'
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='userNameupInput'
                ></input>
              </div>
              {/* <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='number'
                  placeholder='Update Phone'
                  className='userNameupInput'
                ></input>
              </div> */}
              {/* <div className='userUpdateItem'>
                <label>Location</label>
                <input
                  type='text'
                  placeholder='Update Location'
                  className='userNameupInput'
                ></input>
              </div> */}
              <button className='userupdatebutton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Protfolio
