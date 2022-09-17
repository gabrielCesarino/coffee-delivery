import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  h1 {
    font-size: 2rem;
    margin-bottom: 3.375rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    li {
      width: 256px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-right: 2rem;
      margin-bottom: 2rem;

      background: ${(props) => props.theme['gray-200']};

      padding: 1.5rem;

      border-radius: 6px 36px 6px 36px;
      gap: 0.75rem;

      text-align: center;

      img {
        margin-top: -50px;
      }

      h2 {
        font-size: 1.25rem;
        color: ${(props) => props.theme['gray-800']};
      }

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-600']};
      }
    }
  }
`
export const QuantityContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  p {
    span {
      color: ${(props) => props.theme['gray-700']};
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
  }
`

export const CoffeeTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-700']};

  span {
    padding: 0.2rem 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    background: ${(props) => props.theme['yellow-100']};

    border: none;
    border-radius: 100px;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.5rem;

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
`

export const CartContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-700']};

  &:hover {
    cursor: pointer;
  }
`
