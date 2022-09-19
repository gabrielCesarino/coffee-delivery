import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Coffee Delivery"
        title="Coffee Delivery"
      />
      <nav>
        <LocationContainer>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <p>Carapicuíba, SP</p>
        </LocationContainer>
        <CartContainer title="Carrinho">
          <span>1</span>
          <ShoppingCart
            size={22}
            color="#C47F17"
            weight="fill"
            alt="Carrinho"
          />
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
