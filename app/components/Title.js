import React from 'react'
import PropTypes from 'prop-types'

export default function Title({url, title, id}) {
  return (
    <a className='link' href={url}>
      {title}
    </a>
  )
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}