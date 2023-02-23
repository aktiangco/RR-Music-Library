import { useState } from 'react'
 
const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')
    return (
        <form className="search-form" onSubmit={(e) => props.setSearch(searchTerm)}>
            <input
                type="text"
                placeholder="Enter a search term here"
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />
            <input 
                type="submit" 
            />
        </form>
    )
}
export default SearchBar
   