import React from 'react'

import JokesList from '../../components/JokesList'

const List = () => (
  <div className='List'>
    {/* Actually this can be omitted, but was left here to show how a scene should contain a view */}
    <JokesList />
  </div>
)

export default List
