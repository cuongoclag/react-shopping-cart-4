import React, { useState } from 'react'

function Sort({getSortType}) {
    const [sort, setSort] = useState("")

    const handleSort = (s) => {
        setSort(s);
        getSortType(s);
    }

    return (
        <select defaultValue="Sort" onChange={(e) => handleSort(e.target.value)}>
                <option value="Sort">Sort</option>
                <option value="Titleasc">Title A - Z</option>
                <option value="Titledesc">Title Z - A</option>
                <option value="Priceasc">Price Up</option>
                <option value="Pricedesc">Price Down</option>
        </select>
    )
}

export default Sort
