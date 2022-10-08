import styled from '@emotion/styled'
import React from 'react'

type TextType = {
  children: React.ReactNode
  color?: string
  size?: number
  bold?: boolean
}

const Text = ({ children, color, size, bold }: TextType) => {
  return (
    <StyledText color={color} size={size} bold={bold}>
      {children}
    </StyledText>
  )
}

Text.defaultProps = {
  size: 1,
}

const StyledText = styled.div<TextType>`
  font-size: ${({ size }) => size}rem;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold && 'bold'};
`

export default Text
