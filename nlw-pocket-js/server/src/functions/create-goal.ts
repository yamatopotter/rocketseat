import { db } from '../db/schema'
import { goals } from '../db/schema/schema'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal(request: CreateGoalRequest) {
  const result = await db
    .insert(goals)
    .values({
      title: request.title,
      desiredWeeklyFrequency: request.desiredWeeklyFrequency,
    })
    .returning()

  const goal = result[0]

  return {
    goal,
  }
}
