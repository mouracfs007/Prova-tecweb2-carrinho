import React from 'react';

import './style.css';

export default function Title ({ text, category }) {

  return(
    <h1 className="titlePage">
      {text} { category && `/ ${category}` }
    </h1>
  )
}