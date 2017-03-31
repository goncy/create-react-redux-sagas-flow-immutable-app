import {compose, lifecycle, pure} from 'recompose'
import {connect} from 'react-redux'

import {appInitialized} from '../../actions'

const mapDispatchToProps = {
  appInitialized: appInitialized.run
}

function componentDidMount () {
  this.props.appInitialized()
}

/* HOCS */

const connectHOC = connect(
  undefined,
  mapDispatchToProps
)

const lifecycleHOC = lifecycle({
  componentDidMount
})

export default compose(
  connectHOC,
  lifecycleHOC,
  pure
)
