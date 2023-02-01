import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DeliveryInformationContainer, OrderContainer } from './style'

import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export function OrderConfirmed() {
  const { order } = useContext(ProductsContext)
  const paymentMethodFormatted = () => {
    switch (order?.customer.paymentMethod) {
      case 'cartaoCredito':
        return 'Cartão de Crédito'
      case 'dinheiro':
        return 'Dinheiro'
      case 'cartaoDebito':
        return 'Cartão de Débito'
    }
  }

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
              <strong>{paymentMethodFormatted()}</strong>
            </div>
          </li>
        </DeliveryInformationContainer>
      </div>
    </OrderContainer>
  )
}
