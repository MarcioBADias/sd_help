import React from 'react'

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

  const renderContentWithBreaks = (text) => {
    if (!text) return null
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
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
        results.push(item)
      }

      if (item.content) {
        const subResults = filterData(item.content, term)
        if (subResults.length > 0) {
          if (
            !titleMatches &&
            !textMatches &&
            !results.some((r) => r.id === item.id)
          ) {
            results.push({ ...item, content: subResults, isParentMatch: true })
          } else {
            results.push(...subResults)
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
    <main className="app-content">
      {searchTerm && searchResults.length > 0 ? (
        <>
          <h2>Resultados da Busca para "{searchTerm}"</h2>
          <div className="search-results-list">
            {searchResults.map((result) => (
              <div key={result.id} className="search-result-item">
                <h3>{result.title}</h3>
                {result.text && (
                  <pre className="documentation-text">
                    {renderContentWithBreaks(result.text)}
                  </pre>
                )}
                {result.isParentMatch &&
                  result.content &&
                  result.content.map((subRes) => (
                    <div key={subRes.id} className="search-result-sub-item">
                      <h4>{subRes.title}</h4>
                      {subRes.text && (
                        <pre className="documentation-text">
                          {renderContentWithBreaks(subRes.text)}
                        </pre>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </>
      ) : searchTerm && searchResults.length === 0 ? (
        <>
          <h2>Nenhum resultado encontrado para "{searchTerm}"</h2>
          <p>Tente refinar sua busca.</p>
        </>
      ) : selectedItem ? (
        <>
          <h2>{selectedItem.title}</h2>
          <pre className="documentation-text">
            {renderContentWithBreaks(selectedItem.text)}
          </pre>
        </>
      ) : (
        <>
          <h2>Bem-vindo ao SD Help!</h2>
          <p>
            Navegue pelas seções à esquerda ou use a barra de pesquisa para
            encontrar informações sobre as rotinas do sistema SD Informática.
          </p>
        </>
      )}
    </main>
  )
}

export { Content }
