import { createContext, ReactNode, useEffect, useState } from 'react'
import { MockAPI } from '../server/MockAPI'

interface CoffeeProps {
  id: string
  imgLink: string
  name: string
  description: string
  types: string[]
  price: number
}

interface ProductsContextType {
  coffeeList: CoffeeProps[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  MockAPI()
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])

  useEffect(() => {
    fetch('/api/coffeelist')
      .then((response) => response.json())
      .then((json) => setCoffeeList(json))
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        coffeeList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
