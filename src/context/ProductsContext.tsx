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

interface orderProps {
  customer: {
    cep: string
    rua: string
    numero: string
    complemento?: string
    bairro: string
    cidade: string
    uf: string
    paymentMethod: string
  }
  cart: CoffeeProps[]
}

interface ProductsContextType {
  coffeeList: CoffeeProps[]
  addQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  addToCart: (id: string) => void
  cart: CoffeeProps[]
  addQuantityOnCart: (id: string) => void
  decreaseQuantityOnCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  handleSetOrder: (order: orderProps) => void
  newTotal: number
  orderTotal: number
  DELIVERY_PRICE: number
  order?: orderProps
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
  const [cart, setCart] = useState<CoffeeProps[]>([])
  const [order, setOrder] = useState<orderProps>()
  const newTotal = cart.reduce((total, cartItem) => {
    return (total += cartItem.quantity * cartItem.price)
  }, 0)

  const DELIVERY_PRICE = 3.5

  const orderTotal = newTotal + DELIVERY_PRICE

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
      if (coffee.id === currentCoffeeId && coffee.quantity > 0) {
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

  function addToCart(currentCoffeeId: string) {
    const addedItem = coffeeList.find((coffee) => {
      return coffee.id === currentCoffeeId
    })

    const ItemAlreadyExistOnCart = cart.some(
      (item) => item.id === currentCoffeeId,
    )

    if (addedItem && ItemAlreadyExistOnCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === currentCoffeeId) {
          return {
            ...item,
            quantity: item.quantity + addedItem.quantity,
          }
        } else {
          return item
        }
      })

      setCart(updatedCart)
    } else {
      addedItem && setCart([...cart, addedItem])
    }
  }

  function addQuantityOnCart(currentItemId: string) {
    const updatedList = cart.map((item) => {
      if (item.id === currentItemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      } else {
        return item
      }
    })
    setCart(updatedList)
  }

  function decreaseQuantityOnCart(currentItemId: string) {
    const updatedList = cart.map((item) => {
      if (item.id === currentItemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      } else {
        return item
      }
    })
    setCart(updatedList)
  }

  function removeItemFromCart(currentItemId: string) {
    const updatedList = cart.filter((item) => item.id !== currentItemId)

    console.log(updatedList)

    setCart(updatedList)
  }

  function handleSetOrder(newOrder: orderProps) {
    setOrder(newOrder)
    console.log(newOrder)
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
        addToCart,
        cart,
        addQuantityOnCart,
        decreaseQuantityOnCart,
        removeItemFromCart,
        newTotal,
        DELIVERY_PRICE,
        orderTotal,
        handleSetOrder,
        order,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
