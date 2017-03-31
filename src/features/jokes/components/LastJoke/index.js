import React from 'react'

import enhacer from './enhacer'

const LastJoke = ({response}) => (
  <div>
    <h2>Last joke</h2>
    <p>{response.value}</p>
  </div>
)

export default enhacer(LastJoke)
