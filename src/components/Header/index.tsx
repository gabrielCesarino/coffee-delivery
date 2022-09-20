import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(ProductsContext)
  const cartTotal = cart.reduce((total, cartItem) => {
    return (total += cartItem.quantity)
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Coffee Delivery"
          title="Coffee Delivery"
        />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <p>Carapicuíba, SP</p>
        </LocationContainer>
        <NavLink to="/checkout">
          <CartContainer title="Carrinho">
            <span>{cartTotal}</span>
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
