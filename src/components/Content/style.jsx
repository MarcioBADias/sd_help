import styled from 'styled-components'

export const ContentContainer = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.contentBackground};
  overflow-y: auto;
  transition: background-color 0.3s ease;
`

export const ContentTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 15px;
`

export const SearchResultsList = styled.div`
  margin-top: 20px;
`

export const SearchResultItem = styled.div`
  background-color: ${(props) => props.theme.sidebarBackground};
  border: 1px solid ${(props) => props.theme.sidebarBorder};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
`

export const SearchResultTitle = styled.h3`
  margin-top: 0;
  color: ${(props) => props.theme.link};
  margin-bottom: 10px;
`

export const SearchResultSubItem = styled.div`
  margin-top: 10px;
  padding-left: 15px;
  border-left: 2px solid ${(props) => props.theme.sidebarBorder};
  margin-bottom: 10px;
  h4 {
    margin: 0 0 5px 0;
    color: ${(props) => props.theme.text};
  }
`
