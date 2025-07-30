import React from 'react'

const Content = ({ selectedItemId, data }) => {
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

  const selectedItem = findItemById(data, selectedItemId)

  const renderContentWithBreaks = (text) => {
    if (!text) return null
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }

  return (
    <main className="app-content">
      {selectedItem ? (
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
            Navegue pelas seções à esquerda para encontrar informações sobre as
            rotinas do sistema SD Informática.
          </p>
        </>
      )}
    </main>
  )
}

export { Content }
