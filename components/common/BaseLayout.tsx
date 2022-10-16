import Header from './Header'
import styled from '@emotion/styled'

export const conceptColors = {
  mainPink: '#CB3267',
  secondPink: '#E599B3',
  mainOrange: '#F0A044',
  secondOrange: '#F8D0A2',
}

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  )
}

const Container = styled.div<{ paddingBottom?: string }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0};
`
const ChildrenWrapper = styled.div`
  flex-grow: 1;
`

export default BaseLayout
