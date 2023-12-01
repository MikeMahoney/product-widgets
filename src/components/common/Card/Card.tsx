import React, { type ReactNode } from 'react'
import './CardStyles.scss'

interface ICard {
  children: ReactNode
  className?: string
}

const Collapsible: React.FC<ICard> = ({ children, className }: ICard) => {
  return <div className={`card ${className}`}>{children}</div>
}

export default Collapsible
