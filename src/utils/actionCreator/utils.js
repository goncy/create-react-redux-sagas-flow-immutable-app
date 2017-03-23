export const isAsync = ({type}) => ['START', 'SUCCESS', 'FAILURE'].indexOf(type.slice(type.lastIndexOf('_') + 1)) >= 0

export const divideAction = ({type}) => ({
  type: type.slice(0, type.lastIndexOf('_')),
  status: type.slice(type.lastIndexOf('_') + 1)
})

export const getStatus = status => {
  switch (status) {
    case 'START':
      return 'pending'
    case 'SUCCESS':
      return 'success'
    case 'FAILURE':
      return 'failure'
    default:
      return 'init'
  }
}

export const getError = ({payload}) => {
  if (!payload) return null
  if (payload.error && payload.error.message) return payload.error.message
  if (typeof payload === 'string') return payload
  if (typeof payload.error === 'string') return payload.error
  if (typeof payload.message === 'string') return payload.message
  else return null
}
