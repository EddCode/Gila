import { RouterProvider } from 'react-router-dom'

import { router } from './router'

export function Routing () {
  return (
    <RouterProvider router={router} />
  )
}
