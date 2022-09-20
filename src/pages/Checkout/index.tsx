import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CartConfirmation,
  CheckoutContainer,
  CustomerInformationContainer,
  FormContainer,
  HeaderFormContainer,
  InputGridContainer,
  PaymentContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CustomerInformationContainer>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <HeaderFormContainer>
            <span>
              <MapPinLine size={22} color="#C47F17" />
            </span>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </HeaderFormContainer>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <InputGridContainer>
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </InputGridContainer>
          <InputGridContainer>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </InputGridContainer>
        </FormContainer>
        <FormContainer>
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
              <input type="radio" id="cartaoCredito" name="paymentMethod" />
              <label htmlFor="cartaoCredito">Cartão de Crédito</label>
              <input type="radio" id="cartaoDebito" name="paymentMethod" />
              <label htmlFor="cartaoDebito">Cartão de Débito</label>
              <input type="radio" id="dinheiro" name="paymentMethod" />
              <label htmlFor="dinheiro">Dinheiro</label>
            </form>
          </InputGridContainer>
        </FormContainer>
      </CustomerInformationContainer>
      <CartConfirmation>
        <h3>Cafés selecionados</h3>
      </CartConfirmation>
    </CheckoutContainer>
  )
}
