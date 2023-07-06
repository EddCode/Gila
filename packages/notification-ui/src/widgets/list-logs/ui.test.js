import { render, screen } from '@testing-library/react'

import { ListLogItemView } from './ui'

jest.mock('@/entities/logs/model', () => ({
  useLogs: jest.fn(() => ({
    data: [
      {
        category: 'Sports',
        message: 'This is a message',
        messageType: '',
        user: {
          name: 'John Doe',
          email: 'John',
          phone: '1234567890'
        }
      }
    ]
  }))
}))

describe('ListLogItemView', () => {
  test('should render ListLogItemView', () => {
    render(<ListLogItemView />)

    screen.getByText('John Doe')
    screen.getByText('Sports')
  })
})
