import React from 'react'

import enhacer from './enhacer'

const JokesList = ({jokes}) => (
  <div className='JokesList'>
    {jokes.map((joke, key) => (
      <div key={key}>
        <p>{joke.value}</p>
      </div>
    ))}
  </div>
)

export default enhacer(JokesList)
