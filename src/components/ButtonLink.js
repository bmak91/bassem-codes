import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const style = css`
  background: ${props => props.theme.colors.primary};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.5rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  padding: ${props => (props.big ? '0.5rem 1.75rem 0.6rem' : '0.35rem 1.65rem 0.4rem')};
  margin-right: 0.5rem;
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:focus {
    outline: none;
    color: ${props => props.theme.colors.white};
    box-shadow: 5px 10px 6px hsla(240, 30%, 16%, 0.31), 2px 3px 3px hsla(0, 0%, 0%, 0.08);
    transform: translateY(-2px);
  }
  svg {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-right: 0.75rem;
    fill: ${props => props.theme.colors.white};
  }
`

const ButtonLink = styled(Link)`${style}`

const ButtonAnchor = styled.a`${style}`

export {
  ButtonAnchor,
  ButtonLink
}