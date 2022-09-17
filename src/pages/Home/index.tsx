import {
  HomeContainer,
  InfoContainer,
  IntroContainer,
  IntroItemsContainer,
} from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeCupImage from '../../assets/coffee-cup.png'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <InfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <IntroItemsContainer>
            <div>
              <span>
                <ShoppingCart size={16} color="#FFF" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <span>
                <Package size={16} color="#FFF" weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <span>
                <Timer size={16} color="#FFF" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <span>
                <Coffee size={16} color="#FFF" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </IntroItemsContainer>
        </InfoContainer>
        <img
          src={CoffeeCupImage}
          alt="Imagem copo de café com grãos ao fundo"
        />
      </IntroContainer>
      <CoffeeList />
    </HomeContainer>
  )
}
