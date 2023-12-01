import React from 'react'
import './ProductWidgetColorsStyles.scss'

interface IProductWidgetColors {
  selectedColor: string
  onClickColor: (colorType: string) => void
}

const Colors: string[] = ['blue', 'green', 'beige', 'white', 'black']

const ProductWidgetColors: React.FC<IProductWidgetColors> = ({
  selectedColor,
  onClickColor
}: IProductWidgetColors) => {
  return (
    <div className='product-widget-colors'>
      {Colors.map((color, index) => (
        <div
          key={index}
          className={`product-widget-colors__color product-widget-colors__color--${color} ${
            selectedColor === color ? 'product-widget-colors__color--selected' : ''
          }`}
          onClick={() => {
            onClickColor(color)
          }}
        />
      ))}
    </div>
  )
}

export default ProductWidgetColors
