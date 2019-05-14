import React from 'react'
import './component.scss'
import { BrowserRouter, Router, Switch, Route, withRouter } from 'react-router-dom'
import history from '../history'
import AdminMenu from './children/AdminMenu'
import NewArticle from './children/NewArticle'
import ArticleMgt from './children/ArticleMgt'

class Admin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="admin-layout">
        <>
          <AdminMenu />
          <div className="admin-content">
            <Router history={history}>
              <Switch>
                <Route path="/admin/newArticle" component={NewArticle}></Route>
                <Route path="/admin/articleMgt" component={ArticleMgt}></Route>
              </Switch>
            </Router>
          </div>
        </>
      </div>
    )
  }
}

export default Admin