import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartContainer,
  CartContainer,
  CoffeeListContainer,
  CoffeeTypeContainer,
  QuantityContainer,
} from './styles'
import { MockAPI } from '../../../../server/MockAPI'
import { useEffect, useState } from 'react'

interface CoffeeProps {
  id: string
  imgLink: string
  name: string
  description: string
  type: {
    tradicional: boolean
  }
  price: number
}

export function CoffeeList() {
  MockAPI()
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])

  useEffect(() => {
    fetch('/api/coffeelist')
      .then((response) => response.json())
      .then((json) => setCoffeeList(json))
  }, [])

  console.log(coffeeList)

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ul>
        {coffeeList.map((coffee) => {
          return (
            <li key={coffee.id}>
              <img src={coffee.imgLink} alt={coffee.name} />
              <CoffeeTypeContainer>
                <span>TRADICIONAL</span>
                <span>GELADO</span>
                <span>MAQUIATO</span>
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
                      <Minus color="#8047F8" size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus color="#8047F8" size={14} weight="bold" />
                    </button>
                  </div>
                  <CartContainer>
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
