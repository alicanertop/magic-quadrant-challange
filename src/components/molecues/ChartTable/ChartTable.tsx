import { IData } from '../Chart/Chart'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'

import './ChartTable.scss'

interface IChartTable {
  data: IData[]
  onDataAdd?: () => void
  onDataUpdate?: (data: IData) => void
  onDataDelete?: (data: IData) => void
}

function ChartTable({ data, onDataAdd, onDataUpdate, onDataDelete }: IChartTable) {
  return (
    <div className="chart-table">
      <div className="chart-row">
        <Button style={{ maxWidth: '75px' }} onClick={onDataAdd}>
          Add
        </Button>
      </div>
      <div className="chart-table-header-container">
        <div className="chart-table-header check">Enable</div>
        <div className="chart-table-header label">Label</div>
        <div className="chart-table-header vision">Vision</div>
        <div className="chart-table-header ability">Ability</div>
        <div className="chart-table-header delete">Delete</div>
      </div>
      <div className="chart-table-content-container">
        {data.map((d) => (
          <div className="chart-row">
            <div className="chart-table-content check">
              <input
                type="checkbox"
                checked={d.enabled}
                onChange={(e) => onDataUpdate?.({ ...d, enabled: e.target.checked })}
              />
            </div>
            <div className="chart-table-content label">
              <Input
                disabled={!d.enabled}
                value={d.label}
                onChange={(e) =>
                  d.enabled ? onDataUpdate?.({ ...d, label: e.target.value }) : undefined
                }
              />
            </div>
            <div className="chart-table-content">
              <Input
                disabled={!d.enabled}
                value={d.pos.x}
                onChange={(e) =>
                  d.enabled
                    ? onDataUpdate?.({
                        ...d,
                        pos: {
                          ...d.pos,
                          x:
                            Number(e.target.value) > 100
                              ? 100
                              : Number(e.target.value) < 0
                              ? 0
                              : Number(e.target.value),
                        },
                      })
                    : undefined
                }
              />
            </div>
            <div className="chart-table-content">
              <Input
                disabled={!d.enabled}
                value={d.pos.y}
                onChange={(e) =>
                  d.enabled
                    ? onDataUpdate?.({
                        ...d,
                        pos: {
                          ...d.pos,
                          y:
                            Number(e.target.value) > 100
                              ? 100
                              : Number(e.target.value) < 0
                              ? 0
                              : Number(e.target.value),
                        },
                      })
                    : undefined
                }
              />
            </div>
            <div className="chart-table-content">
              <Button onClick={() => onDataDelete?.(d)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartTable
