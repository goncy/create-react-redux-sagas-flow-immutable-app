import {compose} from 'recompose'
import {connect} from 'react-redux'
import {async} from 'react-common-hocs'

import Loader from '../components/Loader'
import ErrorBox from '../components/ErrorBox'

export default compose(
  connect(
    (state, props) => ({
      status: props.action.getStatus(state),
      error: props.action.getError(state),
      response: props.action.getResponse(state)
    })
  ),
  async({
    loaderComponent: Loader,
    errorComponent: ErrorBox
  })
)
