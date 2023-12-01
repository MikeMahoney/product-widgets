import axios, { AxiosError, type AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

const API_ROOT = 'https://api.mocki.io/v2/016d11e8'

export interface ProductDTO {
  // The id of the product widget, incremental integer
  id: number
  // The type of the impact
  type: 'carbon' | 'plastic bottles' | 'trees'
  // The amount of the impact
  amount: number
  // The action which corresponds to an impact type
  action: 'collects' | 'plants' | 'offsets'
  // Describes if the widget (badge) is active
  active: boolean
  // Describes if the widget is linked to the public profile
  linked: boolean
  // Describes the current color of the widget
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige'
}

export const fetchProducts = async (): Promise<ProductDTO[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_ROOT}/product-widgets`)

    const responseData: ProductDTO[] = response.data

    return responseData
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(`Error: ${error.message}`)
    } else {
      toast.error('Error: Fetching Products')
    }
  }
}
