import {compose, defaultProps} from 'recompose'

import {fetchJoke} from '../../actions'
import common from '../../../common'

const initialProps = {
  action: fetchJoke
}

/* HOCS */

const defaultPropsHOC = defaultProps(initialProps)

export default compose(
  defaultPropsHOC,
  common.hocs.asyncFromAction
)
