import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, exact, HashRouter, Router, withRouter } from 'react-router-dom'
import './component.scss'
import history from '../history'
import Header from './children/Header'
import Home from './children/Home'
import About from './children/About'
import ArticleDetail from './children/ArticleDetail'

class Blog extends React.Component {
  render() {
    return (
      <div className="blog-layout">
        <Router history={history}>
          <>
            <Header />
            <div className="blog-main">
              <Switch>
                <Route path="/about" component={withRouter(About)}></Route>
                <Route path="/detail" component={withRouter(ArticleDetail)}></Route>
                <Route path="/" component={withRouter(Home)}></Route>
              </Switch>
            </div>
          </>
        </Router>
      </div>
    )
  }
}

export default Blog