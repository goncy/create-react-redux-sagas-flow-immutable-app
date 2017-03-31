import {connect} from 'react-redux'
import {compose, pure} from 'recompose'

const mapStateToProps = ({jokes}) => ({
  jokes
})

/* HOCS */

const connectHOC = connect(
  mapStateToProps
)

export default compose(
  connectHOC,
  pure
)
