import React, { useState } from 'react'
import './ProductWidgetStyles.scss'
import { type ProductDTO } from 'api/productsApi'
import { GreensparkIcon } from 'components/common/Icons/GreensparkIcon/GreensparkIcon'
import Checkbox from 'components/common/Checkbox/Checkbox'
import { InfoIcon } from 'components/common/Icons/InfoIcon/InfoIcon'
import ProductWidgetColors from './components/ProductWidgetColors/ProductWidgetColors'
import Toggle from 'components/common/Toggle/Toggle'
import Tooltip from 'components/common/Tooltip/Tooltip'

interface IProductWidget {
  product: ProductDTO
  setLinkedProfileId: (id: number) => void
  linkedProfileId: number | null
}

const ProductWidget: React.FC<IProductWidget> = ({
  product,
  setLinkedProfileId,
  linkedProfileId
}: IProductWidget) => {
  const { id, action, active, amount, type, linked, selectedColor }: ProductDTO = product
  const titleTop: string = `This product ${action}`
  const titleBottom: string = `${amount} ${type}`

  // Use updated linkedProfileId otherwise use value from API
  const linkSelected: boolean = linkedProfileId !== null ? linkedProfileId === id : linked

  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const [color, setColor] = useState<string>(selectedColor)
  const [activated, setActivated] = useState<boolean>(active)

  const onClickLink = (): void => {
    setLinkedProfileId(id)
  }

  const onClickColor = (colorType: string): void => {
    setColor(colorType)
  }

  const onClickToggle = (): void => {
    setActivated(!activated)
  }

  const onMouseEnterInfo = (): void => {
    setTimeout(() => {
      setShowTooltip(true)
    }, 300)
  }

  const onMouseLeaveInfo = (): void => {
    setTimeout(() => {
      setShowTooltip(false)
    }, 300)
  }

  return (
    <div className='product-widget'>
      <div className={`product-widget__header product-widget__header--${color}`}>
        <GreensparkIcon className='product-widget__header__icon' />
        <div className='product-widget__header__title'>
          <span>{titleTop}</span>
          <span>{titleBottom}</span>
        </div>
      </div>
      <div className='product-widget__options'>
        <ul>
          <li>
            <span>
              {'Link to Public Profile'}
              <span
                className='product-widget__options__tooltip-wrapper'
                onMouseEnter={onMouseEnterInfo}
                onMouseLeave={onMouseLeaveInfo}
              >
                <InfoIcon className='product-widget__options__icon' />
                {showTooltip && (
                  <Tooltip>
                    <div className='product-widget__tooltip'>
                      {
                        'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
                      }
                      <a href='/' className='product-widget__tooltip__link'>
                        {'View Public Profile'}
                      </a>
                    </div>
                  </Tooltip>
                )}
              </span>
            </span>
            <Checkbox selected={linkSelected} onClickLink={onClickLink} />
          </li>
          <li>
            <span>{'Badge color'}</span>
            <ProductWidgetColors selectedColor={color} onClickColor={onClickColor} />
          </li>
          <li>
            <span>{'Activate badge'}</span>
            <Toggle selected={activated} onClickToggle={onClickToggle} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductWidget
