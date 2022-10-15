import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Chart, { IData } from '../../molecues/Chart/Chart'
import ChartTable from '../../molecues/ChartTable/ChartTable'

import './ChartProvider.scss'

const newEmptyData: IData = { id: uuidv4(), label: '0', pos: { x: 50, y: 50 } }

const localStorageKey = 'quadrant'

function ChartProvider() {
  const [data, setData] = React.useState<IData[]>([])

  const handleSetData = (data?: IData, action?: 'add' | 'delete' | 'update') => {
    setData((prev) => {
      let newData = prev
      switch (action) {
        case 'add':
          newData = [...prev, { ...newEmptyData, id: uuidv4(), label: `${prev.length}` }]
          break
        case 'delete':
          newData = prev.filter((d) => d.id != data?.id)
          break
        case 'update':
          newData = prev.map((d) => (d.id == data?.id ? data : d))
          break
      }
      localStorage.setItem(localStorageKey, JSON.stringify(newData))
      return newData
    })
  }

  const handleDataUpdate = (data: IData) => handleSetData(data, 'update')
  const handleDataDelete = (data: IData) => handleSetData(data, 'delete')
  const handleDataAdd = () => handleSetData(undefined, 'add')

  React.useEffect(() => {
    try {
      const item = localStorage.getItem(localStorageKey)
      if (item) setData(JSON.parse(item))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className="chart-provider">
      <Chart
        data={data}
        onDataUpdate={handleDataUpdate}
        yAxisLabel="Ability to execute ->"
        xAxisLabel="Completenes of vision ->"
        chartLabelBottomLeft="Niche Players"
        chartLabelBottomRight="Visionaries"
        chartLabelTopLeft="Challengers"
        chartLabelTopRight="Leaders"
      />
      <ChartTable
        data={data}
        onDataAdd={handleDataAdd}
        onDataUpdate={handleDataUpdate}
        onDataDelete={handleDataDelete}
      />
    </div>
  )
}

export default ChartProvider
