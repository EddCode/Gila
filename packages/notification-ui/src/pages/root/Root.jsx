import { RootContainer } from './Root.styled'

import { NotificationForm } from '@/entities/logs/ui/sendNotification'
import { ListLogItemView } from '@/widgets/list-logs'

export function Root () {
  return (
    <RootContainer>
      <NotificationForm />
      <ListLogItemView />
    </RootContainer>
  )
}
