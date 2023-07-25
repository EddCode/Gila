import { useCallback, useRef, useState } from 'react'

import { Form, TextArea } from './notification.style'

import { fetcher } from '@/shared/api'
import { Toast } from '@/shared/components/toast'

export function NotificationForm () {
  const formRef = useRef(null)
  const [toast, setToast] = useState({ message: '', show: false, isError: false })

  const fetch = useCallback(async _ => await fetcher('/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: formRef.current.elements.category.value,
      message: formRef.current.elements.message.value
    })
  }), [formRef])

  const clearForm = () => {
    setTimeout(() => setToast({ message: '', show: false, isError: false }), 0)
  }

  const handleSendNotification = async event => {
    try {
      event.preventDefault()
      if (!formRef.current.elements.category.value) throw new Error('Category is required')
      if (!formRef.current.elements.message.value) throw new Error('Message is required')
      const response = await fetch()
      setToast({ message: response.message, show: true, isError: false })
      formRef.current.elements.message.value = ''
      formRef.current.elements.category.value = ''
    } catch (error) {
      setToast({ message: error.message, show: true, isError: true })
    } finally {
      clearForm()
    }
  }

  return (
    <Form ref={formRef}>
      <select name="category">
        <option value="">Select one</option>
        <option value="Sports">Sports</option>
        <option value="Finance">Finance</option>
        <option value="Movies">Movies</option>
      </select>
      <TextArea name="message" id="message" cols="30" rows="10" />
      <button onClick={handleSendNotification} >Send Notification</button>
      <Toast message={toast.message} showToast={toast.show} isError={toast.isError}/>
    </Form>
  )
}
