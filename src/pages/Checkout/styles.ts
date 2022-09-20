import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: space-between;
`

export const CustomerInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 200px 1fr 1fr;
  gap: 1rem;
`

export const CustomerInformationFormContainer = styled.section`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  margin: 0.75rem 0;
`

export const HeaderFormContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  div {
    margin-left: 0.25rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const BaseInput = styled.input`
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;
  gap: 0.5rem;
  overflow: hidden;

  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-800']};

  font-size: 0.875rem;
`

export const InputInformation = styled(BaseInput)`
  &:nth-child(1) {
    grid-column: span 3;
  }

  &:nth-child(2) {
    grid-column: span 3;
  }

  &:nth-child(4) {
    grid-column: span 2;
  }

  &[type='radio'] {
    display: none;
  }
`

export const InputGridContainer = styled.div`
  display: flex;
  align-items: center;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  label {
    align-items: center;
    position: relative;
    text-transform: uppercase;
    border-radius: 6px;
    border: 1px solid transparent;

    background-color: ${(props) => props.theme['gray-400']};

    padding: 1rem;

    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`

export const PaymentMethodContainer = styled.form`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`

export const CartConfirmationContainer = styled.section``
export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  margin: 0.75rem 0;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }
  p {
    color: ${(props) => props.theme['gray-900']};
  }

  p.price {
    align-self: flex-start;
    color: ${(props) => props.theme['gray-700']};
    font-weight: bold;
  }
`

export const ItemButtonsContainer = styled.div`
  display: flex;

  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
    width: 4.5rem;
    height: 2rem;

    button {
      color: ${(props) => props.theme['purple-500']};
      background: ${(props) => props.theme['gray-400']};
      border: none;
      border-radius: 6px;

      display: flex;

      &:hover {
        cursor: pointer;
      }
    }

    span {
      font-weight: 400;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme['gray-400']};
    border: none;
    border-radius: 6px;
    padding: 0 0.5rem;

    color: ${(props) => props.theme['gray-700']};
    text-transform: uppercase;
    font-size: 0.75rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const SummaryContainer = styled.div`
  margin: 1.5rem 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }
  }
`
export const ButtonConfirmOrder = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;

  font-size: 0.875rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`
