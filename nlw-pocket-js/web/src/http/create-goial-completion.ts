export async function createGoialCompletion(goalId: string) {
  await fetch('http://localhost:3333/completion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
