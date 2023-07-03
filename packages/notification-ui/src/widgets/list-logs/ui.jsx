import { useCallback } from 'react'

import { LogItem } from '@/entities/logs'
import { useLogs } from '@/entities/logs/model'
import { fetcher } from '@/shared/api'

export function ListLogItemView () {
  const getLogs = useCallback(() => fetcher('/logs'), [])

  const { data } = useLogs({ key: 'logs', fetcher: getLogs })

  return (
    <div>
      {data.map(item => (
        <LogItem key={item} />
      ))}
    </div>
  )
}
