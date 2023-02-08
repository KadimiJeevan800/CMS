import React from 'react'
import PropTypes from 'prop-types'
import './content/content.css';

function NoPage(props) {
  return (
    <div className='full-width text-center'>
      <h1>404 Error</h1>
      <h1>Page Not Found Error....</h1>
      <h1>Go to Homepage</h1>
    </div>
  )
}

NoPage.propTypes = {

}

export default NoPage

