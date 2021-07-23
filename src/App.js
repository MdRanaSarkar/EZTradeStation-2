import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
