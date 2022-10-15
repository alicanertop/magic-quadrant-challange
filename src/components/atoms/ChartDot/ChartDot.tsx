import React from 'react'
import clsx from 'clsx'

import './ChartDot.scss'

/** * This numbers refers to % ratio example if x = 1 it means %1 */
type Pos = { x: number; y: number }
interface IChartDot {
  pos: Pos
  label: string
  size?: number
  enabled?: boolean
  projection?: boolean
  projectionOverlay?: boolean
  draggingClassname?: string
  onPositionChange?: (p: Pos) => void
  labelPosition?: { x: number; y: number }
}

function ChartDot({
  labelPosition = { x: 10, y: 0 },
  size = 15,
  pos,
  projection = true,
  projectionOverlay = true,
  enabled = false,
  label = 'No Label',
  draggingClassname = 'dragging',
  onPositionChange,
}: IChartDot) {
  const container = React.useRef<HTMLDivElement>(null)
  const button = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let parentHeight = window.document.body.clientHeight
    let parentWidth = window.document.body.clientWidth
    let ratio = 1
    let sizeRatio = 1.5
    let cOffX = 0
    let cOffY = 0

    if (container.current) {
      parentHeight = container.current.parentElement?.clientHeight || parentHeight
      parentWidth = container.current.parentElement?.clientWidth || parentWidth
      ratio = 100 / parentWidth
      const left = pos.x / ratio - size * sizeRatio
      const top = pos.y / ratio - size * sizeRatio
      container.current.style.left = `${left}px`
      container.current.style.top = `${top}px`
      container.current.style.setProperty('--projection-width', `${left}px`)
      container.current.style.setProperty('--projection-height', `${parentHeight - top}px`)
    }

    if (!enabled) return

    function dragStart(e: MouseEvent) {
      e = e || window.event
      e.preventDefault()
      cOffY = e.clientY - (container.current?.offsetTop || 0)
      cOffX = e.clientX - (container.current?.offsetLeft || 0)
      document.addEventListener('mouseup', dragEnd)
      document.addEventListener('mousemove', dragMove)
      if (container.current) container.current.classList.add(draggingClassname)
    }

    function dragMove(e: MouseEvent) {
      e = e || window.event
      e.preventDefault()
      if (container.current) {
        const curX = e.clientX - cOffX
        const curY = e.clientY - cOffY

        //Default y pozition
        let top = size * -sizeRatio
        //Default x pozition
        let left = size * -sizeRatio

        //Limiting -y
        if (parentHeight + size >= parentHeight - curY) top = curY
        //Limiting +y
        if (parentHeight - curY < size * sizeRatio) top = parentHeight - size * sizeRatio
        //Limiting -x
        if (parentWidth + size >= parentWidth - curX) left = curX
        //Limiting +x
        if (parentWidth - curX < size * sizeRatio) left = parentWidth - size * sizeRatio

        container.current.style.top = `${top}px`
        container.current.style.left = `${left}px`
        container.current.style.setProperty('--projection-width', `${left}px`)
        container.current.style.setProperty('--projection-height', `${parentHeight - top}px`)

        onPositionChange?.({
          y: (top + size * sizeRatio) * ratio,
          x: (left + size * sizeRatio) * ratio,
        })
      }
    }

    function dragEnd(e: any) {
      e = e || window.event
      e.preventDefault()
      document.removeEventListener('mouseup', dragEnd)
      document.removeEventListener('mousemove', dragMove)
      if (container.current) container.current.classList.remove(draggingClassname)
    }

    button.current?.addEventListener('mousedown', dragStart)
    return () => {
      button.current?.removeEventListener('mousedown', dragStart)
    }
  }, [pos, onPositionChange])

  return (
    <div
      ref={container}
      className={clsx('chart-dot-container', { enabled, projection, projectionOverlay })}
      style={{ '--size': `${size * 3}px` } as {}}>
      <div
        ref={button}
        draggable
        className={clsx('chart-dot', { enabled })}
        style={{ '--size': `${size}px` } as {}}
      />
      <div className="chart-dot-label-container">
        <div
          className="chart-dot-label"
          style={{ '--posX': `${labelPosition.x}px`, '--posY': `${labelPosition.y}px` } as {}}>
          {label}
        </div>
      </div>
    </div>
  )
}

export default ChartDot
