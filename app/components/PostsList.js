import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import PostMetaInfo from './PostMetaInfo'

export default function PostsList ({posts}) {
  if (posts === null) {
    return (
      <p className='center-text'>
        This user hasn't posted yet
      </p>
    )
  }

  return (
    <ul>
      {posts.map((post) => {
      
        return (
          <li key={post.id} className='post'>
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              id={post.id}
              by={post.by}
              descendants={post.descendants}
              time={post.time}
            />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}