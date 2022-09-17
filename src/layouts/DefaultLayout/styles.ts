import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};

  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`
