import React from 'react'
import PropTypes, { number } from 'prop-types'
import { formatDate } from '../utils/helpers'
import { ThemeConsumer } from '../contexts/theme'

export default function PostMetaInfo ({ id, by, time, descendants }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <span>by {by}</span>
          <span>on {formatDate(time)}</span>
          {typeof descendants === 'number' && (
            <span>
              with {descendants} comments
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