import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { createGoialCompletion } from '../http/create-goial-completion.ts'
import { getPendingGoals } from '../http/get-pending-goals.ts'
import { OutlineButton } from './ui/outline-button.tsx'

export function PendingGoals() {
  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  })

  if (!data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoialCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className={'flex flex-wrap gap-3'}>
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className={'size-4 text-zinc-600'} />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
