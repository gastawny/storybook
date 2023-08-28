import styled, { keyframes } from 'styled-components'

export interface IBackgroundCardsProps {
  bgColor: string
  color: string
  cardColor: string
}

export function BackgroundCards(props: IBackgroundCardsProps) {
  const numberOfSpans = 200
  const spans: number[] = Array.from({ length: numberOfSpans }, (_, index) => index)

  return (
    <BackGround {...props}>
      {spans.map((number) => (
        <span className="relative block z-20 hover:duration-0" key={number}></span>
      ))}
    </BackGround>
  )
}

const animate = keyframes`
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`

const BackGround = styled.div<IBackgroundCardsProps>`
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ bgColor }) => bgColor};
  gap: 0.125rem;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${({ cardColor }) => cardColor},
      ${({ color }) => color},
      ${({ cardColor }) => cardColor}
    );
    animation: ${animate} 4s linear infinite;
  }

  span {
    width: calc(5vw - 2px);
    height: calc(10vh - 2px);
    transition: 1.5s;
    background-color: ${({ cardColor }) => cardColor};

    &:hover {
      background-color: ${({ color }) => color};
    }

    @media (max-width: 1366px) {
      width: calc(6.25vw - 2px);
      height: calc(12.5vh - 2px);
    }

    @media (max-width: 900px) {
      width: calc(10vw - 2px);
      height: calc(14vh - 2px);
    }

    @media (max-width: 600px) {
      width: calc(20vw - 2px);
      height: calc(20vw - 2px);
    }
  }
`
