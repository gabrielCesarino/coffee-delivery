import styled from 'styled-components'

export const OrderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
  }
`

export const DeliveryInformationContainer = styled.div`
  margin: 2.5rem 0;
  padding: 2.5rem;
  border: 1px solid transparent;
  background: linear-gradient(
      to right,
      ${(props) => props.theme['gray-100']},
      ${(props) => props.theme['gray-100']}
    ),
    linear-gradient(
      to right,
      ${(props) => props.theme['yellow-700']},
      ${(props) => props.theme['purple-700']}
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 6px 36px;

  li {
    list-style: none;
    display: flex;
    margin-bottom: 2rem;
    align-items: center;

    &:nth-child(1) {
      span {
        background-color: ${(props) => props.theme['purple-500']};
      }
    }

    &:nth-child(2) {
      span {
        background-color: ${(props) => props.theme['yellow-500']};
      }
    }

    &:nth-child(3) {
      span {
        background-color: ${(props) => props.theme['yellow-700']};
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 9999px;

      margin-right: 0.75rem;
    }

    p,
    strong {
      line-height: 0.825rem;
    }
  }
`
