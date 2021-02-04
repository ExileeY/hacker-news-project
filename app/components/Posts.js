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
    this.handleFetch()
  }
  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.handleFetch()
    }
  }
  handleFetch = () => {
    this.setState({
      error: null,
      posts: null
    })
    fetchMainPosts(this.props.type)
      .then((posts) => {
        this.setState({
          posts,
          error: null
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message
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
        {error && <p className='center-text'>{error}</p>}
      </React.Fragment>
    )
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}