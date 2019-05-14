import React from 'react'
import './component.scss'
import { Input, Button } from 'antd'

const { TextArea } = Input

class NewArticle extends React.Component {
  render() {
    return (
      <div className="admin-newArticle">
        <div className="article-title">
          <div className="first-row">标题</div>
          <Input
            placeholder="请输入文章标题"
          />
        </div>
        <div className="article-content">
          <div className="first-row">正文</div>
          <TextArea rows={20}/>
        </div>
        <div className="article-btns">
          <Button type="primary" className="btn">发布</Button>
          <Button type="primary" className="btn">保存</Button>
        </div>
      </div>
    )
  }
}

export default NewArticle