import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../../../context/ProductsContext'
import {
  AddToCartContainer,
  CartContainer,
  CoffeeListContainer,
  CoffeeTypeContainer,
  QuantityContainer,
} from './styles'

export function CoffeeList() {
  const { coffeeList, addQuantity, decreaseQuantity, addToCart, cart } =
    useContext(ProductsContext)

  function handleAddQuantity(id: string) {
    addQuantity(id)
  }

  function handleDecreaseQuantity(id: string) {
    decreaseQuantity(id)
  }

  function handleAddToCart(id: string) {
    addToCart(id)
  }

  console.log(cart)

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ul>
        {coffeeList.map((coffee) => {
          return (
            <li key={coffee.id}>
              <img src={coffee.imgLink} alt={coffee.name} />
              <CoffeeTypeContainer>
                {coffee.types.map((coffeeType) => {
                  return <span key={coffeeType}>{coffeeType}</span>
                })}
              </CoffeeTypeContainer>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
              <QuantityContainer>
                <p>
                  R${' '}
                  <span>
                    {coffee.price.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
                <AddToCartContainer>
                  <div>
                    <button>
                      <Minus
                        onClick={() => handleDecreaseQuantity(coffee.id)}
                        color="#8047F8"
                        size={14}
                        weight="bold"
                      />
                    </button>
                    <span>{coffee.quantity}</span>
                    <button>
                      <Plus
                        onClick={() => handleAddQuantity(coffee.id)}
                        color="#8047F8"
                        size={14}
                        weight="bold"
                      />
                    </button>
                  </div>
                  <CartContainer
                    onClick={() => {
                      handleAddToCart(coffee.id)
                    }}
                  >
                    <ShoppingCart size={22} color="#FFF" weight="fill" />
                  </CartContainer>
                </AddToCartContainer>
              </QuantityContainer>
            </li>
          )
        })}
      </ul>
    </CoffeeListContainer>
  )
}
