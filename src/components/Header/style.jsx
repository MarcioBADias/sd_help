import styled from 'styled-components'
import { Search } from 'react-feather'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.sidebarBorder};
  color: ${(props) => props.theme.headerText};
`

export const AppTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${(props) => props.theme.headerText};
  margin-right: 20px;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 400px;
  background-color: ${(props) => props.theme.sidebarBorder};
  border-radius: 5px;
  padding: 5px 10px;
`

export const SearchIcon = styled(Search)`
  color: ${(props) => props.theme.text};
  margin-right: 8px;
  flex-shrink: 0;
`

export const SearchInput = styled.input`
  border: 3px solid ${(props) => props.theme.headerText};
  border-radius: 30px;
  background: transparent;
  outline: none;
  flex-grow: 1;
  font-size: 16px;
  padding: 5px 15px;
  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.7;
  }
`

export const ThemeToggleButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.link};
  color: ${(props) => props.theme.sidebarItemSelectedText};
  font-size: 14px;
  margin-left: 20px;

  &:hover {
    background-color: ${(props) => props.theme.linkHover};
  }
`
