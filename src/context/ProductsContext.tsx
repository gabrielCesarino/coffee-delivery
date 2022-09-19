import { createContext, ReactNode, useEffect, useState } from 'react'
import { MockAPI } from '../server/MockAPI'

interface CoffeeProps {
  id: string
  imgLink: string
  name: string
  description: string
  types: string[]
  price: number
  quantity: number
}

interface ProductsContextType {
  coffeeList: CoffeeProps[]
  addQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
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

  function addQuantity(currentCoffeeId: string) {
    const updatedList = coffeeList.map((coffee) => {
      if (coffee.id === currentCoffeeId) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1,
        }
      } else {
        return coffee
      }
    })
    setCoffeeList(updatedList)
  }

  function decreaseQuantity(currentCoffeeId: string) {
    const updatedList = coffeeList.map((coffee) => {
      if (coffee.id === currentCoffeeId) {
        return {
          ...coffee,
          quantity: coffee.quantity - 1,
        }
      } else {
        return coffee
      }
    })
    setCoffeeList(updatedList)
  }

  useEffect(() => {
    fetch('/api/coffeelist')
      .then((response) => response.json())
      .then((json) => setCoffeeList(json))
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        coffeeList,
        addQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
