import React from 'react'
import {connect} from 'react-redux'

const JokesList = ({jokes}) => (
  <div className='JokesList'>
    {jokes.map((joke, key) => (
      <div key={key}>
        <p>{joke.value}</p>
      </div>
    ))}
  </div>
)

const mapStateToProps = ({jokes}) => ({
  jokes
})

export default connect(mapStateToProps)(JokesList)
