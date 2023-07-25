import { act, render, screen, fireEvent } from '@testing-library/react'

import { NotificationForm } from './index'

jest.mock('@/shared/api', () => ({
  fetcher: jest.fn().mockResolvedValue({ message: 'Notification sent' })
}))

describe('<SendNotification />', () => {
  test('should render SendNotification', () => {
    render(<NotificationForm />)

    screen.getByText('Send Notification')
  })

  test('should send notification', async () => {
    render(<NotificationForm />)

    await act(async () => {
      const select = screen.getByDisplayValue('Select one')
      const textbox = screen.getByRole('textbox')
      fireEvent.change(select, { target: { value: 'Sports' } })
      fireEvent.change(textbox, { target: { value: 'This is a message' } })

      const btn = screen.getByText('Send Notification')
      fireEvent.click(btn)

      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(select.value).toBe('')
      expect(textbox.value).toBe('')
    })
  })

  test('should keep input values', async () => {
    render(<NotificationForm />)

    await act(async () => {
      screen.getByDisplayValue('Select one')
      const textbox = screen.getByRole('textbox')
      fireEvent.change(textbox, { target: { value: 'This is a message' } })

      const btn = screen.getByText('Send Notification')
      fireEvent.click(btn)

      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(textbox.value).toBe('This is a message')
    })
  })
})
