import React from 'react'
import DisplayQuotes from './components/DisplayQuotes'

const App = () => {
  return (
    <div data-cy="random_quote">
      
      <h1>Trumpster</h1>
      <p>
        <DisplayQuotes/>
      </p>
    </div>
    
  )
}

export default App