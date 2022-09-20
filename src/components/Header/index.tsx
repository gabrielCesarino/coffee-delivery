import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(ProductsContext)

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
        <NavLink to="/checkout">
          <CartContainer title="Carrinho">
            <span>{cart.length}</span>
            <ShoppingCart
              size={22}
              color="#C47F17"
              weight="fill"
              alt="Carrinho"
            />
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
