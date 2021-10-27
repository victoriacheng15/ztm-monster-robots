import React from 'react'

import './search-box.styles.css'

export const Searchbox = ({ placeholder, handleChange }) => (
  <input
  className='search'
  type='text'
  placeholder={placeholder}
  onChange={handleChange}
  /> // prettier-ignore
) // prettier-ignore
