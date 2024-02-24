import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/get-daily-revenue-in-period.ts'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 1500 },
    { date: '02/01/2024', receipt: 2000 },
    { date: '03/01/2024', receipt: 800 },
    { date: '04/01/2024', receipt: 3000 },
    { date: '05/01/2024', receipt: 1500 },
    { date: '06/01/2024', receipt: 800 },
    { date: '07/01/2024', receipt: 900 },
  ])
})
