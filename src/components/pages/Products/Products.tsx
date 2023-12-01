import React, { useState } from 'react'
import './ProductsStyles.scss'
import { ThreeDots } from 'react-loader-spinner'
import { getProducts } from 'hooks/productsHooks'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Card from 'components/common/Card/Card'

const Products: React.FC = () => {
  const { products, isProductsLoading } = getProducts()
  const [linkedProfileId, setLinkedProfileId] = useState<number | null>(null)

  return (
    <div className='products'>
      <Card className='products__card'>
        <div className='products__card__header'>
          <h3>{'Per product widgets'}</h3>
        </div>
        {isProductsLoading ? (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='black'
            ariaLabel='three-dots-loading'
            visible={true}
          />
        ) : products.length === 0 ? (
          <h2 className='products__card__blank'>{'No products returned'}</h2>
        ) : (
          <div className='products__card__list'>
            {products.map((product, index) => (
              <ProductWidget
                key={index}
                product={product}
                setLinkedProfileId={setLinkedProfileId}
                linkedProfileId={linkedProfileId}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

export default Products
