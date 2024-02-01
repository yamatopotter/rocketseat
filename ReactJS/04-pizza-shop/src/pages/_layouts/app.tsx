import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
