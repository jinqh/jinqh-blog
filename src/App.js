import React from 'react'
import { Switch, BrowserRouter, Route, HashRouter } from 'react-router-dom'
import './reset.css'
import 'antd/dist/antd.css'
import Blog from './Blog'
import Admin from './Admin'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/" component={Blog}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App