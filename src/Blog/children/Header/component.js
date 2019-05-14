import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="blog-header">
          <div className="logo">十里霜天</div>
          <div className="nav">
            <NavLink exact to="/">首页</NavLink>
            <NavLink to="/about">关于</NavLink>
          </div>
        </div>
        <div className="blog-bg"></div>
      </>
    )
  }
}

export default Header