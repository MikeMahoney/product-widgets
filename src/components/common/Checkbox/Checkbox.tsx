import React from 'react'
import './CheckboxStyles.scss'
import { TickIcon } from '../Icons/TickIcon/TickIcon'

interface ICheckbox {
  selected: boolean
  onClickLink: () => void
}

const Checkbox: React.FC<ICheckbox> = ({ selected, onClickLink }: ICheckbox) => {
  return (
    <div className='checkbox' onClick={onClickLink}>
      {selected ? (
        <TickIcon />
      ) : (
        <div className={`checkbox__inner ${selected && 'checkbox__inner--selected'}`} />
      )}
    </div>
  )
}

export default Checkbox
