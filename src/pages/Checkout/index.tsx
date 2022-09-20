import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CartConfirmation,
  CheckoutContainer,
  CustomerInformationContainer,
  CustomerInformationFormContainer,
  FormContainer,
  HeaderFormContainer,
  InputGridContainer,
  InputInformation,
  PaymentMethodContainer,
} from './styles'

export function Checkout() {
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
      <CartConfirmation>
        <h3>Cafés selecionados</h3>
      </CartConfirmation>
    </CheckoutContainer>
  )
}
