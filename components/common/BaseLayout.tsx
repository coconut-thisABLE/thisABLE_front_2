import Header from './Header'
import styled from '@emotion/styled'

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
