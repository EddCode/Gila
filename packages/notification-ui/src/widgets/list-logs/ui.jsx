import { useCallback } from 'react'

import { ListContainer } from './list.style'

import { LogItem } from '@/entities/logs'
import { useLogs } from '@/entities/logs/model'
import { fetcher } from '@/shared/api'

export function ListLogItemView () {
  const getLogs = useCallback(() => fetcher('/logs'), [])

  const { data } = useLogs({ key: 'logs', fetcher: getLogs })

  return (
    <ListContainer>
      {data.map(item => (
        <LogItem key={item.user.name} {...item} />
      ))}
    </ListContainer>
  )
}
