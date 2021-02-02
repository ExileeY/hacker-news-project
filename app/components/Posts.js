import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'

export default class Posts extends React.Component {
  state = {
    error: null,
    posts: null
  }
  componentDidMount() {
    this.handleFetch(this.props.type)
  }
  handleFetch = (type) => {
    this.setState({
      error: null,
      posts: null
    })
    fetchMainPosts(type)
      .then((posts) => {
        this.setState({
          posts
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }
  isLoading = () => {
    const {posts, error} = this.state

    return !posts && error === null
  }
  render() {
    const { posts, error } = this.state

    return (
      <React.Fragment>
        {this.isLoading() && <Loading />}
        {posts && <PostsList posts={posts} />}
        {error && <h1>{error}</h1>}
      </React.Fragment>
    )
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}