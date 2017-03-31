import {connect} from 'react-redux'
import {compose} from 'recompose'

const mapStateToProps = ({jokes}) => ({
  jokes
})

/* HOCS */

const connectHOC = connect(
  mapStateToProps
)

export default compose(
  connectHOC
)
