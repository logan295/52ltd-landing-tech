'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function CalEmbed() {
  useEffect(() => {
    getCalApi().then((cal) => {
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })
  }, [])

  return (
    <Cal
      calLink="logan-gilley-wyo4yn"
      style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'scroll' }}
    />
  )
}
