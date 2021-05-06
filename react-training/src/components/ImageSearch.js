import React, { useState } from 'react';

const ImageSearch = () => {
  const [query, setQuery] = useState(null);

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <>
      <label forHtml='query'>Search Query</label>
      <input
        type='text'
        id='query'
        name='query'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default ImageSearch;
