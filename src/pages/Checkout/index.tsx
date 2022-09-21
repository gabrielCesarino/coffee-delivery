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
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
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
  EmptyCartModal,
} from './styles'

export function Checkout() {
  const {
    cart,
    addQuantityOnCart,
    decreaseQuantityOnCart,
    removeItemFromCart,
    newTotal,
    DELIVERY_PRICE,
    orderTotal,
  } = useContext(ProductsContext)

  const { register, handleSubmit } = useForm()
  const onSubmit = (d) => alert(JSON.stringify(d))

  if (cart.length > 0) {
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
              <InputInformation
                {...register('cep')}
                type="text"
                placeholder="CEP"
              />
              <InputInformation
                {...register('rua')}
                type="text"
                placeholder="Rua"
              />
              <InputInformation
                {...register('numero')}
                type="number"
                placeholder="Número"
              />
              <InputInformation
                {...register('complemento')}
                type="text"
                placeholder="Complemento"
              />
              <InputInformation
                {...register('bairro')}
                type="text"
                placeholder="Bairro"
              />
              <InputInformation
                {...register('cidade')}
                type="text"
                placeholder="Cidade"
              />
              <InputInformation
                {...register('uf')}
                type="text"
                placeholder="UF"
              />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeaderFormContainer>
            <InputGridContainer>
              <form>
                <InputInformation
                  {...register('paymentMethod')}
                  type="radio"
                  value="cartaoCredito"
                  id="cartaoCredito"
                  name="paymentMethod"
                />
                <label htmlFor="cartaoCredito">
                  <CreditCard size={22} color="#8047F8" />
                  Cartão de Crédito
                </label>
                <InputInformation
                  {...register('paymentMethod')}
                  type="radio"
                  value="cartaoDebito"
                  id="cartaoDebito"
                  name="paymentMethod"
                />
                <label htmlFor="cartaoDebito">
                  <Bank size={22} color="#8047F8" />
                  Cartão de Débito
                </label>
                <InputInformation
                  {...register('paymentMethod')}
                  type="radio"
                  value="dinheiro"
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
                            <Minus
                              color="#8047F8"
                              size={14}
                              weight="bold"
                              onClick={() => decreaseQuantityOnCart(item.id)}
                            />
                          </button>
                          <span>{item.quantity}</span>
                          <button>
                            <Plus
                              color="#8047F8"
                              size={14}
                              weight="bold"
                              onClick={() => addQuantityOnCart(item.id)}
                            />
                          </button>
                        </div>
                        <button onClick={() => removeItemFromCart(item.id)}>
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
                <span>
                  R${' '}
                  {newTotal.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div>
                <p>Entrega</p>
                <span>
                  R${' '}
                  {DELIVERY_PRICE.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div>
                <h3>Total</h3>
                <h3>
                  R${' '}
                  {orderTotal.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </h3>
              </div>
            </SummaryContainer>
            <ButtonConfirmOrder onClick={handleSubmit(onSubmit)}>
              Confirmar pedido
            </ButtonConfirmOrder>
          </CartSummaryContainer>
        </CartConfirmationContainer>
      </CheckoutContainer>
    )
  } else {
    return (
      <EmptyCartModal>
        <h2>O carrinho está vazio!</h2>
        <p>
          Volte a página inicial e selecione o café que gostaria de receber em
          seu endereço!
        </p>
        <NavLink to="/">
          <button>VOLTAR PARA LOJA</button>
        </NavLink>
      </EmptyCartModal>
    )
  }
}
