import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;
  margin: 8px;
  padding: 8px;
  border: 0;
  border-radius: 5px;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
