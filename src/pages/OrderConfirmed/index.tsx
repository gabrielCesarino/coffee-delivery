import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderContainer } from './style'
import illustration from '../../assets/illustration.png'

export function OrderConfirmed() {
  return (
    <OrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>

        <div>
          <li>
            <span>
              <MapPin />
            </span>
            <div>
              <p>Entrega em Joao</p>
              <p>Farrapos</p>
            </div>
          </li>
          <li>
            <span>
              <Timer />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </li>
          <li>
            <span>
              <CurrencyDollar />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </li>
        </div>
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
