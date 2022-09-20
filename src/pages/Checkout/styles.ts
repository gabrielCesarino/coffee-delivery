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
`

export const CartConfirmation = styled.div``
