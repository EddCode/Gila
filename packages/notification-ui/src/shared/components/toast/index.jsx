import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Toast ({ message, showToast, isError }) {
  useEffect(() => {
    if (showToast) isError ? toast.error(message) : toast.success(message)
  }, [showToast])

  return (
    <div>
      <ToastContainer />
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  showToast: PropTypes.bool.isRequired,
  isError: PropTypes.bool
}
