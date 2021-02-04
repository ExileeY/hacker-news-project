import React from 'react'
import PropTypes, { number } from 'prop-types'
import { formatDate } from '../utils/helpers'
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'

export default function PostMetaInfo ({ id, by, time, descendants }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
          <span>on {formatDate(time)}</span>
          {typeof descendants === 'number' && (
            <span>
              with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
            </span>
          )}
        </div>
      )}
    </ThemeConsumer>
  )
}

PostMetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number
}