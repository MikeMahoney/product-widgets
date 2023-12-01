import React from 'react'
import './ToggleStyles.scss'

interface IToggle {
  selected: boolean
  onClickToggle: () => void
}

const Toggle: React.FC<IToggle> = ({ selected, onClickToggle }: IToggle) => {
  return (
    <div className={`toggle ${selected && 'toggle--selected'}`} onClick={onClickToggle}>
      <div className='toggle__inner' />
    </div>
  )
}

export default Toggle
