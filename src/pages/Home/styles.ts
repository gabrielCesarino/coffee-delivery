import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const IntroContainer = styled.section`
  display: flex;
  align-items: center;

  gap: 3.5rem;

  padding: 5.75rem 0;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme['gray-900']};
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['gray-800']};

    width: 90%;
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 99999px;
    }

    &:nth-child(1) span {
      background-color: ${(props) => props.theme['yellow-700']};
    }

    &:nth-child(2) span {
      background-color: ${(props) => props.theme['gray-700']};
    }

    &:nth-child(3) span {
      background-color: ${(props) => props.theme['yellow-500']};
    }

    &:nth-child(4) span {
      background-color: ${(props) => props.theme['purple-700']};
    }
  }
`
