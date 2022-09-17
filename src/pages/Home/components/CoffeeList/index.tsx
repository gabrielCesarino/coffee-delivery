import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartContainer,
  CartContainer,
  CoffeeListContainer,
  CoffeeTypeContainer,
  QuantityContainer,
} from './styles'
import CoffeImage from '../../../../assets/Coffee.png'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ul>
        <li>
          <img src={CoffeImage} alt="" />
          <CoffeeTypeContainer>
            <span>TRADICIONAL</span>
            <span>GELADO</span>
            <span>MAQUIATO</span>
          </CoffeeTypeContainer>
          <h2>Expresso Americano</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <QuantityContainer>
            <p>
              R$ <span>9,90</span>
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
        <li>
          <img src={CoffeImage} alt="" />
          <CoffeeTypeContainer>
            <span>TRADICIONAL</span>
          </CoffeeTypeContainer>
          <h2>Expresso Americano</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <QuantityContainer>
            <p>
              R$ <span>9,90</span>
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
        <li>
          <img src={CoffeImage} alt="" />
          <CoffeeTypeContainer>
            <span>TRADICIONAL</span>
          </CoffeeTypeContainer>
          <h2>Expresso Americano</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <QuantityContainer>
            <p>
              R$ <span>9,90</span>
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
        <li>
          <img src={CoffeImage} alt="" />
          <CoffeeTypeContainer>
            <span>TRADICIONAL</span>
          </CoffeeTypeContainer>
          <h2>Expresso Americano</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <QuantityContainer>
            <p>
              R$ <span>9,90</span>
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
        <li>
          <img src={CoffeImage} alt="" />
          <CoffeeTypeContainer>
            <span>TRADICIONAL</span>
          </CoffeeTypeContainer>
          <h2>Expresso Americano</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <QuantityContainer>
            <p>
              R$ <span>9,90</span>
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
      </ul>
    </CoffeeListContainer>
  )
}
