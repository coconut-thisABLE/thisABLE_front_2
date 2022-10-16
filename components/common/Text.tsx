import styled from '@emotion/styled'
import React from 'react'

type TextType = {
  children: React.ReactNode
  color?: string
  size?: number
  bold?: boolean
}

const Text = ({ children, color, size = 1, bold }: TextType) => {
  return (
    <StyledText color={color} size={size} bold={bold}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.div<TextType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ bold }) => bold && 'bold'};
`

export default Text
