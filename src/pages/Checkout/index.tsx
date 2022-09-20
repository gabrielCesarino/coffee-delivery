import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import {
  ButtonConfirmOrder,
  CartConfirmationContainer,
  CartItem,
  CartSummaryContainer,
  CheckoutContainer,
  CustomerInformationContainer,
  CustomerInformationFormContainer,
  FormContainer,
  HeaderFormContainer,
  InputGridContainer,
  InputInformation,
  ItemButtonsContainer,
  PaymentMethodContainer,
  SummaryContainer,
} from './styles'

export function Checkout() {
  const { cart } = useContext(ProductsContext)

  return (
    <CheckoutContainer>
      <CustomerInformationContainer>
        <h3>Complete seu pedido</h3>
        <CustomerInformationFormContainer>
          <HeaderFormContainer>
            <span>
              <MapPinLine size={22} color="#C47F17" />
            </span>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </HeaderFormContainer>
          <FormContainer>
            <InputInformation type="text" placeholder="CEP" />
            <InputInformation type="text" placeholder="Rua" />
            <InputInformation type="number" placeholder="Número" />
            <InputInformation type="text" placeholder="Complemento" />
            <InputInformation type="text" placeholder="Bairro" />
            <InputInformation type="text" placeholder="Cidade" />
            <InputInformation type="text" placeholder="UF" />
          </FormContainer>
        </CustomerInformationFormContainer>
        <PaymentMethodContainer>
          <HeaderFormContainer>
            <span>
              <CurrencyDollar size={22} color="#8047F8" />
            </span>
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderFormContainer>
          <InputGridContainer>
            <form>
              <InputInformation
                type="radio"
                id="cartaoCredito"
                name="paymentMethod"
              />
              <label htmlFor="cartaoCredito">
                <CreditCard size={22} color="#8047F8" />
                Cartão de Crédito
              </label>
              <InputInformation
                type="radio"
                id="cartaoDebito"
                name="paymentMethod"
              />
              <label htmlFor="cartaoDebito">
                <Bank size={22} color="#8047F8" />
                Cartão de Débito
              </label>
              <InputInformation
                type="radio"
                id="dinheiro"
                name="paymentMethod"
              />
              <label htmlFor="dinheiro">
                <Money size={22} color="#8047F8" />
                Dinheiro
              </label>
            </form>
          </InputGridContainer>
        </PaymentMethodContainer>
      </CustomerInformationContainer>
      <CartConfirmationContainer>
        <h3>Cafés selecionados</h3>
        <CartSummaryContainer>
          <div>
            {cart.map((item) => {
              return (
                <CartItem key={item.id}>
                  <img src={item.imgLink} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <ItemButtonsContainer>
                      <div>
                        <button>
                          <Minus color="#8047F8" size={14} weight="bold" />
                        </button>
                        <span>{item.quantity}</span>
                        <button>
                          <Plus color="#8047F8" size={14} weight="bold" />
                        </button>
                      </div>
                      <button>
                        <Trash color="#8047F8" size={14} />
                        Remover
                      </button>
                    </ItemButtonsContainer>
                  </div>
                  <p className="price">
                    R${' '}
                    {(item.price * item.quantity).toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </CartItem>
              )
            })}
          </div>
          <SummaryContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ 33,20</h3>
            </div>
          </SummaryContainer>
          <ButtonConfirmOrder>Confirmar pedido</ButtonConfirmOrder>
        </CartSummaryContainer>
      </CartConfirmationContainer>
    </CheckoutContainer>
  )
}
