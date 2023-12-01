import React, { type ReactNode } from 'react'
import './TooltipStyles.scss'

interface ITooltip {
  children: ReactNode
}

const Tooltip: React.FC<ITooltip> = ({ children }: ITooltip) => {
  return <div className='tooltip'>{children}</div>
}

export default Tooltip
