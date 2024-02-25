import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '@/api/get-profile.ts'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Mock user',
      email: 'test@test.com',
      phone: '2121212121',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
