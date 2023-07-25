import PropTypes from 'prop-types'

import { LogContainer } from './log.styles'

export function LogItem ({ message, category, user }) {
  return (
    <LogContainer>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <h6>{message}</h6>
      <p>{category}</p>
      <hr/>
    </LogContainer>
  )
}

LogItem.propTypes = {
  message: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
}
