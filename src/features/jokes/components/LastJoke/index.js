import React from 'react'
import {compose, defaultProps} from 'recompose'

import {fetchJoke} from '../../actions'
import common from '../../../common'

const LastJoke = ({response}) => (
  <div>
    <h2>Last joke</h2>
    <p>{response.value}</p>
  </div>
)

export default compose(
  defaultProps({
    action: fetchJoke
  }),
  common.hocs.asyncFromAction
)(LastJoke)
