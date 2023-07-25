import { render, screen } from '@testing-library/react'

import { LogItem } from './index'

describe('<LogItem />', () => {
  test('should render the component', () => {
    render(<LogItem message='message' category='Sport' user={{ name: 'John', email: 'mail@mail.com', phone: '123123' }}/>)
    screen.getByText('message')
    screen.getByText('John')
  })
})
