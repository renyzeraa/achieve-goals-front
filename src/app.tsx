
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goal'
import { Dialog } from './components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 60 * 1000,
  })

  return (
    <Dialog>
      {data?.some(goals => goals.total > 0) ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}