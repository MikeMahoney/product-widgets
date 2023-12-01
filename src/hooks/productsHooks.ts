import { type ProductDTO, fetchProducts } from 'api/productsApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TProductsHooks = {
  products: ProductDTO[]
  isProductsLoading: boolean
}

// Get the list of products
export const getProducts = (): TProductsHooks => {
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        if (data != null) {
          setProducts(data)
        }
        setIsProductsLoading(false)
      })
      .catch(function () {
        toast.error('Error: Fetching products')
        setIsProductsLoading(false)
      })
  }, [])

  return {
    products,
    isProductsLoading
  }
}
