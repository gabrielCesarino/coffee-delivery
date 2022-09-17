import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const LocationContainer = styled.span`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
  margin-right: 0.75rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};

  p {
    color: ${(props) => props.theme['purple-700']};
  }

  &:hover {
    cursor: pointer;
  }
`

export const CartContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-100']};

  &:hover {
    cursor: pointer;
  }
`
