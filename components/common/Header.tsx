import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const handleMenuClick = (page: string) => {
    router.push(page)
  }
  return (
    <Container>
      <Image
        src="/images/logo.svg"
        width={100}
        height={20}
        alt="logo"
        onClick={() => {
          handleMenuClick('/')
        }}
      />
      <HeaderMenu
        onClick={() => {
          handleMenuClick('/map')
        }}
      >
        View Map
      </HeaderMenu>
      <HeaderMenu
        onClick={() => {
          handleMenuClick('/list')
        }}
      >
        View List
      </HeaderMenu>
    </Container>
  )
}

const Container = styled.div`
  height: 2.5rem;
  padding: 1rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  border-bottom: #d1cfc8 solid 1px;
  position: relative;
  cursor: pointer;
`
const HeaderMenu = styled.div`
  padding: 0.5px;
  cursor: pointer;
`

export default Header
