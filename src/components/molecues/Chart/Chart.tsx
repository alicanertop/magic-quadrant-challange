import './Chart.scss'
import ChartDot from '../../atoms/ChartDot/ChartDot'
import clsx from 'clsx'

export interface IData {
  label: string
  enabled?: boolean
  id: string | number
  pos: { x: number; y: number }
}

export interface IChart {
  // size is x px value
  size?: string
  data: IData[]
  xAxisLabel?: string
  yAxisLabel?: string
  onDataUpdate?: (data: IData) => void
  yAxisLabelProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  chartLabelTopLeft?: string
  chartLabelTopRight?: string
  chartLabelBottomLeft?: string
  chartLabelBottomRight?: string
}

const Chart = ({
  onDataUpdate,
  yAxisLabel,
  yAxisLabelProps,
  xAxisLabel,
  data = [],
  size = '400px',
  chartLabelTopLeft,
  chartLabelTopRight,
  chartLabelBottomLeft,
  chartLabelBottomRight,
}: IChart) => (
  <div className="chart" style={{ '--size': size } as {}}>
    {data.map((d, i) => (
      <ChartDot
        key={`${i}_button`}
        pos={d.pos}
        label={d.label}
        enabled={d.enabled}
        onPositionChange={(pos) => onDataUpdate?.({ ...d, pos })}
      />
    ))}

    {chartLabelTopLeft && <div className="chart-label top-left center">{chartLabelTopLeft}</div>}

    {chartLabelTopRight && <div className="chart-label top-right center">{chartLabelTopRight}</div>}
    {chartLabelBottomLeft && (
      <div className="chart-label bottom-left center">{chartLabelBottomLeft}</div>
    )}
    {chartLabelBottomRight && (
      <div className="chart-label bottom-right center">{chartLabelBottomRight}</div>
    )}

    {xAxisLabel && <div className="chart-x-axis-label" children={xAxisLabel} />}
    {yAxisLabel && (
      <div
        {...yAxisLabelProps}
        className={clsx('chart-y-axis-label', yAxisLabelProps?.className)}
        children={yAxisLabel}
      />
    )}
  </div>
)

export default Chart
