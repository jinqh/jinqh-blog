import React from 'react'
import history from '../../../../../history'
import './component.scss'

const articleList = [
  {
    id: 1,
    title: '标题1',
    summary: '概要概要概要概要概要概要概要概要概要概要',
    createDt: '2019-05-13'
  },
  {
    id: 2,
    title: '标题2',
    summary: '概要概要概要概要概要概要概要概要概要概要',
    createDt: '2019-05-13'
  },
  {
    id: 3,
    title: '标题3',
    summary: '概要概要概要概要概要概要概要概要概要概要',
    createDt: '2019-05-13'
  }
]

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.goDetailPage = this.goDetailPage.bind(this)
  }

  goDetailPage(id) {
    history.push(`/detail?id=${id}`)
  }

  render() {
    return (
      <div className="blog-article-list">
        {
          articleList.map((item) => {
            return (
              <div className="articleCell" key={item.id}>
                <div className="title" onClick={this.goDetailPage.bind(this, item.id)}>{item.title}</div>
                <div className="summary">{item.summary}</div>
                <div className="time">{item.createDt}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList