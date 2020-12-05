import React from 'react'

const SearchQuotes = () => {
  return (
    <div>
      <input 
        type="text"
        data-cy="search_input"
        placeholder="search for Fraud"
      />
      <button 
        data-cy="search_button"
        
      >
        Search
      </button>
      <div data-cy="search_result">

      </div>
    </div>
  )
}

export default SearchQuotes
