import styled from 'styled-components'
import { ChevronRight, ChevronDown } from 'react-feather'

export const StyledSidebarItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
  &.level-0 > ${(props) => props.theme.HeaderContainer} {
    font-weight: bold;
    font-size: 1.1em;
    padding-left: 0px;
  }
  &.level-1 > div {
    padding-left: 10px;
  }
  &.level-2 > div {
    padding-left: 20px;
  }
`

export const SidebarItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.sidebarItemHover};
    color: ${(props) => props.theme.linkHover};
  }

  ${(props) =>
    props.isSelected &&
    `
    background-color: ${props.theme.sidebarItemSelectedBg};
    color: ${props.theme.sidebarItemSelectedText};

    &:hover {
        background-color: ${props.theme.sidebarItemSelectedBg};
        color: ${props.theme.sidebarItemSelectedText};
    }
  `}
`

export const SidebarItemTitle = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const SidebarSubmenu = styled.ul`
  list-style: none;
  padding-left: 15px;
  margin-top: 5px;
`

export const StyledChevronRight = styled(ChevronRight)`
  margin-right: 5px;
  flex-shrink: 0;
`

export const StyledChevronDown = styled(ChevronDown)`
  margin-right: 5px;
  flex-shrink: 0;
`
