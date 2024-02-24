import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '@/api/get-month-revenue.ts'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 500000,
    diffFromLastMonth: 35,
  })
})
