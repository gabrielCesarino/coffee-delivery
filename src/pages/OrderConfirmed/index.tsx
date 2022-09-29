import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DeliveryInformationContainer, OrderContainer } from './style'
import illustration from '../../assets/illustration.png'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export function OrderConfirmed() {
  const { order } = useContext(ProductsContext)
  return (
    <OrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>

        <DeliveryInformationContainer>
          <li>
            <span>
              <MapPin size={16} color="white" weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>{order?.customer.rua}</strong>
              </p>
              <p>{order?.customer.cidade}</p>
            </div>
          </li>
          <li>
            <span>
              <Timer size={16} color="white" weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </li>
          <li>
            <span>
              <CurrencyDollar size={16} color="white" weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{order?.customer.paymentMethod}</strong>
            </div>
          </li>
        </DeliveryInformationContainer>
      </div>
      <div>
        <img
          src={illustration}
          alt="Imagem ilustrativa de homem em uma moto levando a entrega"
        />
      </div>
    </OrderContainer>
  )
}
