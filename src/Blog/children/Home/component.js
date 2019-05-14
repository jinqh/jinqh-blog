import React from 'react'
import { BrowserRouter, Switch, Route, withRouter, Router } from 'react-router-dom'
import history from '../../../history'
import SideBar from './children/SideBar'
import ArticleList from './children/ArticleList'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="blog-home">
        <ArticleList />
      </div>
    )
  }
}

export default Home