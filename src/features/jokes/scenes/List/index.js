import React from 'react'

import JokesList from '../../components/JokesList'
import LastJoke from '../../components/LastJoke'

const List = () => (
  <div className='List'>
    {/* Actually this can be omitted, but was left here to show how a scene should contain a view */}
    <JokesList />
    <hr/>
    <LastJoke />
  </div>
)

export default List
