import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'

export function OrderTableFilters() {
  return (
    <form className={'flex items-center gap-2'}>
      <span className={'text-sm font-semibold'}>Filtros:</span>
      <Input placeholder={'ID do pedido'} className={'h-8 w-auto'} />
      <Input placeholder={'Nome do cliente'} className={'h-8 w-[320px]'} />

      <Select defaultValue={'all'}>
        <SelectTrigger className={'h8 w-[180px]'}>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={'all'}>Todos</SelectItem>
          <SelectItem value={'pending'}>Pendente</SelectItem>
          <SelectItem value={'canceled'}>Cancelado</SelectItem>
          <SelectItem value={'processing'}>Em preparo</SelectItem>
          <SelectItem value={'delivering'}>Em entrega</SelectItem>
          <SelectItem value={'delivered'}>Entregue</SelectItem>
        </SelectContent>

        <Button type={'submit'} variant={'secondary'} size={'xs'}>
          <Search className={'mr-2 h-4 w-4'} />
          Filtrar resultados
        </Button>

        <Button type={'button'} variant={'outline'} size={'xs'}>
          <X className={'mr-2 h-4 w-4'} />
          Remover filtros
        </Button>
      </Select>
    </form>
  )
}
