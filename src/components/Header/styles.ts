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
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-100']};

  &:hover {
    cursor: pointer;
  }

  span {
    top: -10px;
    right: -10px;
    position: absolute;
    background: ${(props) => props.theme['yellow-700']};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
  }
`
