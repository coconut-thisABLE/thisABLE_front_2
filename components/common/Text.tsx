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

export const StyledText = styled.p<TextType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ bold }) => bold && 'bold'};
  margin-block-start: 0;
  margin-block-end: 0;
`

export default Text
