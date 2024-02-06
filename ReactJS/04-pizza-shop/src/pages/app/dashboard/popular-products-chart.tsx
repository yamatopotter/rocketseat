import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

const data = [
  {
    product: 'Portuguesa',
    amount: 45,
  },
  {
    product: 'Calabresa',
    amount: 24,
  },
  {
    product: 'Frango com Requeijão',
    amount: 16,
  },
  {
    product: 'Marguerita',
    amount: 56,
  },
  {
    product: 'Pepperoni',
    amount: 34,
  },
]

const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export function PopularProductsChart() {
  return (
    <Card className={'col-span-3'}>
      <CardHeader className={'pb-8'}>
        <div className={'space-y-1'}>
          <CardTitle className={'text-base font-medium'}>
            Produtos populares
          </CardTitle>
          <BarChart className={'h-4 w-4 text-muted-foreground'} />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey={'amount'}
              nameKey={'product'}
              cx={'50%'}
              cy={'50%'}
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, i) => {
                return (
                  <Cell
                    key={`cell-${i}`}
                    fill={COLORS[i]}
                    className={'stroke-background hover:opacity-80'}
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
