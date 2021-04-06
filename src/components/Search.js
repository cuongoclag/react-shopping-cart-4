import React, { useState } from 'react'

function Search({getQuery}) {
    const [search, setSearch] = useState("")

    const handleSearch = (q) => {
        setSearch(q);
        getQuery(q);
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Product" 
                onChange={(e) => handleSearch(e.target.value)}
                value={search}
                autoFocus />
        </div>
    )
}

export default Search
