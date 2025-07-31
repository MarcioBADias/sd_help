import React from 'react'
import {
  ContentContainer,
  ContentTitle,
  SearchResultsList,
  SearchResultItem,
  SearchResultTitle,
  SearchResultSubItem,
} from './style'

const Content = ({ selectedItemId, searchTerm, data }) => {
  const findItemById = (items, id) => {
    for (const item of items) {
      if (item.id === id) {
        return item
      }
      if (item.content) {
        const found = findItemById(item.content, id)
        if (found) {
          return found
        }
      }
    }
    return null
  }

  const renderContentWithBreaks = (contentParts) => {
    if (!contentParts) return null

    if (Array.isArray(contentParts)) {
      return contentParts.flatMap((part, idx) =>
        typeof part === 'string' ? (
          part.split('\n').map((line, lineIdx) => (
            <React.Fragment key={`${idx}-${lineIdx}`}>
              {line}
              <br />
            </React.Fragment>
          ))
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        ),
      )
    } else {
      return contentParts.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    }
  }

  const highlightText = (text, term) => {
    if (!text || !term) return text

    const parts = []
    let lastIndex = 0
    const lowerCaseTerm = term.toLowerCase()

    const regex = new RegExp(`(${lowerCaseTerm})`, 'gi')
    let match

    while ((match = regex.exec(text)) !== null) {
      const startIndex = match.index
      const endIndex = regex.lastIndex

      if (startIndex > lastIndex) {
        parts.push(text.substring(lastIndex, startIndex))
      }

      parts.push(
        <mark key={startIndex} className="highlight">
          {text.substring(startIndex, endIndex)}
        </mark>,
      )
      lastIndex = endIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts
  }

  const filterData = (items, term) => {
    if (!term) return []
    const lowerCaseTerm = term.toLowerCase()
    const results = []

    items.forEach((item) => {
      const titleMatches = item.title.toLowerCase().includes(lowerCaseTerm)
      const textMatches =
        item.text && item.text.toLowerCase().includes(lowerCaseTerm)

      if (titleMatches || textMatches) {
        results.push({
          ...item,
          highlightedTitle: highlightText(item.title, term),
          highlightedText: item.text ? highlightText(item.text, term) : null,
        })
      }

      if (item.content) {
        const subResults = filterData(item.content, term)
        if (subResults.length > 0) {
          if (
            !titleMatches &&
            !textMatches &&
            !results.some((r) => r.id === item.id)
          ) {
            results.push({
              ...item,
              content: subResults,
              isParentMatch: true,
              highlightedTitle: highlightText(item.title, term),
            })
          } else {
            const existingResultIndex = results.findIndex(
              (r) => r.id === item.id,
            )
            if (existingResultIndex !== -1) {
              results[existingResultIndex] = {
                ...results[existingResultIndex],
                content: [
                  ...(results[existingResultIndex].content || []),
                  ...subResults,
                ],
              }
            } else {
              results.push(...subResults)
            }
          }
        }
      }
    })
    return Array.from(new Map(results.map((item) => [item.id, item])).values())
  }

  const searchResults = searchTerm ? filterData(data, searchTerm) : []
  const selectedItem = selectedItemId
    ? findItemById(data, selectedItemId)
    : null

  return (
    <ContentContainer>
      {searchTerm && searchResults.length > 0 ? (
        <>
          <ContentTitle>Resultados da Busca para "{searchTerm}"</ContentTitle>
          <SearchResultsList>
            {searchResults.map((result) => (
              <SearchResultItem key={result.id}>
                <SearchResultTitle>
                  {result.highlightedTitle || result.title}
                </SearchResultTitle>
                {result.highlightedText && (
                  <pre className="documentation-text">
                    {renderContentWithBreaks(result.highlightedText)}
                  </pre>
                )}
                {result.isParentMatch &&
                  result.content &&
                  result.content.map((subRes) => (
                    <SearchResultSubItem key={subRes.id}>
                      <h4>{subRes.highlightedTitle || subRes.title}</h4>
                      {subRes.highlightedText && (
                        <pre className="documentation-text">
                          {renderContentWithBreaks(subRes.highlightedText)}
                        </pre>
                      )}
                    </SearchResultSubItem>
                  ))}
              </SearchResultItem>
            ))}
          </SearchResultsList>
        </>
      ) : searchTerm && searchResults.length === 0 ? (
        <>
          <ContentTitle>
            Nenhum resultado encontrado para "{searchTerm}"
          </ContentTitle>
          <p>Tente refinar sua busca.</p>
        </>
      ) : selectedItem ? (
        <>
          <ContentTitle>{selectedItem.title}</ContentTitle>
          <pre className="documentation-text">
            {renderContentWithBreaks(selectedItem.text)}
          </pre>
        </>
      ) : (
        <>
          <ContentTitle>Bem-vindo ao SD Help!</ContentTitle>
          <p>
            Navegue pelas seções à esquerda ou use a barra de pesquisa para
            encontrar informações sobre as rotinas do sistema SD Informática.
          </p>
        </>
      )}
    </ContentContainer>
  )
}

export { Content }
