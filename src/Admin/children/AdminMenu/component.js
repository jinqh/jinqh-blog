import React from 'react'
import './component.scss'
import history from '../../../history'
import { Menu } from 'antd'


class AdminMenu extends React.Component {
  constructor(props) {
    super(props)
    this.pushUrl = this.pushUrl.bind(this)
  }

  pushUrl(item) {
    switch(item.key) {
      case '3':
        history.push('/admin/newArticle')
        break
      case '4':
        history.push('/admin/articleMgt')
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className="admin-menu">
        <Menu
          mode="vertical"
          theme="dark"
          style={{height: '100%'}}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">用户管理</Menu.Item>
          <Menu.Item key="3" onClick={this.pushUrl}>发文</Menu.Item>
          <Menu.Item key="4" onClick={this.pushUrl}>文章管理</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default AdminMenu