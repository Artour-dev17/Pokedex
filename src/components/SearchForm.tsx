import {useState,} from "react";



type onSearchProps ={
    onSearch: (searchTerm: string) => void;
}

function SearchForm({onSearch,}: onSearchProps){
    const [searchTerm, setSearchTerm] = useState("")

   const handleSearch = () => {
        onSearch(searchTerm);
   }



    return (
        <div className="search-form">
        <input
            onKeyDown={(event)=>{
                if(event.key === "Enter"){
                    handleSearch();
            }}}
            className="search-input"
            value={searchTerm}
            placeholder="Pokemon name. . ."
            onChange={(event)=>
                                        setSearchTerm(event.target.value)}
        />
        <button
            onClick={handleSearch}
            className="search-btn"
        >
            Search
        </button>
        </div>
    )
}
export default SearchForm